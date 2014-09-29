using Newtonsoft.Json;
using StudentsList.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
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
            Student st = new Student();
            using (var StudentsDb = new StudentsContext())
            {
                var students = from Student in StudentsDb.Students.Include("Subjects")
                               where Student.Id == id
                               select Student;
                foreach (var student in students)
                {
                    ICollection<Subject> subCol = new List<Subject>();
                    foreach (var sub in student.Subjects)
                    {
                        subCol.Add(new Subject
                        {
                            Id = sub.Id,
                            Name = sub.Name,
                            Hours = sub.Hours
                        });
                    }
                    st.Id = student.Id;
                    st.FirstName = student.FirstName;
                    st.LastName = student.LastName;
                    st.SecondName = student.SecondName;
                    st.BirthDate = student.BirthDate;
                    st.IncomDate = student.IncomDate;
                    st.Sex = student.Sex;
                    st.Subjects = subCol;
                }
            }
            return st;
        }

        // POST: api/Students
        public void Post(Student value)
        {
        }

        // PUT: api/Students/5
        public void Put(int id, Student value)
        {
            using (StudentsContext ctx = new StudentsContext())
            {
                var original = ctx.Students.First(s => s.Id == id);
                if (original != null)
                {
                    if (!string.IsNullOrEmpty(value.FirstName))
                        original.FirstName = value.FirstName;
                    if (!string.IsNullOrEmpty(value.LastName))
                        original.LastName = value.LastName;
                    if (!string.IsNullOrEmpty(value.SecondName))
                        original.SecondName = value.SecondName; 
                    if(value.BirthDate.Year != 0001)
                    original.BirthDate = value.BirthDate;
                    if (value.IncomDate.Year != 0001)
                    original.IncomDate = value.IncomDate;
                    original.Sex = value.Sex;
                    ctx.SaveChanges();
                }

            }
        }

        // DELETE: api/Students/5
        public void Delete(int id)
        {
        }
    }
}
