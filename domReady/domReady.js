/*
* @Author: Marte
* @Date:   2018-05-30 10:59:39
* @Last Modified by:   Marte
* @Last Modified time: 2018-05-30 16:31:51
*/

'use strict';
alert('1111');
function myReady (fn){
    //fn是回调函数
    //在现代浏览器实现domReady
    if(document.addEventListener){
        //通过能力检测来判断浏览器
        document.addEventListener('onContentLoaded',fn,false)
        //false表示在冒泡阶段捕获
    }else{
        IEContentLoaded(fn)
    }

    //在IE环境下模拟domReady
    var dom = window.document
    function IEContentLoaded(fn){
        //只实现用户执行一次的函数init
        var init = function() {
            var done = false;
            if(!done){
                done = true;
                fn();
            }
        }
        //监听document的加载状态
        dom.onreadystatechange = function(){
            //如果是domReady之后实现的，马上执行
            if(dom.readyState == 'complete'){
                onreadystatechange = null;
                init();
            }else{
                (function(){
                    try{
                        dom.documentElement.doSroll('left');
                    }catch(e){
                        setTimeout(arguments.callee,50)
                        return      //实现递归
                    }
                    init();
                }();                //立即创建函数
            }
        }
    }
}