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
				position: "topright",
				classnames : "badge_variable"
			},
			badgeMarkup = "",
			attachToElement = this, 
			i = 0;
		if(options) {
			$.extend(settings, options);
		}
		
		//Allow setting custom classes for styling the badge
		if(typeof settings.classnames === "string") {
			badgeMarkup = "<span class='badge_fixed " + settings.classnames;
		}
		//If an array of class names is passed in
		else if(typeof settings.classnames === "object") {
			badgeMarkup = "<span class='badge_fixed ";
			for(i = 0; i < settings.classnames.length; i++) {
				if(typeof settings.classnames[i] === "string") {
					badgeMarkup += " " + settings.classnames[i] + " ";
				}
			}
		}
		
        if(settings.position === "topright" ) {
            badgeMarkup += " badge_position_right'><span class='badge_count'>" + settings.count + "</span></span>";
        }
        
        else {
            badgeMarkup += " badge_position_left'><span class='badge_count'>" + settings.count + "</span></span>";
        }
        
        if(this.is("input[type='radio']")) {
			attachToElement = this.next();
		}
		
		else if(this.is("button")) {
			attachToElement = this.parent();
		}
		attachToElement.children(".count_badge").remove();
		attachToElement.append(badgeMarkup); 
        return this;
   };
}(jQuery));
