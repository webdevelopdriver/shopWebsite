
window.onload = function() {
    var timer = null;
    var back = document.getElementById("backtop");
    var isTop = true;
    // 获得第一屏幕可视区域的高度
    var clientHeight = document.documentElement.clientHeight;
    // 滚动条滚动时触发
    window.onscroll = function() {
        var top = document.documentElement.scrollTop || document.body.scrollTop;
        if (top >= clientHeight) {
            back.style.display = "block";
        } else {
            back.style.display = "none";
        }
        if (!isTop) {
            clearInterval(timer);
        }
        isTop = false;
    }
    back.onclick = function() {
        // 设置定时器，每隔30ms自动滚动
        timer = setInterval(function() {
            // 获取滚动条的高度
            var top = document.documentElement.scrollTop || document.body.scrollTop;
            var speed = Math.floor(-top / 5);
            isTop = true;
            document.documentElement.scrollTop = document.body.scrollTop = top + speed;
            if (top == 0) {
                clearInterval(timer);
            }
        }, 30);
    }
}

// 首页商品分类hover效果
$(function() {
    $(".shop_class_item").hover(function() {
        $(".shop_class_list").css("display", "block");
        $(this).addClass("shop_class_active").siblings().removeClass("shop_class_active");
    }, function() {
        $(".shop_class_list").css("display", "none");
        $(this).removeClass("shop_class_active");
    });
    $(".shop_class_list").hover(function() {
        $(this).css("display", "block");
    }, function() {
        $(this).css("display", "none");
    });
});




// 轮播图效果

$(function() {
    var i = 0;
    var clone = $(".img01 li").first().clone();
    $(".img01").append(clone);
    var size = $(".img01 li").size();
    for (j = 0; j < size - 1; j++) {
        $(".small01").append("<li></li>");
    }
    $(".small01 li").first().addClass("on");
    $(".btn101").click(function() {
        moveL();
    });
    $(".btn201").click(function() {
        moveR();
    });

    var timer = setInterval(moveL, 2000);

    $(".small01 li").hover(function() {
        var index = $(this).index();
        // i=index;
        $(".img01").stop().animate({ left: -index * 810 }, 300);
        $(this).addClass("on").siblings().removeClass("on");
    });
    $(".banner01").hover(function() {
        clearInterval(timer);
    }, function() {
        timer = setInterval(moveL, 2000);
    });


    function moveL() {
        i++;
        if (i == size) {
            $(".img01").css({ left: 0 });
            i = 1;
        }
        $(".img01").stop().animate({ left: -i * 810 }, 300);
        if (i == size - 1) {
            $(".small01 li").eq(0).addClass("on").siblings().removeClass("on");
        } else {
            $(".small01 li").eq(i).addClass("on").siblings().removeClass("on");
        }

    }

    function moveR() {
        i--;
        if (i == -1) {
            $(".img01").css({ left: -(size - 1) * 810 });
            i = size - 2;
        }
        $(".img01").stop().animate({ left: -i * 810 }, 300);
        $(".small01 li").eq(i).addClass("on").siblings().removeClass("on");
    }
});


// 筛选页“送至”效果


$(function(){
	$(".address").click(function(){
		$(".address_more").slideToggle("slow");
	});
});





// 瀑布流效果
window.onload=function(){
	waterfall("show_con","show_con_list");
};

function waterfall(parent,children){
	// 降show_con下面的所有的show_con_list取出来
	var oParent=document.getElementById(parent);
	var oChildren=getClassName(oParent,children);
	// 计算页面的列数    
	var oChildrenWidth=oChildren[0].offsetWidth;
	var cols=Math.floor(810/oChildrenWidth);
	// 设置show_con的宽度
	oParent.style.cssText="width:"+cols*oChildrenWidth+"px;margin:0 auto";
	// $(oParent).css({"width":cols*oChildrenWidth,"margin":"0 auto"});
	// 存放每一列的高度的数组
	var heightArr=[];
	for(var i=0;i<oChildren.length;i++){
		if(i<cols){
			heightArr.push(oChildren[i].offsetHeight);
		}else{
			var minHeight=Math.min.apply(null,heightArr);
			var index=getMinHeightIndex(heightArr,minHeight);
			oChildren[i].style.position="absolute";
			oChildren[i].style.top=minHeight+"px";
			oChildren[i].style.left=index*oChildrenWidth+"px";
			heightArr[index]+=oChildren[i].offsetHeight;
		}
	}
}

function getClassName(parent,children){
	// 用来存储所有classname为show_con_list的数组
	var showArr=new Array();  
	// 获取所有父元素下的子元素
	var oElement=document.getElementsByTagName("*");
	for(i=0;i<oElement.length;i++){
		if(oElement[i].className==children){
			// 把符合条件的元素加到指定数组里面
			showArr.push(oElement[i]);
		}
	}
	return showArr;
}
// 获取一个数组中最小数字的index值
function getMinHeightIndex (arr,val){
	for(var i in arr){
		if(arr[i]==val){
			return i;
		}
	}
}























