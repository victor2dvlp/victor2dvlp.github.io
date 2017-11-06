$(document).ready(function(){
	

	var progress_circle_1 = $('.my-progress-bar-1');
	var progress_circle_2 = $('.my-progress-bar-2');
	var progress_circle_3 = $('.my-progress-bar-3');
	var progress_circle_4 = $('.my-progress-bar-4');
	var i1 = 0, i2 = 0, i3 = 0, i4 = 0;
	function myStart(){
		
	}
	
	$(window).scroll(function(){
		if( $('.my-progress-bar-1')[0].getBoundingClientRect().top < 600 && i1 == 0){
			progress_circle_1.circularProgress({
								height: "200px",
								width: "200px",
								line_width: 7,
								color: "#00a8ef",
								clockwise: true,
								starting_position: 0,
								percent: 2,
								percentage: true
							}).circularProgress('animate', 77, 2000);
			i1 = 1;
		
		}
		if( $('.my-progress-bar-2')[0].getBoundingClientRect().top < 600 && i2 == 0){
			progress_circle_2.circularProgress({
								height: "200px",
								width: "200px",
								line_width: 7,
								color: "#00a8ef",
								clockwise: true,
								starting_position: 0,
								percent: 2,
								percentage: true
							}).circularProgress('animate', 96, 3000);
			i2 = 1;

		}
		if( $('.my-progress-bar-3')[0].getBoundingClientRect().top < 600 && i3 == 0){
			progress_circle_3.circularProgress({
								height: "200px",
								width: "200px",
								line_width: 7,
								color: "#00a8ef",
								clockwise: true,
								starting_position: 0,
								percent: 2,
								percentage: true
							}).circularProgress('animate', 31, 1000);
			i3 = 1;

		}
		if( $('.my-progress-bar-4')[0].getBoundingClientRect().top < 600 && i4 == 0){
			progress_circle_4.circularProgress({
								height: "200px",
								width: "200px",
								line_width: 7,
								color: "#00a8ef",
								clockwise: true,
								starting_position: 0,
								percent: 2,
								percentage: true
							}).circularProgress('animate', 54, 2000);
			i4 = 1;
		}
	});
});

