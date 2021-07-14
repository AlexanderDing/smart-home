// pages/user/user.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      showDialog: false,
      displayDialog: false,
      warnObj:{
        wendu: '',
        guangzhao: '',
        co2: '',
        PM: '',
        LED: false
      },
      personal:{ name: '你好', address:'北京'},
  },
  tagDialog1() {
    this.data.warn={ wendu: '', guangzhao: '', co2: '', PM: '', LED: false};
    this.setData({
      showDialog: !this.data.showDialog,
      warn:this.data.warn
    });
  },
  tagDialog2() {
    let warn = this.data.warnObj;
    this.setData({
      showDialog: false,
      warnObj: warn,
    });
    wx.setStorageSync("warn", warn);
    console.log(warn);
  },
  tagDialog3() {
    this.data.personal={
      name: '',
      address: ''
    };
    this.setData({
      displayDialog: !this.data.displayDialog,
    });
  },
  tagDialog4() {
    this.data.personal=this.data.personal;
    this.setData({
      displayDialog: !this.data.displayDialog,
    });
  },
  tagDialog5() {
    let personal = this.data.personal;
    this.setData({
      displayDialog: false,
      personal: personal,
    });
    wx.setStorageSync("personal", personal);
    console.log(personal);
  },
  bindKeyInput1: function (e) {
    this.data.warnObj.wendu = e.detail.value
  },
  bindKeyInput2: function (e) {
    this.data.warnObj.guangzhao = e.detail.value
  },
  bindKeyInput3: function (e) {
    this.data.warnObj.co2 = e.detail.value
  },
  bindKeyInput4: function (e) {
    this.data.warnObj.PM = e.detail.value
  },
  switchChecked:function (e) {
    this.data.warnObj.LED = e.detail.value
  },
  bindKeyInput5: function (e) {
    this.data.personal.name = e.detail.value
  },
  bindKeyInput6: function (e) {
    this.data.personal.address = e.detail.value
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      personal: wx.getStorageSync("personal") || this.data.personal
    })
  },
})