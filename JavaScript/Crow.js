/*---------Inputs---------*/
jQuery(function($) {
    let maxVal;
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
    $('.m-input, .m-area').focus(function() {
        if ($(this).parent().find('span.m-counter') != null) {
            let parent = $(this).parent();
            let input = $(this);
            let counter = parent.find('span.m-counter');
            if (counter != null) {
                let valcount = input.val().length;
                maxVal = counter.attr('max-value');
                counter.attr('max-value', valcount + "/" + maxVal.replace(/['"]+/g, ''));
            }
        }
    })
    $('.m-input, .m-area').on("input", function(e) {
        if ($(this).parent().find('span.m-counter') != null) {
            if ($(this).data("lastval") != $(this).val()) {
                let counter = $(this).parent().find('span.m-counter');
                if (counter != null) {
                    let valcount = $(this).val().length;
                    if (valcount > maxVal) {
                        counter.addClass('error');
                    } else if (valcount <= maxVal) {
                        if (counter.is('.error')) { counter.removeClass('error'); }
                    }
                    counter.attr('max-value', valcount + "/" + maxVal.replace(/['"]+/g, ''));
                }
            };
        }
    })
    $('.m-input, .m-area').blur(function() {
        let parent = $(this).parent();
        let input = $(this);
        let counter = parent.find('span.m-counter');
        if (counter != null) { counter.attr('max-value', maxVal); }
    })
    $('.cr.chip').find('i').click(function() {
        let elem = $(this); //Tomo el icono 
        if (elem[0].innerText == "close") {
            let parent = $(this).parent();
            parent.css({
                'transition': "transform 0.4s ease-out",
                'transform': "scale(0)"
            });
            setTimeout(function() {
                $(parent).remove();
            }, 410);
        }
    })
    var finded = false;
    var lastPressed;
    $('.cr.list.content > li').click(function(e) {
        let parentUL = $(this).parent().find('li'); //Obtengo la UL padre de la lista a la cual doy click
        if ($(e.target).is($(this))) {
            parentUL.each(function(idx, li) {
                let item = $(li);
                if (item.is('.active')) {
                    item.find('.li.info').removeClass('show');
                    item.removeClass('active grow');
                    finded = true;
                    lastPressed = item;
                }
            });
            if (finded) {
                if (lastPressed.is($(this))) {
                    finded = false;
                } else {
                    $(this).addClass('active grow');
                    $(this).find('.li.info').addClass('show');
                    lastPressed = $(this);
                }
            } else {
                $(this).addClass('active grow');
                $(this).find('.li.info').addClass('show');
                lastPressed = $(this);
            }
        }
    })
    $('.cr.list > div.ul-head > i.close').click(function() {
        let parent = $(this).parent().parent();
        parent.css({
            'transition': "transform 0.4s ease-out",
            'transform': "scale(0)"
        });
        setTimeout(function() {
            $(parent).remove();
        }, 410);
    })
    $('.cr.list > li > i.close').click(function() {
        let ul = $(this).parent().parent();
        let li_arr = ul.find('li');
        let parent = $(this).parent();
        if (li_arr.length > 1) {
            parent.css({
                'transition': "transform 0.4s ease-out, opacity 0.3s ease-out",
                'transform': "translateX(-100px)",
                'opacity': "0"
            });
            setTimeout(function() {
                $(parent).remove();
            }, 410);
        } else if (li_arr.length == 1) {
            ul.css({
                'transition': "transform 0.4s ease-out",
                'transform': "scale(0)"
            });
            setTimeout(function() {
                $(ul).remove();
            }, 410);
        }
    })
    $('.m-input.validate.numbers, .m-area.validate.numbers').blur(function() {
        let value = $(this).val(); //Valor del input
        let spanClass = $(this).parent().find('span.m-state') // Tomo el id del field
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
        let spanClass = $(this).parent().find('span.m-state');
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
                    let elem = $("#" + formId + ">" + "span.m-state");
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
                    let elem = $("#" + formId + ">" + "span.m-state");
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
var overlay;
var iclose;
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

        $.fn.modal = function(action) {
            if (action == 'show') {
                if (!$(this).is('.opened')) {
                    $(this).addClass('opened');
                    $('body').append('<span id="crOverLay" class="overlay"></span>');
                    overlay = document.getElementById('crOverLay');
                }
                let icon = $(this).find('i');
                if (icon != null) {
                    let i = icon[0].innerText;
                    if (i == 'close') {
                        iclose = icon[0];
                    }
                }
            }
            if (action == 'hide') {
                if ($(this).is('.opened')) {
                    $(this).removeClass('opened');
                    $('#crOverLay').addClass('hide');
                    setTimeout(() => {
                        $('#crOverLay').remove();
                        overlay = null;
                    }, 310);
                }
            }
        }

        $.fn.loader = function(action, loadname, options) {
            if (action == 'show') {
                var settings = $.extend({
                    time: '3300',
                    color: '#4F4D4D',
                    background: '#FFFFFF',
                    dfloadercolor: '#4F4D4D'
                }, options);
                if (loadname == 'dots') {
                    $(this).append('<div class="cr loader screen dots">' +
                        '<div class="dot d1"></div>' +
                        '<div class="dot d2"></div>' +
                        '<div class="dot d3"></div>' +
                        '</div>' +
                        '<span id="crloadOverLay" class="load-overlay"></span>');
                    let loader = $('body').find('div.cr.loader > div.dot');
                    let overlay = $('body').find('span.load-overlay');
                    loader.css({
                        'background': settings.color
                    })
                    overlay.css({
                        'background': settings.background
                    })
                    setTimeout(function() {
                        loader.css({
                            'transition': "opacity 0.3s ease-out",
                            'opacity': "0"
                        })
                        overlay.addClass('hide');
                    }, settings.time);

                    setTimeout(function() {
                        $('div.cr.loader.screen').remove();
                        $('#crloadOverLay').remove();
                    }, (settings.time * 1 + 350));
                } else if (loadname == 'balls') {
                    $(this).append('<div class="cr loader screen balls"></div>');
                    $(this).append('<span id="crloadOverLay" class="load-overlay"></span>');

                    let loader = $('body').find('div.cr.loader.screen.balls');
                    let overlay = $('body').find('span.load-overlay');

                    overlay.css({
                        'background': settings.background
                    })
                    setTimeout(function() {
                        loader.css({
                            'transition': "opacity 0.3s ease-out",
                            'opacity': "0"
                        })
                        overlay.addClass('hide');
                    }, settings.time);

                    setTimeout(function() {
                        loader.remove();
                        $('#crloadOverLay').remove();
                    }, (settings.time * 1 + 350));
                } else if (loadname == 'bouncy') {
                    $(this).append('<div class="cr loader screen bouncy">'+'</div>')
                    $(this).append('<span class="load-overlay"></span>');
                    $(this).append('<div class="load-shadow"></div>');
                    let loader = $(this).find('.cr.loader.screen.bouncy');
                    let overlay = $(this).find('span.load-overlay');
                    let shadow = $(this).find('div.load-shadow');
                    overlay.css({
                        'background': settings.background
                    })

                    setTimeout(function() {
                        loader.css({
                            'transition': "opacity 0.3s ease-out",
                            'opacity': "0"
                        })
                        shadow.css({
                            'transition': "opacity 0.3s ease-out",
                            'opacity': "0"             
                        })
                        overlay.addClass('hide');
                    }, settings.time);

                    setTimeout(function() {
                        loader.remove();
                        shadow.remove();
                        overlay.remove();
                    }, (settings.time * 1 + 350));
                } else if (loadname == 'pulse') {
                    $(this).append('<div id="crLoadPulse" class="cr loader screen pulse"></div>');
                    $(this).append('<span id="crloadOverLay" class="load-overlay"></span');

                    let loader = $(this).find('#crLoadPulse');
                    let overlay = $(this).find('span.load-overlay');

                    loader.css({
                        'background': settings.color
                    })
                    overlay.css({
                        'background': settings.background
                    })
                    setTimeout(function() {
                        loader.css({
                            'transition': "opacity 0.3s ease-out",
                            'opacity': "0"
                        })
                        overlay.addClass('hide');
                    }, settings.time);

                    setTimeout(function() {
                        loader.remove();
                        $('#crloadOverLay').remove();
                    }, (settings.time * 1 + 350));
                } else if (loadname == 'default') {
                    $(this).append('<div id="crLoadCircular" class="cr loader screen circular"></div>');
                    $(this).append('<span id="crloadOverLay" class="load-overlay"></span');

                    let loader = $(this).find('#crLoadCircular');
                    let overlay = $(this).find('span.load-overlay');

                    loader.css({
                        'border-top-color': settings.dfloadercolor
                    })
                    overlay.css({
                        'background': settings.background
                    })
                    setTimeout(function() {
                        loader.css({
                            'transition': "opacity 0.3s ease-out",
                            'opacity': "0"
                        })
                        overlay.addClass('hide');
                    }, settings.time);

                    setTimeout(function() {
                        loader.remove();
                        $('#crloadOverLay').remove();
                    }, (settings.time * 1 + 350));
                }
            }
            if (action == 'quit') {
                let loader = $(this).find('div.cr.loader.screen')
                let overlay = $(this).find('span.load-overlay')
                loader.css({
                    'transition': "opacity 0.3s ease-out",
                    'opacity': "0"
                })
                overlay.addClass('hide');

                setTimeout(function() {
                    loader.remove();
                    overlay.remove();
                }, 350);
            }
        }

        $.fn.list = function(action, li_position) {
            if (action == 'hide') {
                $(this).css({
                    'transition': "transform 0.4s ease-out",
                    'transform': "scale(0)"
                })
            }
            if (action == 'show') {
                $(this).css({
                    'transition': "transform 0.4s ease-out",
                    'transform': "scale(1)"
                })
            }
            if (action == 'destroy') {
                if (li_position != null && li_position <= $(this).find('li').length && li_position > 0) {
                    let li = $(this).find("li:nth-child(" + (li_position + 1) + ')');
                    if (li != null) {
                        li.css({
                            'transition': "transform 0.4s ease-out, opacity 0.3s ease-out",
                            'opacity': "0",
                            'transform': "translateX(-100px)"
                        });
                        setTimeout(function() {
                            li.remove();
                        }, 410);
                    }
                } else {
                    $(this).css({
                        'transition': "transform 0.4s ease-out",
                        'transform': "scale(0)"
                    });
                    setTimeout(function() {
                        $(this).remove();
                    }, 410);
                }

            }
            if (action == 'checked') {
                let checks = 0,
                    arr_checked = [],
                    checkboxes = $(this).find('li > div.cr.checkbox > input[type="checkbox"]'),
                    checked_cbxs = {};

                checkboxes.each(function() {
                    if ($(this).is(':checked')) {
                        checks++;
                        arr_checked.push($(this).parent());
                    };
                });
                checked_cbxs = {
                    number: checks,
                    checkboxs: arr_checked
                }
                return checked_cbxs;
            }
        }

        $.fn.color = function(options) {
            let elem = $(this);
            var settings = $.extend({
                background: "#fafafa",
                font: "#4f4d4d",
                border: "#dedede",
                header: "#FFFFFF"
            }, options);
            if (elem.is('ul.cr.list')) {
                let li;
                let header = $(this).find('div.ul-head');
                let header_icon = header.find('i');
                if (header != null) {
                    header.css({
                        'transition': "background 0.3s ease-out, color 0.3s ease-out",
                        'background': settings.header,
                        'color': settings.font
                    })
                }
                if (header_icon != null)
                    header_icon.css({ 'color': settings.font + "!important" })

                li = elem.find('li');
                li.each(function() {
                    $(this).css({
                        'transition': "background 0.3s ease-out, color 0.3s ease-out",
                        'background': settings.background,
                        'color': settings.font,
                        'border-color': settings.border
                    })
                    $(this).find('.li.info').css({
                        'color': settings.font,
                        'background': settings.background
                    })
                    $(this).hover(
                        function() {
                            $(this).css({
                                'background': "darken(" + settings.background + ", 5)"
                            });
                            $(this).find('.li.info').css({
                                'background': "darken(" + settings.background + ", 5)"
                            });
                        }
                    );
                    if ($(this).find('i') != null)
                        $(this).css({ 'color': settings.font + "!important" })
                })
                return $(this).css();
            }
            if (elem.is('li')) {
                elem.css({
                    'transition': "background 0.3s ease-out, color 0.3s ease-out",
                    'background': settings.background,
                    'color': settings.font,
                    'border-color': settings.border
                })
                elem.find('.li.info').css({
                    'color': settings.font,
                    'background': settings.background
                })
            }
        }
    }(jQuery));
} catch (e) {}

window.onclick = function(e) {
    if (event.target == overlay) {
        $('.cr.modal').css({
            'transition': "transform 0.3s ease-out, opacity 0.3s ease-out",
            'transform': "scale(0) translateY(-580px)",
            'opacity': "0"
        })
        setTimeout(function() {
            $('.cr.modal').removeAttr('style');
            $('.cr.modal').removeClass('opened');
        }, 310);
        overlay.className += ' hide'

        setTimeout(() => {
            $('#crOverLay').remove();
        }, 310);
    }
    if (event.target == iclose) {
        $('.cr.modal').css({
            'transition': "transform 0.3s ease-out",
            'transform': "scale(0) translateY(-580px)"
        })
        setTimeout(function() {
            $('.cr.modal').removeAttr('style');
            $('.cr.modal').removeClass('opened');
        }, 310);
        overlay.className += ' hide'

        setTimeout(() => {
            $('#crOverLay').remove();
        }, 310);
    }
}