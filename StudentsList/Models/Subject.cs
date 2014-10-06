using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.Web;


namespace StudentsList.Models
{    
    public class Subject
    {
        public int id { get; set; }
        public string name { get; set; }
        public long hours { get; set; }
        public ICollection<Student> students { get; set; }
        public ICollection<Visit> visits { get; set; }
    }
}