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
        public int id { get; set; }
        public DateTime date { get; set; }
        public bool isAbson { get; set; }
    }
}