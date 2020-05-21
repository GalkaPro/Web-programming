$(document).ready(function () {
	$('span.pq').each(function () {
	var quote=$(this).clone();
	quote.removeClass('pq');
	quote.addClass('pullquote');
	$(this).before(quote);
	}); //end each
	}); //end ready