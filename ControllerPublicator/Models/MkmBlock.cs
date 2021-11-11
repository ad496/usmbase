using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Text.Json.Serialization;
using ORM_1_21_;
using ORM_1_21_.Attribute;

namespace usmbase.ControllerPublicator.Models
{
    [MapTableName("MKmBlock")]
    public class MKmBlock : BaseKm
    {
       
        [Description("Ссылка на Id короба")]
        [MapIndex] [MapColumnName("IdBox")] public Guid IdBox { get; set; }
        
    }
}