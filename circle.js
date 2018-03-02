onload=function() {
	var canvas=document.getElementById('c1');
	var stage;
	if(canvas.getContext) {
		stage=new createjs.Stage(canvas);
		var circle=canvas.getContext('2d');
		var startAngle=0;
		var endAngle=Math.PI*2;
		var antiClockWise=false;
	}
	function circleCreate() {
		var xCord=Math.floor(Math.random()*1350)+1;
		var yCord=Math.floor(Math.random()*781)+1;
		var radius=Math.floor(Math.random()*30)+1;
		circle.beginPath();
		circle.arc(xCord,yCord,radius,startAngle,endAngle,antiClockWise);
		circle.strokeStyle=colorCreate();
		circle.fillStyle=colorCreate();
		circle.fill();
		console.log(colorCreate());
	}
	function colorCreate() {
		var color;
		color='#'+Math.floor(Math.random()*0xFFFFFF).toString(16);
		return color;
	}
	function circleTimer() {
		var timer=setTimeout(function(){
			circleCreate();
			circleTimer();
		},300);
	}
	circleTimer();
}