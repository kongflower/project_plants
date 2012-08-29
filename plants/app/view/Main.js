Ext.define("plants.view.Main", {
	extend: 'Ext.navigation.View',
	

    config: {
    	id 				: 'mainView',
        autoDestroy 	: true,
        navigationBar 	: {hidden:true},
        useTitleForBackButtonText: true,

      
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
