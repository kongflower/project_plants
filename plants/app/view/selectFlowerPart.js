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
		    	flex  : 5,
		    	width : '100%',
		    	items :[
		    	    {
		    	    	xtype : 'panel',
		    	    	layout: {type: 'hbox'},
		    	    	flex  : 1,
		    	    	items: [
		    	    	    {
		    	    	    	xtype: 'button',
		    	    	    	itemId: '흰',
		    	    	    	action:'selectColor',
		    	    	    	style:'background:#ffffff',
		    	    	    	flex: 1
		    	    	    },
		    	    	    {
		    	    	    	xtype: 'button',
		    	    	    	itemId: '노랑',
		    	    	    	action:'selectColor',
		    	    	    	style:'background:#ffff00',
		    	    	    	flex: 1
		    	    	    },
		    	    	    {
		    	    	    	xtype: 'button',
		    	    	    	itemId: '보라',
		    	    	    	action:'selectColor',
		    	    	    	style:'background:#660099',
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
		    	    	    	 itemId: '분홍',
		    	    	    	 action:'selectColor',
		    	    	    	 style:'background:#ff00cc',
		    	    	    	 flex: 1
		    	    	     },
		    	    	     {
		    	    	    	 xtype: 'button',
		    	    	    	 itemId: '빨강',
		    	    	    	 action:'selectColor',
		    	    	    	 style:'background:#ff0000',
		    	    	    	 flex: 1
		    	    	     },
		    	    	     {
		    	    	    	xtype: 'button',
		    	    	    	itemId: '자주',
		    	    	    	action:'selectColor',
		    	    	    	style:'background:#990033',
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
		    		        	   itemId: '갈',
		    		        	   action:'selectColor',
		    		        	   style:'background:#633131',
		    		        	   flex: 1
		    		           },
		    		           {
		    		        	   xtype: 'button',
		    		        	   itemId: '주황',
		    		        	   action:'selectColor',
		    		        	   style:'background:#ff6600',
		    		        	   flex: 1
		    		           },
		    		           {
		    		        	   xtype: 'button',
		    		        	   itemId: '녹',
		    		        	   action:'selectColor',
		    		        	   style:'background:#00ff00',
		    		        	   flex: 1
		    		           }
		    		           ]
		    	   },
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
		    	        label 	: 'no',
		    	        labelWidth : '25%',
		    	        value 	: 0,
		    	        minValue: 0,
		    	        maxValue: 12,
		    	        flex 	: 7,
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