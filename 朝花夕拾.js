$.ajax({
	type: "get",
	url: "http://127.0.0.1:8080/zhaohuaxishi",
	async: true,
	success: function(data) {
		var objData = JSON.parse(data);

		//第一句话
		var op1 = objData.wenzi1;
		var op1 = '<span>' + op1 + '</span>'
		$('.op1').html(op1)

		//第一张图片
		var con1 = objData.img1;
		var con1 = '<img src="img/img-朝花夕拾/' + con1 + '"/>'
		$('.con1').html(con1);

		//第二句话
		var op2 = objData.wenzi2;
		var op2 = '<span>' + op2 + '</span>'
		$('.con2').html(op2)

		//多张图片
		var con3 = objData.img2;
		var con31 = "";
		for(var i in con3) {
			con31 += '<div><img src="img/img-朝花夕拾/' + con3[i] + '"/></div>'
		}
		$('.con3').html(con31)

		//作者的话
		var con4 = objData.wenzi3;
		var con41 = "";
		for(var i in con4) {
			con41 += '<div>' + con4[i] + '</div>';
		}
		$('.con4').html(con41);

		var con5 = objData.wenzi4;
		var con51 = "";
		for(var i in con5) {
			con51 += '<div>' + con5[i] + '</div>';
		}
		$('.con5').html(con51);

		var con6 = objData.btnstr;
		var con61 = "";
		for(var i in con6) {
			con61 += '<div><img src="img/img-朝花夕拾/' + con6[i].img + '"/><p>' + con6[i].title + '</p></div>';
		}
		$('.con6').html(con61);

		var con7 = objData.wenzi5;
		var con71 = "";
		for(var i in con7) {
			con71 += '<p>' + con7[i] + '</p>';
		}

		$('.con7').html(con71);
//壳小杀
var con8=objData.wenzi6;
var con81="";
for (var i in con8) {
	con81+='<img src="img/img-朝花夕拾/'+con8[i].img+'"/><span>'+con8[i].title1+'</span><div>'+con8[i].title2+'</div>'
}
$('.con8').html(con81);


var con9=objData.wenzi7;
var con91="";
for (var i in con9) {
	con91+='<img src="img/img-朝花夕拾/'+con9[i].img+'"/><span>'+con9[i].title1+'</span><div>'+con9[i].title2+'</div>'
}
$('.con9').html(con91);

var son1=objData.wenzi8;
var son1='<span>'+son1+'</span>';
$('.son1').html(son1);


//评论区

//左边
var tu11=objData.tu1;
var tu11='<img src="img/img-朝花夕拾/'+tu11+'"/>';
$('.tu .tu-left').html(tu11);


//右边
var tu12=objData.tu11;
var tu13="";
for (var i in tu12) {
	tu13+='<div>'+tu12[i]+'</div>';
}
$('.tu .tu-right').html(tu13);

//关于举报
var tu2=objData.tu12;
var tu22="";
for (var i in tu2) {
	tu22+='<div>'+tu2[i]+'</div>';
}
$('.tu1').html(tu22);
//*******************************************************

//左边
var tu21=objData.tu2;
var tu22='<img src="img/img-朝花夕拾/'+tu21+'"/>';
$('.tu2 .tu2-left').html(tu22);


//右边
var tu211=objData.tu21;
var tu212="";
for (var i in tu211) {
	tu212+='<div>'+tu211[i]+'</div>';
}
$('.tu2 .tu2-right').html(tu212);

//关于举报
var tu2=objData.tu12;
var tu22="";
for (var i in tu2) {
	tu22+='<div>'+tu2[i]+'</div>';
}
$('.tu2-p1').html(tu22);

//**********************************************************

//左边
var tu31=objData.tu3;
var tu32='<img src="img/img-朝花夕拾/'+tu31+'"/>';
$('.tu3 .tu3-left').html(tu32);


//右边
var tu311=objData.tu31;
var tu312="";
for (var i in tu311) {
	tu312+='<div>'+tu311[i]+'</div>';
}
$('.tu3 .tu3-right').html(tu312);

//关于举报
var tu=objData.tu32;
var tu32="";
for (var i in tu) {
	tu32+='<div>'+tu[i]+'</div>';
}
$('.tu3-p1').html(tu32);
//***************************************************************

//左边
var tu41=objData.tu4;
var tu42='<img src="img/img-朝花夕拾/'+tu41+'"/>';
$('.tu4 .tu4-left').html(tu42);


//右边
var tu411=objData.tu41;
var tu412="";
for (var i in tu411) {
	tu412+='<div>'+tu411[i]+'</div>';
}
$('.tu4 .tu4-right').html(tu412);

//关于举报
var tu=objData.tu42;
var tu42="";
for (var i in tu) {
	tu42+='<div>'+tu[i]+'</div>';
}
$('.tu4-p1').html(tu42);


//***************************************************************

//左边
var tu51=objData.tu5;
var tu52='<img src="img/img-朝花夕拾/'+tu51+'"/>';
$('.tu5 .tu5-left').html(tu52);


//右边
var tu511=objData.tu51;
var tu512="";
for (var i in tu511) {
	tu512+='<div>'+tu511[i]+'</div>';
}
$('.tu5 .tu5-right').html(tu512);

//关于举报
var tu=objData.tu52;
var tu52="";
for (var i in tu) {
	tu52+='<div>'+tu[i]+'</div>';
}
$('.tu5-p1').html(tu52);

//***************


//左边
var tu61=objData.tu6;
var tu62='<img src="img/img-朝花夕拾/'+tu61+'"/>';
$('.tu6 .tu6-left').html(tu62);


//右边
var tu611=objData.tu61;
var tu612="";
for (var i in tu611) {
	tu612+='<div>'+tu611[i]+'</div>';
}
$('.tu6 .tu6-right').html(tu612);

//关于举报
var tu=objData.tu62;
var tu62="";
for (var i in tu) {
	tu62+='<div>'+tu[i]+'</div>';
}
$('.tu6-p1').html(tu62);

//***************


//左边
var tu71=objData.tu7;
var tu72='<img src="img/img-朝花夕拾/'+tu71+'"/>';
$('.tu7 .tu7-left').html(tu72);


//右边
var tu711=objData.tu71;
var tu712="";
for (var i in tu711) {
	tu712+='<div>'+tu711[i]+'</div>';
}
$('.tu7 .tu7-right').html(tu712);

//关于举报
var tu=objData.tu72;
var tu72="";
for (var i in tu) {
	tu72+='<div>'+tu[i]+'</div>';
}
$('.tu7-p1').html(tu72);

//***************


//左边
var tu81=objData.tu8;
var tu82='<img src="img/img-朝花夕拾/'+tu81+'"/>';
$('.tu8 .tu8-left').html(tu82);


//右边
var tu811=objData.tu81;
var tu812="";
for (var i in tu811) {
	tu812+='<div>'+tu811[i]+'</div>';
}
$('.tu8 .tu8-right').html(tu812);

//关于举报
var tu=objData.tu82;
var tu82="";
for (var i in tu) {
	tu82+='<div>'+tu[i]+'</div>';
}
$('.tu8-p1').html(tu82);


//***************


//左边
var tu91=objData.tu9;
var tu92='<img src="img/img-朝花夕拾/'+tu91+'"/>';
$('.tu9 .tu9-left').html(tu92);


//右边
var tu911=objData.tu91;
var tu912="";
for (var i in tu911) {
	tu912+='<div>'+tu911[i]+'</div>';
}
$('.tu9 .tu9-right').html(tu912);

//关于举报
var tu=objData.tu92;
var tu92="";
for (var i in tu) {
	tu92+='<div>'+tu[i]+'</div>';
}
$('.tu9-p1').html(tu92);

//***************


//左边
var tu101=objData.tu10;
var tu102='<img src="img/img-朝花夕拾/'+tu101+'"/>';
$('.tu10 .tu10-left').html(tu102);


//右边
var tu1011=objData.tu101;
var tu1012="";
for (var i in tu1011) {
	tu1012+='<div>'+tu1011[i]+'</div>';
}
$('.tu10 .tu10-right').html(tu1012);

//关于举报
var tu=objData.tu102;
var tu102="";
for (var i in tu) {
	tu102+='<div>'+tu[i]+'</div>';
}
$('.tu10-p1').html(tu102);

//查看更多评论
var ck=objData.btn;
var ck='<div>'+ck+'</div>';
$('.ck').html(ck);


	}
});


//点击事件
$('.header .header-left').tap(function(){
	window.location.href="#";
})
$('.header .header-right').tap(function(){
	window.location.href="#";
})
