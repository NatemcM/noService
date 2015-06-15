/*
 * noService - v0.1.3
 * 
 * Author: Nathanael McMillan (@nathanael_mcm)
 * noSerice is a simple tooltip/ message alert plugin 
 * to help businesses stay legal when the new OFCOM
 * regulations come into play.
 *
 */

;(function ( $, window, document, undefined ) {

	"use strict";
    
		// Create the defaults once
		var pluginName = "noService",
				defaults = {
                    activeClass: "active",
                    breakpoint: 1140,
                    message: "Calls to this number are free from a BT landline and cost bewteen 2-8p p/m on other landlines plus your phone company's access charge. Calls from Mobiles cost between 20-40p p/m plus your standard network rate.",
                    message_container: 'span',
                    noservice_class: 'noservice',
                    take_note: '*',
                    tooltip_class: 'ns_tt'
		};

		// The actual plugin constructor
		function NoService ( element, options ) {
				this.element = element;
                this.$element = $(element);
				this.window_width = $(window).width();
				
				this.settings = $.extend( {}, defaults, options );
				this._defaults = defaults;
				this._name = pluginName;
				this.init();
		}

		// Avoid Plugin.prototype conflicts
		$.extend(NoService.prototype, {
				init: function () {
                      
                        // Add the tool tip container class to the element and 
                        // create a new element containing the tool tip and message
                        this.$element.addClass(this.settings.noservice_class)
                                .append(this.settings.take_note + '<'+ // Add the take notice feature i.e. * or !
                                this.settings.message_container +
                                ' class="'+ this.settings.tooltip_class +'"><p>'+ 
                                this.settings.message +'</p></'+ this.settings.message_container +'>');
                                   
                        return this.showToolTip();
                        
				}, 
                showToolTip: function() {
                    
                    var activeClass = this.settings.activeClass;
                    var positionClass;
                    
                    // Grab the tooltip container by looking at the elements children and finding
                    // the tag which holds the message i.e. span
                    var tt_container = this.$element.children(this.settings.message_container);
                    
                    
                    // Grab the current position of the element; adjust the tt position 
                    // depending on its distance from the left of the screen.
                    var current_position = this.$element.position();
					
					// Take the window width and divide it in 2 to get the mid point on the
					// document, if the tooltip is to the left of this line add class nstt_left
					// and vice versa
					if (current_position.left < this.window_width / 2 ) {
						positionClass = 'nstt_left';
					} else {
						positionClass = 'nstt_right';
					}
						
                     // Hover over to display the message, out to hide :D simples
                    this.$element.hover(function(){
            
                        tt_container.addClass(activeClass + ' ' + positionClass);    
                        }, function() {
                            
                        tt_container.removeClass(activeClass + ' ' + positionClass);
                    });
                }
		});

		// A really lightweight plugin wrapper around the constructor,
		// preventing against multiple instantiations
        
		$[pluginName] = $.fn[pluginName] = function (options) {
            if(!(this instanceof $)) { $.extend(defaults, options); }
				return this.each(function () {
                    if (!$.data(this, "plugin_" + NoService)) {
                            $.data(this, "plugin_" + pluginName, new NoService(this, options));
                    }
				});
		};

})( jQuery, window, document );
