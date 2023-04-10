//ArrayBuffer对象代表储存二进制数据的一段内存，它不能直接读写，只能通过视图（TypedArray视图和DataView视图)来读写，视图的作用是以指定格式解读二进制数据。
//
// ArrayBuffer也是一个构造函数，可以分配一段可以存放数据的连续内存区域。

//简单说，ArrayBuffer对象代表原始的二进制数据，TypedArray视图用来读写简单类型的二进制数据，DataView视图用来读写复杂类型的二进制数据。
const buf = new ArrayBuffer(32)
//上面代码生成了一段 32 字节的内存区域，每个字节的值默认都是 0。可以看到，ArrayBuffer构造函数的参数是所需要的内存大小（单位字节）。如果要分配的内存区域很大，有可能分配失败（因为没有那么多的连续空余内存），所以有必要检查是否分配成功。
//ArrayBuffer实例的byteLength属性，返回所分配的内存区域的字节长度。
console.log(buf.byteLength)

//为了读写这段内容，需要为它指定视图。DataView视图的创建，需要提供ArrayBuffer对象实例作为参数。
const dataView = new DataView(buf)
console.log(dataView.getUint8(0));
//上面代码对一段 32 字节的内存，建立DataView视图，然后以不带符号的 8 位整数格式，从头读取 8 位二进制数据，结果得到 0，因为原始内存的ArrayBuffer对象，默认所有位都是 0。

//另一种TypedArray视图，与DataView视图的一个区别是，它不是一个构造函数，而是一组构造函数，代表不同的数据格式。
const buffer = new ArrayBuffer(12)
const x1 = new Int32Array(buffer)
x1[0] = 1
const x2 = new Uint8Array(buffer)
x2[0] = 2
console.log(x1[0])
//上面代码对同一段内存，分别建立两种视图：32 位带符号整数（Int32Array构造函数）和 8 位不带符号整数（Uint8Array构造函数）。由于两个视图对应的是同一段内存，一个视图修改底层内存，会影响到另一个视图。


//TypedArray视图的构造函数，除了接受ArrayBuffer实例作为参数，还可以接受普通数组作为参数，直接分配内存生成底层的ArrayBuffer实例，并同时完成对这段内存的赋值。
const typeArray = new Uint8Array([0, 1, 2])
console.log(typeArray.length);
typeArray[0] = 5
console.log(typeArray)

//ArrayBuffer实例有一个slice方法，允许将内存区域的一部分，拷贝生成一个新的ArrayBuffer对象。类似字符串截取
//除了slice方法，ArrayBuffer对象不提供任何直接读写内存的方法，只允许在其上方建立视图，然后通过视图读写。
const newBuffer = buf.slice(0, 3);

//ArrayBuffer有一个静态方法isView，返回一个布尔值，表示参数是否为ArrayBuffer的视图实例。这个方法大致相当于判断参数，是否为TypedArray实例或DataView实例。
console.log(ArrayBuffer.isView(buf));
console.log(ArrayBuffer.isView(buffer));
