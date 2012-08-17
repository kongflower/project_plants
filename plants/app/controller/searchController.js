Ext.define('plants.controller.searchController', {
    extend: 'Ext.app.Controller',
    config: {
    	refs: {
    		mainView: '#mainView',
    		searchPlants: '#searchPlants',
        },
        control: {
        	"[action=movePage]": {
                tap: 'onMovePage'
            },
        }
    },
    
    onMovePage : function(button, e, options){
    	this.getMainView().push(button.value);
    	//this.getMainView().animateActiveItem(button.value, { type: "slide", direction: "left" });
    	console.log('plants');
    }

});