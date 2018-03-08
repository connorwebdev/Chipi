/*
 * Lazy Line Painter - Path Object 
 * Generated using 'SVG to Lazy Line Converter'
 * 
 * http://lazylinepainter.info 
 * Copyright 2013, Cam O'Connell  
 *  
 */ 

 (function( $ ){

 	$(document).ready(function(){

 		var $logo = $('#logo');
 		
 		
 		$(document).ready(function(){ 
 			$('#logo').lazylinepainter( 
 			{
 				"svgData": logoSvgData,
 				"strokeWidth": 2,
 				"strokeColor": "#e09b99"
 			}).lazylinepainter('paint'); 
 		});

 		$logo.lazylinepainter({
 			'svgData': logoSvgData,
 			'strokeWidth': 7,
 			'strokeColor': '#b5287b',
 			'drawSequential': false,
 			'ease': 'easeInOutQuad'
 		});

 		setTimeout(function(){
 			$logo.lazylinepainter('paint');
 		}, 10)
 	})

 })( jQuery );

