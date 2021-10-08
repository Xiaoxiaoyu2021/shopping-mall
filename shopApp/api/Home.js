const HTTP = require("./request");

module.exports = {
    // 首页轮播图
    "getHomeBanner":function () {
        return HTTP({
            // method:"post",
            // data:{},
            url:"https://api-hmugo-web.itheima.net/api/public/v1/home/swiperdata",
        })
    },

    // 首页商品
    "getHomeGoods":function () {
        return HTTP({
            url:"https://api-hmugo-web.itheima.net/api/public/v1/goods/search"
        })
    },

    // 商品详情页
    "getGoodsDetail":function(data){
        return HTTP({
            url:"https://api-hmugo-web.itheima.net/api/public/v1/goods/detail",
            data
        })
    }
}