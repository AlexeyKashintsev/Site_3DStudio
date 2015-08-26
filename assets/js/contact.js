(function($){

	$(document).ready(function() {

		/* ---------------------------------------------- /*
		 * Contact form ajax
		/* ---------------------------------------------- */
		
		$('#contact-form').find('input,textarea').jqBootstrapValidation({
			preventSubmit: true,
			submitError: function($form, event, errors) {
				// additional error messages or events
			},
			submitSuccess: function($form, event) {
				event.preventDefault();

				var submit          = $('#contact-form submit');
				var ajaxResponse    = $('#contact-response');

				var name            = $("input#cname").val();
				var email           = $("input#cemail").val();
				var message         = $("textarea#cmessage").val();
				var phone	    = $("input#phonenum").val();
				
				$.ajax({
					type: 'POST',
					url: 'assets/php/contact.php',
					dataType: 'json',
					data: {
						phone: phone,
						utm: getUTM()
					},
					cache: false,
					beforeSend: function(result) {
						submit.empty();
						submit.append('<i class="fa fa-cog fa-spin"></i> Wait...');
					},
					success: function(result) {
						if(result.sendstatus == 1) {
							ajaxResponse.html(result.message);
							$form.fadeOut(500);
						} else {
							ajaxResponse.html(result.message);
						}
					}
				});
			}
		});

	});
	
	/* ---------------------------------------------- /*
	 * Subscribe form ajax
	/* ---------------------------------------------- */

		$('#subscription-form').submit(function(e) {

			e.preventDefault();
			var $form           = $('#subscription-form');
			var submit          = $('#subscription-form submit');
			var ajaxResponse    = $('#subscription-response');
			var phone           = $('input#sphone').val();
			var data = {};
			
			for (var j in urlObj.parameters) {
				data[j] = urlObj.parameters[j];
			}
			
			data.phone = phone

			$.ajax({
				type: 'POST',
				url: 'assets/php/contact.php',
				dataType: 'json',
				data: data,
				cache: false,
				beforeSend: function(result) {
					submit.empty();
					submit.append('<i class="fa fa-cog fa-spin"></i> Wait...');
				},
				success: function(result) {
					if(result.sendstatus == 1) {
						ajaxResponse.html(result.message);
						$form.fadeOut(500);
					} else {
						ajaxResponse.html(result.message);
					}
				}
			});

		});

})(jQuery);