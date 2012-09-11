Ext.define('plants.view.selectLeafPart',{
	extend: 'Ext.Panel',
	xtype: 'selectLeafPart',
	
	config : {
		layout: {type: 'vbox'},
		items :[
		    {
		    	xtype:'spacer',
		    	flex : 1,
		    },
		    {
		    	xtype: 'panel',
		    	layout: {type: 'hbox'},
		    	flex: 2,
		    	items: [
		    	    {
		    	    	xtype:'panel',
		    	    	id:'Leaf1',
		    	    	layout:{type:'vbox'},
		    	    	flex :1,
		    	    	items:[
		    	    	    {
								xtype: 'button',
								itemId: '1', //갈래
								action:'selectLeaf',
								margin:10,
								flex: 1,
								style 	: "background-image:url('./resources/images/leaf_03.png');" +
									  'border:0;' +
									  'background-color:transparent;' + 
									  'background-repeat:no-repeat;' + 
									  'background-size:100% 100%;',
		    	    	    }
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
		    	    	id:'Leaf2',
		    	    	flex :1,
		    	    	items:[
		    	    	    {
				    	    	xtype: 'button',
				    	    	itemId: '2',//안갈래
				    	    	action:'selectLeaf',
				    	    	margin:10,
				    	    	flex: 1,
				    	    	style 	: "background-image:url('./resources/images/leaf_04.png');" +
			   			    	  'border:0;' +
			   			    	  'background-color:transparent;' + 
			   			    	  'background-repeat:no-repeat;' + 
			   			    	  'background-size:100% 100%;',
		    	    	    }
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
		    	flex: 2,
		    	items: [
		    	    {
		    	    	xtype:'panel',
		    	    	layout:{type:'vbox'},
		    	    	flex :1,
		    	    	id:'Leaf3',
		    	    	items:[
		    	    	    {
				    	    	xtype: 'button',
				    	    	itemId: '3', //바늘
				    	    	action:'selectLeaf',
				    	    	margin:10,
				    	    	flex: 1,
				    	    	style 	: "background-image:url('./resources/images/leaf_02.png');" +
			   			    	  'border:0;' +
			   			    	  'background-color:transparent;' + 
			   			    	  'background-repeat:no-repeat;' + 
			   			    	  'background-size:100% 100%;',
		    	    	    }
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
		    	    	id:'Leaf4',
		    	    	items:[
		    	    	    {
				    	    	xtype: 'button',
				    	    	itemId: '4',//비늘 
				    	    	action:'selectLeaf',
				    	    	margin:10,
				    	    	flex: 1,
				    	    	style 	: "background-image:url('./resources/images/leaf_01.png');" +
			   			    	  'border:0;' +
			   			    	  'background-color:transparent;' + 
			   			    	  'background-repeat:no-repeat;' + 
			   			    	  'background-size:100% 100%;',
		    	    	    }
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
		    	xtype:'spacer',
		    	flex : 1,
		    },
		] ,
	}
});