Ext.define('plants.view.selectFruitPart',{
	extend: 'Ext.Panel',
	xtype: 'selectFruitPart',
	
	config : {
		layout: {type: 'vbox'},
		items :[
		    {
		    	xtype: 'panel',
		    	layout: {type: 'hbox'},
		    	flex: 1,
		    	items: [
		    	    {
		    	    	xtype: 'button',
		    	    	itemId: '석류형',
		    	    	action:'selectFruit',
		    	    	flex: 1,
		    	    	style 	: "background-image:url('./resources/images/fruit_01.png');" +
	   			    	  'border:0;' +
	   			    	  'background-color:transparent;' + 
	   			    	  'background-repeat:no-repeat;' + 
	   			    	  'background-size:100% 100%;',
		    	    },
		    	    {
		    	    	xtype: 'button',
		    	    	itemId: '벼형',
		    	    	action:'selectFruit',
		    	    	flex: 1,
		    	    	style 	: "background-image:url('./resources/images/fruit_02.png');" +
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
		    	flex: 1,
		    	items: [
		    	    {
		    	    	xtype: 'button',
		    	    	itemId: '솔방울형',
		    	    	action:'selectFruit',
		    	    	flex: 1,
		    	    	style 	: "background-image:url('./resources/images/fruit_03.png');" +
	   			    	  'border:0;' +
	   			    	  'background-color:transparent;' + 
	   			    	  'background-repeat:no-repeat;' + 
	   			    	  'background-size:100% 100%;',
		    	    },
		    	    {
		    	    	xtype: 'button',
		    	    	itemId: '과실형',
		    	    	action:'selectFruit',
		    	    	flex: 1,
		    	    	style 	: "background-image:url('./resources/images/fruit_04.png');" +
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
		    	flex: 1,
		    	items: [
		    	    {
		    	    	xtype: 'button',
		    	    	itemId: '자루형',
		    	    	action:'selectFruit',
		    	    	flex: 1,
		    	    	style 	: "background-image:url('./resources/images/fruit_05.png');" +
	   			    	  'border:0;' +
	   			    	  'background-color:transparent;' + 
	   			    	  'background-repeat:no-repeat;' + 
	   			    	  'background-size:100% 100%;',
		    	    },
		    	    {
		    	    	xtype: 'button',
		    	    	itemId: '호두형',
		    	    	action:'selectFruit',
		    	    	flex: 1,
		    	    	style 	: "background-image:url('./resources/images/fruit_06.png');" +
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
		    	flex: 1,
		    	items: [
		    	    {
		    	    	xtype: 'button',
		    	    	itemId: '딸기형',
		    	    	action:'selectFruit',
		    	    	flex: 1,
		    	    	style 	: "background-image:url('./resources/images/fruit_07.png');" +
	   			    	  'border:0;' +
	   			    	  'background-color:transparent;' + 
	   			    	  'background-repeat:no-repeat;' + 
	   			    	  'background-size:100% 100%;',
		    	    },
		    	    {
		    	    	xtype: 'button',
		    	    	itemId: '핵',
		    	    	action:'selectFruit',
		    	    	flex: 1,
		    	    	style 	: "background-image:url('./resources/images/fruit_07.png');" +
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