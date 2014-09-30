using StudentsList.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace StudentsList.Controllers
{
    public class SubjectsController : ApiController
    {
        // GET: api/Subjects
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET: api/Subjects/5
        public List<Subject> Get(int id)
        {
            List<Subject> subCol = new List<Subject>();
            using (var StudentsDb = new StudentsContext())
            {
                var student = StudentsDb.Students.Include("Subjects").First(t => t.id == id);
                foreach (var sub in student.subjects)
                {
                    subCol.Add(new Subject
                    {
                        id = sub.id,
                        name = sub.name,
                        hours = sub.hours
                    });
                }
            }

            return subCol;
        }

        // POST: api/Subjects
        public void Post([FromBody]string value)
        {
        }

        // PUT: api/Subjects/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/Subjects/5
        public void Delete(int id)
        {
        }
    }
}
