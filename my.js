// 设置属性、获取属性等主要js操作
		var box = document.getElementById('box');
		var divs = box.children;
		var btns = document.getElementById('btn');
		var btn = btns.children;
		var styleList = [
		{
			"width": "70%",
			"height": "80%",
			"left": "15%",
			"top": "18%",
			"backgroundColor": "pink",
			"opacity": 1,
			"z-index": 1
		},
		{
			"width": "40%",
			"height": "50%",
			"left": "55%",
			"top": "10%",
			"backgroundColor": "lightblue",
			"opacity": 0.5,
			"z-index": 0
		},
		{
			"width": "20%",
			"height": "25%",
			"left": "60%",
			"top": "2%",
			"backgroundColor": "lightgreen",
			"opacity": 0.2,
			"z-index": -1
		},
		{
			"width": "20%",
			"height": "25%",
			"left": "20%",
			"top": "2%",
			"backgroundColor": "orange",
			"opacity": 0.2,
			"z-index": -1
		},
		{
			"width": "40%",
			"height": "50%",
			"left": "5%",
			"top": "10%",
			"backgroundColor": "purple",
			"opacity": 0.5,
			"z-index": 0
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
		function setStyle(obj, attrs){
			for(var attr in attrs[i]){
				if(attr == 'opacity' || attr == 'zIndex'){
					var nowVal = getStyle(obj[i], attr) * 100;
				}else{
					var nowVal = parseInt(getStyle(obj[i], attr));
				}
				var value = attrs[i][attr];
				var step = (value - nowVal) / 10;
				step = step ? Math.ceil(step) : Math.floor(step);
				obj[i].timer = setInterval(function(){
					nowVal = nowVal + step;
					if(attr == 'opacity' || attr == 'zIndex'){
						obj[i].style[attr] = nowVal / 100;
					}else{
						obj[i].style[attr] = nowVal + 'px';
					}
					if(value == nowVal){
						clearInterval(obj[i].timer);
					}
				}, 30);
			}
		}
		function getStyle(obj, attr){
			if(obj.currentStyle){
				return obj.currentStyle[attr];
			}else{
				return window.getComputedStyle(obj,null)[attr];
			}
		}