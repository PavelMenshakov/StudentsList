using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Runtime.Serialization;
using System.ComponentModel.DataAnnotations;

namespace StudentsList.Models
{
    public class Student
    {
        public long id { get; set; }
        
        public string FirstName { get; set; }
        
        public string LastName { get; set; }
        
        public string SecondName { get; set; }
        
        public bool Sex { get; set; }
        
        public DateTime BirthDate { get; set; }
        
        public DateTime IncomDate { get; set; }
        
        public ICollection<Subject> Subjects { get; set; }
        
        public ICollection<Visit> Visits { get; set; }
    }
}