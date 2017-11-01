function ww_clock(e,obj,skin){
		var ww_str;
		switch (skin){
        	case "ww_1":
        		ww_str = "<span>0</span>天<span>0</span>时<span>0</span>分<span>0</span>秒";
        		break;
        	case "ww_2":
        		ww_str = "<span>0</span>天<span>0</span>:<span>0</span>:<span>0</span>";
        		break;
        	case "ww_3":
        		ww_str = "<span>0</span>天<span>0</span>-<span>0</span>-<span>0</span>";
        		break;
        	default:
        		ww_str = "<span>0</span>天<span>0</span>/<span>0</span>/<span>0</span>";
        		break;
        }
		UpdateTime(e,obj);
		obj.append(ww_str);
		setInterval(
			function(){
				UpdateTime(e,obj)
			},1000);
	}
	//获取倒计时并赋值
	function UpdateTime(e,obj){
		var now = new Date();//定义一个中国标准时间格式
		now.setTime(e * 1000);//把时间戳转化为中国标准时间格式
		var Year = now.getFullYear();//获取到年
		var Month = now.getMonth() + 1;//获取到月
		var Day = now.getDate(); //日
		var Hours = now.getHours(); //时
		var Minutes = now.getMinutes(); //分
		var Seconds = now.getSeconds(); //秒
		var newDate=new Date(); //获取现在的时间
		var endDate = parserDate(Year+"-"+Month+"-"+Day+" "+Hours+":"+Minutes+":"+Seconds);
		//获取时间差毫秒数，用结束时间毫秒数-现在时间毫秒数
		var s=parseInt((endDate.getTime()-newDate.getTime())/1000);  //时间差的秒数
		if(s<=0){alert("该时间已经过期，请自行替换");return;}
		var day=Math.floor(s/86400); //获取天数
			s=s%86400;
		var hours=Math.floor(s/3600);
			s=s%3600;
		var minutes=Math.floor(s/60);
			s=s%60;
		var s4=s;

		obj.find("span").eq(0).html(fullZero(day,3));	//赋值 天数
		obj.find("span").eq(1).html(fullZero(hours,2)); //小时
		obj.find("span").eq(2).html(fullZero(minutes,2)); //分钟
		obj.find("span").eq(3).html(fullZero(s4,2));//秒
	};
	//字符串转国际标准时间
	var parserDate = function (date) {
	    var t = Date.parse(date);  
	    if (!isNaN(t)) {  
	        return new Date(Date.parse(date.replace(/-/g, "/")));  
	    } else {  
	        return new Date();  
	    }  
	}; 
	//给时间前面补0
	function fullZero(_time,n){
		var str=""+_time;
		while(str.length<n){
			str="0"+str;
		}
		return str;
	};