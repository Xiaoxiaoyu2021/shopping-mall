// pages/addshou/addshou.js
var {
    getGoodsDetail
} = require("../../api/Home");
Page({

    /**
     * 页面的初始数据
     */
    data: {
        goodsList: [
            {
                id: 1,
                goodsImage: "/images/lists01.webp",
                goodsName: "1商品名称",
                goodsAddress: "广州",
                goodsPrice: "200"
            },
            {
                id: 2,
                goodsImage: "/images/lists01.webp",
                goodsName: "2商品名称",
                goodsAddress: "广州",
                goodsPrice: "200"
            },
        ]
    },
    // removes(options) {
    //     let ise = options.currentTarget.dataset.ids
    //     let idss = wx.getStorageSync('idsa');
    //     let list = this.data.goodsList;
    //     let index = idss.findIndex(item => item == ise);
    //     console.log(index);
    //     idss.splice(index, 1);
    //     list.splice(index, 1);
    //     wx.setStorageSync('idsa', idss);
    //     this.setData({
    //         goodsList:list
    //     })
    // },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {

        // console.log(wx.getStorageSync('idsa'));
        let ids = wx.getStorageSync('idsa')
        let lists = [];
        for (let i = 0; i < ids.length; i++) {
            getGoodsDetail({
                goods_id: ids[i]
            }).then((data) => {
                let goodslists = data.message;
                let datas = {
                    id: goodslists.goods_id,
                    goodsImage: goodslists.goods_small_logo,
                    goodsName: goodslists.goods_name,
                    goodsAddress: "广州",
                    goodsPrice: goodslists.goods_price
                };
                lists.push(datas);
                console.log(lists);
                this.setData({
                    goodsList: lists
                })

            })

        }
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
        // this.removes()
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