// pages/details/details.js
var { getGoodsDetail } = require("../../api/Home.js");
Page({

    /**
     * 页面的初始数据
     */
    data: {
        // 轮播图
        imgs: [
            "/images/banner01.jpg",
            "/images/banner02.jpg",
            "/images/banner03.jpg",
            "/images/banner04.jpg"
        ],
        goods: {
            id: 10,
            goodsImage: "/images/lists02.webp",
            goodsName: "奥佳华肩颈按摩仪",
            goodsImgs: [
                "/images/banner01.jpg",
                "/images/banner02.jpg",
                "/images/banner03.jpg",
                "/images/banner04.jpg"
            ],
            goodsAddress: "上海",
            goodsPrice: "799",
            goodsPriceOld: "3000",
            goodsDetails: "/images/IMG_0466.jpg"
        },
        num: 0,  //购物车商品数量
        isda: true
    },

    // 方法
    // 跳转到购物车
    goCart() {
        wx.switchTab({
            url: '/pages/car/car',
        })
    },

    // 跳转到首页
    goHome() {
        wx.switchTab({
            url: '/pages/home/home',
        })
    },

    // 加入购物车
    setCart() {
        // 购物车数据结构
        let cartLists = {
            id: this.data.goods.id,
            goodsImage: this.data.goods.goodsImage,
            goodsName: this.data.goods.goodsName,
            goodsPrice: this.data.goods.goodsPrice,
            num: 1,
        }

        // 数据添加数据缓存中
        // 判断数据缓存中是否有数据
        let goodsCarList = wx.getStorageSync("goodsCarlist");  //获取数据
        // 有数据
        if (goodsCarList) {
            // 1.有相同数据，数据加一
            let index = goodsCarList.findIndex(item => item.id == this.data.goods.id);
            if (index != -1) {  //有相同数据
                goodsCarList[index].num += 1;
            } else {
                // 2.有数据但没有相同数据，添加数据
                goodsCarList.push(cartLists);
            }

            wx.setStorageSync("goodsCarlist", goodsCarList);

        } else {
            // 3.没有数据  添加数据
            wx.setStorageSync("goodsCarlist", [cartLists]);
        }

        this.setData({
            num: wx.getStorageSync("goodsCarlist").length
        })
    },

    remove(options) {
        console.log(options.currentTarget.dataset.id);
        let arras = []
        arras = wx.getStorageSync('idsa')
        arras.push(options.currentTarget.dataset.id)
        wx.setStorageSync('idsa', arras)
        let idss = !this.data.isda
        this.setData({
            isda: idss
        })

    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        let id = options.id;
        getGoodsDetail({ "goods_id": id }).then((data) => {
            console.log(data);
            let { goods_id, goods_name, goods_small_logo, pics, goods_price, goods_introduce } = data.message;
            let goods = {
                id: goods_id,
                goodsImage: goods_small_logo,
                goodsName: goods_name,
                goodsImgs: pics,
                goodsAddress: "上海",
                goodsPrice: goods_price,
                goodsPriceOld: goods_price + 200,
                goodsDetails: goods_introduce
            }
            this.setData({
                goods
            })
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
        this.setData({
            num: wx.getStorageSync("goodsCarlist").length
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