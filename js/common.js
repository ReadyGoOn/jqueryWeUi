/**
 * 1.运动封装  startMove(obj,json,fnEnd)
 * 2.获取元素的样式  getStyle(obj,name)
 * 3.添加类 addClass(obj, cls)
 * 4.删除类 removeClass(obj, cls)
 * 5.判断是否包含类 hasClass(obj, cls)
 * 
 * 
 * 
 * 
 * 
 * 
 **/






/* 
- obj 指的是DOM对象 
- json 指的是 CSS样式 
- 例 startMove(oDiv,{width:100,height:100},function(){}) 
*/  

function startMove(obj,json,fnEnd){  
    clearInterval(obj.timer);   //先清除之前的定时器  
    obj.timer = setInterval(function(){  
        var bStop = true;   // 假设所有的值都到了  
        for( var attr in json ){    //遍历json属性  
            var cur = (attr == 'opacity') ? Math.round(parseFloat(getStyle(obj,attr))*100) : parseInt(getStyle(obj,attr)); //对opacity 特殊处理  
            var speed = (json[attr] - cur)/6;  
            speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);    //speed 数字转化，防止不能到达目标的bug  
            if( cur != json[attr]) bStop = false;   //如果没有达到目标值，则bStop设为false;  
            if(attr == 'opacity'){  
                obj.style.filter = 'alpha(opacity='+ (cur + speed) +')';  
                obj.style.opacity = (cur + speed)/100;  
            }else{  
                obj.style[attr] = cur + speed + 'px';     
            }     
        }  
        if(bStop){  
            clearInterval(obj.timer);  
            if(fnEnd) fnEnd();   //执行回调函数  
        }  
    },30);  
}  
  
function getStyle(obj,name){  
    return obj.currentStyle ? obj.currentStyle[name] : window.getComputedStyle(obj,null)[name]; //浏览器兼容性处理，注意getComputedStyle为只读属性  
}  
  
// function getByClass(oParent,sClass){  
//     var aEle = oParent.getElementsByTagName('*');  
//     var aResult =[];  
//     var re = new RegExp('\\b' + sClass + '\\b','i');  
//     for(var i=0; i<aEle.length;i++ ){  
//         if(re.test(aEle[i].className)) aResult.push(aEle[i]);  
//     }  
//     return aResult;  
// }  

function addClass(obj, cls){
  var obj_class = obj.className,//获取 class 内容.
  blank = (obj_class != '') ? ' ' : '',//判断获取到的 class 是否为空, 如果不为空在前面加个'空格'.
  added = obj_class + blank + cls;//组合原来的 class 和需要添加的 class.
  obj.className = added;//替换原来的 class.
}
  
function removeClass(obj, cls){
  var obj_class = ' '+obj.className+' ';//获取 class 内容, 并在首尾各加一个空格. ex) 'abc    bcd' -> ' abc    bcd '
  obj_class = obj_class.replace(/(\s+)/gi, ' '),//将多余的空字符替换成一个空格. ex) ' abc    bcd ' -> ' abc bcd '
  removed = obj_class.replace(' '+cls+' ', ' ');//在原来的 class 替换掉首尾加了空格的 class. ex) ' abc bcd ' -> 'bcd '
  removed = removed.replace(/(^\s+)|(\s+$)/g, '');//去掉首尾空格. ex) 'bcd ' -> 'bcd'
  obj.className = removed;//替换原来的 class.
}
  
function hasClass(obj, cls){
  var obj_class = obj.className,//获取 class 内容.
  obj_class_lst = obj_class.split(/\s+/);//通过split空字符将cls转换成数组.
  x = 0;
  for(x in obj_class_lst) {
    if(obj_class_lst[x] == cls) {//循环数组, 判断是否包含cls
      return true;
    }
  }
  return false;
}







module.exports = {
    startMove:startMove,
    getStyle:getStyle,
    addClass:addClass,
    removeClass:removeClass,
    hasClass:hasClass
}