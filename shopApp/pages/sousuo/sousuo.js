// pages/sousuo/sousuo.js
var {
    getCateqsearch
} = require("../../api/category.js");
Page({

    /**
     * 页面的初始数据
     */
    data: {
        focus: true,
        inputValue: '',
        value: "",
        arrays: [],
        sousuoall: ["衣服", "棉衣", "牛奶", "电视", "电脑", "显示器", "手机", "小米", "华为"]
    },
    bindKeyInput() {
        getCateqsearch({ query: this.data.value }).then((data) => {
            console.log(data);
            this.setData({
                arrays: data.message
            })
        })
    },
    userInput:function(){},
    
    
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {


    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {
        // bindKeyInput()
    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {
        this.bindKeyInput()
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