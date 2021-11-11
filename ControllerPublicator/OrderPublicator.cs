using System;
using System.Linq;
using Microsoft.AspNetCore.Antiforgery;
using ORM_1_21_;
using usmbase.ControllerPublicator.Models;

namespace usmbase.ControllerPublicator
{
    
    public class OrderPublicator
    {
      
        public object GetData(string @base, string where)
        {
            var r = Configure.GetSession().Querion<OrderBase>().OrderBy(a=>a.OrdNom).ToList();
            return r;
        }
       
    }
    
    public class BoxPublicator
    {
      
        public object GetData(string @base, string where)
        {
            Guid idPallet = new Guid(where);
            var r = Configure.GetSession().Querion<MKmBox>().Where(a=>a.IdPallet==idPallet).OrderBy(s=>s.NumberItem).ToList();
            return r;
        }
       
    }
    
    public class BlockPublicator
    {
      
        public object GetData(string @base, string where)
        {
            Guid idBox = new Guid(where);
            var r = Configure.GetSession().Querion<MKmBlock>().Where(a=>a.IdBox==idBox).ToList();
            return r;
        }
       
    }
    public class PackPublicator
    {
      
        public object GetData(string @base, string where)
        {
            Guid idBox = new Guid(where);
            var r = Configure.GetSession().Querion<MKmPack>().Where(a=>a.IdBlock==idBox).ToList();
            return r;
        }
       
    }
}