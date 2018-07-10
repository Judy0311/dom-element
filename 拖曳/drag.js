/*
* @Author: Marte
* @Date:   2018-06-04 16:35:26
* @Last Modified by:   Marte
* @Last Modified time: 2018-06-05 18:19:22
*/

'use strict';
var log = document.getElementById('login-log'),
    close = document.getElementById('login-close'),
    panel = document.getElementById("login-panel"),
    loginState=document.getElementById('loginState'),
    stateList=document.getElementById('loginStatePanel'),
    lis=stateList.getElementsByTagName('li'),
    stateTxt=document.getElementById('login2qq_state_txt'),
    loginStateShow=document.getElementById('loginStateShow');
window.onload = drag();
function drag(){
    panel.onmousedown = fndown;
    close.onclick =closed;
    loginState.onclick =  function(event){
        var e = event || window.event;
        stateList.style.display = 'block';
    }
    for (var i = 0; i < lis.length; i++) {
        lis[i].onmousemove = function(){
            this.style.backgroud = "red"
            this.style.color = "red"
        }
        lis[i].onmouseout = function(){
            this.style.backgroud = "#eee"
            this.style.color = "black"
        }
        lis[i].onclick = function() {
            stateList.style.display = "none"
        }
    }
}
function closed(){
    panel.style.display = 'none';
}
function fndown(event){
    var el = event || window.event;
    var disX = el.clientX - panel.offsetLeft;
    var dixY = el.clientY - panel.offsetTop;
    document.onmousemove = function(event){
        var e = event || window.event;
        fnmove(e,disX,dixY);
    }
    document.onmouseup =function(){
        document.onmousemove = null;
        document.onmoseup = null;
    }
}
function fnmove(e,disX,disY){
    var l = e.clientX - disX,
        t = e.clientY - disY,
        winW = document.body.clientWidth || document.documentElement.clientWidth,
        winH = document.body.clientHeight || document.documentElement.clientHeight,
        maxW = winW - panel.offsetWidth,
        maxH = winH - panel.offsetHeight;
    if(l>maxW){
        l = maxW;
    }else if(l<0){
        l = 0;
    }
    if(t<0){
        t = 0
    }else if(t>maxW){
        t = maxW;
    }
    panel.style.left = l + 'px';
    panel.style.top = t + 'px';
    document.title = t;
}