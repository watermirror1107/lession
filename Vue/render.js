const compiler = require('vue-template-compiler');
const template1 = compiler.compile('<p>{{message}}</p>');
console.log(template1.render);//with(this){return _c('p',[_v(_s(message))])}
const template2 = compiler.compile('<p v-show="bol">{{message}}</p>');
console.log(template2.render);//with(this){return _c('p',{directives:[{name:"show",rawName:"v-show",value:(bol),expression:"bol"}]},[_v(_s(message))])}
const template3 = compiler.compile("<p>{{bol?1:2}}</p>");
console.log(template3.render);//with(this){return _c('p',[_v(_s(bol?1:2))])}
const template4 = compiler.compile('<div class="box" id="first"><img :src="item.url" alt=""></div>');
console.log(template4.render);//with(this){return _c('div',{staticClass:"box",attrs:{"id":"first"}},[_c('img',{attrs:{"src":item.url,"alt":""}})])}
const template5 = compiler.compile('<img v-for="(item,index) in list" :src="item.url" alt="" @click="selectedItem">');
console.log(template5.render);//with(this){return _l((list),function(item,index){return _c('img',{attrs:{"src":item.url,"alt":""},on:{"click":selectedItem}})})}

