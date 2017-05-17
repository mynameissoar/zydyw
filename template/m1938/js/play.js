if(urls!=''){
	var html= '';
	var list = urls.split('#'); 
	for(var i=0;i<list.length;i++){
		url=list[i].split('$'); 
		if(url[0].indexOf('youku')>-1)
		{
			vod_ico = 'youku' ;vod_name = '优酷';
		}else if(url[0].indexOf('qq')>-1){
			vod_ico = 'qq' ;vod_name = '腾讯';
		}else if(url[0].indexOf('qiyi')>-1){
			vod_ico = 'iqiyi' ;vod_name = '爱奇艺';
		}
		else if (url[0].indexOf('letv')>-1)
		{
			vod_ico = 'letv' ;vod_name = '乐视网';
		}else if (url[0].indexOf('tudou')>-1)
		{
			vod_ico = 'tudou' ;vod_name = '土豆网';
		}else if (url[0].indexOf('kankan')>-1)
		{
			vod_ico = 'xunlei' ;vod_name = '迅雷网';
		}else if (url[0].indexOf('pptv')>-1)
		{
			vod_ico = 'pptv' ;vod_name = 'PPTV';
		}else if (url[0].indexOf('pps')>-1)
		{
			vod_ico = 'pps' ;vod_name = 'PPS';
		}else if (url[0].indexOf('sohu')>-1)
		{
			vod_ico = 'sohu' ;vod_name = '搜狐视频';
		}else if (url[0].indexOf('sina')>-1)
		{
			vod_ico = 'sina' ;vod_name = '新浪视频';
		}else if (url[0].indexOf('ku6')>-1)
		{
			vod_ico = 'ku6' ;vod_name = '酷六网';
		}else if (url[0].indexOf('funshion')>-1)
		{
			vod_ico = 'funshion' ;vod_name = '风行';
		}else if (url[0].indexOf('wasu')>-1)
		{
			vod_ico = 'wasu' ;vod_name = '华数TV';
		}else if (url[0].indexOf('56')>-1)
		{
			vod_ico = '56' ;vod_name = '56网';
		}else if (url[0].indexOf('cntv')>-1)
		{
			vod_ico = 'cntv' ;vod_name = 'CNTV';
		}else if (url[0].indexOf('ifeng')>-1)
		{
			vod_ico = 'ifeng' ;vod_name = '凤凰网';
		}else if (url[0].indexOf('kumi')>-1)
		{
			vod_ico = 'kumi' ;vod_name = '酷米网';
		}else if (url[0].indexOf('61')>-1)
		{
			vod_ico = '61' ;vod_name = '淘米网';
		}else if (url[0].indexOf('imgo')>-1)
		{
			vod_ico = 'imgo' ;vod_name = '芒果TV';
		}else if (url[0].indexOf('baofeng')>-1)
		{
			vod_ico = 'baofeng' ;vod_name = '暴风';
		}
		html += '<li><a href="'+url[1]+'"><i class="bof_'+vod_ico+'"></i><span class="maskbg"></span><span class="wz">'+vod_name+'播放</span></a></li>';
	}
	$('#playlist').html(html);
	urlf=list[0].split('$');
	if(urlf[1])
	$('.bof_btn_bof').html('<a href="'+urlf[1]+'"></a>');
}