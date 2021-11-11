using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Text.Json.Serialization;
using ORM_1_21_;
using ORM_1_21_.Attribute;

namespace usmbase.ControllerPublicator.Models
{
    [MapTableName("MKmBox")]
    public class MKmBox : BaseKm
    {
        
       
        [Description("Ссылка на Id паллеты")]
        [MapIndex] [MapColumnName("IdPallet")] public Guid IdPallet { get; set; }
        
      
        [Description("Номер короба или палеты")]
        [MapColumnName("number_item")]
        public int NumberItem { get; set; }
        
      
    }
}