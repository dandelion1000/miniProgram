Page({
  onLoad:function(){
    wx.getLocation({
      type: 'wgs84',
      success: (res) => {
        console.log('getlocation', res)
      }
    })
  }
})