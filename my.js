// 设置属性、获取属性等主要js操作
		var box = document.getElementById('box');
		var divs = box.children;
		var btns = document.getElementById('btn');
		var btn = btns.children;
		var styleList = [
		{
			width: 800,
			height: 500,
			left: 200,
			top: 100,
			backgroundColor: pink,
			opacity: 100,
			z-index: 4
		},
		{
			width: 600,
			height: 375,
			left: 600,
			top: 70,
			backgroundColor: lightblue,
			opacity: 50,
			z-index: 3
		},
		{
			width: 400,
			height: 250,
			left: 750,
			top: 20,
			backgroundColor: lightgreen,
			opacity: 20,
			z-index: 2
		},
		{
			width: 400,
			height: 250,
			left: 50,
			top: 20,
			backgroundColor: orange,
			opacity: 20,
			z-index: 2
		},
		{
			width: 600,
			height: 375,
			left: 0,
			top: 70,
			backgroundColor: purple,
			opacity: 50,
			z-index: 3
		}];
		for(var i=0; i<5; i++){
			for(var k in styleList[i]){
				divs[i].style[k] = styleList[i][k];
			}
		}
		btn[0].addEventListener('click', function(){
			styleList.push(styleList.shift());
			setStyle(divs, styleList);
		});
		btn[1].addEventListener('click', function(){
			styleList.unshift(styleList.pop());
			setStyle(divs, styleList);
		});
		function setStyle(obj, attrs, fn){
			clearInterval(obj.timer);
			obj.timer = setInterval(function(){
				var flag = true;
				for(var k in attrs){
					var nowVal = 0;
					if(k === 'opacity'){
						nowVal = Math.round(getStyle(obj,k) * 100) || 100;
					}else{
						nowVal = parseInt(getStyle(obj,k)) || 0;
					}
					var step = (attrs[k] - nowVal) / 10;
					step = step > 0 ? Math.ceil(step) : Math.floor(step);
					nowVal = nowVal + step;
					if(k === 'opacity'){
						obj.style.opacity = nowVal / 100;
						obj.style.filter = 'alpha(opacity =' + nowVal +');'
					}else if(k === 'zIndex'){
						obj.style.zIndex = attrs[k];
					}else{
						obj.style[k] = nowVal + 'px';
					}
					if(attrs[k] != nowVal){
						flag = false;
					}
				}
				if(flag){
					clearInterval(obj.timer);
					if(fn){
						fn();
					}
				}
			}, 30);
		}
		function getStyle(obj, attr){
			if(obj.currentStyle){
				return obj.currentStyle[attr];
			}else{
				return window.getComputedStyle(obj,null)[attr];
			}
		}