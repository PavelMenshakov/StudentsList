﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.Web;

namespace StudentsList.Models
{
    
    public class Group
    {
        
        public long id { get; set; }
        public string name { get; set; }
        public ICollection<Student> students { get; set; }
    }
}