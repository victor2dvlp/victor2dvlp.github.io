$(document).ready( function() {
	var headCarousel = $('.owl-boards').owlCarousel({
		items: 1,
		center: true,
		nav: true,
		navText: ['<span class=\"fa fa-arrow-left\"></span>', '<span class=\"fa fa-arrow-right\"></span>'],
		onInitialized: function(e) {
		    $('.counter').text('1 / ' + this.items().length)
		    console.log();
		}
	});
	var teamCarousel = $('.owl-carousel__team').owlCarousel({
		items: 4,
		nav: true,
		stagePadding: 10,
		navText: ['<span class=\"fa fa-arrow-left\"></span>', '<span class=\"fa fa-arrow-right\"></span>'],
		responsive: {
			0: {
				items: 1
			},
			700: {
				items: 2
			},
			800: {
				items: 3
			},
			900: {
				items: 4
			}
		}
	});
	headCarousel.on('changed.owl.carousel', function(e) {
	  $('.counter').text(++e.page.index  + ' / ' + e.page.count)
	});
	$('.img-tabs').on('click', 'img', function(){
		var src = $(this).attr('src');
		$(this).parent().parent().siblings('.item-view').children('img').attr('src', src);
	});
	$('.description ul').on('click', 'li', function(){
		var el_index = $(this).index(), 
				  el = $(this);
		el.parent().children('li').removeClass('checked');
		el.addClass('checked');
		el.parent().siblings('.tabs').children('p').css('opacity', '0');
		setTimeout(function(){
			el.parent().siblings('.tabs').children('p').eq(el_index).css('opacity', '1');
		},300);
	});
	$('.custom-navbar button').on('click', function() {
		$('.custom-collapse').slideToggle('slow');
	});
//*************  Stars *********************************************************
	$('.stars img').mouseover(function(){
		var el = $(this);

		el.attr({'src': 'img/star.png'});
		//el.parent().children('img').css('background', 'red');

		for(var i = 0; i <= $(this).index(); i++ ){
			el.parent().children('img')[i].setAttribute("src", "img/star.png");
		}
	});

	$('.stars img').mouseout(function(){
		var el = $(this);

		el.parent().children('img').attr({'src': 'img/Star_non_chacked.png'});

		el.parent().children('img').each(function(index){
			if( $(this).hasClass("selected") ){
				console.log('selected: ' + $(this).index());
				$(this).attr({'src': 'img/star.png'});
			}
		});
	});

	$('.stars img').on('click', function(){
		var el = $(this);
		
		el.parent().children('img').attr({'src': 'img/Star_non_chacked.png'});
		el.parent().children('img').removeClass("selected");
		for(var i = 0; i <= $(this).index(); i++ ){
			el.parent().children('img')[i].setAttribute("src", "img/star.png");
			el.parent().children('img')[i].setAttribute("class", "selected");
		}
	});
//******************************************************************************
} );