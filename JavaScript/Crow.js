/*---------Inputs---------*/
jQuery(function($) {
    $('.m-input, .m-area').focus(function() {
        $(this).parent().addClass('is-focused has-label');
    })
    $('.markable').blur(function() {
        if (!$(this).parent().is('.cr-material-field')) {
            let value = $(this).val();
            let input = $(this).parent().find('input');
            if (value.trim().length > 0) {
                input.addClass('has-text');
            } else {
                input.removeClass('has-text');
            }
        }
    })
    $('.in-basic.validate, .in-label.validate').blur(function() {
        let value = $(this).val();
        let span_elem = $(this).parent().find('span');
        if ($(this).is('.numbers')) {
            if (value.length > 0) {
                if (span_elem.attr('class').search('email') == -1) {
                    if (!$.isNumeric(value)) {
                        if (span_elem.is('.done')) {
                            span_elem.removeClass('done');
                        }
                        if (!$(this).is('.error')) {
                            $(this).addClass('error'); //Añado la clae error al input
                            span_elem.addClass('error');
                        }
                    } else {
                        if ($(this).is('.error')) {
                            span_elem.removeClass('error');
                            $(this).removeClass('error');
                        }
                        if (!span_elem.is('done')) {
                            span_elem.addClass('done');
                        }
                    }
                }
            } else {
                if (span_elem.is('.done')) {
                    span_elem.removeClass('done');
                } else if (span_elem.is('.error')) {
                    $(this).removeClass('error');
                    span_elem.removeClass('error');
                }
            }
        } else if ($(this).is('.email')) {
            let value = $(this).val();
            let re = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
            let span_elem = $(this).parent().find('span');
            if (value.length > 0) {
                if (span_elem.attr('class').search('numbers') == -1) {
                    if (!re.test(value.trim())) {
                        if (span_elem.is('.done')) {
                            span_elem.removeClass('done');
                        }
                        if (!span_elem.is('.error')) {
                            $(this).addClass('error');
                            span_elem.addClass('error');
                        }
                    } else {
                        if ($(this).is('.error')) {
                            span_elem.removeClass('error');
                            $(this).removeClass('error');
                        }
                        if (!span_elem.is('.done')) {
                            span_elem.addClass('done');
                        }
                    }
                }
            } else {
                if (span_elem.is('.done')) {
                    span_elem.removeClass('done');
                } else if ($(this).is('.error')) {
                    span_elem.removeClass('error');
                    $(this).removeClass('error');
                }
            }
        }
    })
    $('.m-input.validate.numbers, .m-area.validate.numbers').blur(function() {
        let value = $(this).val(); //Valor del input
        let spanClass = $(this).parent().find('span') // Tomo el id del field
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
    $('.m-input.validate.email, .m-area.validate.email').blur(function() {
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
        $('input, textarea').each(function() {
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
                    } else {
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
                    } else {
                        valid = true;
                    }
                }
            }
        });
        return valid;
    })
    $('.m-input, .m-area').blur(function() {
        $parent = $(this).parent();
        if ($(this).val() == '') {
            $parent.removeClass('has-label');
        }
        $parent.removeClass('is-focused');
    })
    $("div.cr.button.pulse, button.cr.button.pulse").click(function(e) {
        $('.ripple').remove();

        let posX = $(this).offset().left,
            posY = $(this).offset().top,
            btn_width = $(this).width(),
            btn_height = $(this).height();

        $(this).prepend("<span class='ripple'></span>");


        if (btn_width >= btn_height) {
            btn_height = btn_width;
        } else {
            btn_width = btn_height;
        }

        let x = e.pageX - posX - btn_width / 2;
        let y = e.pageY - posY - btn_height / 2;


        $(".ripple").css({
            width: btn_width,
            height: btn_height,
            top: y + 'px',
            left: x + 'px'
        }).addClass("ripple-active");
    })
})
var statePressed = false;
try {
    (function($) {
        $.fn.snackbar = function(action, message, delay) {
            let snack = $(this);
            let btnUndo = $(this).find('.snack.action.undo');

            let timeFadeOut;
            let timeOut;

            if (delay != null) {
                timeFadeOut = delay;
                timeOut = (delay + 500);
            } else {
                timeFadeOut = 2500;
                timeOut = 3000;
            }
            if (statePressed == false) {
                if (btnUndo) {
                    btnUndo.click(function() {
                        snack.fadeOut();
                    })
                }
                if ($(this).is('.cr.snackbar')) {
                    if (action == "show") {
                        statePressed = true;
                        if (message.length != null) {
                            $(this).find('.snack-message').html("").prepend(message);
                        }
                        setTimeout(() => {
                            $(this).fadeOut();
                        }, timeFadeOut);

                        setTimeout(() => {
                            $(this).removeAttr('style');
                            statePressed = false;
                        }, timeOut);

                        return this.css({
                            'visibility': "visible",
                            'animation': "fadein 0.3s",
                            '-o-animation': "fadein 0.3s",
                            '-moz-animation': "fadein 0.3s",
                            '-webkit-animation': "fadein 0.3s"
                        });
                    }
                    if (action == "destroy") {
                        $(this).fadeOut();
                        $(this).removeAttr('style');
                    }
                }
            }
        };
        //Card feature 
        $.fn.feature = function(action) {
            if (action == 'off') {
                this.css({
                    "pointer-events": 'none'
                });
            }
            if (action == 'on') {
                this.css({
                    "pointer-events": 'auto'
                });
            }
        };

        $.fn.valMessage = function(action, data_value) {
            if (action == "show") {
                if (data_value == "positive") {
                    if ($(this).is('.error.show')) {
                        $(this).removeClass('error show')
                    }
                    $(this).addClass('done show');
                }
                if (data_value == "error") {
                    if ($(this).is('.positive.show')) {
                        $(this).removeClass('error show')
                    }
                    $(this).addClass('error show');
                }
            }
            if (action == "hide") {
                if ($(this.is('.show'))) {
                    if ($(this).is('.done')) {
                        $(this).removeClass('done show');
                    } else {
                        $(this).removeClass('error show');
                    }
                }
            }
        }

    }(jQuery));
} catch (e) {}