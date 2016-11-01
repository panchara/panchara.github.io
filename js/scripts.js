$( document ).ready(function() {

    console.log( "Page loaded." );

     $.scrollify({section : ".survey-question"});

	$('.survey-question-content input[type="radio"], .survey-question-content select').change(function(){

		// grab the target element
		var el = $(this).parents('.survey-question').next('.survey-question');


		// Make sure targeting element exists, avoid errors.
		if(el.length){
	    	$.scrollify.next();
		}

	});

});
