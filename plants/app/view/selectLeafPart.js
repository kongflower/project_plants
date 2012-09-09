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
		    	    	xtype: 'button',
		    	    	itemId: '갈래',
		    	    	action:'selectLeaf',
		    	    	flex: 1,
		    	    	style 	: "background-image:url('./resources/images/leaf_03.png');" +
	   			    	  'border:0;' +
	   			    	  'background-color:transparent;' + 
	   			    	  'background-repeat:no-repeat;' + 
	   			    	  'background-size:100% 100%;',
		    	    },
		    	    {
		    	    	xtype: 'button',
		    	    	itemId: '안갈래',
		    	    	action:'selectLeaf',
		    	    	flex: 1,
		    	    	style 	: "background-image:url('./resources/images/leaf_04.png');" +
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
		    	    	xtype: 'button',
		    	    	itemId: '바늘',
		    	    	action:'selectLeaf',
		    	    	flex: 1,
		    	    	style 	: "background-image:url('./resources/images/leaf_02.png');" +
	   			    	  'border:0;' +
	   			    	  'background-color:transparent;' + 
	   			    	  'background-repeat:no-repeat;' + 
	   			    	  'background-size:100% 100%;',
		    	    },
		    	    {
		    	    	xtype: 'button',
		    	    	itemId: '비늘',
		    	    	action:'selectLeaf',
		    	    	flex: 1,
		    	    	style 	: "background-image:url('./resources/images/leaf_01.png');" +
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