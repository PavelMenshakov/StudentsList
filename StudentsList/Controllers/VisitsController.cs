using StudentsList.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace StudentsList.Controllers
{
    public class VisitsController : ApiController
    {
        // GET: api/Visits
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET: api/Visits/5
        public Visit Get(int id)
        {
            using (var StudentsDb = new StudentsContext())
            {
                return StudentsDb.Visits.Find(id);
            }
        }

        // POST: api/Visits
        public void Post([FromBody]string value)
        {
        }

        // PUT: api/Visits/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/Visits/5
        public void Delete(int id)
        {
        }
    }
}
