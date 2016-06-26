//////////////////////
// index.html Scripts
//////////////////////

//------------------------------
// Elements I want to move by ID
bannerImage = $('#banner-image').css({position: "absolute", top: '60px'});
var navbarStartingTop = bannerImage.height().toString() + "px";
homeNav = $('#home-navbar').css({position: "absolute", top: "-60px"});

// Set the Padding-bottom dynamically for the home-header or else it will be hidden
var homeHeaderPadding = (bannerImage.height() + homeNav.height() + 20).toString() + "px";
body = $('#home-header').css({"padding-bottom": homeHeaderPadding});
var animateNavDistance = "+=60px";

// Slide down animation for navbar
jQuery(window).load(function () {
    
    console.log("window");
});

$( document ).ready(function() {
    console.log( "ready!" );
    // Shift Navbar Down
    homeNav.animate({ "top": animateNavDistance }, "normal" );
    // Fix the navbar to the top of window
    homeNav.addClass("navbar-fixed-top");
    homeNav.css({position: "fixed"});
});

// Responsive sizing for padding under the banner
$(window).resize(function() {
    var homeHeaderPadding = (bannerImage.height() + homeNav.height() + 20).toString() + "px";
    body = $('#home-header').css({"padding-bottom": homeHeaderPadding});
});
//++++++++++++++++++++++++++++


//////////////////////
// Site-wide Scripts
//////////////////////

//-----------------------
// Twitter Script
window.twttr = (function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0],
    t = window.twttr || {};
    if (d.getElementById(id)) return t;
    js = d.createElement(s);
    js.id = id;
    js.src = "https://platform.twitter.com/widgets.js";
    fjs.parentNode.insertBefore(js, fjs);
 
    t._e = [];
    t.ready = function(f) {
        t._e.push(f);
    };
return t;
}(document, "script", "twitter-wjs"));
//++++++++++++++++++++++++++++

