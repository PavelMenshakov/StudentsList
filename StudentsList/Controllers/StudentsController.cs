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
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/Students
        public void Post([FromBody]string value)
        {
        }

        // PUT: api/Students/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/Students/5
        public void Delete(int id)
        {
        }
    }
}
