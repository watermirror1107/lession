//该方法是将item合并到Jquery的全局对象中去，相当于为Jquery全局对象添加了一个

//静态方法（对应这里的静态方法，当然还有实例方法，在后边有介绍）。

     //示例：

           $.extend({SayHello:function(value){alert('hello '+value);}});

//这样写过之后，就可以直接调用SayHello方法：

           //调用$.SayHello('Olive');

//说明：该方法相当于为Jquery类添加了新的方法。




//上边提到的$.extend(item)说是为Jquery类添加了静态方法，那么这里的$.fn.extend(item)就是为每一个实例添加一个实例方法了。
//$.fn.extend(item);
     //示例：

         $.fn.extend({sayID:function(){
             console.log(this.attr('id'));//这里的THIS指未来实例的对象;
         }
         });

//这样写过之后，在获取每一个示例之后，都可以调用该方法：

         //调用$('#id').hello('Olive');

