// JavaScript Document
// JavaScript Document
/* @name   MSWPC端主体js
-------------------------------------------------------------------------*/
/* @author hgy@demdesign.com Mr.Hu
-------------------------------------------------------------------------*/
/* @time   2014-08-22
-------------------------------------------------------------------------*/

if (!window.console) {
	if (document.location.href.indexOf('debug=true') > -1) {
		window.console = {
			log: function(msg) {
				alert(msg);
			}
		}
	} else {
		window.console = {
			log: function(msg) {}
		}
	}
}
$(function() {
	//
	//判断是否为IE浏览器，并且判断是否为IE9以下版本,添加ie8 hack样式
	//
	if(navigator.appName == "Microsoft Internet Explorer" && navigator.appVersion.match(/7./i)=="7.") { 
		console.log("IE 7.0"); 
		$(".cont_box").addClass("ie8");
	}
	else if(navigator.appName == "Microsoft Internet Explorer" && navigator.appVersion.match(/8./i)=="8.") { 
		console.log("IE 8.0");
		$(".cont_box").addClass("ie8"); 
	} 
	else if(navigator.appName == "Microsoft Internet Explorer" && navigator.appVersion.match(/9./i)=="9.") { 
		console.log("IE 9.0"); 
	}
	else if(navigator.appName == "Microsoft Internet Explorer" && navigator.appVersion.match(/10./i)=="10.") { 
		console.log("IE 10.0");
		//$(".cont_box").addClass("ie8"); 
	} 
	
	var _resize = function() {
		var v_h = $(window).height(),
			v_w = $(window).width()/* > 960 ? $(window).width() : 960*/;

		//console.log(v_h);
		
		var aImg = $(".kvA li img");

		var s1 = v_w / aImg.data("width"),
			s2 = v_h / aImg.data("height");

		//console.log(s1);
		//console.log(s2);

		s = s1 > s2 ? s2 : s1;
		aImg.css({
			width: aImg.data('width') * s,
			height: aImg.data('height') * s
		});

		$('.KV_box').height(aImg.height());
		$('.first_box').height(aImg.height());
		$('.scroll_tip').css('bottom',20);
		
		//$(".beauty_text").height($(".beauty_img").data("height")*s1);
		$(".beauty_text p").css({
			top:300*s1
		})
	};

	$(window).resize(_resize);
	_resize();
					
	//
	//banner渐变动画
	//
	$('.pricate_list li').mouseenter(function(){
		$(this).find("img.hover").animate({
			opacity:1
		},400)
	});
	
	$('.pricate_list li').mouseleave(function(){
		$(this).find("img.hover").animate({
			opacity:0
		},100)
	})
		
	//
	//引导导航动画
	//
	var guideNav = $(".guide_point li");
	
	/*guideNav.mouseenter(function(){
		$(this).find(".nav_text").css("display","block");
		$(this).find(".nav_text").animate({
			width:110	
		})
	})
	guideNav.mouseleave(function(){
		$(this).find(".nav_text").animate({
			width:0	
		},200,function(){
			//$(".nav_text").css("display","none");
		})
		$(".nav_text").css("display","none");
	})*/
	
	guideNav.click(function(){
		var idx = guideNav.index(this);
		var oId = "#cont_"+(idx+1);
		console.log(oId);
		guideNav.removeClass("current");
		$(this).addClass("current");
		$("html,body").animate({scrollTop: $(oId).offset().top}, 1000);
		return false;
	})
	
	$(".guide_nav").css("margin-top",-$(".guide_nav").height()/2);
	
		//
	//鼠标滚轮事件
	//
	/*var t1 = $("#cont_1").offset().top,
		t2 = $("#cont_2").offset().top,
		t3 = $("#cont_3").offset().top,
		t4 = $("#cont_4").offset().top,
		t5 = $("#cont_5").offset().top,
		t6 = $("#cont_6").offset().top,
		t7 = $("#cont_7").offset().top,
		t8 = $("#cont_8").offset().top;*/
		
	$(window).scroll(function(){
		/*var oScrollDiv = $(".main_box"),
		    L = oScrollDiv.length,
			scrollTop = $(window).scrollTop();*/
		
		/*oScrollDiv.each(function(index, element) {
			if(scrollTop < oScrollDiv.eq(index).offset().top){
				guideNav.removeClass("current");
				guideNav.eq(index).addClass("current");
			}
            
        });*/
		
		/*for(i=0;i<L;i++){
			if(scrollTop < oScrollDiv.eq(i).offset().top){
				guideNav.removeClass("current");
				guideNav.eq(i).addClass("current");
			}
		}*/
		
		/*if(scrollTop < t2){
			guideNav.removeClass("current");
			guideNav.eq(0).addClass("current");
		}
		else if( scrollTop < t3){
			guideNav.removeClass("current");
			guideNav.eq(1).addClass("current");
		}
		else if( scrollTop < t4){
			guideNav.removeClass("current");
			guideNav.eq(2).addClass("current");
		}
		else if( scrollTop < t5){
			guideNav.removeClass("current");
			guideNav.eq(3).addClass("current");
		}
		else if( scrollTop < t6){
			guideNav.removeClass("current");
			guideNav.eq(4).addClass("current");
		}
		else if( scrollTop < t7){
			guideNav.removeClass("current");
			guideNav.eq(5).addClass("current");
		}
		else if( scrollTop < t8){
			guideNav.removeClass("current");
			guideNav.eq(6).addClass("current");
		}
		else{
			guideNav.removeClass("current");
			guideNav.eq(7).addClass("current");
		}*/
	})
		
});