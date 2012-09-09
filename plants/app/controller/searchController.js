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
    		mainView 		 : '#mainView',
    		searchPlants 	 : '#searchPlants',
    		searchRerultPanel: '#searchRerultPanel',
    		detailResult 	 : 'detailResult',
    		resultInfo 		 : 'resultInfo',
    		resultImg        : '#resultImg',
    		overlay 		 : 'overlay',
    		searchMainImg 	 : '#searchMainImg',
    		explane 		 : '#explane',
    		selectFlower 	 : '#selectFlower',
    		timeSlider 		 : '#timeSlider',
    		selectFlowerPart : 'selectFlowerPart',
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
            '[action=selectColor]': {
            	tap: 'onSelectColor'
            },
            '[action=selectFruit]': {
            	tap: 'onSelectFruit'
            },
            '[action=clickResultImage]': {
            	tap: 'onClickResultImage'
            },
            '[action=tapMainImg]': {
            	tap: 'onTapMainImg'
            },
            'overlay button[action=closeOverlay]':{
            	tap: 'onCloseOverlay'
            },
            '[action=initCondition]':{
            	tap: 'onInitCondition'
            },
            'overlay':{
            	hide:'onOverlayHide'
            },
            'detailResult':{
				itemtap : 'resultListTap'
			},
			'mainView':{
				 pop 	 	: 'pagePop',
			 	 push 	 	: 'pagePush',
			 	 initialize : 'mainInit',
			},
			'searchMainImg':{
				//tap : 'tapSearchMainImg'
			},
			'[action=clickFlower]' : {
				tap : 'onSelectFlower'
			},
			'selectFlowerPart sliderfield':{
				change : 'changeTimeSlider'
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
    
    initStoreFilter : function(){
    	Ext.getStore('searchData').clearFilter();
    	leafCondition = 'none';
    	fruitCondition = 'none';
    	colorCondition = 'none';
    	timeCondition = 'none';
    },
    
    //////////////////// main ////////////////////////////////////////////////////
    
    pagePop: function(navi,view, eOpts){
    	console.log('pop : ' + navi.getActiveItem().getId());
    	
    	if(navi.getActiveItem().getId() == 'plantsMain'){
    	//	navi.getNavigationBar().setHidden(true);
    		this.initStoreFilter();
    	}
    	if(navi.getActiveItem().getId() == 'detailResult'){
    		this.getDetailResult().deselectAll();
    	}
    },
    
    pagePush: function(navi,view, eOpts){
    	console.log('push : ' + navi.getActiveItem().getId());
//    	if(navi.getActiveItem().getId() == 'plantsMain'){
//    		navi.getNavigationBar().setHidden(false);
//    	}
    },
    
    mainInit: function(me){
    	console.log('init');
    	//me.getNavigationBar().setHidden(true);
    },
    
    onInitCondition:function(){
    	this.initStoreFilter();
    	this.getSearchMainImg().setSrc('./resources/images/noResult.png');
		this.getSearchMainImg().setItemId(-1);
		this.getSearchRerultPanel().removeAll(true,true);
    },
    //////////////////////////////////////////////////////////////////////////////
    
    
    
    /////////////////////////  resultInfo   //////////////////////////////////////
    
    resultListTap:function(list, index, target,record, e, eOpts){
    	this.getMainView().push({xtype: 'resultInfo'});
    
    	this.getResultInfo().setHtml(
		'<div style="width:92%;  margin-left:4%"' + 
			record.get('body') +
	    "</div>"
    	);
    	  
    	Ext.getCmp('infoName').setHtml(record.get('name'));
    	this.getResultImg().setSrc(record.get('url'));
    },
    
    //////////////////////////////////////////////////////////////////////////////
    
    onClickResultImage : function( img_m, e, eOpts ){
    	this.getSearchMainImg().setSrc(img_m.getSrc());
    	this.getSearchMainImg().setItemId(img_m.getItemId());
    },
    
    onTapMainImg : function( img_m, e, eOpts ){
    	if(img_m.getItemId() == -1)
    		return;
    	
    	var selectRecord = Ext.getStore('searchData').getData().getAt(img_m.getItemId()-1);
    	this.getMainView().push({xtype: 'resultInfo'});
    	//this.getExplane().setValue(filterData.getAt(img_m.getItemId()-1).get('body')); // +1한거 빼줘야 한다. 
    	this.getResultInfo().setHtml(
    			"<div style='margin:5%; width:90%;'>" + 
    				selectRecord.get('body') +
    		    "</div>"
    	);
    	
    	this.getResultImg().setSrc(selectRecord.get('url'));
    	Ext.getCmp('infoName').setHtml(selectRecord.get('name'));
    },
    
    //////////////////////// overlay /////////////////////////////////////////////
    
    onShowSelect: function(button, e, options){
    	
    	if(button.getId()=='buttonLeaf'){
    		this.getOverlay().add([{
    								xtype:'selectLeafPart',
    								flex:10,
    		}]);
    		Ext.getCmp('overlayTitlebar').setTitle('잎 선택');
    	}
    	else if(button.getId()=='buttonFlower'){
    		this.getOverlay().add([{
    								xtype:'selectFlowerPart',
    								flex:10,
    		}]);
    		Ext.getCmp('overlayTitlebar').setTitle('꽃 선택');
    	}
    	else if(button.getId()=='buttonFruit'){
    		this.getOverlay().add([{
    								xtype:'selectFruitPart',
    								flex:10,
    		}]);
    		Ext.getCmp('overlayTitlebar').setTitle('열 선택');
    	}
    	this.getOverlay().show();
    },
    
    onCloseOverlay : function(button, e, options){
    	//this.getOverlay().removeAll(true,false);
    	this.getOverlay().hide();
    },
    
    onOverlayHide : function(myOverlay, eOpts){
    	myOverlay.removeAll(true,false);
    },
    
    onSelectLeaf : function(button, e, options){
  
    	leafCondition = button.getItemId();
    	this.setConditionFilter();
    	// 오버레이 숨기기 
    	
    	this.getOverlay().hide();
    },
    
    onSelectColor:function(button, e, options){
    	colorCondition = button.getItemId();
    },
    
    onSelectFruit:function(button, e, options){
    	fruitCondition = button.getItemId();
    	
    	this.setConditionFilter();
    	// 오버레이 숨기기 
    	this.getOverlay().hide();
    },
    
    onSelectFlower:function(button, e, options){
    	this.setConditionFilter();
    	// 오버레이 숨기기 
    	this.getOverlay().hide();
    },
    
    changeTimeSlider:function(me, mySlider,thumb, newValue, oldValue, eOpts){
    	var mon = 'no';
    	if(newValue != 0){
    		mon = '' + newValue + '월';
    	}
    	this.getTimeSlider().setLabel(mon);
    	timeCondition = ''+newValue;
    },
    
    setConditionFilter:function(){
    	console.log('filter');
    	//스토어에 필터추가 후 로드 데이터  
    	Ext.getStore('searchData').clearFilter();
//    	Ext.getStore('searchData').setFilters([
//    	       {property: "leaf", value: leafCondition},
//    	]);
    	
    	Ext.getStore('searchData').filterBy(function(record){
    		
            console.log('test : ' + record.get('name'));
            
            if(leafCondition != 'none'){
            	console.log('leaf: ' + record.get('leaf') + 'save: ' + leafCondition);
            	if(record.get('leaf') != leafCondition){
            		return false;
            	}
            }
            if(timeCondition != 'none'){
            	var time = record.get('time');
            	var timearray = time.split(',');
            	var returnValue = false;
            	
            	for(var i=0;i<timearray.length;i++)
            	{
            		console.log('time ' + timearray[i] + ' ' + timeCondition);
            		if(timearray[i] == timeCondition)
            		{
            			returnValue = true;
            		}
            	}
            	
            	if(returnValue == false){
        			console.log('asdf');
        			return false;
        		}
            }
            if(colorCondition != 'none'){
            	if(record.get('color') != colorCondition){
            		return false;
            	}
            }
            if(fruitCondition != 'none'){
            	if(record.get('fruit') != fruitCondition){
            		return false;
            	}
            }
            console.log('last');
            return true;
        });
    	
    	
    	this.getSearchRerultPanel().removeAll(true,true);
    	this.getSearchMainImg().setItemId(-1);
    	
    	var filterData = Ext.getStore('searchData').getData();
    
    	for(var i=0;i<filterData.getCount() && i < 10;i++){
    		if(i==0){
    			this.getSearchMainImg().setSrc(filterData.getAt(i).get('url'));
    			this.getSearchMainImg().setItemId(1);
    		}
    		this.getSearchRerultPanel().add([{
    	    	xtype 	:'panel',
		    	layout 	:'fit',
		    	margin 	:'5 5 5 5',
		    	style 	: "background-image:url('./resources/images/frame_snall.png');" +
				  'border:0;' +
				  'background-color:transparent;' + 
				  'background-repeat:no-repeat;' + 
				  'background-size:100% 100%;',
		    	items 	:{
		    		xtype 	: 'img',
		    		action 	: 'clickResultImage',
		    		itemId  : i+1,								// 0이 입력되면 값이 들어가지 않는다. 그래서 +1 
	    	    	src 	: filterData.getAt(i).get('url'),
	    	    	width 	: '100%',
			   	    height 	: '100%',
		        	mode 	: 'none',
		        	padding : '5 5 5 5',
		    	}
    	    }]);
    	}
    },
    
    //////////////////////////////////////////////////////////////////////////////
    
    
    /////////////////////////// store ////////////////////////////////////////////
    searchDataLoad : function(button, e, options){
    	console.log('testtest');
    },
    /////////////////////////////////////////////////////////////////////////////
});

var leafCondition = 'none';
var fruitCondition = 'none';
var colorCondition = 'none';
var timeCondition = 'none';