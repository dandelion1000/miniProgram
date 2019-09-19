// plugin/components/pay.js
Component({
  data: {
    args: {
      fee: 1,             // 支付金额，单位为分
      paymentArgs: 'A', // 将传递到功能页函数的自定义参数
      currencyType: 'USD' // 货币符号，页面显示货币简写 US$ 
    }
  },
  methods: {
    // 支付成功的回调接口
    paymentSuccess: function (e) {
      console.log(e);
    },
    // 支付失败的回调接口
    paymentFailed: function (e) {
      console.log(e);
    }
  }
})