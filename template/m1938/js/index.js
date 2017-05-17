/*幻灯*/
function SlideShow(c) {
    var a = document.getElementById("slideContainer"), f = document.getElementById("slidesImgs").getElementsByTagName("li"), h = document.getElementById("slideBar"), n = h.getElementsByTagName("li"), d = f.length, c = c || 3000, e = lastI = 0, j, m;
    function b() {
        m = setInterval(function () {
            e = e + 1 >= d ? e + 1 - d : e + 1;
            g()
        }, c)
    }
    function k() {
        clearInterval(m)
    }
    function g() {
        f[lastI].style.display = "none";
        n[lastI].className = "";
        f[e].style.display = "block";
        n[e].className = "on";
        lastI = e
    }
    f[e].style.display = "block";
    a.onmouseover = k;
    a.onmouseout = b;
    h.onmouseover = function (i) {
        j = i ? i.target : window.event.srcElement;
        if (j.nodeName === "LI") {
            e = parseInt(j.innerHTML, 10) - 1;
            g()
        }
    };
    b()
}
;


/*切换*/
function setTab(name,cursel,n){ 
	for(i=1;i<=n;i++){ 
	var menu=document.getElementById(name+i); 
	var con=document.getElementById("tab_"+name+"_"+i); 
	menu.className=i==cursel?"current":""; 
	con.style.display=i==cursel?"block":"none"; 
	} 
	$("img.scrollLoading").lazyload();
}
function keydown(ele){
	var event=window.event||event;  var key=event.keyCode; 
	if(key==9){
		$(ele).focus();
	}		
}
$(function(){
	$('.hd_xian').click(function(){
		if(MAC.Cookie.Get('userid')){
			
		}
		else{
			ymPrompt.win('<div id="login_frame"><div class="logo"></div><div style="display: block;" class="login"><div class="holder"><div class="with-line">使用第三方帐号登录</div><div class="buttons"><span class="weibo"></span><a href="'+SitePath+'index.php?m=user-reg-ref-qqlogin.html" title="QQ帐号登录" rel="nofollow" class="qzone"></a><span class="douban"></span><span class="renren" style="margin-right: 0" ></span></div><div class="with-line">使用账号登录</div><form id="loginform" onsubmit="return false;"  action="'+SitePath+'index.php?user-check" method="post" class="mail-login"><input type="text" name="username" placeholder="账号" class="clear-input" id="username" tabindex="1" onkeydown="keydown(\'#userpass\');"><input name="userpass" type="password" placeholder="密码" class="clear-input" id="userpass" tabindex="2" onkeydown="keydown(\'#username\');"><input name="submit" type="submit" value="登陆" class="rbtn"  onclick="MAC.Login.In();"></form><a class="reset-password red-link" href="'+SitePath+'index.php?m=user-findpass.html">忘记密码»</a><div class="switch-back" href="'+SitePath+'index.php?m=user-reg.html">还没有帐号？<a class="red-link" href="'+SitePath+'index.php?m=user-reg.html">点击注册»</a></div></div></div><div class="close" onclick="ymPrompt.close();"><i></i></div></div>',520,430,'');
		}		
	})
})

;
