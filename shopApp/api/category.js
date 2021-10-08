const HTTP = require("./request");

module.exports ={
    "getCategories":function(){
        return HTTP({
            url:"https://api-hmugo-web.itheima.net/api/public/v1/categories"
        })
    },
    "getCateqsearch":function(data){
        return HTTP({
            url:"https://api-hmugo-web.itheima.net/api/public/v1/goods/qsearch",
            data
        })
    },
    
}