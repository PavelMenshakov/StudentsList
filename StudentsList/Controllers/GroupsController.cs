using Newtonsoft.Json;
using StudentsList.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using StudentsList.Controllers;

namespace StudentsList.Controllers
{
    public class GroupsController : ApiController
    {
        // GET: api/Groups
        public List<Group> Get()
        {
            using (var StudentsDb = new StudentsContext())
            {
                return StudentsDb.Groups.ToList();
            }
        }

        // GET: api/Groups/5
        public Group Get(int id)
        {
            StudentsController sc = new StudentsController();
            using (var StudentsDb = new StudentsContext())
            {
                Group sendedGroup = new Group();
                Group group = StudentsDb.Groups.Include("Students").FirstOrDefault(t => t.Id == id);
                sendedGroup.Id = group.Id;
                sendedGroup.Name = group.Name;
                sendedGroup.Students = new List<Student>(); 
                foreach(Student st in group.Students)
                {
                    sendedGroup.Students.Add(sc.Get(st.Id));
                }
                return sendedGroup;
            }
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
