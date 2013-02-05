var opening = false;
jQuery(document).ready(function() {
	jQuery("#transmission-end").click(function(e) {
		CloseImageTransmission();
		e.stopPropagation();
	});

	jQuery(".picture-list img").click(function(e) {
		opening = true;
		var img = new Image();
		img = jQuery(this).attr("src");
		var dimensions = resize_image_dimensions(img);
		jQuery("#image-transmission-image").attr("src", jQuery(this).attr("src"));
		jQuery("#image-transmission-image").css({"width" : dimensions.x+"px", "height" : dimensions.y+"px"});
		if (!jQuery("#transmission-end").is(":visible")){
			jQuery("#image-transmission").stop().animate({top: "90px"}, "slow", function(){
				jQuery("#image-transmission").animate({top: "82px"}, 120, function(){
					jQuery("#image-transmission").animate({top: "90px"}, 120, function(){
						jQuery("#transmission-end").stop().fadeIn("fast");
					});
				});
			});
		}
		e.stopPropagation();
	});

	jQuery("#image-transmission").click(function(e) {
		e.stopPropagation();
	});

	jQuery("body").click(function() {
		CloseImageTransmission();
	});
});

function CloseImageTransmission() {
	if(opening){
		opening = false;
		jQuery("#transmission-end").stop().fadeOut("fast", function() {
			jQuery("#image-transmission").stop().animate({top: "98px"}, 120, function(){
				jQuery("#image-transmission").animate({top: "-410px"}, "slow");
			});
		});
	}
}

function Dimensions(x, y) {
    this.x  = x;
    this.y = y;
}

function resize_image_dimensions(image) {
	var xMax = 944;
	var yMax = 340;
	var ratio;
	var ratioMax;
	ratio = image.width / image.height;
	ratioMax = xMax / yMax;
	//width is larger
	if (ratio > ratioMax){
		return new Dimensions(xMax, image.height * xMax / image.width);
	}
	else{
		return new Dimensions(image.width * yMax / image.height, yMax);
	}
}