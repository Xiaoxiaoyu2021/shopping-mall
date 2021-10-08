// pages/order/order.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        orderLists:null,
        index:3,  //全部显示
        isass:true

    },

    // 方法
    // 修改tabs下标
    setIndex(options){
        let index = options.target.dataset.index;
        this.setData({
            index
        })
    },

    isas(ids){
        let id = ids.currentTarget.dataset.ids;
        let list = wx.getStorageSync('orderLists');
        let index = list.findIndex(item =>item.orderId == id);
        console.log(index);
        list[index].type += 1;
        console.log(list[index].type);
        console.log(list);
        wx.setStorageSync('orderLists', list)

        let isa = !this.data.isass
        this.setData({
            isass : isa,
            orderLists:list
        })
    },

    goAddress(){
        // 跳转地址页面
        wx.navigateTo({
          url: '/pages/Address/Address',
        })
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        // console.log(options);
        this.setData({
            index:options.index
        })
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
        let orderLists = wx.getStorageSync("orderLists");
        this.setData({
            orderLists
        })
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
        wx.reLaunch({
          url: '/pages/my/my',
        })
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

    }
})