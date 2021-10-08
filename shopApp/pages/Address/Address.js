// pages/Address/Address.js

Page({

    /**
     * 页面的初始数据
     */
    data: {
        region: ['广东省', '广州市', '海珠区'],
        isxys:false,
        isUpdata: false,
        ismoren:true,
        value:"",
        dizival:"",
        dainhval:"",
        xaingsival:"",
        srray:[
          {
            id:1,
            name:"张三",
            dainh:12332112345,
            dizhi:"广东省广州市天河区华康街17号"
          }
        ],
        arrays:[
          {
            id:1,
            name:"张三",
            dainh:12332112345,
            dizhi:"广东省广州市天河区华康街17号"
          }
        ],
    },
    // checkde(e){
    //   console.log(e);
    // },
    serove(ids){
      console.log(ids);
      let id = ids.currentTarget.dataset.id
      let index = this.data.arrays.findIndex(item => item.id == id )
      // console.log(ids.currentTarget.dataset.id);
      let list = this.data.arrays;
     
      console.log(this.data.value,this.data.dainhval,this.data.dizival);
      this.setData({
        isxys : true,
        isUpdata:true,
        value :list[index].name,
        dizival :list[index].dizhi,
        dainhval :list[index].dainh
      })
      wx.setStorageSync('index', index)
    },
    updata(){
      let index = wx.getStorageSync('index');
      let list = this.data.arrays
      let  obj = {
        name : this.data.value,
        dainh: this.data.dainhval,
        dizhi: this.data.dizival,
      }
      list[index] = obj;
      console.log(list);
      let ifale = !this.data.isxys

      this.setData({
        arrays: list,
        isxys:ifale
        
      })
    },
    remove(ids){
      let id = ids.currentTarget.dataset.id;
      let index = this.data.arrays.findIndex(item => item.id == id);
      console.log(index);
      let arare = this.data.arrays;
      console.log(arare);
      arare.splice(index,1)
      this.setData({
        arrays:arare
      })
    },
    isxy(){
      let ifale = !this.data.isxys
      this.setData({
        isxys:ifale
      })
    },
    adddizi(){
      // let srray = []
      let xaingxidiz = this.data.region + this.data.xaingsival
      
      let dadas={
        id:new Date().getTime(),
        name:this.data.value,
        dainh:this.data.dainhval,
        dizhi:xaingxidiz
      }
      this.data.arrays.push(dadas)
      let ifale = !this.data.isxys
      this.setData({
        arrays:this.data.arrays,
        isxys:ifale
      })
      console.log(this.data.arrays);
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function () {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    },
    bindRegionChange: function (e) {
        console.log('picker发送选择改变，携带值为', e.detail.value)
        this.setData({
          region: e.detail.value
        })
      }
})