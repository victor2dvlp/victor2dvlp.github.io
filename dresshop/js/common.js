$(document).ready(function(){
	var baner = $('.carousel-baner'), 
		products = $('.owl-products');
	baner.owlCarousel({
		loop: false,
		center: true,
		items: 1,
		dots: true
	});
	products.owlCarousel({
		loop: false,
		//center: true,
		items: 3,
		dots: false,
		nav: true,
		navText: ['<img src=\"img/arrow.png\" alt=\"left\">', '<img src=\"img/arrow.png\" alt=\"right\">' ],
		responsive: {
			0: {
				items: 1
			},
			640: {
				items: 1
			},
			768: {
				items: 1
			},
			800: {
				items: 3
			}
		}
	});

	$('.trig-menu').on('click', function() {
		$('nav ul').slideToggle(700);
	});
	var k = 0;
	$(window).scroll(function(){

		//console.log('top distance: ' + $('.featured-products')[0].getBoundingClientRect().top + ' k=' + k);
		if( $('.featured-products')[0].getBoundingClientRect().top < 400 && k == 0) {
			$.each( $('.featured-products .item'), function(i, el){
				k = 1;
				setTimeout(function(){
					$(el).css('animation', 'slideUp 1.2s');
					setTimeout(function(){
						$(el).css({'opacity': '1', 'transform': 'translateY(0)'});
					}, 500);
					console.log('element #' + i + ' ready');
				}, (200 + i * 200) );
			});	
			
		}
		
	});
});
