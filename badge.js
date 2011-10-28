(function($) {
    "use strict";
    $.fn.mobileBadge = function(options) {
        if(typeof options.count !== "number") {
            throw "Specified count isn't a number";
        }
        if(options.position !== "topleft" && options.position !== "topright") {
            throw options.position + " is not a valid position for the count badge. Specify 'topleft' or 'topright'";
        }
        
        var settings = {
				position: "topright"
			},
			badgeMarkup = "";
		if(options) {
			$.extend(settings, options);
		}
        if(settings.position === "topright" ) {
            badgeMarkup = "<span class='count_badge badge_position_right'><span class='badge_count'>"+settings.count+"</span></span>";
        }
        else {
            badgeMarkup = "<span class='count_badge badge_position_left'><span class='badge_count'>"+settings.count+"</span></span>";
        }
		this.children(".count_badge").remove();
		this.append(badgeMarkup); 
        return this;
   };
}(jQuery));
