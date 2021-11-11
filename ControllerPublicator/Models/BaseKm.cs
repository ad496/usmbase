using System;
using System.ComponentModel;
using ORM_1_21_;
using ORM_1_21_.Attribute;

namespace usmbase.ControllerPublicator.Models
{
    public abstract class BaseKm
    {
        protected BaseKm()
        {
            Id = Guid.NewGuid();
        }
     
        [Description("Дата последнего изменения в базе строкой")]
      
        public string DateTimeToString => DateTime.ToString("g");

        //[DescriptionDialog(2, "Id")]
        [Description("Первичный ключ ID")]
    
        [MapPrimaryKey("Id", Generator.Assigned)]
        public Guid Id { get; set; }

      
        //[DescriptionDialog(3, "OrderKey")]
        [Description("Сылка на заказ OrderKey")]
        [MapIndex] [MapColumnName("OrderKey")] public Guid OrderKey { get; set; }


       
        [Description("Код маркировки Km")]
      
        [MapIndex] [MapColumnName("Km")] public string Km { get; set; }

        [MapDefaultValue("null default CURRENT_DATE")]
        [MapColumnName("mydatetime")]
      
        [Description("Дата последнего изменения")]
        public DateTime DateTime { get; set; } = DateTime.Now;

       

      
    }
}