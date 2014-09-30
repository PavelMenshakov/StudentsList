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
                               where Student.id == id
                               select Student;
                foreach (var student in students)
                {
                    ICollection<Subject> subCol = new List<Subject>();
                    foreach (var sub in student.subjects)
                    {
                        subCol.Add(new Subject
                        {
                            id = sub.id,
                            name = sub.name,
                            hours = sub.hours
                        });
                    }
                    st.id = student.id;
                    st.firstName = student.firstName;
                    st.lastName = student.lastName;
                    st.secondName = student.secondName;
                    st.birthDate = student.birthDate;
                    st.incomDate = student.incomDate;
                    st.sex = student.sex;
                    st.subjects = subCol;
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
            }
        }

        // DELETE: api/Students/5
        public void Delete(int id)
        {
        }
    }
}
