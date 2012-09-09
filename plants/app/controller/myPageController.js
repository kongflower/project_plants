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
    	this.getMainView().push({xtype: 'favoBookmarkInfo'});
    
    	this.getFavoBookmarkInfo().setHtml(
    			"<div style='margin:5%; width:90%;'>" + 
    				record.get('name') +
    		    "</div>"
    	);
    	
    	this.getFavoBookmarkImg().setSrc(record.get('url'));
    	this.getContacts().deselectAll();
    	console.log("탭 되었슴.");
    },
    recentSearchListTap: function(list, index, target,record, e, eOpts){
    	this.getMainView().push({xtype: 'recentSearchInfo'});
    
    	this.getRecentSearchInfo().setHtml(
    			"<div style='margin:5%; width:90%;'>" + 
    				record.get('name') +
    		    "</div>"
    	);
    	
    	this.getRecentSearchImg().setSrc(record.get('url'));
    	this.getContacts().deselectAll();
    	console.log("탭 되었슴.");
    }
    
});