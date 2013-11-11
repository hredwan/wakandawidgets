(function() {

    var Widget = WAF.require('waf-core/widget'),
        widget = Widget.create('Ratings');
	
	Event.create("rate");
    Event.create("reset");
	
	
    widget.prototype.init = function() {

        var that = this,
            $htmlElement, max;
		console.log(this);
		
		 $('#' + this.id).bind('rated', function(event) {
		 	that._binded_attributes.value.datasource.value = $(this).find('.rateit').rateit('value');
		 	that._binded_attributes.value.datasource.save();
            Event.rate.fire($$(this.id));
            
        });
        $('#' + this.id).bind('reset', function(event) {
        	that._binded_attributes.value.datasource.value = 0;
		 	that._binded_attributes.value.datasource.save();
            Event.reset.fire($$(this.id));
        });
		
        $htmlElement = $("#" + this.id);
        max = this.options.max || 5;
        $htmlElement.html('<div class="waf-container"><span class="rateit"> </span></div>');
		
		$rateIt = $htmlElement.find('.rateit');
		$rateIt.rateit();
        $rateIt.rateit('max', max);

        if (this.options.fixedvalue) {
			$rateIt.rateit('value', this.options.fixedvalue);
        }
       
    }

	widget.prototype.value = function(myValue) {
        if (arguments.length > 0) { // if there's a parameter, set the value
            this._value = myValue;
            this.fire(new Event.Change({
                value: myValue
            }));
            //this.init();
           $("#" + this.id).find('.rateit').rateit('value', myValue); //update rating
        }
        return this._value; // otherwise, just get the value
    };

	
	widget.makeBindableProperty("value", widget.prototype.value, Event.rate); //data-binding property 

})();