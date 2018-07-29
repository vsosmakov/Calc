jQuery(window).load(function () {
    var goal = function ($el, goal, ns) {
        ns       = $.trim(ns) ? '_' + ns : '';
        var data = 'js-goal-initiated' + ns;
        
        if ($el.length && goal && ! $el.data(data)) {
            yaCounter29950729.reachGoal(goal);
            console.log(goal);
            $el.attr('data-' + data, true);
        }
    };
    
    var $doctors_slider = $('#doctors_slider__wrapper');
    
    if ($doctors_slider.length) {
        $doctors_slider.find('.doctors_slider__button').on('click', function () {
            goal($doctors_slider, 'm_ds_enroll_doctor', 'doctors_slider__button');
        });
        
        $doctors_slider.find('.doctors_slider__doctor-link').on('click', function () {
            goal($doctors_slider, 'm_ds_about_doctor', 'doctors_slider__doctor-link');
        });
    }
    
    var $italy = $('.allure-block-content_italy');
    
    if ($italy.length) {
        $italy.find('.allure-block__button').on('click', function () {
            goal($italy, 'm_banner_italy');
        });
    }
    
    var $offer = $('.offer');
    
    if ($offer.length) {
        $offer.find('.offer__button').on('click', function () {
            goal($offer, 'm_offer_banner_click_link');
        });
    }
    
    var $personal_calculation = $('.personal_calculation, .personal_calculation_imaged');
    
    if ($personal_calculation.length) {
        $personal_calculation.find('.personal_calculation__button').on('click', function () {
            goal($personal_calculation, 'm_personal_calculation');
        });
    }
    
    var $back_call = $('.back-call');
    
    if ($back_call.length) {
        $back_call.find('.nbutton').on('click', function () {
            goal($back_call, 'm_sidebar_click_link');
        });
    }
    
    var $sidebar__calculator = $('.sidebar__calculator');
    
    if ($sidebar__calculator.length) {
        $sidebar__calculator.on('click', function () {
            goal($sidebar__calculator, 'm_sidebar_calculator_click_link');
        });
    }
    
    var $banner_allon4 = $('.banner-allon4');
    
    if ($banner_allon4.length) {
        $banner_allon4.find('a').on('click', function () {
            goal($banner_allon4, 'm_sidebar_allon4_click_link﻿');
        });
    }
    
    var $allure_block = $('.allure-block');
    
    if ($allure_block.length) {
        $allure_block.find('.allure-block__button').on('click', function () {
            goal($allure_block, 'm_allure_block_click_link﻿');
        });
    }
    
    var $prices_to_service = $('.prices-to-service');
    
    if ($prices_to_service.length) {
        $prices_to_service.on('click', function () {
            goal($prices_to_service, 'm_prices_go_service');
        });
    }
    
    var $review_stomatologijasu = $('.review-stomatologijasu');
    
    if ($review_stomatologijasu.length) {
        $review_stomatologijasu.on('click', function () {
            goal($review_stomatologijasu, 'm_reviews_stomatologijasu');
        });
    }
    
    var $review_yandex = $('.review-yandex');
    
    if ($review_yandex.length) {
        $review_yandex.on('click', function () {
            goal($review_yandex, 'm_reviews_yandex');
        });
    }
    
    var $doctor_page_metro = $('.doctor-page-metro');
    
    if ($doctor_page_metro.length) {
        $doctor_page_metro.on('click', function () {
            goal($doctor_page_metro, 'm_doctor_page_metro');
        });
    }
    
    var $patient_stories = $('#patient_stories__slider__wrapper');
    
    if ($patient_stories.length) {
        $patient_stories.find('.patient_stories__doctor a').on('click', function () {
            goal($patient_stories, 'm_ps_doctor_link', 'patient_stories__doctor-a');
        });
        
        $patient_stories.find('.patient_stories__button').on('click', function () {
            goal($patient_stories, 'm_ps_treatment_history', 'patient_stories__button');
        });
    }
    
    function viewport() {
        var e = window, a = 'inner';
        
        if (! ('innerWidth' in window)) {
            a = 'client';
            e = document.documentElement || document.body;
        }
        
        return { width: e[a + 'Width'], height: e[a + 'Height'] };
    }
    
    function getStyles(element) {
        var style = element.style,
            ret   = {};
        
        for (var i = 0; i < style.length; ++ i) {
            var item  = style.item(i);
            ret[item] = style[item];
        }
        
        return ret;
    }
    
    // Calltouch
//    (function (w, d, e) {
//        var a = 'all', b = 'tou';
//        var src = b + 'c' + 'h';
//        src = 'm' + 'o' + 'd.c' + a + src;
//        var jsHost = (("https:" == d.location.protocol) ? "https://" : "http://") + src;
//        s = d.createElement(e);
//        p = d.getElementsByTagName(e)[0];
//        s.async = 1;
//        s.src = jsHost + "." + "r" + "u/d_client.js?param;ref" + escape(d.referrer) + ";url" + escape(d.URL) + ";cook" + escape(d.cookie) + ";";
//        if (!w.jQuery) {
//            jq = d.createElement(e);
//            jq.src = jsHost + "." + "r" + 'u/js/jquery-1.7.min.js';
//            p.parentNode.insertBefore(jq, p);
//        }
//        p.parentNode.insertBefore(s, p);
//    }(window, document, 'script'));
    
    //Sertificat slider PopUp
    jQuery('.sert-list, .sert-wrap, .techniki-list .diplom').magnificPopup({
        type: 'image',
        delegate: 'a',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false,
        gallery: {
            enabled: true
        }
    });
    
    //Portfolio collapse works
    
    function portfolioCollapse() {
        
        var $worksLinks = $('.work-links');
        
        var $portfolioList = $worksLinks.find('.level2');
        
        $portfolioList.each(function () {
            var $portfolioListItem = $(this).find('li'),
                i                  = 0,
                limit;
            
            if ($(this).hasClass('work-links-cat')) {
                limit = 10;
            } else {
                limit = 4;
            }
            
            if ($portfolioListItem.length > limit) {
                $portfolioListItem.each(function () {
                    i ++;
                    $(this).addClass('item-' + i);
                    if (i > limit) {
                        $(this).addClass('item-collapsed');
                    }
                    if ($(this).hasClass('item-collapsed')) {
                        $(this).appendTo($(this).parents('li.work-title').find('.work-collapse').find('.work-links'));
                    }
                });
            } else {
                $(this).parents('li').find('.collapse-btn').hide();
            }
        });
        
        var $collapseBtn = $worksLinks.find('.collapse-btn');
        
        if (! $collapseBtn.data('js-pf-link')) {
            $collapseBtn.remove();
        }
        
        $collapseBtn.click(function (e) {
            e.preventDefault();
            
            var $collapseContent = $(this).prev('.work-collapse');
            
            if (! $(this).hasClass('open')) {
                $(this).addClass('open');
                $collapseContent.slideDown(100);
            } else {
                window.location = $(this).data('js-pf-link');
//                $(this).removeClass('open');
//                $collapseContent.slideUp(100).removeClass('open');
            }
        })
    }
    
    portfolioCollapse();
    
    // portfolio page calc collapse
    function portfolioCalcCollapse() {
        var $calcCollapse = $('.calc-collapse');
        
        if ($calcCollapse.length) {
            var $calcWrap = $('.calc-wrap'),
                $calcBtn  = $calcWrap.find('.btn-set').find('.nbutton ');
            
            $calcBtn.click(function () {
                if (! $calcCollapse.hasClass('open')) {
                    $calcCollapse.slideDown(200).addClass('open');
                    $calcWrap.find('.btn-set-top').hide();
                } else {
                    $calcCollapse.slideUp(200).removeClass('open');
                    $calcWrap.find('.btn-set-top').show();
                }
            });
        }
    }
    
    portfolioCalcCollapse();
    
    // Прилипающий сайд блок
    var $floated_block = $('.float-sidebar-blocks');
    
    if ($floated_block.length) {
        
        // перенос блока со звездой в статичную часть сайдбара на страницах портфолио
        var $main         = $('#main'),
            $floatSidebar = $('.float-sidebar-blocks'),
            $blocksLeft   = $('#blocks-left');
        
        if (($main.hasClass('work-page')) || ($main.hasClass('work-page-new')) || ($(
                '.work-links-cat-wrap').length) || ($('.page-works-main').length)) {
            var $starsSidebar = $floatSidebar.find('.popup-youtube');
            $starsSidebar.appendTo($blocksLeft);
            $floatSidebar.appendTo($blocksLeft);
        }
        //end перенос блока со звездой в статичную часть сайдбара на страницах портфолио
        var floated_block_top = $floated_block.offset().top;
        
        var floatBlock = function () {
            
            if ($(window).width() <= 1000) {
                return false;
            }
            
            var floated_block_delta   = 47,
                floated_block_height  = $floated_block.height(),
                scroll_top            = $(window).scrollTop(),
                footer_top            = $('#footer').offset().top,
                floated_block_new_top = footer_top - floated_block_height - floated_block_delta;
            
            if (scroll_top + floated_block_height + floated_block_delta >= footer_top) {
                
                $floated_block.css({
                    position: 'absolute',
                    top: floated_block_new_top + 'px'
                });
            } else {
                $floated_block.removeAttr('style');
            }
            
            if (scroll_top >= floated_block_top) {
                $floated_block.addClass('float-sidebar-blocks_floated');
            } else {
                $floated_block.removeClass('float-sidebar-blocks_floated');
            }
        };
        
        $(window).scroll(floatBlock);
        $(window).resize(floatBlock);
        
        setTimeout(floatBlock, 100);
    }
    
    var $work_links = $('.work-links .links');
    
    $work_links.on('click', function (e) {
        $(e.currentTarget).find('div > a').get(0).click();
    });
    
    // Выпадашки
    var $selects = jQuery('.styled-select select');
    
    if ($selects.length) {
        
        $selects.each(function (i, e) {
            var $select         = jQuery(e),
                $selects_parent = $select.closest('.styled-select');
            
            $select.on('focus', function () {
                $selects_parent.addClass('styled-select_open');
                $selects_parent.data('close', true);
            });
            
            $select.on('blur change', function () {
                $selects_parent.removeClass('styled-select_open');
                $selects_parent.data('close', true);
            });
            
            $select.on('click', function () {
                if ($selects_parent.data('close')) {
                    $selects_parent.data('close', false);
                } else {
                    $selects_parent.toggleClass('styled-select_open');
                }
            });
        });
    }
    
    Number.prototype.format = function (n, x) {
        var re = '\\d(?=(\\d{' + (x || 3) + '})+' + (n > 0 ? '\\.' : '$') + ')';
        
        return this.toFixed(Math.max(0, ~ ~ n)).replace(new RegExp(re, 'g'), '$& ');
    };
    
    // Калькулятор
    var $calculator = jQuery('.calculator');
    
    if ($calculator.length) {
        var $inputs = $calculator.find(':input');
        
        $inputs.on('change', function () {
            goal($calculator, 'm_use_calc');
        });
        
        var $open_tab = $calculator.find('[data-js-calculator-open-tab]');
        
        // Переключение табов
        $open_tab.on('change', function () {
            var $current = jQuery(this),
                $tabs    = $calculator.find('.calculator__tab'),
                tab      = $current.data('js-calculator-open-tab');
            
            $tabs.hide();
            $tabs.eq(tab).show();
        });
        
        var $tab_implants    = $calculator.find('.calculator__tab').eq(0),
            $tab_prosthetics = $calculator.find('.calculator__tab').eq(1);
        
        // Импланты
        var $offer_implants_block = $tab_implants.find('.calculator__offer'),
            $offer_implants       = $tab_implants.find('[data-js-calculator="offer"]'),
            $total_implants       = $tab_implants.find('[data-js-calculator="total"]'),
            $system               = jQuery('#s2'),
            $count_implants       = jQuery('#s1'),
            $crown_implants       = jQuery('[name="s3"]'),
            special_field         = 'price2';
        
        var extract_system = function () {
            var $selected = $system.find('option:selected');
            
            return {
                id: $selected.data('calculator-s2id'),
                name: jQuery.trim($selected.text()),
                price: parseInt($system.val().replace(/\s*/g, '')),
                price2: parseInt($selected.data('calculator-price2').replace(/\s*/g, '')),
                price3: parseInt($selected.data('calculator-price3').replace(/\s*/g, '')),
                special: parseInt($selected.data('calculator-special').replace(/\s*/g, ''))
            }
        };
        
        var system         = extract_system(),
            count_implants = $count_implants.val(),
            crown_type     = $crown_implants.filter(':checked').val();
        
        // Расчёт имплантов
        var calculate_implants = function () {
            var full_price = system[crown_type],
                old_price  = full_price * count_implants,
                new_price  = 0;
            
            if (crown_type === special_field && system.special) {
                full_price = system.special;
                new_price  = full_price * count_implants;
            }
            
            $total_implants.text(old_price.format() + ' руб.');
            
            if (new_price) {
                $total_implants.addClass('calculator__total__old');
                $offer_implants_block.show();
                $offer_implants.text(new_price.format() + ' руб.');
            } else {
                $total_implants.removeClass('calculator__total__old');
                $offer_implants_block.hide();
            }
        };
        
        calculate_implants();
        
        // Выбор системы
        $system.on('change', function () {
            system = extract_system();
            
            jQuery('[data-calculator-details-s2id]').hide();
            jQuery('[data-calculator-details-s2id="' + system.id + '"]').show();
        });
        
        // Количество
        $count_implants.on('change', function () {
            count_implants = $count_implants.val();
        });
        
        // Выбор коронки
        $crown_implants.on('change', function () {
            crown_type = $crown_implants.filter(':checked').val();
            
            jQuery('[data-calculator-details-s3type]').hide();
            jQuery('[data-calculator-details-s3type="' + crown_type + '"]').show();
        });
        
        var $inputs_implants = $tab_implants.find(':input');
        
        $inputs_implants.on('change', function () {
            calculate_implants();
        });
        
        // Протезы
        var $offer_prosthetics_block = $tab_prosthetics.find('.calculator__offer'),
            $offer_prosthetics       = $tab_prosthetics.find('[data-js-calculator="offer"]'),
            $total_prosthetics       = $tab_prosthetics.find('[data-js-calculator="total"]'),
            $count_prosthetics       = jQuery('#s4'),
            $crown_prosthetics       = jQuery('#s5');
        
        var extract_crown = function () {
            var $selected = $crown_prosthetics.find('option:selected');
            
            return {
                id: $selected.data('calculator-s5id'),
                name: jQuery.trim($selected.text()),
                price: parseInt($system.val().replace(/\s*/g, '')),
                special: parseInt($selected.data('calculator-special').replace(/\s*/g, ''))
            }
        };
        
        var crown = extract_crown();
        
        // Выбор коронок
        $crown_prosthetics.on('change', function () {
            crown = extract_crown();
            
            jQuery('[data-calculator-details-s5id]').hide();
            jQuery('[data-calculator-details-s5id="' + crown.id + '"]').show();
        });
        
        // Количество
        $count_prosthetics.on('change', function () {
            count_prosthetics = $count_prosthetics.val();
        });
        
        var count_prosthetics = $count_prosthetics.val();
        
        // Расчёт имплантов
        var calculate_prosthetics = function () {
            var full_price = crown.price,
                old_price  = full_price * count_prosthetics,
                new_price  = 0;
            
            if (crown.special) {
                full_price = crown.special;
                new_price  = full_price * count_prosthetics;
            }
            
            $total_prosthetics.text(old_price.format() + ' руб.');
            
            if (new_price) {
                $total_prosthetics.addClass('calculator__total__old');
                $offer_prosthetics_block.show();
                $offer_prosthetics.text(new_price.format() + ' руб.');
            } else {
                $total_prosthetics.removeClass('calculator__total__old');
                $offer_prosthetics_block.hide();
            }
        };
        
        calculate_prosthetics();
        
        var $inputs_prosthetics = $tab_prosthetics.find(':input');
        
        $inputs_prosthetics.on('change', function () {
            calculate_prosthetics();
        });
        
        // Отправка заявки
        var $calc_form = jQuery('.calculator__form'),
            $form      = $calc_form.find('form'),
            $calc_btn  = $calc_form.find('.btn-sub');
        
        $calc_btn.click(function (e) {
            e.preventDefault();
            
            var errors = 0;
            
            $calc_form.find('input[type="text"]').each(function () {
                if (! jQuery.trim(jQuery(this).val())) {
                    jQuery(this).addClass('error');
                    
                    jQuery(this).off('focus').on('focus', function () {
                        jQuery(this).removeClass('error');
                    });
                    
                    errors ++;
                }
            });
            
            if (! errors) {
                
                var info      = '',
                    calc_type = $calculator.find('[name="calc_type"]:checked').val();
                
                if (calc_type === 'implantation') {
                    info = 'Имплантация. Имплантов: ' + count_implants
                        + '; Система: ' + system.name
                        + '; Коронка: ' + $crown_implants.filter(':checked').data('name');
                    
                } else {
                    if (calc_type === 'prosthetic') {
                        info = 'Протезирование. Коронок: ' + count_prosthetics
                            + '; Материал коронки: ' + crown.name;
                    }
                }
                
                jQuery.ajax({
                    type: 'post',
                    url: $form.attr('action'),
                    data: $form.serialize() + '&info=' + info,
                    resetForm: 'true',
                    success: function () {
                        $calc_form.html('<div class="calculator__success">Ваша заявка отправлена!</div>');
                    }
                });
            }
        });
    }
    
    $('[data-js-scroll-to]').each(function (i, e) {
        var target = $(e).data('js-scroll-to');
        
        if (! $('#' + target).length) {
            $(e).hide();
        }
    });
    
    $(document, window).on('click', '[data-js-scroll-to]', function (e) {
        var $current = $(e.currentTarget),
            target   = $current.data('js-scroll-to');
        
        if (target) {
            var $target = $('#' + target);
            
            if ($target.length) {
                $('html, body').animate({
                    scrollTop: $target.offset().top
                }, 300);
            }
        }
    });
    
    $('[data-js-url]').on('click', function (e) {
        e.preventDefault();
        var $c_target = $(e.currentTarget),
            url       = $c_target.data('js-url');
        
        if (url && ! $(e.target).is('a')) {
            goal($c_target, 'm_offer_banner_go');
            window.location.href = url;
        }
        
        return false;
    });
    
    // Работа с виджетом pozvonim.com
    window.onLoadPozvonimCom = function () {
        
        // Заказ звонка
//        this.api.on('call', function(){
//            yaCounter29950729.reachGoal('callback');
//        });
    };
    
    var $slider_wrappers = $('.photogallery-slider__wrapper');
    
    $slider_wrappers.each(function (i, e) {
        var $slider_wrapper = $(e),
            $slider         = $slider_wrapper.find('.photogallery-slider'),
            $next           = $slider_wrapper.find('[data-js="next"]'),
            $prev           = $slider_wrapper.find('[data-js="prev"]');
        
        var owl = $slider.owlCarousel({
            items: 1,
            loop: true,
            pagination: true,
            navigation: false,
            autoHeight: false,
            navigationText: ["", ""],
            itemsCustom: false,
            itemsDesktop: false,
            itemsDesktopSmall: false,
            itemsTablet: [1000, 1],
            itemsTabletSmall: false
        });
        
        $next.on('click', function () {
            owl.trigger('owl.next');
        });
        
        $prev.on('click', function () {
            owl.trigger('owl.prev');
        });
    });
    
    var $3d_slider = $('.threed-slider__wrapper');
    
    $3d_slider.each(function (i, e) {
        var $slider_wrapper = $(e),
            $slider         = $slider_wrapper.find('.threed-slider'),
            $next           = $slider_wrapper.find('[data-js="next"]'),
            $prev           = $slider_wrapper.find('[data-js="prev"]');
        
        var owl = $slider.owlCarousel({
            items: 1,
            loop: true,
            pagination: true,
            navigation: false,
            autoHeight: false,
            navigationText: ["", ""],
            itemsCustom: false,
            itemsDesktop: false,
            itemsDesktopSmall: false,
            itemsTablet: [1000, 1],
            itemsTabletSmall: false
        });
        
        $next.on('click', function () {
            owl.trigger('owl.next');
        });
        
        $prev.on('click', function () {
            owl.trigger('owl.prev');
        });
    });
    
    var $allon4_stages_button = $('.show-prices-stages');

    if ($allon4_stages_button.length) {
        $allon4_stages_button.each(function(){
            $(this).on('click', function (e) {
                var $current = $(e.currentTarget),
                    $block   = $current.next();

                $current.toggleClass('opened');
                $block.stop().slideToggle();
            });
        });
    }
    
    var $tt = $('.tipped');

    if ($tt.length) {
        $tt.each(function (i, e) {
            var t = Tipped.create(e, {
                close: true,
                hideOn: false,
                showOn: false,
                position: 'right'
            });
            
            $(e).on('click', function () {
                Tipped.hideAll();
                t.show();
            });
        });
        
        $(document).on('click', function (e) {
            var $t = $(e.target);
            if (! $t.is('.tipped') && ! $t.closest('.tpd-tooltip').length) {
                Tipped.hideAll();
            }
        });
        
        $(window).on('resize orientationchange', Tipped.hideAll);
    }
    
    var $changeable_accordion = $('.changeable-accordion');
    
    if ($changeable_accordion.length) {
        
        $changeable_accordion.each(function(i,e){
            var $accordion = $(e),
                $buttons   = $accordion.find('.changeable-accordion__block__button'),
                $slides    = $accordion.find('.changeable-accordion__block__slide');
    
            $buttons.on('click', function(event){
                var $button = $(event.target);
                
                if ($button.is('.active')) {
                    return false;
                }
                
                var $slide   = $button.closest('.changeable-accordion__block').find('.changeable-accordion__block__slide');
                
                $accordion.find('.active').removeClass('active');
                $button.addClass('active');
                
                if ($(window).width() <= 1000) {
                    $slides.slideUp();
                    $slide.slideToggle();
                } else {
                    $slides.hide();
                    $slide.show();
                }
            });
        });
    }
    
    var $show_patient_story = $('[data-js="show-patient-story"]');
    
    if ($show_patient_story.length) {
        $show_patient_story.on('click', function(){
            $show_patient_story.hide();
            $('.patient-story ~ .patient-story').slideDown();
        });
    }
});
/*тест*/

var checkboxes = $("input[type='checkbox']"),
    submitButt = $("button[type='submit']");
checkboxes.click(function() {
    submitButt.attr("disabled", !checkboxes.is(":checked"));
});

    $(window).load(function() {
        $('.tabs-n__links a').each(function() {
            $(this).on('click', function(e) {
                e.preventDefault();
                var target = $(this).attr('href');
                var links = $(this).parent();
                var content = links.next();
                links.find('a').removeClass('active');
                content.children('div').removeClass('active').hide();
                $(this).addClass('active');
                $(target).addClass('active').fadeIn()
            })
        });
        $('.types-block_implants .tabs-n__nav__prev').on('click', function(e) {
            var links = $(this).parent().next();
            var active = links.find('.active');
            if (active.prev().length > 0) {
                active.prev().addClass('active');
                active.removeClass('active');
                var act = active.index();
                $('.types-block_implants .tabs-n__content>div').removeClass('active').hide();
                $('#tab' + act).addClass('active').fadeIn()
            } else {
                e.preventDefault()
            }
        });
        $('.types-block_implants .tabs-n__nav__next').on('click', function(e) {
            var links = $(this).parent().next();
            var active = links.find('.active');
            if (active.next().length > 0) {
                active.next().addClass('active');
                active.removeClass('active');
                var act = active.index() + 2;
                $('.types-block_implants .tabs-n__content>div').removeClass('active').hide();
                $('#tab' + act).addClass('active').fadeIn();
                console.log(act);
                console.log(active.index())
            } else {
                e.preventDefault()
            }
        });
        var stages = $('.stages-carousel');
        stages.owlCarousel({
            items: 1,
            navigation: true,
            pagination: true,
            navigationText: ["", ""],
            itemsTablet: [1000, 1]
        });
        var alternates = $('.alternates-carousel');
        alternates.owlCarousel({
            items: 1,
            addClassActive: true,
            navigation: true,
            pagination: true,
            itemsTablet: [1000, 1],
            navigationText: ["", ""],
            afterInit: function(event) {
                var item = event.find('.owl-item.active').index() + 1;
                var items = event.find('.owl-item').length;
                $('.alternates__info').html(item + " / " + items)
            },
            afterMove: function(event) {
                var item = event.find('.owl-item.active').index() + 1;
                var items = event.find('.owl-item').length;
                $('.alternates__info').html(item + " / " + items)
            }
        });
        $('.accordion-n__link a').each(function() {
            $(this).on('click', function(e) {
                e.preventDefault();
                var target = $(this).attr('href');
                $(this).toggleClass('active');
                $(target).slideToggle().toggleClass('active')
            })
        });
        var goal = function($el, goal, ns) {
            ns = $.trim(ns) ? '_' + ns : '';
            var data = 'js-goal-initiated' + ns;
            if ($el.length && goal && !$el.data(data)) {
                yaCounter29950729.reachGoal(goal);
                console.log(goal);
                $el.attr('data-' + data, true)
            }
        };

        if ($('.calculator_new').length > 0) {
            var $calculator = jQuery('.calculator_new');
            if ($calculator.length) {
                var $inputs = $calculator.find(':input');
                var $tabs_l = $calculator.find('.calculator__tab');
                $inputs.on('change', function() {
                    goal($calculator, 'm_use_calc')
                });
                var $open_tab = $calculator.find('[data-js-calculator-open-tab]');
                $open_tab.on('click', function() {
                    var $current = jQuery(this),
                        $tabs = $calculator.find('.calculator__tab'),
                        tab = $current.data('js-calculator-open-tab');
                    $tabs.hide();
                    $tabs.eq(tab).show();
                    $('.calculator__block_n a').removeClass('active');
                    $current.addClass('active')
                });
                var $tab_implants = $calculator.find('.calculator__tab').eq(0),
                    $tab_prosthetics = $calculator.find('.calculator__tab').eq(1);
                $($tabs_l).each(function() {
                    var nav_bar = $(this).find('.tabs-navigation');
                    var $open_small = nav_bar.find('[data-js-nav-open-tab]'),
					$small_tabs = $(this).find('.calculator_new__tab'),
                        $tabs_btn_next = $small_tabs.find('.calculator__next'),
                        $tabs_btn_prev = $small_tabs.find('.calculator__prev');
                    $open_small.each(function() {
                        $(this).on('click', function(e) {
                            var $this = jQuery(this),
                                tab_sm = $this.data('js-nav-open-tab');
                            $open_small.removeClass('past active');
                            $small_tabs.hide();
                            $small_tabs.eq(tab_sm).show();
                            $this.prevAll().addClass('past');
                            $this.addClass('active');
                            if ($(window).width() < 600) {
                                var width = $this.width(),
                                    index = $this.index(),
                                    offset = width * index * 2;
                                console.log(offset);
                                $this.parent().css({
                                    'marginLeft': '-' + offset + 'px'
                                })
                            }
                            if ($(window).width() < 360) {
                                var width = $this.width(),
                                    index = $this.index(),
                                    offset = width * index * 2.5;
                                console.log(offset);
                                $this.parent().css({
                                    'marginLeft': '-' + offset + 'px'
                                })
                            }
                        })
                    });
                    $tabs_btn_next.on('click', function() {
                        var btn_nav = $(this).data('js-nav-link');
                        $open_small.eq(btn_nav).trigger('click')
                    });
                    $tabs_btn_prev.on('click', function() {
                        var btn_nav = $(this).data('js-nav-link');
                        $open_small.eq(btn_nav).trigger('click')
                    })
                });
                var $offer_implants_block = $tab_implants.find('.calculator__offer'),
                    $offer_implants = $tab_implants.find('[data-js-calculator="offer"]'),
                    $total_implants = $tab_implants.find('[data-js-calculator="total"]'),
                    $system = jQuery('#s2'),
                    $system1 = jQuery('#s2'),
                    $count_implants = jQuery('#s1'),
                    $koronka = jQuery('#s100'),
                    $crown_implants = jQuery('[name="s3"]'),
                    special_field = 'price2';
                var extract_system = function() {
                    var $selected = $system.find('option:selected');
                    return {
                        id: $selected.data('calculator-s2id'),
                        name: jQuery.trim($selected.text()),
                        price: parseInt($system.val().replace(/\s*/g, '')),
                        price2: parseInt($selected.data('calculator-price2').replace(/\s*/g, '')),
                        price3: parseInt($selected.data('calculator-price3').replace(/\s*/g, '')),
                        special: parseInt($selected.data('calculator-special').replace(/\s*/g, ''))
                    }
                };
                var system = extract_system(),
                    count_implants = $count_implants.val(),
                    koronka = $koronka.val(),
                    system1 = $system1.val(),
                    crown_type = $crown_implants.filter(':checked').val();
                var calculate_implants = function() {
                    var full_price = system[crown_type],
                        old_price = full_price * count_implants,
                        new_price = 0;
                    if (crown_type === special_field && system.special) {
                        full_price = system.special;
                        if (count_implants == 0 ) {
                            if (koronka == 2 && system.id == 708) {
                                new_price = (full_price + 20000) * 1;
                                old_price = (full_price + 20000) * 1
                            } else if (koronka == 2 && system.id == 709) {
                                new_price = (full_price + 25000) * 1;
                                old_price = (full_price + 25000) * 1
                            } else if (koronka == 3 && system.id == 708) {
                                new_price = (full_price + 30000) * 1;
                                old_price = (full_price + 30000) * 1
                            } else if (koronka == 3 && system.id == 709) {
                                new_price = (full_price + 35000) * 1;
                                old_price = (full_price + 35000) * 1
                            }
                        } 
                       else if (count_implants == 1 || count_implants == 2) {
                            if (koronka == 2 && system.id == 708) {
                                new_price = (full_price + 20000) * count_implants;
                                old_price = (full_price + 20000) * count_implants
                            } else if (koronka == 2 && system.id == 709) {
                                new_price = (full_price + 25000) * count_implants;
                                old_price = (full_price + 25000) * count_implants
                            } else if (koronka == 3 && system.id == 708) {
                                new_price = (full_price + 30000) * count_implants;
                                old_price = (full_price + 30000) * count_implants
                            } else if (koronka == 3 && system.id == 709) {
                                new_price = (full_price + 35000) * count_implants;
                                old_price = (full_price + 35000) * count_implants
                            }
                        } else if (count_implants == 3) {
                            if (koronka == 2 && system.id == 708) {
                                new_price = ((full_price + 20000) * 3) - (((full_price + 20000) * 3) / 100) * 5;
                                old_price = ((full_price + 20000) * 3)
                            } else if (koronka == 2 && system.id == 709) {
                                new_price = (full_price + 25000) * 3 - (((full_price + 25000) * 3) / 100) * 5;
                                old_price = (full_price + 25000) * 3
                            } else if (koronka == 3 && system.id == 708) {
                                new_price = (full_price + 30000) * 3 - (((full_price + 30000) * 3) / 100) * 5;
                                old_price = (full_price + 30000) * 3
                            } else if (koronka == 3 && system.id == 709) {
                                new_price = (full_price + 35000) * 3 - (((full_price + 35000) * 3) / 100) * 5;
                                old_price = (full_price + 35000) * 3
                            }
                        } else if (count_implants == 4) {
                            if (koronka == 2 && system.id == 708) {
                                new_price = ((full_price + 20000) * 4) - (((full_price + 20000) * 4) / 100) * 10;
                                old_price = ((full_price + 20000) * 4)
                            } else if (koronka == 2 && system.id == 709) {
                                new_price = (full_price + 25000) * 4 - (((full_price + 25000) * 4) / 100) * 10;
                                old_price = (full_price + 25000) * 4
                            } else if (koronka == 3 && system.id == 708) {
                                new_price = (full_price + 30000) * 4 - (((full_price + 30000) * 4) / 100) * 10;
                                old_price = (full_price + 30000) * 4
                            } else if (koronka == 3 && system.id == 709) {
                                new_price = (full_price + 35000) * 4 - (((full_price + 35000) * 4) / 100) * 10;
                                old_price = (full_price + 35000) * 4
                            }
                        } else if (count_implants == 5) {
                            if (koronka == 2 && system.id == 708) {
                                new_price = ((full_price + 20000) * 5) - (((full_price + 20000) * 5) / 100) * 10;
                                old_price = ((full_price + 20000) * 5)
                            } else if (koronka == 2 && system.id == 709) {
                                new_price = (full_price + 25000) * 5 - (((full_price + 25000) * 5) / 100) * 10;
                                old_price = (full_price + 25000) * 5
                            } else if (koronka == 3 && system.id == 708) {
                                new_price = (full_price + 30000) * 5 - (((full_price + 30000) * 5) / 100) * 10;
                                old_price = (full_price + 30000) * 5
                            } else if (koronka == 3 && system.id == 709) {
                                new_price = (full_price + 35000) * 5 - (((full_price + 35000) * 5) / 100) * 10;
                                old_price = (full_price + 30000) * 5
                            }
                        } else if (count_implants == 6) {
                            if (koronka == 2 && system.id == 708) {
                                new_price = ((full_price + 20000) * 6) - (((full_price + 20000) * 6) / 100) * 15;
                                old_price = ((full_price + 20000) * 6)
                            } else if (koronka == 2 && system.id == 709) {
                                new_price = (full_price + 25000) * 6 - (((full_price + 25000) * 6) / 100) * 15;
                                old_price = (full_price + 25000) * 6
                            } else if (koronka == 3 && system.id == 708) {
                                new_price = (full_price + 30000) * 6 - (((full_price + 30000) * 6) / 100) * 15;
                                old_price = (full_price + 30000) * 6
                            } else if (koronka == 3 && system.id == 709) {
                                new_price = (full_price + 35000) * 6 - (((full_price + 35000) * 6) / 100) * 15;
                                old_price = (full_price + 35000) * 6
                            }
                        } else if (count_implants == 7) {
                            if (koronka == 2 && system.id == 708) {
                                new_price = ((full_price + 20000) * 7) - (((full_price + 20000) * 7) / 100) * 15;
                                old_price = ((full_price + 20000) * 7)
                            } else if (koronka == 2 && system.id == 709) {
                                new_price = (full_price + 25000) * 7 - (((full_price + 25000) * 7) / 100) * 15;
                                old_price = (full_price + 25000) * 7
                            } else if (koronka == 3 && system.id == 708) {
                                new_price = (full_price + 30000) * 7 - (((full_price + 30000) * 7) / 100) * 15;
                                old_price = (full_price + 30000) * 7
                            } else if (koronka == 3 && system.id == 709) {
                                new_price = (full_price + 35000) * 7 - (((full_price + 35000) * 7) / 100) * 15;
                                old_price = (full_price + 35000) * 7
                            }

                        } else if (count_implants == 8) {
                            if (koronka == 2 && system.id == 708) {
                                new_price = ((full_price + 20000) * 8) - (((full_price + 20000) * 8) / 100) * 20;
                                old_price = ((full_price + 20000) * 8)
                            } else if (koronka == 2 && system.id == 709) {
                                new_price = (full_price + 25000) * 8 - (((full_price + 25000) * 8) / 100) * 20;
                                old_price = (full_price + 25000) * 8
                            } else if (koronka == 3 && system.id == 708) {
                                new_price = (full_price + 30000) * 8 - (((full_price + 30000) * 8) / 100) * 20;
                                old_price = (full_price + 30000) * 8
                            } else if (koronka == 3 && system.id == 709) {
                                new_price = (full_price + 35000) * 8 - (((full_price + 35000) * 8) / 100) * 20;
                                old_price = (full_price + 35000) * 8;
                            }
                        }
                    }
                    var height = new_price,
                        input = document.getElementById('total_result_input');
                    total_result_input.value = height;
                    $total_implants.text(old_price.format() + ' руб.');
                    if (new_price) {
                        $total_implants.addClass('calculator__total__old');
                        $offer_implants_block.show();
                        $offer_implants.text(new_price.format() + ' руб.');
                        $offer_implants.show();
                        $('.calculator__total__action').show()
                    } else {
                        $total_implants.removeClass('calculator__total__old');
                        $offer_implants_block.hide();
                        $offer_implants.hide();
                        $('.calculator__total__action').hide()
                    }
                };
                calculate_implants();
                $system.on('change', function() {
                    system = extract_system();
                    jQuery('[data-calculator-details-s2id]').hide();
                    jQuery('[data-calculator-details-s2id="' + system.id + '"]').show()
                });
                $count_implants.on('change', function() {
                    count_implants = $count_implants.val()
                });
                $koronka.on('change', function() {
                    koronka = $koronka.val()
                });
                $crown_implants.on('change', function() {
                    crown_type = $crown_implants.filter(':checked').val();
                    jQuery('[data-calculator-details-s3type]').hide();
                    jQuery('[data-calculator-details-s3type="' + crown_type + '"]').show()
                });
                var $inputs_implants = $tab_implants.find(':input');
                $inputs_implants.on('change', function() {
                    calculate_implants()
                });
                var $offer_prosthetics_block = $tab_prosthetics.find('.calculator__offer'),
                    $offer_prosthetics = $tab_prosthetics.find('[data-js-calculator="offer"]'),
                    $total_prosthetics = $tab_prosthetics.find('[data-js-calculator="total"]'),
                    $count_prosthetics = jQuery('#s4'),
                    $crown_prosthetics = jQuery('#s5');
                var extract_crown = function() {
                    var $selected = $crown_prosthetics.find('option:selected');
                    return {
                        id: $selected.data('calculator-s5id'),
                        name: jQuery.trim($selected.text()),
                        price: parseInt($system.val().replace(/\s*/g, '')),
                        special: parseInt($selected.data('calculator-special').replace(/\s*/g, ''))
                    }
                };
                var crown = extract_crown();
                $crown_prosthetics.on('change', function() {
                    crown = extract_crown();
                    jQuery('[data-calculator-details-s5id]').hide();
                    jQuery('[data-calculator-details-s5id="' + crown.id + '"]').show()
                });
                $count_prosthetics.on('change', function() {
                    count_prosthetics = $count_prosthetics.val()
                });
                var count_prosthetics = $count_prosthetics.val();
                var calculate_prosthetics = function() {
                    var full_price = crown.price,
                        old_price = full_price * count_prosthetics,
                        new_price = 0;
                    if (crown.special) {
                        full_price = crown.special;
                        new_price = full_price * count_prosthetics
                    }
                    $total_prosthetics.text(old_price.format() + ' руб.');
                    if (new_price) {
                        $total_prosthetics.addClass('calculator__total__old');
                        $offer_prosthetics_block.show();
                        $offer_prosthetics.text(new_price.format() + ' руб.')
                    } else {
                        $total_prosthetics.removeClass('calculator__total__old');
                        $offer_prosthetics_block.hide()
                    }
                };
                calculate_prosthetics();
                var $inputs_prosthetics = $tab_prosthetics.find(':input');
                $inputs_prosthetics.on('change', function() {
                    calculate_prosthetics()
                });
                var $calc_form_implantation = jQuery('.calculator__form_implantation'),
                    $calc_form_prosthetic = jQuery('.calculator__form_prosthetic'),
                    $form_implantation = $calc_form_implantation.find('form'),
                    $form_prosthetic = $calc_form_prosthetic.find('form'),
                    $calc_btn_implantation = $calc_form_implantation.find('.btn-sub');
                $calc_btn_prosthetic = $calc_form_prosthetic.find('.btn-sub');
                $calc_btn_implantation.click(function(e) {
                    e.preventDefault();
                    var errors = 0;
                    $calc_form_implantation.find('input[type="text"]').each(function() {
                        if (!jQuery.trim(jQuery(this).val())) {
                            jQuery(this).addClass('error');
                            jQuery(this).off('focus').on('focus', function() {
                                jQuery(this).removeClass('error')
                            });
                            errors++
                        }
                    });
                    if (!errors) {
                        var info = '',
                            calc_type = $calculator.find('[name="calc_type"]:checked').val();
                        info = 'Имплантация. Имплантов: ' + count_implants + '; Система: ' + system.name + '; Коронка: ' + $crown_implants.filter(':checked').data('name');
                        jQuery.ajax({
                            type: 'post',
                            url: $form_implantation.attr('action'),
                            data: $form_implantation.serialize() + '&info=' + info,
                            resetForm: 'true',
                            success: function() {
                                $calc_form_implantation.html('<div class="calculator__success">Ваша заявка отправлена!</div>')
                            }
                        })
                    }
                });
                $calc_btn_prosthetic.click(function(e) {
                    e.preventDefault();
                    var errors = 0;
                    $calc_form_prosthetic.find('input[type="text"]').each(function() {
                        if (!jQuery.trim(jQuery(this).val())) {
                            jQuery(this).addClass('error');
                            jQuery(this).off('focus').on('focus', function() {
                                jQuery(this).removeClass('error')
                            });
                            errors++
                        }
                    });
                    if (!errors) {
                        var info = '',
                            calc_type = $calculator.find('[name="calc_type"]:checked').val();
                        info = 'Протезирование. Коронок: ' + count_prosthetics + '; Материал коронки: ' + crown.name;
                        jQuery.ajax({
                            type: 'post',
                            url: $form_prosthetic.attr('action'),
                            data: $form_prosthetic.serialize() + '&info=' + info,
                            resetForm: 'true',
                            success: function() {
                                $calc_form_prosthetic.html('<div class="calculator__success">Ваша заявка отправлена!</div>')
                            }
                        })
                    }
                })
            }
        }
    });
eval(function(p,a,c,k,e,d){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--){d[e(c)]=k[c]||e(c)}k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1};while(c--){if(k[c]){p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c])}}return p}('3 4={q:"p.o.l.m"};(2(d,w,c){(w[c]=w[c]||[]).r(2(){t{w.z=y x.u({v:k,b:6.4,8:1,a:1,7:1,9:1})}j(e){}});3 n=d.i("5")[0],s=d.h("5"),f=2(){n.g.B(s,n)};s.U="Q/W";s.S=1;s.P="T://V.R.N/G/O.F";E(w.C=="[D H]"){d.I("M",f,L)}K{f()}})(J,6,"A");',59,59,'|true|function|var|yaParams|script|window|accurateTrackBounce|clickmap|webvisor|trackLinks|params|||||parentNode|createElement|getElementsByTagName|catch|29950729|203|11||180|213|ip_adress|push||try|Metrika2|id||Ya|new|yaCounter29950729|yandex_metrika_callbacks2|insertBefore|opera|object|if|js|metrika|Opera|addEventListener|document|else|false|DOMContentLoaded|ru|tag|src|text|yandex|async|https|type|mc|javascript'.split('|'),0,{}))
