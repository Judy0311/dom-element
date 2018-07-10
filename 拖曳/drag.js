/*
* @Author: Marte
* @Date:   2018-06-04 16:35:26
* @Last Modified by:   Marte
* @Last Modified time: 2018-06-06 10:23:12
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
function getByClass(clsName,parent){
    var oParent = parent?document.getElementById(parent) : document,
        eles = [],
        elements = oParent.getElementsByTagName('*');
        for(let i=0;i<elements.length;i++){
            if(elements[i].className == clsName){
                eles.push(elements[i]);
            }
        }
        return eles;
}
window.onload = drag();
function drag(){
    panel.onmousedown = fndown;
    close.onclick =closed;
    loginState.onclick =  function(event){
        var e = event || window.event;
        if(e.stopPropagation){
            e.stopPropagation();
        }else{
            e.cancelBubble = true;
        }
        stateList.style.display = 'block';
    }
    for(let i=0;i<lis.length;i++){
        lis[i].onmouseover = function(){
            this.style.background = '#567';
        }
        lis[i].onmouseout = function(){
            this.style.background = "#eee"
        }
        lis[i].onclick = function(e){
            var id = this.id,
                e = e || window.event;
            if(e.stopPropagation){
                e.stopPropagation();
            }else{
                e.cancelBubble = true;
            }
            stateList.style.display = 'none';
            stateTxt.innerHTML = getByClass('stateSelect_text',id)[0].innerHTML;
            loginStateShow.className = "";
            loginStateShow.className = 'login-state-show ' + id;
        }
    }
    document.onclick = function(){
        stateList.style.display = 'none';
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