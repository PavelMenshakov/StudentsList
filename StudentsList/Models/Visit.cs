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
        [Key]
        public long Id { get; set; }

        public int Absenteeism { get; set; }
        public int VisitCount { get; set; }
        public Subject VisitSubject { get; set; }
    }
}