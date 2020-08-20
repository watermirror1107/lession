//在 Service Worker 当中会用到一些全局变量:
//
//
// self: 表示 Service Worker 作用域, 也是全局变量
// caches: 表示缓存
// skipWaiting: 表示强制当前处在 waiting 状态的脚本进入 activate 状态
// clients: 表示 Service Worker 接管的页面
