Ext.define('plants.controller.myPageController', {
    extend: 'Ext.app.Controller',
    config: {
    	refs: {
    		mainView 		 : '#mainView',
    		favoBookmarkInfo : 'favoBookmarkInfo',
    		favoBookmarkList: 'favoBookmarkList',
    		favoBookmarkImg: '#favoBookmarkImg',
    		recentSearchInfo: 'recentSearchInfo',
    		recentSearchList: 'recentSearchList',
    		recentSearchImg: '#recentSearchImg'
        },
        control: {
        	"[action=btnPostTap]": {
                tap: 'onBtnPostTap'
            },
            "[action=btnCancleTap]": {
                tap: 'onBtnCancleTap'
            },
//        	'boardInput button#btnPost': {
//        		tap: 'onBtnPostTap2'
//        	}
            'favoBookmarkList':{
				itemtap : 'favoBookmarkListTap'
			},
			'recentSearchList':{
				itemtap : 'recentSearchListTap'
			}
        }
    },
    
    onBtnPostTap: function(img, e, options) {
    	console.log('게시');
    	Ext.Msg.alert('Message', '게시하였습니다.', 
    		function(){
				console.log('on ok button');
				Ext.getCmp('mainView').pop(1);
    	});
    },
    onBtnCancleTap: function(img, e, options) {
    	console.log('취소');
    	Ext.Msg.alert('Message', '취소하였습니다.', 
    		function(){
				console.log('on Cancle button');
				Ext.getCmp('mainView').pop(1);
    	});
    },
    
    favoBookmarkListTap: function(list, index, target,record, e, eOpts){
//    	console.log("탭 되었슴.");
    	var localStore = Ext.getStore('searchData');
    	localStore.clearFilter();
    	Ext.getStore('searchData').setFilters([
    	    {property: "name", value: record.get('name')},
		]);
    	
    	var filterData = Ext.getStore('searchData').getData();
    	this.getMainView().push({xtype: 'favoBookmarkInfo'});
        
    	//var bd = filterData.getAt(0).get('body');
    	//var ur = filterData.getAt(0).get('url');
    	
    	this.getFavoBookmarkInfo().setHtml(
		'<div style="width:92%;  margin-left:4%"' + 
			filterData.getAt(0).get('body') +
	    "</div>"
    	);
    	  
    	Ext.getCmp('infoName').setHtml(record.get('name'));
    	this.getFavoBookmarkImg().setSrc(filterData.getAt(0).get('url'));
    	//this.getFavoBookmarkImg().setSrc(record.get('url'));
    },
    recentSearchListTap: function(list, index, target,record, e, eOpts){	
    	var localStore = Ext.getStore('searchData');
    	localStore.clearFilter();
    	Ext.getStore('searchData').setFilters([
    	    {property: "name", value: record.get('name')},
		]);
    	
    	var filterData = Ext.getStore('searchData').getData();
    	this.getMainView().push({xtype: 'recentSearchInfo'});
        
    	//var bd = filterData.getAt(0).get('body');
    	//var ur = filterData.getAt(0).get('url');
    	
    	this.getRecentSearchInfo().setHtml(
		'<div style="width:92%;  margin-left:4%"' + 
			filterData.getAt(0).get('body') +
	    "</div>"
    	);
    	  
    	Ext.getCmp('infoName').setHtml(record.get('name'));
    	this.getRecentSearchImg().setSrc(filterData.getAt(0).get('url'));
    	//this.getFavoBookmarkImg().setSrc(record.get('url'));
    }
    
});