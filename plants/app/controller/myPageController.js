Ext.define('plants.controller.myPageController', {
    extend: 'Ext.app.Controller',
    config: {
    	refs: {
    		mainView 		 : '#mainView',
    		favoBookmarkInfo : 'favoBookmarkInfo',
    		favoBookmarkList: 'favoBookmarkList',
    		recentSearchList: 'recentSearchList'
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
    				record.get('content') +
    		    "</div>"
    	);
    	
    	this.getResultImg().setSrc(record.get('thumbs'));
    	console.log("탭 되었슴.");
    }
});