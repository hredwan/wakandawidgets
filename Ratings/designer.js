(function() {

    var widget = Widget.Ratings.inherit(WAF.require('waf-behavior/studio'));
	
	 widget.setDescription('Rating');
    
    /*Default size*/
    widget.setWidth('180');
    widget.setHeight('21');

	
	//add Attributes:
    widget.addAttributes([{
        name: 'data-max',
        description: 'Rating type',
        type: 'string',
        defaultValue:'5'
    },{
        name: 'data-binding-value',
        description: 'Source',
       typeValue: 'datasource'
    },
    {
    	name:'data-fixedvalue',
    	description:'Value',
    	defaultValue:2,
    	type:'string'
    }]);
    
     /*Events*/
    widget.addEvents([{
        'name': 'rate',
        'description': 'On Rate',
        'category': 'Mouse Events'
    },{
        'name': 'reset',
        'description': 'On Reset Rate',
        'category': 'Mouse Events'
    }]);
	
	widget.on('display', function(attributes) {
		
			var that = this;
			
			
            
            this.options.max                  = attributes["data-max"];
            this.options.fixedalue                  = attributes["data-fixedvalue"];

            if(attributes['data-binding-value']) {
				       $('#' + attributes['id']+' .rateit').html('['+attributes['data-binding-value']+']');
				       
				   }
           
    });

	
})();