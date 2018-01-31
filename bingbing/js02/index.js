//数组
//concat 合并数组 array1.concat(array2,array3,...,arrayX)
let [a,b]= [[1,2,3],[4,5,6,7,8]];
let c =	a.concat(b);//a,b数组不变， c为合成
//copyWith()从数组的指定位置拷贝元素到数组的另一个指定位置中。array.copyWithin(target, start, end)
//c.copyWithin(1,2,4);
//every()array.every(function(currentValue,index,arr), thisValue);有一个不满足就返回false
//function Lt3(num){return num>=3;}
//let d = c.every(Lt3);//false;
//fill() 数组填充;array.fill(value, start, end)填充值，开始填充位置，结束填充位置
//let d = a.fill(5,2,5);
//filter() array.filter(function(currentValue,index,arr), thisValue)
//let d = c.filter(function(item,index){return item>3;});
//find() array.find(function(currentValue, index, arr),thisValue); //返回符合条件的第一个元素
//findIndex() array.find(function(currentValue, index, arr),thisValue);//返回符合条件的第一个元素索引
//let d = c.findIndex(function(i){return i>5;});
//forEach() array.forEach(function(currentValue, index, arr), thisValue) //方法用于调用数组的每个元素，并将元素传递给回调函数。
// c.forEach(function(v,i){console.log(i+"="+v) })
//includes 用来判断一个数组是否包含一个指定的值，如果是返回 true，否则false。arr.includes(searchElement) arr.includes(searchElement, fromIndex)
//let d = c.includes(4,3);
//indexOf() array.indexOf(item,start)indexOf() 方法可返回某个指定的字符串值在字符串中首次出现的位置。
//let d = c.indexOf(6);
//join() array.join(separator) 分隔符， 用于把数组中的所有元素转换一个字符串。
//let d = c.join('&');
//lastindexOf() array.lastIndexOf(item,start) 可返回一个指定的字符串值最后出现的位置，在一个字符串中的指定位置从后向前搜索。
//let d = c.lastIndexOf(3);
//map() array.map(function(currentValue,index,arr), thisValue) 返回一个新数组，数组中的元素为原始数组元素调用函数处理后的值。
//let d = c.map((v)=>{ return v*10})
//pop()  array.pop() 方法用于删除数组的最后一个元素并返回删除的元素。
//let d = c.pop();//c数组改变，d 为删除的元素
//push() array.push(item1, item2, ..., itemX) 可向数组的末尾添加一个或多个元素，并返回新的长度。
//let d = c.push(3,4,5,5,5,4) //返回的是数组长度， c已经改变
//reduce() array.reduce(function(total, currentValue, currentIndex, arr), initialValue)
//接收一个函数作为累加器，数组中的每个值（从左到右）开始缩减，最终计算为一个值。
//function getnum(t,i){return t*i;}
//let d = b.reduce(getnum,1)
//reduceRight() 方法的功能和 reduce() 功能是一样的，不同的是 reduceRight() 从数组的末尾向前将数组中的数组项做累加。
//reverse() array.reverse() 用于颠倒数组中元素的顺序。
//let d = c.reverse();
//shift() array.shift() 用于把数组的第一个元素从其中删除，并返回第一个元素的值。
//let d = c.shift();
//slice() array.slice(start, end) 从已有的数组中返回选定的元素。不包含结束位置
//let d = c.slice(3,4);
//some() array.some(function(currentValue,index,arr),thisValue) 检测数组中的元素是否满足指定条件（函数提供）。
//let d = c.some((v,i)=>{return v>4})
//sort() array.sort(sortfunction) 用于对数组的元素进行排序。参数可选，但必须是函数
//let e = [['a',10],['b',20],['c',40],['d',30]];
//function asc(a,b){return a[1]-b[1]>=0;}
//let d = e.sort(asc);
//splice() array.splice(index,howmany,item1,.....,itemX) 用于插入、删除或替换数组的元素。
//let d = c.splice(2,4,9,9,9,9);
//toString() array.toString() 可把数组转换为字符串，并返回结果。类似join()，链接符是逗号
//let d = c.toString();
//unshift() array.unshift(item1,item2, ..., itemX) 向数组的开头添加一个或更多元素，并返回新的长度。
//let d = c.unshift(0,00,0,000)
//valueOf() array.valueOf() 返回 Array 对象的原始值。
let d = c.valueOf();
console.log(d)

