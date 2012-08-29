Ext.define('plants.view.overlaySelect',{
	extend: 'Ext.Panel',
	xtype: 'overlay',
	
	config : {
		modal 		  : true ,
		centered 	  : true ,
		hidden 		  :true ,
		hideOnMaskTap :true ,
		width 	 	  : '90%' , 
		height 		  : '90%' ,
		layout 		  : {type:'vbox'},
		items :[
		    {
		    	xtype 	: 'titlebar',
		    	docked 	: 'top',
		    	title 	: "Overlay",
		    	flex 	: 1,
		    	style 	: "background-image:url('./resources/images/title_Bra.png');",
		    	items 	:[
		    	    {
		    	    	xtype 	:'button',
		    	    	text 	:'close',
		    	    	action :'closeOverlay',
		    	    	ui : 'confirm',
		    	    },
		    	],
		    },
		] ,
		scrollable : true ,
	}
});