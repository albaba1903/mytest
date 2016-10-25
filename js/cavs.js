//---- canvas 4
function canvas4Tu(){
	var player = new Object();
	player.imgArray=null,
	player.initLength=10,
	player.total=708,
	player.can=null,
	player.ctx=null,
	player.playIndex=0,
	player.timer=null,

	player.init=function (id){
		this.imgArray = new Array();
		this.can = document.getElementById(id);
		this.ctx = this.can.getContext('2d');	

        this.playIndex = 0;
		this.loadImg(0, this);
	},
	
	//显示
   player.disPlay=function(){

		if(this.imgArray[this.playIndex]==null) {
			clearInterval(this.timer);
			setTimeout(this.newTimer(this), 10000);
			return;
		}

		this.ctx.drawImage(this.imgArray[this.playIndex], 0, 0);
		this.playIndex++;
	},

    //开启定时
	player.newTimer=function(root){
		root.timer = setInterval(function(){
				root.disPlay();		
		},5);
	},

    //加载图片
	player.loadImg=function(i, root){
		var img = new Image();
		img.src = "frame/"+i+".jpg";

		if(i == root.initLength) {		
			root.timer = setInterval(function(){
				root.disPlay();		
			},5);
		}

		img.onload = function (){
			if(i < root.total) {
				i++
				root.imgArray.push(img);		
				root.loadImg(i, root);
			}
		}
	}

	return player;
};

function canvas_4(id){
	new canvas4Tu().init(id);
	//var can = document.getElementById(id);
	//var	cans = can.getContext('2d');	
	//var img = new Image();
	//img.src = "frame/708.jpg";
	

	//img.onload = function (){
	//	cans.drawImage(img, 0, 0);
	//}
}

//---- canvas 3
function canvas_3(id){
	new canvas4Tu().init(id);
	
}

function canvas_3_1(id, angle){
	var can = document.getElementById(id);
	var cans = can.getContext('2d');
	var W = can.width;
	var H = can.height;
	var deg=0,new_deg=0,dif=0;
	var loop, re_loop;
	var text,text_w;

	cans.clearRect(0,0,W,H);
	cans.beginPath();
	cans.strokeStyle="#333";
	cans.lineWidth=30;
	cans.arc(W/2,H/2,100,0,Math.PI*2,false);
	cans.stroke();
	
	var r = angle*Math.PI/180;
	cans.beginPath();
	cans.strokeStyle = "lightgreen";
	cans.lineWidth=30;
	cans.arc(W/2,H/2,100,0-90*Math.PI/180,r-90*Math.PI/180,false);
	cans.stroke();
	
	cans.fillStyle="#f00";
	cans.font="50px abc";
	text = Math.floor(angle/360*100)+"%";
	text_w = cans.measureText(text).width;
	cans.fillText(text,W/2 - text_w/2,H/2+15);
}

//---- canvas 2
function canvas_2(id){
	var angle = 0;
	setInterval(function(){
		canvas_2_1(id, angle);
        if(angle<360) {
			angle++;
		}  else {
			angle = 0;
		}      
    },10);
}

function canvas_2_1(id, angle){
	var can = document.getElementById(id);
	var cans = can.getContext('2d');
	var stop_x = 300;
	var stop_y = 300;
	var stop_r = 300;

	var center_x = 300-Math.sin(Math.PI*angle/180)*200;
	var center_y = 300+Math.cos(Math.PI*angle/180)*200;
	var center_r = 100;


	var gnt = cans.createRadialGradient(center_x,center_y,center_r,stop_x,stop_y,stop_r);
	gnt.addColorStop(1,'red');
	gnt.addColorStop(0,'green');
	cans.fillStyle = gnt;
	cans.fillRect(0,0,800,600); 
}

//---- canvas 1
function canvas_1(id){
	var can = document.getElementById(id);
	var cans = can.getContext('2d');
	var r = 200;
	var center_x = 300;
	var center_y = 300;
    
	cans.arc(center_x, center_y, r, 0, Math.PI*2, false);
	cans.fillStyle = '#ffcc00';
	cans.fill();
	cans.lineWidth=10;
	cans.strokeStyle = 'black';
	cans.stroke();

	var strDataURI = can.toDataURL("image/jpeg", 0.5);
	//console.log(strDataURI);
}