$(window).on('load', function() {
	$('#preloader').delay(2500).fadeOut('slow');
	$('.dws-progress-bar').delay(2500).fadeOut('fast');
});
var n = 0;
$(document).ready( function() {
	$(window).scroll(function(){
	if( window.innerHeight - $('.winds')[0].getBoundingClientRect().top > 200 ){
			$('.winds').animate({'margin-left': '0', 'opacity': '1'}, 1000);
			$('.winds').css({'animation': 'spinn .4s', 'animation-iteration-count': '2'});
			$('.itunes').animate({'opacity': '1'}, 1000);
			$('.android').delay(1500).animate({'opacity': '1', 'top': '50%'}, 1000);

	};

	if( window.innerHeight - $('iframe')[0].getBoundingClientRect().top > 200 && n == 0 ){
			$('iframe').delay(500).animate({'left': '0'}, 200);
			setTimeout(function() {
				$('iframe').css('transform', 'rotate3d(2, 8, 1, 20deg)');
				n = 1;
			}, 2000);
			
	};
	
});
$(window).on('blur', function(){
	$('iframe').css({'transform': 'rotate3d(2, 8, 1, 0deg)', 'left': '0', 'transition': 'all .5s'});
	console.log('frame click');
});

//========================preloader========================================
$('.dws-progress-bar').circularProgress({
	color: '#2af7eb',
	line_width: 20,
	height: '350px',
	width: '350px',
	percent: 0,
	starting_position: 10
}).circularProgress('animate', 100, 2000);
//=========================end preloader ==================================
$('.begining button').css({'opacity': '0', 'margin-top': '40vh'});
// begining
$('.begining p').delay(5000)
	.css({ 'animation-name': 'slideInLeft', 
						'animation-duration': '.7s' })
	.fadeIn('slow');
setTimeout(function(){
	setTimeout(function(){
		$('.begining button').css({'opacity': '1', 'margin-top': '10vh'});
		$('.begining button').css({ 'animation-name': 'shakeMy', 
						'animation-duration': '6s',
						'animation-time-function': 'ease-out',
						'animation-delay': '1s',
						'animation-iteration-count': 'infinite'
						 });
	setTimeout(function(){
		//$('.begining button').removeAttr('style');
		console.log('style deleting');
	}, 2500);
	}, 1500);
}, 5000);
$('.begining button').on('click', function(){
		$('.begining button').removeAttr('style');
		$('.begining button').css({ 'animation-name': 'bounceOut', 
						'animation-duration': '.5s' });
		setTimeout(function(){
	$('.begining button').removeAttr('style');
	$('.begining').fadeOut('slow');
	$('.testing').delay(1000).fadeIn('slow');
	$('.instruct').fadeIn('slow');
	$('header').css('filter', 'blur(5px)');

}, 600);
});	

$('#info-ok').on('click', function(){
	$('#info-ok').css('transform', 'scale(.8)');
	setTimeout(function(){
		$('#info-ok').css('transform', 'scale(1)');
		$('.instruct').fadeOut(500);
		$('header').css('filter', 'blur(0)');
	}, 300);
	
	
});


//=========================================================================
var questions = [
'They swim', 
'Show me what you got!',
'Not big deal!',
'Do you have the ocasion?',
'See you soon!', 
'Can you belive it?',
'You are right',
'of course / sure',
'no way',
'It\'s very kind of you! '];
var answers = [
	['Вони плавають', 'Він плаває', 'Вона бігає', 'Вони читають'],
	['Те що в тебе є', 'Покажи на що ти здатен', 'Отримай це', 'У тебе це є'],
	['Велика угода', 'Я згоден', 'Нічого страшного!', 'Це велика справа'],
	['Ти маєш положення?', 'Чи є в тебе думка?', 'Як так сталось?', 'Чи маєш ти можливість?'],
	['Бачу твою вилку', 'До зустрічі!', 'Зверни увагу!', 'На мій погляд'],
	['Це можливо?', 'Це можливо?', 'Ти віриш йому?', 'Ти можеш в це повірити?'],
	['Ти правша', 'Твоє правило', 'Ви праві', 'Твоя думка'],
	['курси', 'Звичайно', 'про коней', 'погодження'],
	['нізащо', 'цукерки', 'в дорозі', 'немає часу'],
	['Я вражений', 'Я погоджуюсь!', 'Це дуже люб\'язно з вашої сторони!', 'Це частина тебе']
	];
var rightAnswer = [1, 2, 3, 4, 2, 4, 3, 2, 1, 3];
var i = 0;
var result = 0;

$('.question-text').text( questions[i] );
$('.btn-1').text(answers[i][0]);
$('.btn-2').text(answers[i][1]);
$('.btn-3').text(answers[i][2]);
$('.btn-4').text(answers[i][3]);

//=======================================================================
	$('button.btn-1').on('click', function(){
		var self = $(this), func = arguments.callee;
		self.unbind('click', func);
		if(rightAnswer[i] == 1){
			result++;
			console.log("clicked btn1. result: " + result + " i = " + i);
		}
		setTimeout(function(){
			self.on('click', func);
		}, 2700);

	});
	$('button.btn-2').on('click', function(){
		var self = $(this), func = arguments.callee;
		self.unbind('click', func);
		if(rightAnswer[i] == 2){
			result++;
			console.log("clicked btn1. result: " + result + " i = " + i);
		}
		setTimeout(function(){
			self.on('click', func);
		}, 2700);
	});
	$('button.btn-3').on('click', function(){
		var self = $(this), func = arguments.callee;
		self.unbind('click', func);
		if(rightAnswer[i] == 3){
			result++;
			console.log("clicked btn1. result: " + result + " i = " + i);
		}
		setTimeout(function(){
			self.on('click', func);
		}, 2700);
	});
	$('button.btn-4').on('click', function(){
		var self = $(this), func = arguments.callee;
		self.unbind('click', func);
		if(rightAnswer[i] == 4){
			result++;
			console.log("clicked btn1. result: " + result + " i = " + i);
		}
		setTimeout(function(){
			self.on('click', func);
		}, 2700);
	});

// Modal events============================================================
	$('#modal span').on('click', function(){

		$('#modal').fadeOut('fast');
		$('header').css('filter', 'blur(0)');
		$('.testing').fadeOut('slow');
		$('.aftertest').delay(1000).fadeIn('slow');
		setTimeout(function(){
			$('.aftertest-item').css('margin-top', '30vh');
		}, 1500);
		
		setTimeout(function(){
			$('.aftertest span').css('opacity', '1');
			setTimeout( function(){
				$('.aftertest span').css({'opacity': '0', 'margin-top': '40vh'});
				setTimeout(function(){
					$('.aftertest span').css({'opacity': '1', 'margin-top': '0'});
					$('.tolearn').fadeIn(300);
					setTimeout(function(){
						var destination = $('.tolearn').offset().top;
						$('html').animate({'scrollTop': destination}, 700);
						setTimeout(function(){
							$('header').hide();
						}, 800);

					} ,500);
				}, 2000);	
			}, 500);
		}, 3000);
	});
	$('#try-again').on('click', function(){
		$('header').css('filter', 'blur(0)');
		i = 0;
		result = 0;
		$('.question-text').text( questions[i] );
		$('.btn-1').text(answers[i][0]);
		$('.btn-2').text(answers[i][1]);
		$('.btn-3').text(answers[i][2]);
		$('.btn-4').text(answers[i][3]);
		$('#modal').fadeOut('fast');
		
	});
	$('#goahead').on('click', function(){
		$('#modal').fadeOut('fast');
		$('header').css('filter', 'blur(0)');
		$('.testing').fadeOut('slow');
		$('.aftertest').delay(1000).fadeIn('slow');
		setTimeout(function(){
			$('.aftertest-item').css('margin-top', '30vh');
		}, 1500);
		
		setTimeout(function(){
			$('.aftertest span').css('opacity', '1');
			setTimeout( function(){
				$('.aftertest span').css({'opacity': '0', 'margin-top': '40vh'});
				setTimeout(function(){
					$('.aftertest span').css({'opacity': '1', 'margin-top': '0'});
					$('.tolearn').fadeIn(300);
					setTimeout(function(){
						var destination = $('.tolearn').offset().top;
						$('html').animate({'scrollTop': destination}, 700);
						setTimeout(function(){
							$('header').hide();
						}, 800);

					} ,500);
				}, 2000);	
			}, 500);
		}, 3000);
		
	});
//========================== END ==========================================

//=========================================================================
	$('.testing button').on('click', function(){

		var self = $('.testing button'), func = arguments.callee;
		self.unbind('click', func);

		console.log('btn click');
		$(this).css({ 'animation-name': 'rubberBand', 
						'animation-duration': '.5s',
						'background': '#11dce0',
						'transition': '.5s' });
		var btn = $(this);
		setTimeout(function() {
			btn.removeAttr('style');

		}, 2700);
		i++;
// End testing
		if( i >= questions.length ){
			setTimeout(function() {
			$('#result').text(result);
			$('#message-length').text(questions.length);
			$('header').css('filter', 'blur(5px)');
			$('#modal').fadeIn('slow');

		}, 500);
			
			
		} else {
//==========================================================================
			setTimeout( function(){
				$('button').css({ 'animation-name': 'zoomOut', 
						'animation-duration': '1.5s',
						'background': 'transparent'
					});
				$('.question').css({ 'animation-name': 'zoomOut', 
						'animation-duration': '1.5s'
					});
				
			}, 800);
			setTimeout( function(){
				$('.question-text').text( questions[i] );
				$('.btn-1').text(answers[i][0]);
				$('.btn-2').text(answers[i][1]);
				$('.btn-3').text(answers[i][2]);
				$('.btn-4').text(answers[i][3]);
				$('button').css({ 'animation-name': 'zoomIn', 
						'animation-duration': '.5s',
						'background': 'transparent'
					});
				$('.question').css({ 'animation-name': 'zoomIn', 
						'animation-duration': '.5s'
					});
			} ,2200);
			
			
			setTimeout(function() {
				$('button, .question').removeAttr('style');
			}, 2700);
//==========================================================================	
		}
		setTimeout(function(){
			self.on('click', func);
		}, 2700);
		
	});
} );


