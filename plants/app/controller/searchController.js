Ext.define('plants.controller.searchController', {
    extend: 'Ext.app.Controller',
    config: {
    	refs: {
    		mainView: '#mainView',
    		searchPlants: '#searchPlants',
    		detailResult: 'detailResult',
    		overlay: 'overlay',
    		test : '#test',
    		testimg : '#testimg',
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
				 pop 	 	: 'pagePop',
			 	 push 	 	: 'pagePush',
			 	 initialize : 'mainInit',
			}
			
        }
    },
    
    
    ///////////////////  common  /////////////////////////////////////////////////
    
    onMovePage : function(button, e, options){
    	this.getMainView().push({xtype: button.getItemId()});
    	console.log('plants  :  ' + button.getItemId());
    },
   
    onShowSelect: function(button, e, options){
    	//this.getTestimg().setSrc('resources/images/img1.jpeg');
    	this.getOverlay().show();
    },
    
    //////////////////////////////////////////////////////////////////////////////
    
    
    
    //////////////////// main ////////////////////////////////////////////////////
    
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
    },
    
    mainInit: function(me){
    	console.log('init');
    	me.getNavigationBar().setHidden(true);
    },
    //////////////////////////////////////////////////////////////////////////////
    
    
    
    /////////////////////////  resultInfo   //////////////////////////////////////
    
    resultListTap:function(list, index, target,record, e, eOpts){
    	this.getMainView().push({xtype: 'resultInfo'});
    },
    
    //////////////////////////////////////////////////////////////////////////////
});