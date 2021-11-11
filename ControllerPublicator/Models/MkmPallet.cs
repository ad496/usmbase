using System.Collections.Generic;
using System.ComponentModel;
using System.Text.Json.Serialization;
using ORM_1_21_;
using ORM_1_21_.Attribute;

namespace usmbase.ControllerPublicator.Models
{
     [MapTableName("MKmPallet")]
    public class MKmPallet : BaseKm
    {
        [Description("Номер короба или палеты")]
        [MapColumnName("number_item")]
        public int NumberItem { get; set; }
    }
}