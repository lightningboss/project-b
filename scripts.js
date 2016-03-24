function makeActive(elementName) {
  var home = $("#home");
  var location = $("#location");
  var settings = $("#settings");
  var activeItem = $(".nav-item-active");

  switch (elementName) {
    case "home":
      activeItem.css("transform", "translateY(-149%)"); // This prevents the visibility of the divider
      home.addClass("active");
      location.removeClass("active");
      settings.removeClass("active");
      break;
    case "location":
      activeItem.css("transform", "translateY(-50%)");
      home.removeClass("active");
      location.addClass("active");
      settings.removeClass("active");
      break;
    case "settings":
      activeItem.css("transform", "translateY(49%)"); // This prevents the visibility of the divider
      home.removeClass("active");
      location.removeClass("active");
      settings.addClass("active");
      break;
  }
}

$(document).ready(function() {
    $(".nav-item").click(function() {
      var elementName = $(this).attr("id");
      makeActive(elementName);
    });
  }) // document ready
