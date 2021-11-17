using System;
using System.ComponentModel;
using ORM_1_21_;
using ORM_1_21_.Attribute;

namespace usmbase.ControllerPublicator.Models
{
    [MapTableName("order_base")]
    public class OrderBase
    {
        [Description("Ключевое поле")]
        [MapPrimaryKey("OrderKey", Generator.Assigned)]
        public Guid OrderKey { get; set; } // Ключевое поле int - -> string


        [Description("Номер заказа.Для связки из 1С")]
        [MapColumnName("OrdNom")]
        public string OrdNom { get; set; } //     Номер заказа.Для связки из 1С. int  -> string

    
        [Description("тип продукции")]
        [MapColumnName("label_text1")]
        public string FirstName { get; set; } //     
        
        [Description("Описание, марка, бренд")]
        [MapColumnName("OrdText")]
        public string OrdText { get; set; } //          Описание, марка, бренд...и.т.д. string
        
        [Description("Опсание бренда")]
        [MapColumnName("p_description")]
        public string LastName { get; set; }// c ароматом вишни

     
        [Description("Цена пачки  ( если есть  то заказ кодов через ЦРПТ )")]
        [MapColumnName("PkPrice")]
        public decimal PkPrice { get; set; } //   Цена пачки  ( если есть  ->  то заказ кодов через ЦРПТ ) - double

     
        [Description("Планируемое к выпуску количество пачек")]
        [MapColumnName("PkCount")]
        public int PkCount { get; set; } //         Планируемое к выпуску количество пачек. int

      
        [Description("Номер линии")]
        [MapColumnName("LineNom")]
        public string LineNom { get; set; } //        Номер линии int  -> string

        
        

        [Description("Комментарии, дополнительная информация")]
        [MapColumnName("Info")]
        public string Info { get; set; } //               Комментарии, дополнительная информация  ...  и.т.д. -string
        
     
        
        [Description("Дата создания заказа")]
        [MapColumnName("DateCreate")]
        public DateTime DateCreate { get; set; }
        
        public string DateTimeToString => DateCreate.ToString("MM/dd/yyyy");

        
    }

}