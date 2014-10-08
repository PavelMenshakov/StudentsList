using Newtonsoft.Json;
using StudentsList.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Reflection;
using System.Web.Http;

namespace StudentsList.Controllers
{
    public class StudentsController : ApiController
    {
        // GET: api/Students
        public ICollection<Student> Get()
        {
            using (var StudentsDb = new StudentsContext())
            {
                return StudentsDb.Students.ToList();
            }
        }

        // GET: api/Students/5
        public Student Get(long id)
        {
            Student sendedStudent = new Student();
            SubjectsController sc = new SubjectsController();
            VisitsController vc = new VisitsController();
            using (var StudentsDb = new StudentsContext())
            {
                Student student = StudentsDb.Students.Include("Subjects").Include("Visits").FirstOrDefault(t => t.id == id);

                ICollection<Visit> visitCol = new List<Visit>();
                foreach (var visit in student.visits)
                {
                    visitCol.Add(vc.Get(visit.id));
                }
                
                ICollection<Subject> subCol = new List<Subject>();
                foreach (var sub in student.subjects)
                {
                    Subject temp = new Subject();
                    temp = sc.Get(sub.id);
                    ICollection<Visit> removeList = new List<Visit>();
                    foreach (var sendV in temp.visits)
                    {
                        int flag = 0;
                        foreach (var visit in visitCol)
                        {
                            if (sendV.id == visit.id) flag = 1;
                        }
                        if (flag == 0) removeList.Add(sendV);
                    }
                    foreach (var rv in removeList) temp.visits.Remove(rv);
                    subCol.Add(temp);
                }

                sendedStudent.id = student.id;
                sendedStudent.firstName = student.firstName;
                sendedStudent.lastName = student.lastName;
                sendedStudent.secondName = student.secondName;
                sendedStudent.sex = student.sex;
                sendedStudent.subjects = subCol;
                sendedStudent.incomDate = student.incomDate;
                sendedStudent.birthDate = student.birthDate;
            }
            return sendedStudent;
        }

        // POST: api/Students
        public void Post(Student value)
        {
        }

        // PUT: api/Students/5
        public void Put(int id, Student newValues)
        {
            //if (newValues.HasValue)
            {
                using (StudentsContext ctx = new StudentsContext())
                {
                    var student = ctx.Students.Find(id);
                    Type myType = newValues.GetType();
                    IList<PropertyInfo> props = new List<PropertyInfo>(myType.GetProperties());
                    var entry = ctx.Entry(student);

                    foreach (PropertyInfo prop in props)
                    {
                        object propValue = prop.GetValue(newValues, null);
                        if (propValue != null)
                        {
                            if (prop.Name == "incomDate" || prop.Name == "birthDate")
                            {
                                if(DateTime.Parse(propValue.ToString())!=DateTime.Parse("01.01.0001 0:00:00"))
                                {
                                    entry.Property(prop.Name).CurrentValue = propValue;
                                    entry.Property(prop.Name).IsModified = true;
                                    ctx.SaveChanges();
                                }
                            }
                            else
                            {
                                entry.Property(prop.Name).CurrentValue = propValue;
                                entry.Property(prop.Name).IsModified = true;
                                ctx.SaveChanges();
                            }
                        }
                    }
                }
            }
        }

        // DELETE: api/Students/5
        public void Delete(int id)
        {
        }
    }
}
