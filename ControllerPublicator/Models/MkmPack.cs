using System;
using System.ComponentModel;
using ORM_1_21_.Attribute;

namespace usmbase.ControllerPublicator.Models
{
    [MapTableName("MKmPack")]
    public class MKmPack : BaseKm
    {
        [Description("Ссылка на Id блока")]
        [MapIndex] [MapColumnName("IdBlock")] public Guid IdBlock { get; set; }
        
    }
}