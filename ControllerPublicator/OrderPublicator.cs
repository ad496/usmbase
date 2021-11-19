using System;
using System.Linq;
using Microsoft.AspNetCore.Antiforgery;
using Npgsql;
using ORM_1_21_;
using usmbase.ControllerPublicator.Models;

namespace usmbase.ControllerPublicator
{
    
    public class OrderPublicator
    {
        public static string[] Str1 =
        {
            "",
            "Server=192.168.70.120;Port=5432;Database=suz;User Id=postgres;Password=postgres;",
            "Server=192.168.70.120;Port=5432;Database=suz21;User Id=postgres;Password=postgres;",
            "Server=192.168.70.120;Port=5432;Database=suz22;User Id=postgres;Password=postgres;"
        };


        public static object GetDataOrder(int @base, string where)
        {
            try
            {
                var session = Configure.GetSession();
                using var connection = new NpgsqlConnection(Str1[@base]);
                string sql = $"select * from {session.TableName<OrderBase>()} order by \"DateCreate\"";
                using var cmd = new NpgsqlCommand(sql,connection);
                connection.Open();
                cmd.CommandTimeout = 0;
                var res = cmd.ExecuteReader();
                var resCore=session.GetListMonster<OrderBase>(res).ToList();
                return resCore;
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
                throw;
            }
        }
        
        
        public static object GetDataBox(int @base, string where)
        {
            Guid idPallet = new Guid(where);
            
            try
            {
                var session = Configure.GetSession();
                using var connection = new NpgsqlConnection(Str1[@base]);
                string sql = $"select * from {session.TableName<MKmBox>()} where \"IdPallet\"='{idPallet}' order by number_item";
                using var cmd = new NpgsqlCommand(sql,connection);
                connection.Open();
                cmd.CommandTimeout = 0;
                var res = cmd.ExecuteReader();
                var resCore=session.GetListMonster<MKmBox>(res).ToList();
                return resCore;
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
                throw;
            }
        }
        
        public static object GetDataPallet(int @base, string where)
        {
            Guid orderKey = new Guid(where);
            
            
            // var r = Configure.GetSession().Querion<MKmPallet>().Where(a => a.OrderKey == orderKey)
            //     .OrderBy(s => s.NumberItem);
            try
            {
                var session = Configure.GetSession();
                using var connection = new NpgsqlConnection(Str1[@base]);
                string sql = $"select * from {session.TableName<MKmPallet>()} where \"OrderKey\"='{orderKey}' order by number_item";
                using var cmd = new NpgsqlCommand(sql,connection);
                connection.Open();
                cmd.CommandTimeout = 0;
                var res = cmd.ExecuteReader();
                var resCore=session.GetListMonster<MKmPallet>(res).ToList();
                return resCore;
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
                throw;
            }
        }
        
        public static  object GetDataBlock(int @base, string where)
        {
            Guid idBox = new Guid(where);
           // var r = Configure.GetSession().Querion<MKmBlock>().Where(a => a.IdBox == idBox).ToList();
            
            try
            {
                var session = Configure.GetSession();
                using var connection = new NpgsqlConnection(Str1[@base]);
                string sql = $"select * from {session.TableName<MKmBlock>()} where \"IdBox\"='{idBox}'";
                using var cmd = new NpgsqlCommand(sql,connection);
                connection.Open();
                cmd.CommandTimeout = 0;
                var res = cmd.ExecuteReader();
                var resCore=session.GetListMonster<MKmBlock>(res).ToList();
                return resCore;
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
                throw;
            }
        }
        
        public static object GetDataPack(int @base, string where)
        {
            Guid idBlock = new Guid(where);
            //var r = Configure.GetSession().Querion<MKmPack>().Where(a => a.IdBlock == idBox).ToList();
           
            try
            {
                var session = Configure.GetSession();
                using var connection = new NpgsqlConnection(Str1[@base]);
                string sql = $"select * from {session.TableName<MKmPack>()} where \"IdBlock\"='{idBlock}'";
                using var cmd = new NpgsqlCommand(sql,connection);
                connection.Open();
                cmd.CommandTimeout = 0;
                var res = cmd.ExecuteReader();
                var resCore=session.GetListMonster<MKmPack>(res).ToList();
                return resCore;
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
                throw;
            }
        }
    }

   
 
}