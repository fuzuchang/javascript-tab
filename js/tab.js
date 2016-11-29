window.onload = function(){
    var tabTitle = document.getElementById("tab-title");
    for(var i=0; i<10; i++){
        var aEle = document.createElement('a');
        var aText = document.createTextNode("百度" + i);
            aEle.appendChild(aText);
            aEle.setAttribute("class","tab-"+i);
            aEle.setAttribute("for","content_"+i);
            aEle.setAttribute("onclick","showContent(this)");
            tabTitle.appendChild(aEle);
    }


    var tabContent = document.getElementById("tab-content");
    for(var j = 0;j < 10 ; j++){
        var dEle = document.createElement('div');
        var dText =  document.createTextNode("百度内容区" + j);
            dEle.setAttribute("class","content-"+j);
            dEle.setAttribute("id","content_"+j);

            //下标为0的显示 其余设置隐藏
            if(j != 0){
                dEle.setAttribute("style","display:none");
            }
            dEle.appendChild(dText);
            tabContent.appendChild(dEle);
    }
}


function showContent(o){
    var contentId = o.getAttribute('for');
        //隐藏全部内容区
        for(var j = 0;j < 10 ; j++) {
            var c = document.getElementById("content_"+j);
                c.style.display = 'none';
        }
        //显示被点击选项卡的内容区
        var content = document.getElementById(contentId);
        d(content);
        content.style.display = 'block';


}