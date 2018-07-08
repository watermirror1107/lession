define(function(){
    return function () {
        var x=document.getElementsByTagName('Nav')[0];
        var txt=x.getAttribute('data');
        x.innerHTML=txt;
    }();
});
