Ext.define('plants.controller.searchController', {
    extend: 'Ext.app.Controller',
    requires: [
           'plants.view.selectLeafPart'
    ],
    config: {
//    	stores: [
//    	      'searchData'
//    	],
    	refs: {
    		mainView: '#mainView',
    		searchPlants: '#searchPlants',
    		detailResult: 'detailResult',
    		overlay: 'overlay',
        },
        control: {
        	'[action=movePage]': {
                tap: 'onMovePage'
            },
            '[action=actionBack]': {
            	tap: 'onActionBack'
            },            
            '[action=showSelect]': {
            	tap: 'onShowSelect'
            },
            '[action=selectLeaf]': {
            	tap: 'onSelectLeaf'
            },
            'overlay button[action=closeOverlay]':{
            	tap: 'onCloseOverlay'
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
    onActionBack : function(button, e, options){
    	this.getMainView().pop(1);
    },
   
    //////////////////////////////////////////////////////////////////////////////
    
    
    
    //////////////////// main ////////////////////////////////////////////////////
    
    pagePop: function(navi,view, eOpts){
    	console.log('pop : ' + navi.getActiveItem().getId());
    	
//    	if(navi.getActiveItem().getId() == 'plantsMain'){
//    		navi.getNavigationBar().setHidden(true);
//    	}
    },
    
    pagePush: function(navi,view, eOpts){
    	console.log('push : ' + navi.getActiveItem().getId());
//    	if(navi.getActiveItem().getId() != 'plantsMain'){
//    		navi.getNavigationBar().setHidden(false);
//    	}
    },
    
    mainInit: function(me){
    	console.log('init');
    	//me.getNavigationBar().setHidden(true);
    },
    //////////////////////////////////////////////////////////////////////////////
    
    
    
    /////////////////////////  resultInfo   //////////////////////////////////////
    
    resultListTap:function(list, index, target,record, e, eOpts){
    	this.getMainView().push({xtype: 'resultInfo'});
    },
    
    //////////////////////////////////////////////////////////////////////////////
    
    
    
    //////////////////////// overlay /////////////////////////////////////////////
    
    onShowSelect: function(button, e, options){
    	console.log('select: ' + button.getId());
    	if(button.getId()=='buttonLeaf'){
    		this.getOverlay().add([{
    								xtype:'selectLeafPart',
    								flex:10,
    		}]);
    	}
    	this.getOverlay().show();
    },
    
    onCloseOverlay : function(button, e, options){
    	console.log('overlay : ');
    	this.getOverlay().removeAll(true,false);
    	this.getOverlay().hide();
    },
    
    onSelectLeaf : function(button, e, options){
    	console.log('onSelectLeaf : '  + Ext.getStore('searchData'));
    	
    	//스토어에 필터추가 후 로드 데이터  
    	//Ext.getStore('searchData').clearFilter();
    	Ext.getStore('searchData').setFilters([
    	       {property: "leaf", value: button.getText()},
    	]);
    	Ext.getStore('searchData').getData();
    	// 오버레이 숨기기 
    	this.getOverlay().removeAll(true,false);
    	this.getOverlay().hide();
    }
    
    //////////////////////////////////////////////////////////////////////////////
});