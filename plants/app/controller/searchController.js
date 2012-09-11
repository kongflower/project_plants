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
    	Ext.getStore('communityStore').clearFilter();
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
    	this.getResultImg().setSrc('http://14.63.218.122/plantsImage/img' + record.get('number') + '.jpg');
    	
    	this.saveRecentLocalStore('http://14.63.218.122/plantsImage/img' + record.get('number') + '.jpg',record.get('name'));
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
    	
    	this.getResultImg().setSrc('http://14.63.218.122/plantsImage/img' + selectRecord.get('number') + '.jpg');
    	Ext.getCmp('infoName').setHtml(selectRecord.get('name'));
    	
    	this.saveRecentLocalStore('http://14.63.218.122/plantsImage/img' + selectRecord.get('number') + '.jpg',selectRecord.get('name'));
    },
    
    saveRecentLocalStore:function(saveurl,savename){
    	var now = new Date();
    	Ext.getStore('recentSearchData').add({
			url : saveurl, 
			name: savename,
			date: now.getTime(),
		});
		
		//Ext.getStore('recentSearchData').sync();
		
		var filterData = Ext.getStore('recentSearchData').getData();
		if(filterData.getCount() > 10){
			Ext.getStore('recentSearchData').removeAt(0);
		}
    },
    //////////////////////// overlay /////////////////////////////////////////////
    
    onShowSelect: function(button, e, options){
    	
    	if(button.getId()=='buttonLeaf'){
    		this.getOverlay().add([{
    								xtype:'selectLeafPart',
    								flex:10,
    		}]);
    		if(leafCondition != 'none')
    			Ext.getCmp('Leaf'+leafCondition).setStyle(styleFrameListOn);
    		Ext.getCmp('overlayTitlebar').setTitle('잎 선택');
    	}
    	else if(button.getId()=='buttonFlower'){
    		this.getOverlay().add([{
    								xtype:'selectFlowerPart',
    								flex:10,
    		}]);
    		if(colorCondition != 'none')
    			Ext.getCmp('color'+colorCondition).setStyle(styleFrameListOn);
    		
    		if(timeCondition != 'none'){
    			Ext.getCmp('timeSlider').setValue(timeCondition*1);
    			this.getTimeSlider().setLabel(timeCondition+'월');
    		}
    		
    		Ext.getCmp('overlayTitlebar').setTitle('꽃 선택');
    	}
    	else if(button.getId()=='buttonFruit'){
    		this.getOverlay().add([{
    								xtype:'selectFruitPart',
    								flex:10,
    		}]);
    		if(fruitCondition != 'none')
    			Ext.getCmp('fruit'+fruitCondition).setStyle(styleFrameListOn);
    		Ext.getCmp('overlayTitlebar').setTitle('열매 선택');
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
  
    	var leafId = button.getItemId();
    	if(leafCondition == leafId && leafCondition != 'none'){
    		leafCondition = 'none',
    		Ext.getCmp('Leaf'+leafId).setStyle(styleFrameList);
    	}
    	else{
    		if(leafCondition != 'none')
    			Ext.getCmp('Leaf'+leafCondition).setStyle(styleFrameList);
    		
    		leafCondition = leafId,
    		Ext.getCmp('Leaf'+leafId).setStyle(styleFrameListOn);
    	}
    	
    	this.setConditionFilter();
    	// 오버레이 숨기기 
    	
    	this.getOverlay().hide();
    },
    
    onSelectColor:function(button, e, options){
    	var colorId = button.getItemId();
    	
    	if(colorCondition == colorId && colorCondition != 'none'){
    		colorCondition = 'none',
    		Ext.getCmp('color'+colorId).setStyle(styleFrameList);
    	}
    	else{
    		if(colorCondition != 'none')
    			Ext.getCmp('color'+colorCondition).setStyle(styleFrameList);
    		
    		colorCondition = colorId,
    		Ext.getCmp('color'+colorId).setStyle(styleFrameListOn);
    	}
    	
    	this.setConditionFilter();
    },
    
    onSelectFruit:function(button, e, options){
    	var fruitId = button.getItemId();
    	
    	if(fruitCondition == fruitId && fruitCondition != 'none'){
    		console.log('test');
    		fruitCondition = 'none',
    		Ext.getCmp('fruit'+fruitId).setStyle(styleFrameList);
    	}
    	else{
    		if(fruitCondition != 'none')
    			Ext.getCmp('fruit'+fruitCondition).setStyle(styleFrameList);
    		
    		fruitCondition = fruitId,
    		Ext.getCmp('fruit'+fruitId).setStyle(styleFrameListOn);
    	}
    	
    	this.setConditionFilter();
    	// 오버레이 숨기기 
    	this.getOverlay().hide();
    },
    
    onSelectFlower:function(button, e, options){
    	// 오버레이 숨기기 
    	this.getOverlay().hide();
    },
    
    changeTimeSlider:function(me, mySlider,thumb, newValue, oldValue, eOpts){
    	var mon = 'no';
    	if(newValue != 0){
    		mon = '' + newValue + '월';
    		timeCondition = ''+newValue;
    	}
    	else{
    		timeCondition = 'none';
    	}
    	this.getTimeSlider().setLabel(mon);
    	
    	this.setConditionFilter();
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
            	isNone = false;
            	console.log('leaf: ' + record.get('leaf') + 'save: ' + leafCondition);
            	if(record.get('leaf') != leafCondition){
            		return false;
            	}
            }
            if(timeCondition != 'none'){
            	isNone = false;
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
            	isNone = false;
            	var color = record.get('color');
            	var colorarray = color.split(',');
            	var returnValue = false;
            	
            	for(var i=0;i<colorarray.length;i++)
            	{
            		console.log('color ' + colorarray[i] + ' ' + colorCondition);
            		if(colorarray[i] == colorCondition)
            		{
            			returnValue = true;
            		}
            	}
            	
            	if(returnValue == false){
        			console.log('asdf');
        			return false;
        		}
            }
            if(fruitCondition != 'none'){
            	isNone = false;
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
    	
    	if(filterData.getCount() == 0 || isNone == true){
    		this.getSearchMainImg().setSrc('./resources/images/noResult.png');
    		this.getSearchMainImg().setItemId(-1);
    	}
    	else{
    		isNone = true;
	    	for(var i=0;i<filterData.getCount() && i < 10;i++){
	    		if(i==0){
	    			this.getSearchMainImg().setSrc('http://14.63.218.122/plantsImage/img' + filterData.getAt(i).get('number') + '.jpg');
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
		    	    	src 	: 'http://14.63.218.122/plantsImage/img' + filterData.getAt(i).get('number') + '.jpg',
		    	    	width 	: '100%',
				   	    height 	: '100%',
			        	mode 	: 'none',
			        	padding : '5 5 5 5',
			    	}
	    	    }]);
	    	}
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
var isNone = true;

var styleFrameList = "background-image:url('./resources/images/frame_list.png');" +
					 'border:0;' +
					 'background-color:transparent;' + 
					 'background-repeat:no-repeat;' + 
					 'background-size:100% 100%;';
var styleFrameListOn = "background-image:url('./resources/images/frame_list_on.png');" +
'border:0;' +
'background-color:transparent;' + 
'background-repeat:no-repeat;' + 
'background-size:100% 100%;';