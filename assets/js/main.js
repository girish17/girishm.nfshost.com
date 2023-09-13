/*
	Intensify by TEMPLATED
	templated.co @templatedco
	Released for free under the Creative Commons Attribution 3.0 license (templated.co/license)
*/

(function($) {

	skel.breakpoints({
		xlarge:	'(max-width: 1680px)',
		large:	'(max-width: 1280px)',
		medium:	'(max-width: 980px)',
		small:	'(max-width: 736px)',
		xsmall:	'(max-width: 480px)'
	});

	$(function() {

		var	$window = $(window),
			$body = $('body'),
			$header = $('#header');

		// Disable animations/transitions until the page has loaded.
			$body.addClass('is-loading');

			$window.on('load', function() {
				window.setTimeout(function() {
					$body.removeClass('is-loading');
				}, 100);
			});

		// Fix: Placeholder polyfill.
			$('form').placeholder();

		// Prioritize "important" elements on medium.
			skel.on('+medium -medium', function() {
				$.prioritize(
					'.important\\28 medium\\29',
					skel.breakpoint('medium').active
				);
			});

		// Scrolly.
			$('.scrolly').scrolly({
				offset: function() {
					return $header.height();
				}
			});

		// Menu.
			$('#menu')
				.append('<a href="#menu" class="close"></a>')
				.appendTo($body)
				.panel({
					delay: 500,
					hideOnClick: true,
					hideOnSwipe: true,
					resetScroll: true,
					resetForms: true,
					side: 'right'
				});

		// Check local storage for the "darkTheme" key
		if (localStorage.getItem("darkTheme") === "true") {
			$('#dark-theme-checkbox').prop('checked', true);

			// Toggle label text
			let label = $('#dark-theme-checkbox-label');
			if ($(this).prop('checked')) {
				label.text('Light Mode');
			} else {
				label.text('Dark Mode');
			}

			$('body').addClass('dark');
			$('#header').addClass('dark');
			$('#footer').addClass('dark');
			$('#menu').addClass('dark');
		}

	    $('#dark-theme-checkbox').change(function() {
			$('.dark-theme-checkbox').toggleClass('checked');

			// Toggle label text
			let label = $('#dark-theme-checkbox-label');
			if ($(this).prop('checked')) {
				label.text('Light Mode');
			} else {
				label.text('Dark Mode');
			}

			$('body').toggleClass('dark');
			$('#header').toggleClass('dark');
			$('#footer').toggleClass('dark');
			$('#menu').toggleClass('dark');
			// Save the current state of the dark theme to local storage
			localStorage.setItem("darkTheme", $('#dark-theme-checkbox').prop('checked'));
	    });
	});

	$("#banner").click(function () {
		window.location.href = 'MyComputer.html';
	});
})(jQuery);
