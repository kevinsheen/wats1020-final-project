$(document).ready(function() {
	
	$(".menu-trigger").click(function() {
		
		$(".nav").slideToggle(400, function() {
			$(this).toggleClass("nav-expanded").css('display', '');
		});
	
	});



$('.view-details').on('click', function(event){ 
	   console.log(event);
	   var targetElement = event.target; 
	   var container = targetElement.parentElement.parentElement; 
	   $(container).find('.details').each(function(index, el){    
	      if ($(el).is(':visible')){
			  $(el).fadeOut();		
		console.log(event);
			  targetElement.innerText = "Find out more about 'em!";
		  } else {
			  $(el).fadeIn(); 
			  targetElement.innerText = "Take a hike, text.";
		  }
	   });
	});
	
}); 