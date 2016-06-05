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
	
	var map = L.map( 'map', {
    center: [47.6135934, -122.3443024],
    minZoom: 5,
    zoom: 13
	});
	
	var osmUrl='http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
	var osmAttrib='Map data © <a href="http://openstreetmap.org">OpenStreetMap</a> contributors';
	var osm = new L.TileLayer(osmUrl, {minZoom: 8, maxZoom: 18, attribution: osmAttrib});

	var satLayer = L.tileLayer( 'http://{s}.mqcdn.com/tiles/1.0.0/sat/{z}/{x}/{y}.png', {
    	attribution: '&copy; <a href="http://osm.org/copyright" title="OpenStreetMap" target="_blank">OpenStreetMap</a> contributors | Tiles Courtesy of <a href="http://www.mapquest.com/" title="MapQuest" target="_blank">MapQuest</a> <img src="http://developer.mapquest.com/content/osm/mq_logo.png" width="16" height="16">',
    	subdomains: ['otile1','otile2','otile3','otile4']
	});

	var drawLayer = L.tileLayer( 'http://{s}.mqcdn.com/tiles/1.0.0/osm/{z}/{x}/{y}.png', {
    	attribution: '&copy; <a href="http://osm.org/copyright" title="OpenStreetMap" target="_blank">OpenStreetMap</a> contributors | Tiles Courtesy of <a href="http://www.mapquest.com/" title="MapQuest" target="_blank">MapQuest</a> <img src="http://developer.mapquest.com/content/osm/mq_logo.png" width="16" height="16">',
    	subdomains: ['otile1','otile2','otile3','otile4']
});

	var mapLayers = {
    	"Map View": drawLayer,
		"Satellite": satLayer,
    	"Open Street Maps": osm
};
	
	L.control.layers(mapLayers).addTo(map);
	satLayer.addTo(map);
	
	var marker = L.marker([47.6135934, -122.3443024]).addTo(map);
	marker.bindPopup("<b>Welcome to The Crocodile!</b><br>Est. 1991.");
	
	var marker = L.marker([47.6085655, -122.3393417]).addTo(map);
	marker.bindPopup("<b>Welcome to The Showbox Market!</b><br>Est. 1939.");
	
	var marker = L.marker([47.6132851, -122.3313795]).addTo(map);
	marker.bindPopup("<b>Welcome to The Paramount Theatre!</b><br>Est. 1928.");
	
}); 