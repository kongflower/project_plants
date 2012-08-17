Ext.define("plants.view.Main", {
	extend: 'Ext.navigation.View',

    config: {
        id: 'mainView',
        autoDestroy: true,
      
        items: [
             {
            	 xtype: 'plantsMain' //0
             }
        ]
    }
});
