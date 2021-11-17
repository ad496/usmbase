// using System;
// using System.Linq;
// using ORM_1_21_;
// using usmbase.ControllerPublicator.Models;
//
// namespace usmbase.ControllerPublicator
// {
//     public class PalletPublicator
//     {
//         
//         public object GetData(string @base, string where)
//         {
//             Guid orderKey = new Guid(where);
//             var r = Configure.GetSession().Querion<MKmPallet>().Where(a => a.OrderKey == orderKey)
//                 .OrderBy(s => s.NumberItem);
//             return r;
//         }
//        
//     }
// }