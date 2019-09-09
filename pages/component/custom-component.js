/* 组件 custom-component.js */
var pageCommonBehavior = require('../common/page-common')
Component({
  externalClasses: ['my-class'],
  behaviors:[pageCommonBehavior],
  properties:{
    paramA:Number,
    paramB:String,
    myProperty:{
      type: String,
      value: 'expmble',//属性初始值(可选),
      observer:function(newVal, oldVal){} //属性被改变时执行的函数，也可以写成在methods段中定义的方法名字符串, 如：'_propertyChange'
    },
    myProperty2: String
  },
  data: {
    A: [{
      B:'init data.A[0].B'
    }]
  },
  lifetimes: {
    //生命周期函数,可以为函数，或一个在methods段中定义的方法名
    attached: function() {},
    moved: function() {},
    detached: function(){}
  },
    // 生命周期函数，可以为函数，或一个在methods段中定义的方法名
  attached: function () { }, // 此处attached的声明会被lifetimes字段中的声明覆盖
  ready: function() { },
  pageLifetimes:{
        // 组件所在页面的生命周期函数
    show: function () { //页面被展示
    },
    hide: function(){
      //页面被隐藏
    },
    resize: function(size){
      //页面尺寸变化
    }

  },
  methods: {
    onLoad: function(){
      console.log('onload')
      console.log(this.data.paramA)
      console.log(this.data.paramB)
    },
    onMyButtonTap:function(){
      this.setData({
        myProperty: 'Test'
      })
    },
    onTap: function(){
      var myEventDetail = {} //detail对象，提供给事件监听函数
      var myEventOption = {bubbles: true, composed: true} //触发事件的选项
      this.triggerEvent('myevent',myEventDetail,myEventOption)
    },
    _myPrivateMethod:function(){
            // 内部方法建议以下划线开头
      this.replaceDataOnPath(['A',0,'B'],'myprivateData')// 这里将 data.A[0].B 设为 'myPrivateData'
      this.applyDataUpdates()
    },
    _propertyChange: function(newVal, oldVal) {
      console.log('_property_newval_Change',newVal)
      console.log('_property_newval_Change',oldVal)
    }
  }
})