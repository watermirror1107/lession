var i=0;
postMessage(i);
setTimeout(function () {
    i+=500;
    postMessage(i);
},2000);
