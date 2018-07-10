/*
* @Author: Marte
* @Date:   2018-06-06 14:05:36
* @Last Modified by:   Marte
* @Last Modified time: 2018-06-06 15:23:53
*/

'use strict';
var data = ['ipad','iphone','100元代金券','50元话费','笔记本','打印机','谢谢参与'],
    timer = null,
    flag = 0;

window.onload = function(){
    var play = document.getElementById('play'),
        stop = document.getElementById('stop');
    play.onclick = playfn;
    stop.onclick = stopfn;
    document.onkeyup = function(e){
        var e = e || window.event;
        if(e.keyCode == 32){
            if(flag == 0){
                playfn();
                flag = 1;
            }else{
                stopfn();
                flag = 0;
            }
        }
    }

}

function playfn(){
    var title = document.getElementById('title'),
        self = this;
    timer = setInterval(function(){
        var index = Math.floor(Math.random() * data.length);
        title.innerHTML = data[index]
    },50);
    play.style.background = "#999";
}

function stopfn(){
    clearInterval(timer);
    play.style.background = "#036"
}