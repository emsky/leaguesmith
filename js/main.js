// Note: See http://blog.garstasio.com/you-dont-need-jquery/ and http://youmightnotneedjquery.com/ for JS commands that don't require jQuery

// NAMESPACE
var myApp= myApp || {};
myApp = {
  pointsFerocity: 0,
  pointsCunning: 0,
  pointsResolve: 0,
  updateTier: function(b) {
    // activate mastery icons
    b.addClass('on');
    // get current mastery tree
    var tree = b.parentsUntil(".tree");
    for (var i = 0; i < tree.length; i++) {
      // test
    }
    // mastery count
    var ctr1 = b.find('.mcount');
    var ctr2 = b.parent().siblings().find('.mcount');
    var c = parseInt(ctr1.html());

    // if icon is empty, max to 5 on click
   c = ((myApp.pointsFerocity === 0) ? 5 : (c < 5) ? c + 1 : c);
   ctr1.html(c);
   ctr2.html(5-c);
  }
};

$(document).ready(function(){

  // SHOW/HIDE Instructions
  $("nav__buttons__item a").click(function(){
    $(".instructions").slideToggle("slow");
    console.log("test");
  });

  // MASTERY ICON: LEFT CLICK
  $("[class^='micon']").click(function(){
    var icon = $(this);
    myApp.updateTier(icon);
    console.log("test");

    // Decrement parent class siblings
    // Increment this
    // Update URL
  });
});
