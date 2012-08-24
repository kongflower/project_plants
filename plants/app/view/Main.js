Ext.define("plants.view.Main", {
	extend: 'Ext.navigation.View',
	

    config: {
    	id 				: 'mainView',
        autoDestroy 	: true,
        navigationBar 	: { ui:'dark', docked: 'top', hidden:false },
      
        items: [
             {
            	 xtype : 'plantsMain' //0
             },
             {
            	 xtype : 'overlay'
             }
        ]
    },
});
