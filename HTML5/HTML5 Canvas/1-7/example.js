var canvas = document.getElementById("canvas"),
	context = canvas.getContext("2d"),
	FONT_HEIGHT = 15,//字高
	MARGIN = 35,//边距
	HAND_TRUNCATION = canvas.width/25,//表的半径减掉指针长度的那部分基本指针长度
	HOUR_HAND_TRUNCATION = canvas.width/10,//时钟特有的多减掉一部分
	NUMERAL_SPACING = 20,//数字间距
	RADIUS = canvas.width/2 - MARGIN,//半径
	HAND_RADIUS = RADIUS + NUMERAL_SPACING;//指针半径（长）

var snapshotButton = document.getElementById("snapshotButton"),
	snapshotImageElement = document.getElementById("snapshotImageElement"),
	loop;

function drawCircle(){
	context.beginPath();
	context.arc(canvas.width/2, canvas.height/2, RADIUS, 0, Math.PI*2,true);//画以画布为中心，半径为RADIUS的圆
	context.stroke();
}

function drawNumerals(){
	var numerals = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 ],//表盘数字
		angle = 0,//角度
		numeralWidth = 0;
	numerals.forEach(function(numeral){//遍历整个数组
		angle = Math.PI/6*(numeral-3);//计算每个数字所在的位置角度
		numeralWidth = context.measureText(numeral).width;//获取字体的宽度
		context.fillText(numeral,
			canvas.width/2+Math.cos(angle)*(HAND_RADIUS)-numeralWidth/2,//通过三角函数计算计算相应数字的位置
			canvas.height/2 + Math.sin(angle)*(HAND_RADIUS)+FONT_HEIGHT/3);
	});
}

function drawCenter(){
	context.beginPath();
	context.arc(canvas.width/2,canvas.height/2,5,0,Math.PI*2,true);//画中心的圆点
	context.fill();
}

function drawHand(loc,isHour) {
	var angle = (Math.PI*2)*(loc/60) - Math.PI/2,
		handRadius = isHour ? RADIUS - HAND_TRUNCATION-HOUR_HAND_TRUNCATION//指针长度，时钟要短一些，最后一个时钟特有的。
							: RADIUS - HAND_TRUNCATION;//基本指针长度
	context.moveTo(canvas.width/2, canvas.height/2);//移到画布的中央，也就是钟心
	context.lineTo(canvas.width/2 + Math.cos(angle) * handRadius,//根据三角函数算出指针应该画到的坐标位置
					canvas.width/2 + Math.sin(angle) * handRadius);
	context.stroke();//画如画布
}

function drawHands(){
	var date = new Date(),
		hour = date.getHours();
	hour = hour > 12 ? hour-12 : hour;//变为12小时制
	drawHand(hour*5+(date.getMinutes()/60)*5,true,0.5);//画时针
	drawHand(date.getMinutes(),false,0.5);//画分针
	drawHand(date.getSeconds(),false,0.2);//画秒针
}

function drawClock(){
	context.clearRect(0,0,canvas.width,canvas.height);

	drawCircle();//画钟圆框
	drawNumerals();//画表盘数字
	drawHands();//画指针
	drawCenter();//画钟心的点
}

snapshotButton.onclick = function (e) {
	var dataUrl;
	if(snapshotButton.value === "Take snapshot"){
		dataUrl = canvas.toDataURL();
		clearInterval(loop);
		snapshotImageElement.src = dataUrl;
		snapshotImageElement.style.display = "inline";
		canvas.style.display = "none";
		snapshotButton.value = "Return to Canvas";
	} else {
		canvas.style.display = "inline";
		snapshotImageElement.style.display = "none";
		loop = setInterval(drawClock,1000);
		snapshotButton.value = "Take snapshot";
	}
}

context.font = FONT_HEIGHT + "px Arial";//设置字体
loop = setInterval(drawClock,1000);//动画间隔一秒钟刷新一次