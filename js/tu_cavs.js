function guyoufengxian(id, num1, num2, num3, num4, num5){
	var can = $$(id);
	var cans = can.getContext('2d');
	var center_x = 300;
	var center_y = 200;
	var center_r = 150;
	
	cans.fillStyle="#ffffff";
	cans.fillRect(0,0,600,400);

	//第一线 原辅材料
	cans.moveTo(center_x, center_y);
	cans.lineTo(center_x, center_y-center_r);
	//第二线 企业规模
	cans.moveTo(center_x, center_y);
	cans.lineTo(center_x+Math.sin(Math.PI*72/180)*center_r, center_y-Math.cos(Math.PI*72/180)*center_r);
	//第三线 生产工艺
	cans.moveTo(center_x, center_y);
	cans.lineTo(center_x+Math.sin(Math.PI*36/180)*center_r, center_y+Math.cos(Math.PI*36/180)*center_r);
	//第四线 周边环境
	cans.moveTo(center_x, center_y);
	cans.lineTo(center_x-Math.sin(Math.PI*36/180)*center_r, center_y+Math.cos(Math.PI*36/180)*center_r);
	//第五线 产业政策
	cans.moveTo(center_x, center_y);
	cans.lineTo(center_x-Math.sin(Math.PI*72/180)*center_r, center_y-Math.cos(Math.PI*72/180)*center_r);
	
	cans.lineWidth=1;
	cans.strokeStyle = 'black';
	cans.stroke();

	cans.fillStyle="#000000";
	cans.font="bold 20px 宋体";
	cans.fillText("固有风险",80,40);
	cans.fillText("原辅材料",310,40);
	cans.fillText("企业规模",452,144)
	cans.fillText("生产工艺",398,341);;
	cans.fillText("周边环境",128,341);
	cans.fillText("产业政策",80,144);

	cans.lineWidth=1;
	cans.strokeStyle = 'black';
	cans.stroke();

	createPolygonPath(cans, num1, num2, num3, num4, num5, '#ffcc00');
}

function guanlifengxian(id, num1, num2, num3, num4, num5){
	var can = $$(id);
	var cans = can.getContext('2d');
	var center_x = 300;
	var center_y = 200;
	var center_r = 150;

	cans.fillStyle="#ffffff";
	cans.fillRect(0,0,600,400);
	//第一线 风险防控措施
	cans.moveTo(center_x, center_y);
	cans.lineTo(center_x, center_y-center_r);
	//第二线 环境应急管理
	cans.moveTo(center_x, center_y);
	cans.lineTo(center_x+Math.sin(Math.PI*72/180)*center_r, center_y-Math.cos(Math.PI*72/180)*center_r);
	//第三线 环保设施运行情况
	cans.moveTo(center_x, center_y);
	cans.lineTo(center_x+Math.sin(Math.PI*36/180)*center_r, center_y+Math.cos(Math.PI*36/180)*center_r);
	//第四线 基础环境管理
	cans.moveTo(center_x, center_y);
	cans.lineTo(center_x-Math.sin(Math.PI*36/180)*center_r, center_y+Math.cos(Math.PI*36/180)*center_r);
	//第五线 化学品管理
	cans.moveTo(center_x, center_y);
	cans.lineTo(center_x-Math.sin(Math.PI*72/180)*center_r, center_y-Math.cos(Math.PI*72/180)*center_r);

	cans.lineWidth=1;
	cans.strokeStyle = 'black';
	cans.stroke();

	cans.fillStyle="#000000";
	cans.font="bold 20px 宋体";
	cans.fillText("管理风险",80,40);

	cans.fillText("风险防控措施",310,40);
	cans.fillText("环境应急管理",452,144);
	cans.fillText("环保设施运行情况",398,341);
	cans.fillText("基础环境管理",128,341);
	cans.fillText("化学品管理",50,144);	

	cans.lineWidth=1;
	cans.strokeStyle = 'black';
	cans.stroke();

	createPolygonPath(cans, num1, num2, num3, num4, num5, '#66ff66');
}


function createPolygonPath(context, num1, num2, num3, num4, num5, color) {  
   var points = getPoints(num1, num2, num3, num4, num5);  

  
   context.beginPath();  
   context.moveTo(points[0].x, points[0].y);  
   context.lineTo(points[1].x, points[1].y);  
   context.lineTo(points[2].x, points[2].y);  
   context.lineTo(points[3].x, points[3].y);  
   context.lineTo(points[4].x, points[4].y);  
   context.closePath();  
   context.fillStyle = color;
   context.fill();
   context.strokeStyle = '#e8e8e8';
   context.stroke();
}  

function getPoints(num1, num2, num3, num4, num5){
	var xishuo = 1.5;
	var points = [];  
    
	points.push(new Point(300, 200-num1*xishuo));

	points.push(new Point(300+Math.sin(Math.PI*72/180)*num2*xishuo, 200-Math.cos(Math.PI*72/180)*num2*xishuo));
	
	points.push(new Point(300+Math.sin(Math.PI*36/180)*num3*xishuo, 200+Math.cos(Math.PI*36/180)*num3*xishuo));
	
	points.push(new Point(300-Math.sin(Math.PI*36/180)*num4*xishuo, 200+Math.cos(Math.PI*36/180)*num4*xishuo));

	points.push(new Point(300-Math.sin(Math.PI*72/180)*num5*xishuo, 200-Math.cos(Math.PI*72/180)*num5*xishuo));

	return points;
}

Point = function (x, y) {  
       this.x = x;  
       this.y = y;  
}

//-------------------------分析
function fengxianfenxi(id, glfxMark, gyfxMark){
	var can = $$(id);
	var cans = can.getContext('2d');
	
	cans.fillStyle="#ffffff";
	cans.fillRect(0,0,700,600);
	//y轴
	cans.moveTo(50, 550);
	cans.lineTo(50, 100);
	//箭头
	cans.lineTo(40, 110);
	cans.moveTo(50, 100);
	cans.lineTo(60, 110);
    //x轴
	cans.moveTo(50, 550);
	cans.lineTo(500, 550);
	//箭头
	cans.lineTo(490, 540);
	cans.moveTo(500, 550);
	cans.lineTo(490, 560);

	cans.fillStyle="#000000";
	cans.font="bold 20px 宋体";
	cans.fillText("水平线代表固有风险程度，随红色加深而增大",250,40);
	cans.fillText("垂直线代表管理风险程度，随绿色加深而增大",250,70);
	cans.fillText("两线交点代表环境风险得分",250,100);
	cans.lineWidth=2;
	cans.strokeStyle = 'black';
	cans.stroke();

	//xy轴标签
	cans.fillStyle="#000000";
	cans.font="bold 25px 黑体";
	cans.fillText("管理风险",380,580);
	cans.fillText("固",15,150);
	cans.fillText("有",15,180);
	cans.fillText("风",15,210);
	cans.fillText("险",15,240);
	cans.lineWidth=2;
	cans.stroke();

    

	
   	//矩形
	createRectangle(cans, 65, 135);
    
	//斜线
	drawXieLine(cans, 30, "#FFFFFF");
    drawXieLine(cans, 50, "#00FF00");
    drawXieLine(cans, 70, "#FF0000");
	drawXieLine(cans, 90, "#000000");
	
	//斜线标签
    cans.fillStyle="#ffffff";
	cans.font="bold 18px 宋体";
	cans.fillText("一级（低）", 90, 490);
	cans.fillText("二级（一般）", 140, 445);
	cans.fillText("三级（中等）", 190, 390);
	cans.fillText("四级（较高）", 240, 335);
	cans.fillText("五级（高）", 290, 280);
	cans.lineWidth=2;
	cans.stroke();


    //直线
	drawXLine(cans, glfxMark, "#000000");
	drawYLine(cans, gyfxMark, "#000000");
}

//矩形
function createRectangle(cans, x, y){   
	var scan = 400/255;
	for(var g=0;g<=255;g++) {
		for(var r=255;r>=0;r--) {
			cans.beginPath();
			cans.arc(x+r*scan, y+g*scan, 1*scan, 0, Math.PI*2, false);
			cans.lineWidth=1*scan;
			cans.strokeStyle="rgb("+r+", "+g+", 0)";
			cans.stroke();
		}
	}
}

//画斜线
function drawXieLine(cans, s, color){	
	cans.beginPath();
	var scan = 400;
	var xscan = 65;
	var fenge = 2;
	var yscan = 540;

	//第一点
    // s*scan = y * 100 + x*50;
	//x+2y=(s*scan)/50;
	// y = (((s*scan)/50)-x)/2;

	var x1 = 0 - fenge;
	var y1 = (((s*scan)/50)-x1)/2;

	//console.log("x1:"+x1+" y1:"+y1);
	cans.moveTo(x1 + xscan, yscan - y1);

	var x2 = 400 + fenge;
	var y2 = (((s*scan)/50)-x2)/2;
	if(y2<0) {
		y2=0;
		x2 = (s*scan)/50;
	}

	//console.log("x2:"+x2+" y2:"+y2);

	cans.lineTo(x2 + xscan, yscan - y2);
	cans.strokeStyle = color;
	cans.stroke();
}

//画X直线
function drawXLine(cans, y, color){	
	cans.beginPath();
	var scan = 400;
	var fenge = 30;
	var xscan = 60;
	var partten = 10;
	var yscan = 540;

    y = (y*scan)/255;
	//console.log(y);
	//第一点
	var x1 = 0 - fenge;
    var y1 = y;
    var x2 = 400 + fenge;
    var y2 = y;
    
	cans.dashedLineTo(x1 + xscan, yscan - y1, x2 + xscan, yscan - y2, partten); 
	cans.strokeStyle = color;
	cans.stroke();
}

function drawYLine(cans, x, color){	
	cans.beginPath();
	var scan = 400;
	var fenge = 30;
	var partten = 10;
	var xscan = 60;
	var yscan = 540;

    x = (x*scan)/255;
	//第一点
	var x1 = x;
    var y1 = 0 - fenge;
    var x2 = x;
    var y2 = 400 + fenge;

	cans.dashedLineTo(x1 + xscan, yscan - y1, x2 + xscan, yscan - y2, partten);  	
	cans.strokeStyle = color;
	cans.stroke();
}

function $$(id){
    return document.getElementById(id);
}
