importScripts('./testscript.js')
console.log(self.age)
//
self.onmessage = function (ev) {
    console.log('woker接收到的数据' + ev.data)
    self.postMessage('wo giao')
}
