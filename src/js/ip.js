
var newdiv = document.createElement("div")
newdiv.id = "fip" ;
newdiv.className = "fip" ;
document.body.appendChild(newdiv);
var div = document.createElement("div")
div.id = "ipcs" ;
div.className = "ipcs" ;
document.getElementById('fip').appendChild(div);
document.getElementById('ipcs').innerHTML = ( '您IP地址:' + returnCitySN["cip"] +  ' CID:' + returnCitySN["cid"] + ' 地区:' + returnCitySN["cname"]  + "  所使用浏览器内核浏览器版本:" + getBrowserInfo()); function getBrowserInfo(){
    var agent = navigator.userAgent.toLowerCase(); var regStr_ie = /msie [\d.]+;/gi; var regStr_ff = /firefox\/[\d.]+/gi 
    var regStr_chrome = /chrome\/[\d.]+/gi; var regStr_saf = /safari\/[\d.]+/gi; if (agent.indexOf("msie") > 0) {
        return agent.match(regStr_ie);
    }
    if (agent.indexOf("firefox") > 0) {
        return agent.match(regStr_ff);
    }
    if (agent.indexOf("chrome") > 0) {

        return agent.match(regStr_chrome);
    }
    if (agent.indexOf("safari") > 0 && agent.indexOf("chrome") < 0) {
    return agent.match(regStr_saf);
    }
}
