/*
 * noService - v0.1.0
 * 
 * Author: Nathanael McMillan (@nathanael_mcm)
 * noSerice is a simple tooltip/ message alert plugin 
 * to help businesses stay legal when the new OFCOM
 * regulations come into play.
 *
 * Version: 0.1.0
 * Under MIT License
 *
 * Thanks to jQuery-boilerplate for helping with the
 * plugin pattern
 * 
 *  jquery-boilerplate - v3.4.0
 *  A jump-start for jQuery plugins development.
 *  http://jqueryboilerplate.com
 *
 *  Made by Zeno Rocha
 *  Under MIT License
 */

;(function ( $, window, document, undefined ) {

	"use strict";
    
		// Create the defaults once
		var pluginName = "noService",
				defaults = {
                    noservice_class: 'noservice',
                    message: "Calls to this number cost 20p plus your phone company's access charge.",
                    tooltip_class: 'tt',
                    activeClass: "active",
                    message_container: 'span',
                    take_note: '*'
		};

		// The actual plugin constructor
		function NoService ( element, options ) {
				this.element = element;
                this.$element = $(element);

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
                    .append(this.settings.take_note + '<'+ 
                            this.settings.message_container +
                            ' class="'+ this.settings.tooltip_class +'">'+ 
                               this.settings.message +'</'+ this.settings.message_container +
                    '>');
                               
                    return this.showToolTip();
                    
				}, 
                showToolTip: function() {
                    
                    var element = this.$element;
                    var settings = this.settings;
                    
                     // Hover over to display the message, out to hide :D simples
                    $(element).hover(function(){
                        
                        element.children(settings.message_container)
                                .addClass(settings.activeClass);    
                        }, function() {
                            
                        element.children(settings.message_container)
                                .removeClass(settings.activeClass);
                    });
                }
		});

		// A really lightweight plugin wrapper around the constructor,
		// preventing against multiple instantiations
        
		$[pluginName] = $.fn[pluginName] = function (options) {
            if(!(this instanceof $)) { $.extend(defaults, options) }
				return this.each(function () {
						if (!$.data(this, "plugin_" + NoService)) {
								$.data(this, "plugin_" + pluginName, new NoService(this, options));
						}
				});
		};

})( jQuery, window, document );
