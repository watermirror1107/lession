var f=parseInt($('html').css('fontSize'));
var w=document.body.clientWidth;
window.onload=function () {
    $('html').css('fontSize',w/4+'px');
};
