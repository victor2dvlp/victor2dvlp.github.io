$( '.next' ).click(function(){
		var currentImage = $('.img.curry'),
		currentImageIndex = currentImage.index(),
		nextImageIndex = $('.img.curry').index() + 1,
		nextImage = $('.img').eq(nextImageIndex);

		currentImage.fadeOut(1000);
		currentImage.removeClass('curry');
		

		if(nextImageIndex == ( $('.img:last').index() + 1 ) ){
			$('.img').eq(0).fadeIn(1000);
			$('.img').eq(0).addClass('curry');
			
		} else {
			nextImage.fadeIn(1000);
			nextImage.addClass('curry');
			
		}
	});
	$('.prev').click( function(){
		var currentImage = $('.img.curry'),
		currentImageIndex = currentImage.index(),
		prevImageIndex = $('.img.curry').index() - 1,
		prevImage = $('.img').eq(prevImageIndex);

		currentImage.fadeOut(1000);
		currentImage.removeClass('curry');

		console.log('current: ' + currentImageIndex + ' prev: ' + prevImageIndex);

		if(prevImageIndex == -1 ) {
			$('.img:last').eq(0).fadeIn(1000);
			$('.img:last').eq(0).addClass('curry');
			console.log('last: if = true');
		} 
		else {
			prevImage.fadeIn(1200);
			prevImage.addClass('curry');
			console.log('last: if = false');
		}
	} );

	$('.easy-carousel .owl-carousel').owlCarousel({
		loop: true,
		center: true,
		margin: 50,
		stagePadding: 30,
		autoPlay: true,
		autoplayTimeOut: 1000,
		smartSpeed: 1000,
	
		responsive: {
			0: {
				items: 1,
				touchDrag: true,
				mouseDrag: false
			},
			640: {
				items: 2,
				touchDrag: false,
				mouseDrag: true
			},
			1280: {
				items: 3,
				touchDrag: false,
				mouseDrag: true
			}
		}
	});
//===================owl carousel custom===================================