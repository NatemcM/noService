!function($,s,t,e){"use strict";function n(s,t){this.element=s,this.$element=$(s),this.settings=$.extend({},a,t),this._defaults=a,this._name=i,this.init()}var i="noService",a={noservice_class:"noservice",message:"Calls to this number cost 20p plus your phone company's access charge.",tooltip_class:"tt",activeClass:"active",message_container:"span",take_note:"*"};$.extend(n.prototype,{init:function(){return this.$element.addClass(this.settings.noservice_class).append(this.settings.take_note+"<"+this.settings.message_container+' class="'+this.settings.tooltip_class+'">'+this.settings.message+"</"+this.settings.message_container+">"),this.showToolTip()},showToolTip:function(){var s=this.$element,t=this.settings;$(s).hover(function(){s.children(t.message_container).addClass(t.activeClass)},function(){s.children(t.message_container).removeClass(t.activeClass)})}}),$[i]=$.fn[i]=function(s){return this instanceof $||$.extend(a,s),this.each(function(){$.data(this,"plugin_"+n)||$.data(this,"plugin_"+i,new n(this,s))})}}(jQuery,window,document);