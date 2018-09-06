$(document).ready(function(){
	$('.nav_menu').click(function(){
		$('.top_bar_mob').hide(800)
		$('.mob_nav').show(800)
		$('.mob_zg').show()
	})
	$('.close_mob_nav').click(function(){
		$('.top_bar_mob').show(800)
		$('.mob_nav').hide(800)
		$('.mob_zg').hide()
	})
	$('.mob_zg').click(function(){
		$('.top_bar_mob').show(800)
		$('.mob_nav').hide(800)
		$('.mob_zg').hide()
	})
    
});
