
Page({
  onLoad:function(){
    console.log("onload testcom")
    var fs = wx.getFileSystemManager()
    console.log('fs',fs)
  },
  myEventListenter:function(e){
    console.log('myEventListenter')
    console.log(e)
  }
})