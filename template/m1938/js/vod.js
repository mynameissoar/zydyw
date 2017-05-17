function openwin(col){
	if(col=='evaluation'){
		if(MAC.Cookie.Get('userid')){	
			if(MAC.Cookie.Get('userpic').indexOf('http')>=0) var userpic = MAC.Cookie.Get('userpic');
			else var userpic = SitePath+MAC.Cookie.Get('userpic');
			ymPrompt.win('<div id="login_fb"><div class="login_title">发布影评</div><div class="login_tx"><img src="'+userpic+'" width="94" height="94"  alt=""/></div><textarea name="re_content" id="re_content" rows="6" cols="50" class="clear-input"></textarea><input class="fb_button rbtn" type="submit" value="发布影评" id="re_button" onclick="addreview()"><div class="close" onclick="ymPrompt.close();"><i></i></div></div>',520,400,'');
		}
		else{
			ymPrompt.win('<div id="login_frame"><div class="logo"></div><div style="display: block;" class="login"><div class="holder"><div class="with-line">使用第三方帐号登录</div><div class="buttons"><span class="weibo"></span><a href="'+SitePath+'index.php?m=user-reg-ref-qqlogin.html" title="QQ帐号登录" rel="nofollow" class="qzone"></a><span class="douban"></span><span class="renren" style="margin-right: 0" ></span></div><div class="with-line">使用账号登录</div><form id="loginform" onsubmit="return false;"  action="'+SitePath+'index.php?user-check" method="post" class="mail-login"><input type="text" name="username" placeholder="账号" class="clear-input" id="username" tabindex="1" onkeydown="keydown(\'#userpass\');"><input name="userpass" type="password" placeholder="密码" class="clear-input" id="userpass" tabindex="2" onkeydown="keydown(\'#username\');"><input name="submit" type="submit" value="登陆" class="rbtn"  onclick="MAC.Login.In();"></form><a class="reset-password red-link" href="'+SitePath+'index.php?m=user-findpass.html">忘记密码»</a><div class="switch-back" href="'+SitePath+'index.php?m=user-reg.html">还没有帐号？<a class="red-link" href="'+SitePath+'index.php?m=user-reg.html">点击注册»</a></div></div></div><div class="close" onclick="ymPrompt.close();"><i></i></div></div>',520,430,'');
		}
	}
	else if(col=='dialogue'){
		if(MAC.Cookie.Get('userid')){
			if(MAC.Cookie.Get('userpic').indexOf('http')>=0) var userpic = MAC.Cookie.Get('userpic');
			else var userpic = SitePath+MAC.Cookie.Get('userpic');
			ymPrompt.win('<div id="login_fb" style="margin-top: -200px;"><div class="login_title">发布台词</div><div class="login_tx"><img src="'+userpic+'" width="94" height="94"  alt=""/></div><textarea name="gb_content" id="gb_content" rows="6" cols="50" class="clear-input"></textarea><input class="fb_button rbtn" type="submit" value="发布台词" id="gb_button" onclick="addtaici()"><div class="close" onclick="ymPrompt.close();"><i></i></div></div>',520,400,'');
		}
		else{
			ymPrompt.win('<div id="login_frame"><div class="logo"></div><div style="display: block;" class="login"><div class="holder"><div class="with-line">使用第三方帐号登录</div><div class="buttons"><span class="weibo"></span><a href="'+SitePath+'index.php?m=user-reg-ref-qqlogin.html" title="QQ帐号登录" rel="nofollow" class="qzone"></a><span class="douban"></span><span class="renren" style="margin-right: 0" ></span></div><div class="with-line">使用账号登录</div><form id="loginform" onsubmit="return false;"  action="'+SitePath+'index.php?user-check" method="post" class="mail-login"><input type="text" name="username" placeholder="账号" class="clear-input" id="username" tabindex="1" onkeydown="keydown(\'#userpass\');"><input name="userpass" type="password" placeholder="密码" class="clear-input" id="userpass" tabindex="2" onkeydown="keydown(\'#username\');"><input name="submit" type="submit" value="登陆" class="rbtn"  onclick="MAC.Login.In();"></form><a class="reset-password red-link" href="'+SitePath+'index.php?m=user-findpass.html">忘记密码»</a><div class="switch-back" href="'+SitePath+'index.php?m=user-reg.html">还没有帐号？<a class="red-link" href="'+SitePath+'index.php?m=user-reg.html">点击注册»</a></div></div></div><div class="close" onclick="ymPrompt.close();"><i></i></div></div>',520,430,'');
		}
	}
	else{
		
	}
}
function jumpout(url){
	ymPrompt.win('<div class="black_overlay"><div id="tc_search" style="margin-top: -133px;"><p class="tc_sear_title">聚看网正带您进入<span class="red">“面包网”</span></p><div class="tc_logo">面包网<p>'+url+'</p></div><p class="tc_sear_bot">如果浏览器未正常跳转，<a href="#" class="red">请点击这里</a></p><div class="close"><i></i></div></div></div>',590,253,'');
	setTimeout('formclose(\''+url+'\')',3000);
}
function formclose(url){
	ymPrompt.close();
	window.open(url);
}
function addreview(){
		if($('#re_content').val()){
				$.ajax({
				type:'post',
				url:SitePath+'index.php?m=evaluation-save',
				data:'evaluation='+$('#re_content').val()+'&vid='+SiteId+'&userid='+MAC.Cookie.Get('userid')+'&username='+MAC.Cookie.Get('usernickname'),
				success:function(html){
					ymPrompt.close();
					alert(html);
				},
				error:function(){
					ymPrompt.close();
					alert('提交失败！');
				}
				})
		}
		else{
			alert('影评不能为空！');
		}
}
function addtaici(){
		if($('#gb_content').val()){
				$.ajax({
				type:'post',
				url:SitePath+'index.php?m=dialogue-save',
				data:'dialogue='+$('#gb_content').val()+'&vid='+SiteId+'&userid='+MAC.Cookie.Get('userid')+'&username='+MAC.Cookie.Get('usernickname'),
				success:function(html){
					ymPrompt.close();
					alert(html);
				},
				error:function(){
					ymPrompt.close();
					alert('提交失败！');
				}
				})
		}
		else{
			alert('台词不能为空！');
		}
}
function keydown(ele){
	var event=window.event||event;  var key=event.keyCode; 
	if(key==9){
		$(ele).focus();
	}		
}
$(function(){
	$('.yplx_search').click(function(){
		if(results){
			searchthml ='<div class="nytitle con_c2title"><h3>搜索结果</h3></div><div class="con_juji_bg con_search"><ul>';
			var list = results.split('$'); 
			for(var i=0;i<list.length;i++){
				num = i+1;
				searchthml +=' <li><a href="'+list[i]+'" target="_blank">地址'+num+'</a></li>';
			}
			searchthml +='</ul><div class="clear"></div><div class="con_c2_shuom"><span>声明：</span>此内容系聚看搜索根据您的需求，通过程序自动搜索全网的结果，不代表聚看搜索赞成被搜索网站的内容或者立场，聚看搜索不承担对被搜索内容进行任何审查的义务。<span class="black">（版权保护投诉）</span></div></div>';
			$('.con_c2').html(searchthml);
		}
		else
			return false;
	})
	$('#login').click(function(){
		if(MAC.Cookie.Get('userid')){
		}
		else{
			ymPrompt.win('<div id="login_frame"><div class="logo"></div><div style="display: block;" class="login"><div class="holder"><div class="with-line">使用第三方帐号登录</div><div class="buttons"><span class="weibo"></span><a href="'+SitePath+'index.php?m=user-reg-ref-qqlogin.html" title="QQ帐号登录" rel="nofollow" class="qzone"></a><span class="douban"></span><span class="renren" style="margin-right: 0" ></span></div><div class="with-line">使用账号登录</div><form id="loginform" onsubmit="return false;"  action="'+SitePath+'index.php?user-check" method="post" class="mail-login"><input type="text" name="username" placeholder="账号" class="clear-input" id="username" tabindex="1" onkeydown="keydown(\'#userpass\');"><input name="userpass" type="password" placeholder="密码" class="clear-input" id="userpass" tabindex="2" onkeydown="keydown(\'#username\');"><input name="submit" type="submit" value="登陆" class="rbtn"  onclick="MAC.Login.In();"></form><a class="reset-password red-link" href="'+SitePath+'index.php?m=user-findpass.html">忘记密码»</a><div class="switch-back" href="'+SitePath+'index.php?m=user-reg.html">还没有帐号？<a class="red-link" href="'+SitePath+'index.php?m=user-reg.html">点击注册»</a></div></div></div><div class="close" onclick="ymPrompt.close();"><i></i></div></div>',520,430,'');
		}		
	})
	$('.review').click(function(){
		openwin('evaluation');
	})
	$('.taici').click(function(){
		openwin('dialogue');
	})
	var _height= $('.yplx_c3,.con_ztq_c1 li').height();
	$('.yplx_c3').css('height',48);
		$('#showmore').click(function(){
			if($(this).hasClass('open')){
				//关闭	
				$(this).removeClass('open').html('详情')	
				$('.yplx_c3').css({'height':48})
			}else{
				//执行打开
				$(this).addClass('open').html('收起')	
				$('.yplx_c3').css({'height':_height})
			}
		})	
	$('.con_ztq_c1 li').css('height',40);
			$('.ztq_ckgc').click(function(){
				if($(this).hasClass('ztq_open')){
					//关闭	
					$(this).removeClass('ztq_open').html('【查看歌词】')	
					$(this).parent().css({'height':40})
				}else{
					//执行打开
					$(this).addClass('ztq_open').html('【查看歌词】')	
					$(this).parent().css({'height':_height})
				}
			})
})
