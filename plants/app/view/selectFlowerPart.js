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
		    	    	    	xtype:'panel',
				    	    	layout:{type:'vbox'},
				    	    	flex :1,
				    	    	id:'color1',
				    	    	items:[
				    	    	    {
				    	    	    	xtype: 'button',
				    	    	    	itemId: '1',//흰 
				    	    	    	action:'selectColor',
				    	    	    	style:'background:#ffffff',
				    	    	    	margin:'8 9 9 9',
				    	    	    	flex: 1
				    	    	    },
					    	    ],
				    	    	style 	: "background-image:url('./resources/images/frame_list.png');" +
										  'border:1;' +
										  'background-color:transparent;' + 
										  'background-repeat:no-repeat;' + 
										  'background-size:100% 100%;',
		    	    	    },
		    	    	    {
		    	    	    	xtype:'panel',
				    	    	layout:{type:'vbox'},
				    	    	flex :1,
				    	    	id:'color2',
				    	    	items:[
				    	    	    {
				    	    	    	xtype: 'button',
				    	    	    	itemId: '2', //노랑 
				    	    	    	action:'selectColor',
				    	    	    	style:'background:#ffff00',
				    	    	    	margin:'8 11 9 9',
				    	    	    	flex: 1
				    	    	    },
					    	    ],
				    	    	style 	: "background-image:url('./resources/images/frame_list.png');" +
										  'border:1;' +
										  'background-color:transparent;' + 
										  'background-repeat:no-repeat;' + 
										  'background-size:100% 100%;',
		    	    	    },
		    	    	    {
		    	    	    	xtype:'panel',
				    	    	layout:{type:'vbox'},
				    	    	flex :1,
				    	    	id:'color3',
				    	    	items:[
				    	    	    {
				    	    	    	xtype: 'button',
				    	    	    	itemId: '3',//보라 
				    	    	    	action:'selectColor',
				    	    	    	style:'background:#660099',
				    	    	    	margin:'8 9 9 9',
				    	    	    	flex: 1
				    	    	    },
					    	    ],
				    	    	style 	: "background-image:url('./resources/images/frame_list.png');" +
										  'border:1;' +
										  'background-color:transparent;' + 
										  'background-repeat:no-repeat;' + 
										  'background-size:100% 100%;',
		    	    	    }
		    	    	]
		    	     },
		    	   {
		    	    	 xtype: 'panel',
		    	    	 layout: { type: 'hbox'},
		    	    	 flex: 1,
		    	    	 items: [
		    	    	     {
		    	    	    	xtype:'panel',
				    	    	layout:{type:'vbox'},
				    	    	flex :1,
				    	    	id:'color4',
				    	    	items:[
				    	    	    {
				    	    	    	 xtype: 'button',
				    	    	    	 itemId: '4',//분홍 
				    	    	    	 action:'selectColor',
				    	    	    	 style:'background:#ff00cc',
				    	    	    	 margin:'8 9 9 9',
				    	    	    	 flex: 1
				    	    	    },
					    	    ],
				    	    	style 	: "background-image:url('./resources/images/frame_list.png');" +
										  'border:1;' +
										  'background-color:transparent;' + 
										  'background-repeat:no-repeat;' + 
										  'background-size:100% 100%;',
		    	    	     },
		    	    	     {
		    	    	    	xtype:'panel',
				    	    	layout:{type:'vbox'},
				    	    	flex :1,
				    	    	id:'color5',
				    	    	items:[
				    	    	    {
				    	    	    	 xtype: 'button',
				    	    	    	 itemId: '5',//빨강 
				    	    	    	 action:'selectColor',
				    	    	    	 style:'background:#ff0000',
				    	    	    	 margin:'8 9 9 9',
				    	    	    	 flex: 1
				    	    	    },
					    	    ],
				    	    	style 	: "background-image:url('./resources/images/frame_list.png');" +
										  'border:1;' +
										  'background-color:transparent;' + 
										  'background-repeat:no-repeat;' + 
										  'background-size:100% 100%;',
		    	    	     },
		    	    	     {
		    	    	    	xtype:'panel',
				    	    	layout:{type:'vbox'},
				    	    	flex :1,
				    	    	id:'color6',
				    	    	items:[
				    	    	    {
				    	    	    	xtype: 'button',
				    	    	    	itemId: '6', // 자주 
				    	    	    	action:'selectColor',
				    	    	    	style:'background:#990033',
				    	    	    	margin:'8 9 9 9',
				    	    	    	flex: 1
				    	    	    },
					    	    ],
				    	    	style 	: "background-image:url('./resources/images/frame_list.png');" +
										  'border:1;' +
										  'background-color:transparent;' + 
										  'background-repeat:no-repeat;' + 
										  'background-size:100% 100%;',
		    	    	    }
		    	    	  ]
		    	   },
		    	   {
		    		   xtype: 'panel',
		    		   layout: { type: 'hbox'},
		    		   flex: 1,
		    		   items: [
	    		           {
	    		        	    xtype:'panel',
				    	    	layout:{type:'vbox'},
				    	    	flex :1,
				    	    	id:'color7',
				    	    	items:[
				    	    	    {
			    		        	   xtype: 'button',
			    		        	   itemId: '7',//갈 
			    		        	   action:'selectColor',
			    		        	   style:'background:#633131',
			    		        	   margin:'8 9 9 9',
			    		        	   flex: 1
					    	    	 },
							    ],
				    	    	style 	: "background-image:url('./resources/images/frame_list.png');" +
										  'border:1;' +
										  'background-color:transparent;' + 
										  'background-repeat:no-repeat;' + 
										  'background-size:100% 100%;',
	    		           },
	    		           {
	    		        	    xtype:'panel',
				    	    	layout:{type:'vbox'},
				    	    	flex :1,
				    	    	id:'color8',
				    	    	items:[
				    	    	    {
			    		        	   xtype: 'button',
			    		        	   itemId: '8', //주황 
			    		        	   action:'selectColor',
			    		        	   style:'background:#ff6600',
			    		        	   margin:'8 9 9 9',
			    		        	   flex: 1
				    	    	    },
							    ],
				    	    	style 	: "background-image:url('./resources/images/frame_list.png');" +
										  'border:1;' +
										  'background-color:transparent;' + 
										  'background-repeat:no-repeat;' + 
										  'background-size:100% 100%;',
	    		           },
	    		           {
	    		        	    xtype:'panel',
				    	    	layout:{type:'vbox'},
				    	    	flex :1,
				    	    	id:'color9',
				    	    	items:[
				    	    	    {
			    		        	   xtype: 'button',
			    		        	   itemId: '9', //녹 
			    		        	   action:'selectColor',
			    		        	   style:'background:#00ff00',
			    		        	   margin:'8 9 9 9',
			    		        	   flex: 1
				    	    	    },
							    ],
				    	    	style 	: "background-image:url('./resources/images/frame_list.png');" +
										  'border:1;' +
										  'background-color:transparent;' + 
										  'background-repeat:no-repeat;' + 
										  'background-size:100% 100%;',
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