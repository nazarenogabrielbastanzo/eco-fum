// let h2Elems = document.querySelectorAll('h2');

// for (let h2Elem of h2Elems) {
//     h2Elem.textContent = (h2Elem.textContent).toUpperCase();
// }

$(function() {
    let h2Elems = $('h2');
    for (let h2Elem of h2Elems) {
        h2Elem.textContent = (h2Elem.textContent).toUpperCase();
    }

    $('.go-up').click(function(){
		$('body, html').animate({
			scrollTop: '0px'
		}, 300);
	});

	$(window).scroll(function(){
		if( $(this).scrollTop() > 0 ){
			$('.go-up').slideDown(300);
		} else {
			$('.go-up').slideUp(300);
		}
	});
});