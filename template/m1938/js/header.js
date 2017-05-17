/*历史记录*/
$(function(){
	/*$('.hd_fBox').hover(function(){
		var t = $(this).find('.hd_hist');
		if(t.hasClass('hide')){
			t.removeClass('hide');
		}else{
			t.addClass('hide');
		}
	})*/
	$('.hd_hist_tab .his_item').hover(function(){
		if($(this).hasClass('on')){
			$(this).removeClass('on');
		}else{
			$(this).addClass('on')
		}
	})
})

;

