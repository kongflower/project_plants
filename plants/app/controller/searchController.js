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
    		searchRerultPanel: '#searchRerultPanel',
    		detailResult: 'detailResult',
    		overlay: 'overlay',
    		searchMainImg:'#searchMainImg',
    		explane:'#explane',
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
			},
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
    	console.log('log : ' + record.get('body') + ' ' + this.getExplane());
    	this.getExplane().setValue(record.get('body'));
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
    	
    	this.getSearchRerultPanel().removeAll(true,false);
    	var filterData = Ext.getStore('searchData').getData();
    	
    	console.log(filterData.getCount());
    	for(var i=0;i<filterData.getCount();i++){
    		if(i==0){
    			this.getSearchMainImg().setSrc(filterData.getAt(i).get('url'));
    			console.log(filterData.getAt(i).get('url'));
    		}
    		this.getSearchRerultPanel().add([{
    	    	xtype 	:'panel',
		    	layout 	:'fit',
		    	margin 	:'5 5 5 5',
		    	style 	: "background-image:url('./resources/images/frame_Large.png');" +
				  'border:0;' +
				  'background-color:transparent;' + 
				  'background-repeat:no-repeat;' + 
				  'background-size:100% 100%;',
		    	items 	:{
		    		xtype 	: 'img',
	    	    	src 	: filterData.getAt(i).get('url'),
	    	    	width 	: '100%',
			   	    height 	: '100%',
		        	mode 	: 'none',
		        	padding : '5 5 5 5',
		    	}
    	    }]);
    	}
    	
    	// 오버레이 숨기기 
    	this.getOverlay().removeAll(true,false);
    	this.getOverlay().hide();
    },
    
    //////////////////////////////////////////////////////////////////////////////
    
    
    /////////////////////////// store ////////////////////////////////////////////
    searchDataLoad : function(button, e, options){
    	console.log('testtest');
    },
    /////////////////////////////////////////////////////////////////////////////
});