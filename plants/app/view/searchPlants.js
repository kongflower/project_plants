Ext.define('plants.view.searchPlants',{
	extend 	: 'Ext.Panel',
	xtype 	: 'searchPlants',
	
	requires: ["Ext.Img"],
	
	config : {
		id 		: 'searchPlants',
		title   : 'searchPlants',
		fullscreen : true,
		layout 	: {type:'vbox',align:'middle'},
		style 	: 'background-color:#ffffff',
		
		items: [
		    {
		    	xtype :'plantsTitlebar',
		    	title : '식물찾기',
		    	width : '100%',
		    	height: 50,
		    },
		    {
		    	xtype 	:'panel',
		    	layout 	:'fit',
		    	margin 	:'5 5 5 5',
		    	width 	:280,
		    	height 	:280,
		    	
		    	items 	:{
		    		xtype 	: 'img',
		    		id 		: 'searchMainImg',
			    	itemId 	: 'resultInfo',
			   	    padding : '20 20 30 20',
			   	    width 	: '100%',
			   	    height  : '100%',
			   	   	src 	: 'http://cfile24.uf.tistory.com/image/133E6D484EDD020E048345',
		    	   	action 	: 'movePage',
		        	mode 	: 'none',
		        	style 	: "background-image:url('./resources/images/frame_Large.png');" +
					  'border:0;' +
					  'background-color:transparent;' + 
					  'background-repeat:no-repeat;' + 
					  'background-size:100% 100%;' + 
					  'align:center'
		    	}
		    },
		    {	
		    	xtype 	: 'panel',
		    	layout 	: {type:'hbox', align:'stretch',pack:'center'},
		    	defaults: {flex:1, margin  : '0 4 10 4'},
		    	margin 	: '10 0 0 0',
		    	width 	: '90%',
		    	flex:1,
		    	items:[
		    		{
		    		    xtype 	: 'button',
		    		    id  	: 'buttonLeaf',
		   			    action 	: 'showSelect',
		   			    style 	: "background-image:url('./resources/images/pic01.png');" +
		   			    		  'border:0;' +
		   			    		  'background-color:transparent;' + 
		   			    		  'background-repeat:no-repeat;' + 
		   			    		  'background-size:100% 100%;'
		   		    },
		    		{
		   		        xtype 	: 'button',
		    		    id  	: 'buttonFlower',
		    		    action 	: 'showSelect',
		    		    style 	: "background-image:url('./resources/images/pic02.png');" +
  					  		 	  'border:0;' +
  					  		 	  'background-color:transparent;' + 
  					  		 	  'background-repeat:no-repeat;' + 
  					  		 	  'background-size:100% 100%;'
		    		},
		    	    {
		    			xtype 	: 'button',
		    			id  	: 'buttonFruit',
		    			action 	: 'showSelect',
		    			style 	: "background-image:url('./resources/images/pic03.png');" +
		    					  'border:0;' +
		    					  'background-color:transparent;' + 
		    					  'background-repeat:no-repeat;' + 
		    					  'background-size:100% 100%;'
		    		},
		    		{
		    			xtype 	: 'button',
		    			id  	: 'buttonGoDetail',
		    			itemId 	: 'detailResult',
		    			action 	: 'movePage',
		    			style 	: "background-image:url('./resources/images/pic04.png');" +
		    					  'border:0;' +
		    					  'background-color:transparent;' + 
		    					  'background-repeat:no-repeat;' + 
		    					  'background-size:100% 100%;'
		    		},
		        ],
		    },
		    {
		    	 xtype 		: 'panel',
		    	 id 	    : 'searchRerultPanel',
		    	 width 		: '90%',
		    	 layout 	: {type:'hbox', align:'stretch',},
		    	 flex       : 1,
		    	 margin 	: '15 5 5 5',
			     defaults 	: {width: '70px', height: '70px',margin  : '0 4 10 4'},
		    	 scrollable : {
		    		 direction: 'horizontal',
		    		 directionLock: true
		    	 },
		    	 
		    	 items:[
			     ],
		    }
		],
	}
});