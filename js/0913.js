  var $$=jQuery;
		    $$(".disapper1").click(function(){$$(".img-none-left").remove();})
		    $$(".disapper2").click(function(){$$(".img-none-right").remove();})
		
			
			jQuery(function(){
			function makeImg(){
				var w=window.innerWidth|| document.documentElement.clientWidth|| document.body.clientWidth;
				var h=window.innerHeight|| document.documentElement.clientHeight|| document.body.clientHeight;
			    if(w < 1080){
				$$(".img-none-left").remove();
				$$(".img-none-right").remove();
				}
			}
				jQuery(window).on("resize load",makeImg);
			})
		