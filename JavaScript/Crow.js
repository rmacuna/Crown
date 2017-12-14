/*---------Inputs---------*/
jQuery(function($) {

    $('.m-input').focus(function() {
        $(this).parent().addClass('is-focused has-label');
    })

    $('.validate.numbers').blur(function() {
        let value = $(this).val();
        let formId = $(this).parent().attr('id');
        let className = $(this).attr('class');
        let elem = $("#" + formId + ">" + "span");
        //Valido que no se agrege ninguna de las clases de validación como email o letras nada mas
        if (className.search('letters') == -1 && className.search('email') == -1)  {
            if (value.length > 0) {
                if (!$.isNumeric(value)) {
                	elem.addClass('error');
                    elem.addClass('show');
                } else {
                	elem.addClass('done');
                	if (elem.attr('class').search('show') == -1) {
                		elem.addClass('show');
                	}
                }
            } else {
                elem.removeClass('show');
            }
        }
    })

    $('.validate.letters').blur(function() {
        let value = $(this).val();
        let formId = $(this).parent().attr('id');
        let className = $(this).parent().attr('class');
        let elem =  $("#" + formId + ">" + "span");
        if (className.search('numbers') == -1 && className.search('email') == -1) {
        	if (value.length > 0) {
        		if ($.isNumeric(value)) {
        			elem.addClass('error');
        			elem.addClass('show');
        		}else{
        			elem.addClass('done');
        			if (elem.attr('class').search('show') == -1) {
        				elem.addClass('show');
        			}
        		}
        	}else{
        		elem.removeClass('show');
        	}
        }
    })

    $('.m-input').blur(function() {
        $parent = $(this).parent();
        if ($(this).val() == '') {
            $parent.removeClass('has-label');
        }
        $parent.removeClass('is-focused');
    })
})