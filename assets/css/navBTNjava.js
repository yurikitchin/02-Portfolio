$(function() {
  var button = $("#cn-button"),
      wrapper = $("#cn-wrapper"),
      overlay = $("#cn-overlay"),
      open = true;
  
  $(button).click(function() {
    (!open) ? OpenNav() : CloseNav();
  });
 
  function OpenNav() {
    open = true;
    $(button).html("-");
    $(wrapper).addClass("opened-nav");
    $(overlay).addClass("on-overlay");
  }
  function CloseNav() {
    open = false;
    $(button).html("+");
    $(wrapper).removeClass("opened-nav");
    $(overlay).removeClass("on-overlay");		
  }
});