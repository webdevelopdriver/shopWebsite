window.onload=function(){
	// showTime();
	function showTime(){
		var start=new Date();
	    var end=new Date("2017/1/9,16:4:0");
	    var leftTime=parseInt((end.getTime()-start.getTime())/1000);
	    var d=parseInt(leftTime/(60*60*24));
	    var h=parseInt((leftTime/(60*60*24)-d)*24);
	    // var h=parseInt(leftTime/(60*60)%24);
	    // var m=parseInt(leftTime/60%60);
	    var m=parseInt(((leftTime/(60*60*24)-d)*24-h)*60);
	    var s=parseInt((((leftTime/(60*60*24)-d)*24-h)*60-m)*60);
	    // var s=parseInt(leftTime%60);
	    if(document.getElementById("daojishi")){
	    	document.getElementById("daojishi").innerHTML="团购价还剩"+d+"天"+h+"时"+m+"分"+s+"秒结束";
	    }
	    if(leftTime<=0){
		document.getElementById("daojishi").innerHTML="开始找工作了";

	}
	}
	setInterval(showTime,500);
	
}
// js 原生方法
// function showMore(){
// 	document.getElementById("hidden_ul").style.display="block";
// 	document.getElementById("screen_more_a").innerHTML="收起";
// 	document.getElementById("screen_more_a").href="javascript:hidMore()";
// }
// function hidMore(){
// 	document.getElementById("hidden_ul").style.display="none";
// 	document.getElementById("screen_more_a").innerHTML="更多";
// 	document.getElementById("screen_more_a").href="javascript:showMore()";
// }


// jq方法
// $(function(){
// 	$("#screen_more_a").click(function(){
// 		$(this).text("收起");
// 		$("#hidden_ul").fadeToggle("slow");
// 	});
// });