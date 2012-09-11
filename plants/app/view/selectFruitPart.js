Ext.define('plants.view.selectFruitPart',{
	extend: 'Ext.Panel',
	xtype: 'selectFruitPart',
	
	config : {
		layout: {type: 'vbox'},
		style 	: "background-image:url('./resources/images/woodBG.png');" +
				  'border:1;' +
				  'background-color:transparent;' + 
				  'background-repeat:no-repeat;' + 
				  'background-size:100% 100%;',
		items :[
		    {
		    	
		    	xtype: 'panel',
		    	layout: {type: 'hbox'},
		    	defaults:{margin : 3},
		    	flex: 1,
		    	items: [
		    	    {
						xtype:'panel',
						layout:{type:'vbox'},
						flex :1,
						id : 'fruit1',
						items:[	
				    	    {
				    	    	xtype: 'button',
				    	    	itemId: '1',//석류형
				    	    	action:'selectFruit',
				    	    	margin:'7 10 7 10',
				    	    	flex: 1,
				    	    	style 	: "background-image:url('./resources/images/fruit_01.png');" +
			   			    	  'border:0;' +
			   			    	  'background-color:transparent;' + 
			   			    	  'background-repeat:no-repeat;' + 
			   			    	  'background-size:100% 100%;',
				    	    },
			    	    ],
		    	    	style 	: "background-image:url('./resources/images/frame_list.png');" +
								  'border:0;' +
								  'background-color:transparent;' + 
								  'background-repeat:no-repeat;' + 
								  'background-size:100% 100%;',
		    	    },
		    	    {
		    	    	xtype:'panel',
						layout:{type:'vbox'},
						flex :1,
						id : 'fruit2',
						items:[	
				    	    {
				    	    	xtype: 'button',
				    	    	itemId: '2', //벼형
				    	    	action:'selectFruit',
				    	    	margin:'7 10 7 10',
				    	    	flex: 1,
				    	    	style 	: "background-image:url('./resources/images/fruit_02.png');" +
			   			    	  'border:0;' +
			   			    	  'background-color:transparent;' + 
			   			    	  'background-repeat:no-repeat;' + 
			   			    	  'background-size:100% 100%;',
				    	    },
			    	    ],
		    	    	style 	: "background-image:url('./resources/images/frame_list.png');" +
								  'border:0;' +
								  'background-color:transparent;' + 
								  'background-repeat:no-repeat;' + 
								  'background-size:100% 100%;',
		    	    }
		    	]
		    },
		    {
		    	xtype: 'panel',
		    	layout: { type: 'hbox'},
		    	defaults:{margin : 3},
		    	flex: 1,
		    	items: [
		    	    {
		    	    	xtype:'panel',
						layout:{type:'vbox'},
						flex :1,
						id : 'fruit3',
						items:[	
				    	    {
				    	    	xtype: 'button',
				    	    	itemId: '3',//솔방울형
				    	    	action:'selectFruit',
				    	    	margin:'7 10 7 10',
				    	    	flex: 1,
				    	    	style 	: "background-image:url('./resources/images/fruit_03.png');" +
					   			    	  'border:0;' +
					   			    	  'background-color:transparent;' + 
					   			    	  'background-repeat:no-repeat;' + 
					   			    	  'background-size:100% 100%;',
				    	    },
			    	    ],
		    	    	style 	: "background-image:url('./resources/images/frame_list.png');" +
								  'border:0;' +
								  'background-color:transparent;' + 
								  'background-repeat:no-repeat;' + 
								  'background-size:100% 100%;',
		    	    },
		    	    {
		    	    	xtype:'panel',
						layout:{type:'vbox'},
						flex :1,
						id : 'fruit4',
						items:[	
				    	    {
				    	    	xtype: 'button',
				    	    	itemId: '4',//과실형
				    	    	action:'selectFruit',
				    	    	margin:'7 10 7 10',
				    	    	flex: 1,
				    	    	style 	: "background-image:url('./resources/images/fruit_04.png');" +
			   			    	  'border:0;' +
			   			    	  'background-color:transparent;' + 
			   			    	  'background-repeat:no-repeat;' + 
			   			    	  'background-size:100% 100%;',
				    	    },
			    	    ],
		    	    	style 	: "background-image:url('./resources/images/frame_list.png');" +
								  'border:0;' +
								  'background-color:transparent;' + 
								  'background-repeat:no-repeat;' + 
								  'background-size:100% 100%;',
		    	    }
		    	]
		    },
		    {
		    	xtype: 'panel',
		    	layout: { type: 'hbox'},
		    	defaults:{margin : 3},
		    	flex: 1,
		    	items: [
		    	    {
		    	    	xtype:'panel',
						layout:{type:'vbox'},
						flex :1,
						id : 'fruit5',
						items:[	
				    	    {
				    	    	xtype: 'button',
				    	    	itemId: '5',//자루형
				    	    	action:'selectFruit',
				    	    	margin:'7 10 7 10',
				    	    	flex: 1,
				    	    	style 	: "background-image:url('./resources/images/fruit_05.png');" +
			   			    	  'border:0;' +
			   			    	  'background-color:transparent;' + 
			   			    	  'background-repeat:no-repeat;' + 
			   			    	  'background-size:100% 100%;',
			    	    },
			    	    ],
		    	    	style 	: "background-image:url('./resources/images/frame_list.png');" +
								  'border:0;' +
								  'background-color:transparent;' + 
								  'background-repeat:no-repeat;' + 
								  'background-size:100% 100%;',
		    	    },
		    	    {
		    	    	xtype:'panel',
						layout:{type:'vbox'},
						flex :1,
						id : 'fruit6',
						items:[	
				    	    {
				    	    	xtype: 'button',
				    	    	itemId: '6',//호두형
				    	    	action:'selectFruit',
				    	    	margin:'7 10 7 10',
				    	    	flex: 1,
				    	    	style 	: "background-image:url('./resources/images/fruit_06.png');" +
			   			    	  'border:0;' +
			   			    	  'background-color:transparent;' + 
			   			    	  'background-repeat:no-repeat;' + 
			   			    	  'background-size:100% 100%;',
				    	    },
			    	    ],
		    	    	style 	: "background-image:url('./resources/images/frame_list.png');" +
								  'border:0;' +
								  'background-color:transparent;' + 
								  'background-repeat:no-repeat;' + 
								  'background-size:100% 100%;',
		    	    }
		    	]
		    },
		    {
		    	xtype: 'panel',
		    	layout: { type: 'hbox'},
		    	defaults:{margin : 3},
		    	flex: 1,
		    	items: [
		    	    {
		    	    	xtype:'panel',
						layout:{type:'vbox'},
						flex :1,
						id : 'fruit7',
						items:[	
				    	    {
				    	    	xtype: 'button',
				    	    	itemId: '7',//딸기형
				    	    	action:'selectFruit',
				    	    	margin:'7 10 7 10',
				    	    	flex: 1,
				    	    	style 	: "background-image:url('./resources/images/fruit_07.png');" +
			   			    	  'border:0;' +
			   			    	  'background-color:transparent;' + 
			   			    	  'background-repeat:no-repeat;' + 
			   			    	  'background-size:100% 100%;',
				    	    },
			    	    ],
		    	    	style 	: "background-image:url('./resources/images/frame_list.png');" +
								  'border:0;' +
								  'background-color:transparent;' + 
								  'background-repeat:no-repeat;' + 
								  'background-size:100% 100%;',
		    	    },
		    	    {
		    	    	xtype:'panel',
						layout:{type:'vbox'},
						flex :1,
						id : 'fruit8',
						items:[	
				    	    {
				    	    	xtype: 'button',
				    	    	itemId: '8',//딸기형
				    	    	action:'selectFruit',
				    	    	margin:'7 10 7 10',
				    	    	flex: 1,
				    	    	style 	: "background-image:url('./resources/images/fruit_07.png');" +
			   			    	  'border:0;' +
			   			    	  'background-color:transparent;' + 
			   			    	  'background-repeat:no-repeat;' + 
			   			    	  'background-size:100% 100%;',
				    	    },
			    	    ],
		    	    	style 	: "background-image:url('./resources/images/frame_list.png');" +
								  'border:0;' +
								  'background-color:transparent;' + 
								  'background-repeat:no-repeat;' + 
								  'background-size:100% 100%;',
		    	    }
		    	]
		    }
		    
		] ,
	}
});