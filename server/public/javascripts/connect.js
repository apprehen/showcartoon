// 连接数据库的方法
const dotenv = require("dotenv")
const {Client} = require('pg')
dotenv.config()
const connectDb = async (tags,picname)=> {
  try{
    const client = new Client({
      user: process.env.PGUSER,
      host: process.env.PGHOST,
      database: process.env.PGDATABASE,
      password: process.env.PGPASSWORD,
      port: process.env.PGPORT
    })
    // console.log('连接上了数据库')
    await client.connect()
    return client
  } catch (error) {
    // console.log(error)
    return error
  }
}
module.exports = connectDb