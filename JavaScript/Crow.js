
/*---------Inputs---------*/
jQuery(function($){

	$('.m-input').focus(function(){
		$(this).parent().addClass('is-focused has-label');
	})

	$('.validate.numbers').on('input', function (e) {
		var value = $('.validate.numbers').val();
		if (!$.isNumeric(value)) {
			console.log('not')
		}
		if (value.length == 0) {
			console.log('Empty')
		}
	})

	$('.m-input').blur(function(){
		$parent = $(this).parent();
		if ($(this).val() == '') {
			$parent.removeClass('has-label');
		}
		$parent.removeClass('is-focused');
	})
})