        var Terminal = {            
            platform : function(){
                var u = navigator.userAgent.toLowerCase(), app = navigator.appVersion
                return {
                    weixin: u.indexOf('micromessenger') > -1 ,
                    android: u.indexOf('android') > -1 || u.indexOf('linux') > -1,
                    iPhone: u.indexOf('iphone') > -1 ,
                    iPad: u.indexOf('ipad') > -1
                };
            }(),
            language : (navigator.browserLanguage || navigator.language).toLowerCase()
        }
        
        wapurl = './wap.index.html';
        if (GetQueryString("v") == "pc") {
        }else if (Terminal.platform.weixin){ 
            location.href  = wapurl;
        }else if(Terminal.platform.android){
            location.href  = wapurl;
        }else if(Terminal.platform.iPhone){ 
            location.href  = wapurl;
        }else if(Terminal.platform.iPad){
            location.href  = wapurl;
        }else{
        }
        
function GetQueryString(name)
{
     var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
     var r = window.location.search.substr(1).match(reg);
     if(r!=null)return  unescape(r[2]); return null;
}