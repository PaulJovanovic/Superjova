$(document).ready ->
  $(window).scroll ->
    $(".js-navigation-fixable").each ->
      $navigation = $(@)
      if $navigation.data("fixable") == true && !$navigation.hasClass("locked") && $navigation.offset().top <= $(window).scrollTop() + $(".js-navigation-fixed").height()
        $focus = $navigation.find("input:focus")
        $navigation.addClass("locked")
        $navigation.height($navigation.height())
        $navigationFixed = $navigation.find(".js-navigation-fixable-content").detach().attr("id", "#{$navigation.attr("id")}-fixed")
        $navigation.html("")
        $(".js-navigation-fixed").append($navigationFixed)
        $focus.focus()
      else if $navigation.data("fixable") == false || ($navigation.hasClass("locked") && ($navigation.offset().top > $(window).scrollTop() + $(".js-navigation-fixed").height() || $(window).scrollTop() + $(".js-navigation-fixed").height() < $navigation.offset().top + $navigation.height()))
        $navigation.removeClass("locked")
        $navigationFixed = $("##{$navigation.attr("id")}-fixed")
        if $navigationFixed.length
          $focus = $navigationFixed.find("input:focus")
          $navigation.html($navigationFixed.detach())
          $navigation.css({height: "auto"})
          $focus.focus()
