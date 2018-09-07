$(document).ready(function(){
	$('.nav_menu').click(function(){
		$('.top_bar_mob').slideUp(800)
		$('.mob_nav').slideDown(800)
		$('.mob_zg').show()
	})
	$('.close_mob_nav').click(function(){
		$('.top_bar_mob').slideDown(800)
		$('.mob_nav').slideUp(800)
		$('.mob_zg').hide()
	})
	$('.mob_zg').click(function(){
		$('.top_bar_mob').slideDown(800)
		$('.mob_nav').slideUp(800)
		$('.mob_zg').hide()
	})
    
});
