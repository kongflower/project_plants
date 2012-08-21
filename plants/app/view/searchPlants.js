Ext.define('plants.view.searchPlants',{
	extend 	: 'Ext.Panel',
	xtype 	: 'searchPlants',
	id 		: 'searchPlants',
	
	config : {
		title   : 'searchPlants',
		
		layout 	: {type:'vbox',align:'middle'},
		defaults: {flex:1},
		
		items: [
		    {
		    	xtype 	: 'img',
		    	src 	: 'http://cfile24.uf.tistory.com/image/133E6D484EDD020E048345',
		    	width 	: '90%',
		    	margin 	: 20,
		    	flex 	: 3,
		    	action 	: 'movePage',
		    	value 	: {xtype: 'resultInfo'},
		    },
		    {	
		    	xtype 	: 'panel',
		    	layout 	: {type:'hbox', align:'stretch',pack:'center'},
		    	defaults: {flex:1, margin  : '0 4 10 4'},
		    	width 	: '90%',
		    	items:[
		    		{
		    		    xtype 	: 'button',
		    		    id  	: 'buttonLeaf',
		   			    text  	: '잎',
		   			    action: 'showSelect'
		   		    },
		    		{
		   		        xtype 	: 'button',
		    		    id  	: 'buttonFlower',
		    		    text  	: '꽃',
		    		    action: 'showSelect'
		    		},
		    	    {
		    			xtype 	: 'button',
		    			id  	: 'buttonFruit',
		    			text 	: '열매',
		    			action: 'showSelect'
		    		},
		    		{
		    			xtype 	: 'button',
		    			id  	: 'buttonGoDetail',
		    			text  	: 'Detail',
		    			value 	: {xtype: 'detailResult'},
		    			action 	: 'movePage',
		    		},
		        ],
		    },
		    {
		    	xtype 	: 'panel',
		    	layout 	: {type:'hbox', align:'stretch',pack:'center'},
		    	width 	: '90%',
		    	defaults: {flex:1, margin  : '22 4 22 4'},
		    	items:[
		    	    {
		    	    	xtype 	: 'img',
				    	src 	: 'http://cfile24.uf.tistory.com/image/133E6D484EDD020E048345',
		    	    },
		    	    {
		    	    	xtype 	: 'img',
		    	    	src 	: 'http://cfile24.uf.tistory.com/image/133E6D484EDD020E048345',
		    	    },
		    	    {
		    	    	xtype 	: 'img',
		    	    	src 	: 'http://cfile24.uf.tistory.com/image/133E6D484EDD020E048345',
		    	    },
		    	    {
		    	    	xtype 	: 'img',
		    	    	src 	: 'http://cfile24.uf.tistory.com/image/133E6D484EDD020E048345',
		    	    },
		    	    {
		    	    	xtype 	: 'img',
		    	    	src 	: 'http://cfile24.uf.tistory.com/image/133E6D484EDD020E048345',
		    	    }
		    	],
		    },
		],
	}
});