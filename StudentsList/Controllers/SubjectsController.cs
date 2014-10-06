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
    public class SubjectsController : ApiController
    {
        // GET: api/Subjects
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET: api/Subjects/5
        public Subject Get(int id)
        {
            Subject sub = new Subject();
            VisitsController vc = new VisitsController();
            using (var StudentsDb = new StudentsContext())
            {
                var subject = StudentsDb.Subjects.Include("Visits").First(t => t.id == id);
                List<Visit> visitCol = new List<Visit>();
                foreach (Visit visit in subject.visits)
                {
                    visitCol.Add(vc.Get(visit.id));
                }
                sub.id = subject.id;
                sub.name = subject.name;
                sub.hours = subject.hours;
                sub.visits = visitCol;
            }
            return sub;
        }

            

        // POST: api/Subjects
        public void Post([FromBody]string value)
        {
        }

        // PUT: api/Subjects/5
        public void Put(int id, Subject newValues)
        {
            using (StudentsContext ctx = new StudentsContext())
            {
                var subject = ctx.Subjects.Find(id);
                Type myType = newValues.GetType();
                IList<PropertyInfo> props = new List<PropertyInfo>(myType.GetProperties());
                var entry = ctx.Entry(subject);

                foreach (PropertyInfo prop in props)
                {
                    object propValue = prop.GetValue(newValues, null);

                    if (propValue != null)
                    {
                        if (prop.Name == "hours")
                        {
                            if (Int64.Parse(propValue.ToString()) != 0)
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
        

        // DELETE: api/Subjects/5
        public void Delete(int id)
        {
        }
    }
}
