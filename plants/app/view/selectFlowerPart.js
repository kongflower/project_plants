Ext.define('plants.view.selectFlowerPart',{
	extend: 'Ext.Panel',
	xtype: 'selectFlowerPart',
	
	requires: [
	       'Ext.field.Slider'
	],
	        
	config : {
		layout: {type: 'vbox'},
		items :[
		    {
		    	xtype : 'panel',
		    	layout: {type: 'vbox'},
		    	flex  : 4,
		    	width : '100%',
		    	items :[
		    	    {
		    	    	xtype : 'panel',
		    	    	layout: {type: 'hbox'},
		    	    	flex  : 1,
		    	    	items: [
		    	    	    {
		    	    	    	xtype: 'button',
		    	    	    	text: '흰',
		    	    	    	action:'selectColor',
		    	    	    	style:'background:#ffffff',
		    	    	    	flex: 1
		    	    	    },
		    	    	    {
		    	    	    	xtype: 'button',
		    	    	    	text: '빨',
		    	    	    	action:'selectColor',
		    	    	    	style:'background:#ff0000',
		    	    	    	flex: 1
		    	    	    }
		    	    	]
		    	     },
		    	   {
		    	    	 xtype: 'panel',
		    	    	 layout: { type: 'hbox'},
		    	    	 flex: 1,
		    	    	 items: [
		    	    	     {
		    	    	    	 xtype: 'button',
		    	    	    	 text: '노',
		    	    	    	 action:'selectColor',
		    	    	    	 style:'background:#ffff00',
		    	    	    	 flex: 1
		    	    	     },
		    	    	     {
		    	    	    	 xtype: 'button',
		    	    	    	 text: '보',
		    	    	    	 action:'selectColor',
		    	    	    	 style:'background:#ff00ff',
		    	    	    	 flex: 1
		    	    	     }
		    	    	  ]
		    	   }
		    	]
		    },
		    {
		    	xtype : 'panel',
		    	layout: {type: 'hbox'},
		    	flex  : 1,
		    	width : '100%',
		    	items:[
		    	    {
		    	        xtype 	: 'sliderfield',
		    	        id 		: 'timeSlider',
		    	        label 	: '개화기',
		    	        value 	: 0,
		    	        minValue: 0,
		    	        maxValue: 12,
		    	        flex 	: 4,
		    	    },
		    	    {
		    	    	id 		:'selectFlower',
		    	    	action  :'clickFlower',
		    	    	xtype 	:'button',
		    	    	flex 	:1,
		    	    	text 	:'확인'
		    	    }
		    	]
		    },
		] ,
	}
});