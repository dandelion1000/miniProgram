// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

// 云函数入口函数
exports.main = async (event, context) => {
  const {OPENID, APPID, UNIONID} = cloud.getWXContext()

  return {
    sum: event.a + event.b,
    event,
    OPENID,
    APPID,
    UNIONID
  }
}
