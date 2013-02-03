jQuery(document).ready(function() {
	jQuery(".picture-list img").click(function() {
		var img = new Image();
		img = jQuery(this).attr("src");
		var dimensions = resize_image_dimensions(img);
		jQuery("#image-transmission-image").attr("src", jQuery(this).attr("src"));
		jQuery("#image-transmission-image").css({"width" : dimensions.x+"px", "height" : dimensions.y+"px"});
		jQuery("#image-transmission").animate({top: "100px"}, "slow", function(){
			jQuery("#transmission-end").fadeIn();
		});
	});
	jQuery("#transmission-end").click(function() {
		jQuery("#transmission-end").hide();
		jQuery("#image-transmission").animate({top: "-400px"}, "slow");
	});

	jQuery("body").click(function() {
		if (jQuery("#transmission-end").is(":visible")){
			jQuery("#transmission-end").click();
		}
	});
});

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