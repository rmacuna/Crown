/*---------Inputs---------*/
jQuery(function($) {

    $('.m-input').focus(function() {
        $(this).parent().addClass('is-focused has-label');
    })

    $('.m-input.validate.numbers').blur(function() {
        let value = $(this).val(); //Valor del input
        let spanClass = $(this).parent().find('span')// Tomo el id del field
        let className = $(this).attr('class'); // Tomo la clase 
        let elem = $(spanClass);
        //Valido que no se agrege ninguna de las clases de validación como email o letras nada mas
        if (className.search('email') == -1) {
            if (value.length > 0) {
                if (!$.isNumeric(value)) {
                    if (elem.is('.done')) {
                        elem.removeClass('done');
                    }
                    elem.addClass('error');
                    elem.addClass('show');
                } else {
                    if (elem.is('.error')) {
                        elem.removeClass('error');
                    }
                    if (!elem.is('.done')) {
                        elem.addClass('done');
                        if (!elem.is('.show')) {
                            elem.addClass('show');
                        }
                    }
                }
            } else {
                if (elem.is('.done')) {
                    elem.removeClass('done');
                    elem.removeClass('show');
                } else if (elem.is('.error')) {
                    elem.removeClass('error');
                    elem.removeClass('show');
                }
            }
        }
    })

    $('.m-input.validate.email').blur(function() {
        let value = $(this).val();
        let spanClass = $(this).parent().find('span');
        let className = $(this).parent().attr('class');
        let elem = $(spanClass);
        let re = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
        if (className.search('.numbers') == -1) {
            if (value.length > 0) {
                if (!re.test(value.trim())) {
                    if (elem.is('.done')) { elem.removeClass('done'); }
                    if (!elem.is('.error')) {
                        elem.addClass('error');
                        elem.addClass('show');
                    }
                } else {
                    if (elem.is('.error')) {
                        elem.removeClass('error');
                    }
                    if (!elem.is('.done')) {
                        elem.addClass('done');
                    }
                    elem.addClass('show');

                }
            } else {
                if (elem.is('.done')) {
                    elem.removeClass('done');
                    elem.removeClass('show');
                } else if (elem.is('.error')) {
                    elem.removeClass('error');
                    elem.removeClass('show');
                }
            }
        }
    })


    $("form").submit(function() {
        var valid = true;
        $('input').each(function() {
            let hasValidation = $(this).is('.validate');
            // Pregunta si se uso la validacion de Crown
            if (hasValidation) {
                if ($(this).is('.email')) {
                    let value = $(this).val();
                    let formId = $(this).parent().attr('id');
                    let elem = $("#" + formId + ">" + "span");
                    let re = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
                    if ($(this).parent().attr('class').search('.numbers') == -1) {
                        if (!re.test(value.trim())) {
                            valid = false;
                        } else {
                            valid = true;
                        }
                    }else{
                        valid = true;
                    }
                } else if ($(this).is('.numbers')) {
                    let value = $(this).val(); //Valor del input
                    let formId = $(this).parent().attr('id'); // Tomo el id del field
                    let elem = $("#" + formId + ">" + "span");
                    // Tomo la clase 
                    //Valido que no se agrege ninguna de las clases de validación como email o letras nada mas
                    if ($(this).attr('class').search('email') == -1) {
                        if (!$.isNumeric(value)) {
                            valid = false;
                        } else {
                            valid = true;
                        }
                    }else{
                        valid = true;
                    }
                }
            }
        });
        return valid;
    })
    
    $('.m-input').blur(function() {
        $parent = $(this).parent();
        if ($(this).val() == '') {
            $parent.removeClass('has-label');
        }
        $parent.removeClass('is-focused');
    })
})