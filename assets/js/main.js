$(document).ready(function(){
		    $("#camera").click(function(){
		        // Change src attribute of image
		      if( $("#camera").attr("src") == "assets/img/camera-off.svg" ){
		        $(this).attr("src", "assets/img/camera-on.svg");
		      }else{
		        $(this).attr("src", "assets/img/camera-off.svg");
		      }
		    });    
		});
		$(document).ready(function(){
		    $("#mic").click(function(){
		        // Change src attribute of image
		      if( $("#mic").attr("src") == "assets/img/mic-off.svg" ){
		        $(this).attr("src", "assets/img/mic-on.svg");
		      }else{
		        $(this).attr("src", "assets/img/mic-off.svg");
		      }
		    });    
		});
		$(document).ready(function(){
	      $("#dropdown").hide();
	        $("#setting").click(function(){
	            // Change src attribute of image
	          if( $("#setting").attr("src") == "assets/img/setting.svg" ){
	            $(this).attr("src", "assets/img/setting-close.svg");
	            $("#dropdown").show();
	          }else{
	            $(this).attr("src", "assets/img/setting.svg");
	            $("#dropdown").hide();
	          }
	        }); 
	        $("#clickinput").click(function(){
	        	if ($("#clickinput").attr("src") == "assets/img/angle-right.svg") {
	        		$("#subdropdown").show();
	        		$("#dropdown").hide();
	        	}else{
	        		$("#subdropdown").hide();
	        		$("#dropdown").show();
	        	}
	        });   
	        $("#downarrow").click(function(){
	        	$("#subdropdown").hide();
	        	$("#dropdown").show();
	        });
	    });	
	    
		$(document).ready(function(){
			$("#startbtn").click(function(){
				if ($("#startbtn").text() === "START") {
					$("#startbtn").text("STOP");
					$("#startbtn").css('background','#CA242B');
					$("#video").attr("src", "assets/img/video-on.png")
				}else{
					$("#startbtn").text("START");
					$("#startbtn").css('background','#349517');
					$("#video").attr("src", "assets/img/black.png")
				}
			});
		});
