$(document).ready(function() {

	var mainElement = $("#main");

// this diplays the tweet button

	$('textarea').on("click", function(){
		$(this).css("height", "170px");
		$('#tweet-controls').css("display", "block");

	});

//this diplays main element on click - slide toggle.

	$('#tweet-submit').click(function () {
    $(mainElement).slideToggle({
      direction: "up"}, 400);
  	}); // end click


// all my code for things that happen when typing!
  var max = 140;
  $('.tweet-compose').on('keydown', function() {
  	var len = $('.tweet-compose').val().length;
  	var remaining = max - len;
  	$('#char-count').html(remaining);

  	if (remaining <= 10){
  		$('#char-count').css('color', 'red');
  	}
  	else {
  		$('#char-count').css('color', '#999');
  	}

  	if(remaining <=0){
		$('#tweet-submit').prop( "disabled", true );
    } else {
    	$('#tweet-submit').prop( "disabled", false );
	}

  });
// step one: on click - get text and save to variable
	$('#tweet-submit').on("click", function() {
		console.log('eadf');
		var input = $('#tweet-content .tweet-compose').val();
	
		// second - create a new div and add text to new div
		var newTweet = $("#stream").children().first().clone();
		newTweet.find("p.tweet-text").text(input);

		$('#stream').prepend(newTweet);

	});



});
