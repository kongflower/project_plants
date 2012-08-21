Ext.define('plants.controller.searchController', {
    extend: 'Ext.app.Controller',
    config: {
    	refs: {
    		mainView: '#mainView',
    		searchPlants: '#searchPlants',
    		detailResult: 'detailResult',
    		overlay: 'overlay',
        },
        control: {
        	"[action=movePage]": {
                tap: 'onMovePage'
            },
            "[action=showSelect]": {
            	tap: 'onShowSelect'
            },
            'detailResult':{
				itemtap : 'resultListTap'
			},
			
        }
    },
    
    onMovePage : function(button, e, options){
    	this.getMainView().push(button.value);
    	//this.getMainView().animateActiveItem(button.value, { type: "slide", direction: "left" });
    	console.log('plants');
    },
    
    resultListTap:function(list, index, target,record, e, eOpts){
    	this.getMainView().push({xtype: 'resultInfo'});
    },
    
    onShowSelect: function(button, e, options){
    	this.getOverlay().show();
    }

});