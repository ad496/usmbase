using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.NetworkInformation;
using Npgsql;
using ORM_1_21_;
using ORM_1_21_.Attribute;
using usmbase.ControllerPublicator.Models;

namespace usmbase.ControllerPublicator
{
    public class SearchPublicator
    {
        private readonly int _base;
        private readonly int _type;
        private ObjectUrl _url = new ObjectUrl();

        public SearchPublicator(int @base, int type)
        {
            _base = @base;
            _type = type;
            _url.@base = @base;
        }

        public string GetPath(string str)
        {
            return PingPack(str);
        }

        string PingPack(string str)
        {
            string sqlPack = "SELECT  " +
                             "\"MKmPallet\".\"Id\" as pallet," +
                             "\"MKmBox\".\"Id\" as box, " +
                             "\"MKmBlock\".\"Id\" as block, " +
                             "\"MKmPack\".\"Id\" as pack, " +
                             "\"MKmPack\".\"OrderKey\" as orderkey " +
                             "FROM \"MKmPack\" " +
                             " LEFT JOIN  \"MKmBlock\" on  \"MKmPack\".\"IdBlock\" = \"MKmBlock\".\"Id\"" +
                             " LEFT JOIN  \"MKmBox\" on \"MKmBox\".\"Id\"=\"MKmBlock\".\"IdBox\" " +
                             " LEFT JOIN  \"MKmPallet\" on \"MKmPallet\".\"Id\"=\"MKmBox\".\"IdPallet\" " +
                             " where \"MKmPack\".\"Km\" LIKE @1";
            string sqlBlock = "SELECT " +
                              "\"MKmPallet\".\"Id\" as pallet, " +
                              "\"MKmBox\".\"Id\" as box, " +
                              "\"MKmBlock\".\"Id\" as block, " +
                              "null as pack, " +
                              "\"MKmBlock\".\"OrderKey\" as orderkey " +
                              "FROM \"MKmBlock\" " +
                              "LEFT JOIN  \"MKmBox\" on \"MKmBox\".\"Id\"=\"MKmBlock\".\"IdBox\" " +
                              "LEFT JOIN  \"MKmPallet\" on \"MKmPallet\".\"Id\"=\"MKmBox\".\"IdPallet\" " +
                              "where \"MKmBlock\".\"Km\" LIKE @1";
            string sqlBox = "SELECT" +
                            "\"MKmPallet\".\"Id\" as pallet, " +
                            "\"MKmBox\".\"Id\" as box, " +
                            "null as block, " +
                            "null as pack, " +
                            "\"MKmBox\".\"OrderKey\" as orderkey " +
                            "FROM \"MKmBox\" " +
                            "LEFT JOIN  \"MKmPallet\" on \"MKmPallet\".\"Id\"=\"MKmBox\".\"IdPallet\" " +
                            "where \"MKmBox\".\"Km\" LIKE @1";
            string sqlPallet = "SELECT" +
                               "\"MKmPallet\".\"Id\" as pallet, " +
                               "null as box, " +
                               "null as block, " +
                               "null as pack, " +
                               "\"MKmPallet\".\"OrderKey\" as orderkey " +
                               "FROM \"MKmPallet\"  " +
                               "where  \"Km\" LIKE '%@1%'";
            string sql = null;
            switch (this._type)
            {
                case 4:
                {
                    sql = sqlPack;
                    break;
                }
                case 3:
                {
                    sql = sqlBlock;
                    break;
                }
                case 2:
                {
                    sql = sqlBox;
                    break;
                }
                case 1:
                {
                    sql = sqlPallet;
                    break;
                }
                default:
                {
                    throw new Exception("Не могу обратотать что искать {type}");
                }
                
            }
            try
            {
                var session = Configure.GetSession();
                MKmPack _pack = null;
                Guid orderKey = Guid.Empty;
                {
                    using var connection = new NpgsqlConnection(OrderPublicator.Str1[_base]);
                    
                    using var cmd = new NpgsqlCommand(sql, connection);
                    cmd.Parameters.AddWithValue("@1", str.Replace("'", "''"));
                    connection.Open();
                    cmd.CommandTimeout = 0;
                    var res = cmd.ExecuteReader();
                    var list = session.GetListMonster<dynamic>(res).ToList();
                    if (list.Count == 0)
                    {
                        throw new Exception(
                            $"Пачка с кодом: {str} не найдена, или уточняйте код, или пачка не вошла в заказ");
                    }

                    if (list.Count > 1)
                    {
                        throw new Exception(
                            $"Пачка с кодом: {str} Найдене в экземпляре {list.Count} шт. Выполниете более детальный поиск");
                    }

                    ObjectUrl url = list.First();
                    url.@base = this._base;

                    return UrlBuilder(url);

                }
               
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
                throw;
            }

            return null;
        }

        string UrlBuilder(ObjectUrl url )
        {
            return null;
        }
    }

    [MapTableName("not_create")]
    class ObjectUrl
    {
        [MapPrimaryKey("pack",Generator.Native)]
        public Guid? pack { get; set; } = Guid.Empty;
        [MapColumnName("block")]
        public Guid? block { get; set; } = Guid.Empty;
        [MapColumnName("box")]
        public Guid? box { get; set; } = Guid.Empty;
        [MapColumnName("orderkey")]
        public Guid? orderkey { get; set; } = Guid.Empty;
        public int @base { get; set; }
    }
}