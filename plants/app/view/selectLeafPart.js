Ext.define('plants.view.selectLeafPart',{
	extend: 'Ext.Panel',
	xtype: 'selectLeafPart',
	
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
		    	    	text: '갈래잎',
		    	    	action:'selectLeaf',
		    	    	flex: 1
		    	    },
		    	    {
		    	    	xtype: 'button',
		    	    	text: '안갈래잎',
		    	    	action:'selectLeaf',
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
		    	    	text: '바늘잎',
		    	    	action:'selectLeaf',
		    	    	flex: 1
		    	    },
		    	    {
		    	    	xtype: 'button',
		    	    	text: '비늘잎',
		    	    	action:'selectLeaf',
		    	    	flex: 1
		    	    }
		    	]
		    }
		] ,
	}
});