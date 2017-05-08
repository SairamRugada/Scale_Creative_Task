$(document).ready(function(){
	$(".upperblocks").bind("click",function(){
		var clickedelement = $(this).attr("id");
			
		if(clickedelement == "services"){
			$("body").animate({ scrollTop: $("#part3").offset().top }, 1200);
				 
		}else if(clickedelement == "portfolio"){
			$("body").animate({ scrollTop: $("#part4").offset().top }, 1200);
		}else if(clickedelement == "contact"){
			$("body").animate({ scrollTop: $("#part6").offset().top }, 1200);
		}
	});
});

 