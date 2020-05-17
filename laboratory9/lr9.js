var angle = 0;
function galleryspin(sign) {
    spinner = document.querySelector("#spinner");
    if (!sign) { angle = angle + 51.4; }
        else { angle = angle - 51.4; }
    spinner.setAttribute("style","-webkit-transform: rotateY("+ angle +"deg); -moz-transform: rotateY("+ angle +"deg); transform: rotateY("+ angle +"deg);");
}

$(document).ready(function () {
    $('span.pq').each(function () {
        var quote=$(this).clone();
        quote.removeClass('pq');
        quote.addClass('pullquote');
        $(this).before(quote);
    }); //end each
}); //end ready