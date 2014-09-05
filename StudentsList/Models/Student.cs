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
        public long Id { get; set; }
        
        public string FName { get; set; }
        
        public string LName { get; set; }
        
        public string SName { get; set; }
        
        public bool Sex { get; set; }
        
        public DateTime BDate { get; set; }
        
        public DateTime IncomDate { get; set; }
        
        public ICollection<Subject> Subjects { get; set; }
        
        public ICollection<Visit> Visits { get; set; }
    }
}