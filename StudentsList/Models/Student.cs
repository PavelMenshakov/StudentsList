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
        public string firstName { get; set; }
        public string lastName { get; set; }
        public string secondName { get; set; }
        public bool sex { get; set; }
        public DateTime birthDate { get; set; }
        public DateTime incomDate { get; set; }
        public ICollection<Subject> subjects { get; set; }
        public ICollection<Visit> visits { get; set; }
    }
}