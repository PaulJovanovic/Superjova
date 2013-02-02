var spacegates = [];
jQuery(document).ready(function(){
	jQuery(".navbar-option").on({
		"mousedown": function(){
			jQuery(this).children("img").attr("src","/assets/"+this.id+"_push.png");
		},
		"mouseup": function(){
			jQuery(this).children("img").attr("src","/assets/"+this.id+".png");	
		}
	});
	jQuery("#navbar").animate({top: "0px"}, 650, function(){
		jQuery("#navbar").animate({top: "-8px"}, 120, function(){
			jQuery("#navbar").animate({top: "0px"}, 120);
		});
	});

	jQuery(".spacegate").each(function(){
		spacegates.push(jQuery(this));
	});

	animateSpacegates();
});

jQuery(window).scroll(function() {
	animateSpacegates();
});

function animateSpacegates(){
	var x = 0;
	for(var i = 0; i + x < spacegates.length; i++){
		var $spacegate = spacegates[i];
		var docViewTop = jQuery(window).scrollTop();
	    var docViewBottom = docViewTop + jQuery(window).height();

	    var elemTop = $spacegate.offset().top;
	    var elemBottom = elemTop + $spacegate.height();

	    if ((elemBottom >= docViewTop) && (elemTop <= docViewBottom)
	      && (elemBottom <= docViewBottom) &&  (elemTop >= docViewTop) ){
	      	spacegates.splice(i, 1);
	      	i --;
	      	x ++;
			$spacegate.children(".spacegate-top").animate({height: "0%"}, "slow");
			$spacegate.children(".spacegate-bottom").animate({height: "0%"}, "slow", function(){
					$spacegate.children(".spacegate-top").css("zIndex", "0");
					$spacegate.children(".spacegate-bottom").css("zIndex", "0");
					$spacegate.children(".spacegate-top").animate({height: "50%"}, "slow");
					$spacegate.children(".spacegate-bottom").animate({height: "50%"}, "slow", function(){
				});
			});
		}
	}
}