			// Submit the form using AJAX.
			$.ajax({
				type: 'POST',
				url: $('#subForm').attr('action'),
				data: formData
			})
			.done(function() {
				// Make sure that the formMessages div has the 'success' class.
				// Set the message text.
				$('#form-message').text('Your Message was sent successfully!');
			})
			.fail(function(data) {
				// Set the message text.
				if (data.responseText !== '') {
					$('#form-message').text(data.responseText);
				} else {
					$('#form-message').text('Oops! An error occured and your message could not be sent.');
				}
			});
