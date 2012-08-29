Ext.define("plants.view.Main", {
	extend: 'Ext.navigation.View',
	

    config: {
    	id 				: 'mainView',
        autoDestroy 	: true,
<<<<<<< HEAD

        navigationBar 	: { //ui:'dark', 
        	docked: 'top', hidden:true, cls: 'tabBG' },

=======
        navigationBar 	: {hidden:true},
        useTitleForBackButtonText: true,
>>>>>>> modify titlebar add ui
      
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
