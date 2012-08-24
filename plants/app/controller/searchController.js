Ext.define('plants.controller.searchController', {
    extend: 'Ext.app.Controller',
    config: {
    	refs: {
    		mainView: '#mainView',
    		searchPlants: '#searchPlants',
    		detailResult: 'detailResult',
    		overlay: 'overlay',
    		test : '#test',
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
			'mainView':{
				 pop 	: 'pagePop',
			 	 push 	: 'pagePush',
			}
			
        }
    },
    
    onMovePage : function(button, e, options){
//    	if(button.getItemId() == 'searchPlants'){
//    		this.getMainView().push(button.value);
//    	}
    	this.getMainView().push({xtype: button.getItemId()});
    	console.log('plants  :  ' + button.getItemId());
    },
    
    resultListTap:function(list, index, target,record, e, eOpts){
    	this.getMainView().push({xtype: 'resultInfo'});
    },
    
    onShowSelect: function(button, e, options){
    	this.getOverlay().show();
    },
    pagePop: function(navi,view, eOpts){
    	console.log('pop : ' + navi.getActiveItem().getId());
    	if(navi.getActiveItem().getId() == 'plantsMain'){
    		navi.getNavigationBar().setHidden(true);
    	}
    },
    pagePush: function(navi,view, eOpts){
    	console.log('push : ' + navi.getActiveItem().getId());
    	if(navi.getActiveItem().getId() != 'plantsMain'){
    		navi.getNavigationBar().setHidden(false);
    	}
    }
});