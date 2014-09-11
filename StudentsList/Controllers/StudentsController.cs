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
        public List<Student> Get()
        {
            using (var StudentsDb = new StudentsContext())
            {
                return StudentsDb.Students.ToList();
              //  return JsonConvert.SerializeObject(StudentsDb.Students);
            }
        }

        // GET: api/Students/5
        public List<Student> Get(int id)
        {
            List<Student> st = new List<Student>();
            using (var StudentsDb = new StudentsContext())
            {
                var group = StudentsDb.Groups.Include("Students").FirstOrDefault(t => t.Id == id);
                foreach (var student in group.Students)
                {
                    st.Add(new Student
                    {
                        FirstName = student.FirstName,
                        LastName = student.LastName,
                        SecondName = student.SecondName,
                        BirthDate = student.BirthDate,
                        IncomDate = student.IncomDate,
                        Sex = student.Sex,
                        Id = student.Id
                    });
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
