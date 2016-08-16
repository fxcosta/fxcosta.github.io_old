/**
 * Created by fabiomadeira on 25/02/15.
 */
// jQuery for page scrolling feature
jQuery(document).ready(function(e) {
	e(".scroll").click(function(t) {
		t.preventDefault();
		e("html,body").animate({
			scrollTop: e(this.hash).offset().top
		}, 1e3)
	})
});

$.fn.extend({
	animateCss: function (animationName) {
		var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
		$(this).addClass('animated ' + animationName).one(animationEnd, function() {
			$(this).removeClass('animated ' + animationName);
		});
	}
});

$("#avatar-container > img").hover(function(e) {
	$('#avatar-container').removeClass('fadeInDown');
	$('#avatar-container').toggleClass('infinite pulse');
});


