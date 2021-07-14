// pages/list/list.js

Page({
  data: {
    showDialog: false,
    roomList: [{
      name: '客厅',
      wendu: '28',
      guangzhao: '27',
      co2: '26',
      PM: '25',
      LED: false
    }],
    addObj: {
      name: '',
      wendu: '',
      guangzhao: '',
      co2: '',
      PM: '',
      LED: false
    },
    warnObj:{
      wendu: '30',
      guangzhao: '30',
      co2: '30',
      PM: '30',
      LED: false
    },
  },
  bindKeyInput1: function (e) {
    this.data.addObj.name = e.detail.value
  },
  bindKeyInput2: function (e) {
    this.data.addObj.wendu = e.detail.value
  },
  bindKeyInput3: function (e) {
    this.data.addObj.guangzhao = e.detail.value
  },
  bindKeyInput4: function (e) {
    this.data.addObj.co2 = e.detail.value
  },
  bindKeyInput5: function (e) {
    this.data.addObj.PM = e.detail.value
  },
  switchChecked: function (e) {
    this.data.addObj.LED = e.detail.value
  },
  // 点击确认，把弹框里面的数据push进数组，然后再添加进缓存，再渲染页面，再关闭弹窗
  // 打开页面
  onLoad: function (options) {
    this.setData({
      roomList: wx.getStorageSync("room") || this.data.roomList
    })
  },
   /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    this.setData({
      warnObj: wx.getStorageSync("warn") || this.data.warnObj
    })
  },
  tagDialog1() {
    this.data.addObj = {
      name: '',
      wendu: '',
      guangzhao: '',
      co2: '',
      PM: '',
      LED: false
    };
    this.setData({
      showDialog: !this.data.showDialog,
      addObj: this.data.addObj
    });
  },
  tagDialog2() {
    // wx.setStorageSync("roomList", this.data.roomList);
    let room = this.data.roomList;
    // let room=wx.getStorageSync("roomList") || this.data.roomList;
    room.push(this.data.addObj);
    this.setData({
      showDialog: false,
      roomList: room,
    });
    wx.setStorageSync("room", room);
    console.log(room);
  },
  delete(e) {
    let _this = this
    wx.showModal({
      title: '提示',
      content: '是否删除',
      success: function (res) {
        _this.data.roomList.splice(e.currentTarget.dataset.index, 1);
        _this.setData({
          roomList: _this.data.roomList
        })
        wx.setStorageSync("room", _this.data.roomList);
      }
    })
  }
})