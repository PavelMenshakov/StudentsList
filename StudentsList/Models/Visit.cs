using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Runtime.Serialization;
using System.Web;

namespace StudentsList.Models
{
    public class Visit
    {
        public long id { get; set; }
        public int absenteeism { get; set; }
        public int visitCount { get; set; }
        public Subject visitSubject { get; set; }
    }
}