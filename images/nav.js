// JavaScript Document
$(function(){
	//
	//top_bar动画
	//
	function topMove(){
		var stat = 1,
			topBar = $(".top_bar"),
			topFixed = $(".top_fixed");
		$(window).scroll(function (){
			if($(window).scrollTop()>= 180){
				if(stat==1){
					stat = 2;
					topFixed.animate({
						top:0
					},800)
					topBar.css("display","none")
					/*topBar.animate({
						top:-120
					},30)*/
					
				}
			}else{
				if(stat==2){
					stat = 1;
					topFixed.animate({
						top:-96
					},500,function(){
						topBar.fadeIn();
						/*topBar.animate({
							top:0
						},800)*/					
					})
				}			
			}
			
		})		
	}
    topMove();
	
	
	//
	//search 动画
	//
	var stadius = 1;
	$(".sear_btn").mouseenter(function(e) {
		$(".sear_bg").animate({
			width:'110px'
		},1000); 
    })
	function moveHidden(){
		$(".sear_bg").animate({
			width:'0px'
		},1000);        		
	}
		
	$(".sear_bg").focus(function(){
		stadius = 0;
	})
	
	$(".sear_bg").blur(function(){
		moveHidden();
		stadius = 1;
	})
	
	$(".search_box").mouseleave(function(ev){
		if(stadius==1){
			moveHidden();
		}
	})
	
	//
	//中英文切换
	//
	var curLang = $(".langwitch .langtext").text();
	
	$(".langwitch").mouseover(function(){
		curLang = $(".langwitch .langtext").text();
		$(this).find(".langlist").animate({height:22},300);
		$(this).find("a").addClass("active");
	})
	
	$(".langwitch").mouseleave(function(){
		$(this).find(".langlist").animate({height:0},200);
		$(this).find("a").removeClass("active");
	})
	
	// $(".langlist").click(function(){
	// 	var changeLang = $(this).text();
	// 	$(".langwitch .langtext").text(changeLang);
	// 	$(this).text(curLang);
	// })
		
})