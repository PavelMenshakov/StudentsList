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
    public class GroupsController : ApiController
    {
        // GET: api/Groups
        public List<Group> Get()
        {
            using (var StudentsDb = new StudentsContext())
            {
                return StudentsDb.Groups.Include("Students").ToList();
            }
        }

        // GET: api/Groups/5
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

        // POST: api/Groups
        public void Post([FromBody]string value)
        {
        }

        // PUT: api/Groups/5
        public void Put(int id, Group value)
        {
            Group gr = JsonConvert.DeserializeObject<Group>(value.ToString());
        }

        // DELETE: api/Groups/5
        public void Delete(int id)
        {
        }
    }
}
