Ext.define("plants.view.plantsTitlebar", {
	extend: 'Ext.TitleBar',
	xtype : 'plantsTitlebar',

    config: {
    	id 		: 'plantsTitlebar',
    	title 	: 'main',
    	
    	style 	: "background-image:url('./resources/images/title_Bra.png');",
        items 	: [
             {
            	 xtype 	: 'button',
	   			 action : 'actionBack',
	   			 width 	: '21px',
	   			 height : '26px',
	   			 style 	: "background-image:url('./resources/images/aroow_Left.png');" +
	   			    	  'border:0;' +
	   			    	  'background-color:transparent;' + 
	   			    	  'background-repeat:no-repeat;' + 
	   			    	  'background-size:100% 100%;',
	   			 margin : '0 0 0 5',
             },
             
        ]
    },
});