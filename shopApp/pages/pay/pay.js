// pages/pay/pay.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        goodsList: [],
        totalData: 0
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
    // 计算总价格
    getTotal: function () {
        // 获取数据
        let goodsList = this.data.goodsList;

        let data = goodsList.reduce(function (total, item) {
            return total + item.num * item.goodsPrice;
        }, 0)

        this.setData({
            totalData: data
        })
    },
    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {
        // 获取数据
        var getCartData = wx.getStorageSync("goodsCarlist");
        let obj = Object.assign([], getCartData);
        this.setData({
            goodsList: obj
        });

        this.getTotal();
    },

    goOrder() {
        // 跳转订单页面
        wx.navigateTo({
            url: '/pages/order/order?index=1',
        })

        this.setOrderLists(1);
    },

    goAddress(){
        // 跳转地址页面
        wx.navigateTo({
          url: '/pages/Address/Address',
        })
    },

    setOrderLists(type) {
        // 没有数据时候不添加订单
        let goodsCarlistData = wx.getStorageSync("goodsCarlist");
        if (!goodsCarlistData) {
            return;
        }

        let orderData = {
            orderId: new Date().getTime(),
            orderLists: null,
            type, //1:待支付 2:待发货 3:待收货 4:待评价
            total: this.data.totalData
        };
        // 添加商品列表到订单中
        orderData.orderLists = this.data.goodsList;
        // 1.判断是否有订单
        let orderLists = wx.getStorageSync("orderLists");
        if (orderLists) {
            // 有订单添加订单
            orderLists.push(orderData);
            wx.setStorageSync("orderLists", orderLists)
        } else {
            // 没有订单
            wx.setStorageSync("orderLists", [orderData])
        }

        // 请求购物车数据
        wx.removeStorageSync("goodsCarlist")
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
        // console.log("监听页面卸载")
        // 清空购物车数据
        wx.removeStorageSync("goodsCarlist")

        this.setOrderLists(1);

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