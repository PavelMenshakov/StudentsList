using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.Web;

namespace StudentsList.Models
{
    
    public class Group
    {
        
        public long Id { get; set; }
        public string Name { get; set; }
        public ICollection<Student> Students { get; set; }
    }
}