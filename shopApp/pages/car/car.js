// pages/car/car.js
var {
    getHomeGoods
} = require("../../api/Home");

Page({

    /**
     * 页面的初始数据
     */
    data: {
        // 商品列表
        goodsList: [],
        totalData: 0,
        goodsListts:[]
    },

    // 方法
    // 数量加1
    add(options) {
        // console.log(options.target.dataset.id);
        // console.log(this.data.goodsList[index].num);
        let index = options.target.dataset.id;
        let num = this.data.goodsList[index].num;
        let key = "goodsList[" + index + "].num";
        this.setData({
            // 不能直接写key，需加中括号,这样才能解析
            [key]: num + 1
        })
        this.getTotal();
    },

    // 数量减1
    reduce(options) {
        let index = options.target.dataset.id;
        let num = this.data.goodsList[index].num;
        let key = "goodsList[" + index + "].num";
        // 判断数量是否为1
        num = num <= 1 ? 1 : num - 1;
        this.setData({
            [key]: num
        })
        this.getTotal();
    },

    // 删除数据
    del(options) {
        console.log(options);
        let index = options.currentTarget.dataset.id;
        this.data.goodsList.splice(index, 1);
        // this中数据删除后重新渲染视图
        this.setData({
            goodsList: this.data.goodsList
        })
        this.getTotal();
    },

    // 计算总价
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

    // 跳转购物车页面
    goPay(){
        wx.navigateTo({
          url: '/pages/pay/pay',
        })
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        this.getTotal();
        getHomeGoods().then((data) => {
            // console.log(data.message.goods);
            let lists = [];
            let goodslists = data.message.goods;
            goodslists.forEach(item => {
                let {
                    goods_id,
                    goods_small_logo,
                    goods_name,
                    goods_price
                } = item;

                let data = {
                    id: goods_id,
                    goodsImage: goods_small_logo,
                    goodsName: goods_name,
                    goodsAddress: "广州",
                    goodsPrice: goods_price
                };
                if (goods_small_logo) {
                    lists.push(data);
                }
            })
            lists.splice(1,7)
            this.setData({
                goodsListts: lists
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
        // 获取数据
        var getCartData = wx.getStorageSync("goodsCarlist");
        this.setData({
            goodsList:getCartData
        });
        this.getTotal();
    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {
        // 离开页面,更新数据缓存
        wx.setStorageSync("goodsCarlist", this.data.goodsList)
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