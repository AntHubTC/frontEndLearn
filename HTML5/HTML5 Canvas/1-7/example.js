var canvas = document.getElementById("canvas"),
	context = canvas.getContext("2d"),
	FONT_HEIGHT = 15,//�ָ�
	MARGIN = 35,//�߾�
	HAND_TRUNCATION = canvas.width/25,//��İ뾶����ָ�볤�ȵ��ǲ��ֻ���ָ�볤��
	HOUR_HAND_TRUNCATION = canvas.width/10,//ʱ�����еĶ����һ����
	NUMERAL_SPACING = 20,//���ּ��
	RADIUS = canvas.width/2 - MARGIN,//�뾶
	HAND_RADIUS = RADIUS + NUMERAL_SPACING;//ָ��뾶������

var snapshotButton = document.getElementById("snapshotButton"),
	snapshotImageElement = document.getElementById("snapshotImageElement"),
	loop;

function drawCircle(){
	context.beginPath();
	context.arc(canvas.width/2, canvas.height/2, RADIUS, 0, Math.PI*2,true);//���Ի���Ϊ���ģ��뾶ΪRADIUS��Բ
	context.stroke();
}

function drawNumerals(){
	var numerals = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 ],//��������
		angle = 0,//�Ƕ�
		numeralWidth = 0;
	numerals.forEach(function(numeral){//������������
		angle = Math.PI/6*(numeral-3);//����ÿ���������ڵ�λ�ýǶ�
		numeralWidth = context.measureText(numeral).width;//��ȡ����Ŀ��
		context.fillText(numeral,
			canvas.width/2+Math.cos(angle)*(HAND_RADIUS)-numeralWidth/2,//ͨ�����Ǻ������������Ӧ���ֵ�λ��
			canvas.height/2 + Math.sin(angle)*(HAND_RADIUS)+FONT_HEIGHT/3);
	});
}

function drawCenter(){
	context.beginPath();
	context.arc(canvas.width/2,canvas.height/2,5,0,Math.PI*2,true);//�����ĵ�Բ��
	context.fill();
}

function drawHand(loc,isHour) {
	var angle = (Math.PI*2)*(loc/60) - Math.PI/2,
		handRadius = isHour ? RADIUS - HAND_TRUNCATION-HOUR_HAND_TRUNCATION//ָ�볤�ȣ�ʱ��Ҫ��һЩ�����һ��ʱ�����еġ�
							: RADIUS - HAND_TRUNCATION;//����ָ�볤��
	context.moveTo(canvas.width/2, canvas.height/2);//�Ƶ����������룬Ҳ��������
	context.lineTo(canvas.width/2 + Math.cos(angle) * handRadius,//�������Ǻ������ָ��Ӧ�û���������λ��
					canvas.width/2 + Math.sin(angle) * handRadius);
	context.stroke();//���续��
}

function drawHands(){
	var date = new Date(),
		hour = date.getHours();
	hour = hour > 12 ? hour-12 : hour;//��Ϊ12Сʱ��
	drawHand(hour*5+(date.getMinutes()/60)*5,true,0.5);//��ʱ��
	drawHand(date.getMinutes(),false,0.5);//������
	drawHand(date.getSeconds(),false,0.2);//������
}

function drawClock(){
	context.clearRect(0,0,canvas.width,canvas.height);

	drawCircle();//����Բ��
	drawNumerals();//����������
	drawHands();//��ָ��
	drawCenter();//�����ĵĵ�
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

context.font = FONT_HEIGHT + "px Arial";//��������
loop = setInterval(drawClock,1000);//�������һ����ˢ��һ��