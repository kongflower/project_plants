Ext.define('plants.controller.communityController', {
    extend: 'Ext.app.Controller',
    
    config: {
        refs: {
        	mainView       : '#mainView',
        	community      : 'community',
        	communityWrite : 'communityWrite',
        	communityShow  : 'communityShow',
        	userImage      : '#userImage',
        	communityImg   : '#communityImg',
        	communityMemo  : '#communityMemo',
        	notice         : 'notice',
            noticeWrite    : 'noticeWrite',
            noticeShow     : 'noticeShow',
            noticeImg      : '#noticeImg',
            noticeMemo     : '#noticeMemo',
        },
        control: {            
//        	'community' : {
//        		pop: 'communityPagePop',
//			 	push: 'communityPagePush',
//        	},
//        	'[action=posting]': {
//                tap: 'onPosting'
//            },
//            '[action=noticing]': {
//                tap: 'onNoticing'
//            },
            '[action=communityRefreshing]' : {
            	tap: 'onCommunityRefreshing'
            },
            '[action=noticeRefreshing]' : {
            	tap: 'onCommunityRefreshing'
            },
    		'community list' : {
            	itemtap: 'onCommunity'
            },
    		'notice list' : {
            	itemtap: 'onNotice'
            }
        }
    },
    
//    communityPagePush: function(navi,view, eOpts){
//    	this.getActiveItem().deselectAll();
//    },
    
    onCommunityRefreshing: function(button, e, options) {
//    	store.proxy.url = 'http://14.63.218.122/gallery.json.php';
//    	store.read();
    	var store = Ext.StoreMgr.get('communityStore');
    	// store.getProxy().url = 'item2.json';
    	store.getProxy().setUrl('http://14.63.218.122/gallery.json.php');
    	store.load();
    },
    onNoticeRefreshing: function(button, e, options) {
//    	store.proxy.url = 'http://14.63.218.122/gallery.json.php';
//    	store.read();
    	var store = Ext.StoreMgr.get('noticeStore');
    	// store.getProxy().url = 'item2.json';
    	store.getProxy().setUrl('http://14.63.218.122/notice.json.php');
    	store.load();
    },
    
    onPosting : function(button, e, options){
    	this.getMainView().push({xtype: 'communityWrite'});
    },
    onNoticing : function(button, e, options){
    	this.getMainView().push({xtype: 'noticeWrite'});
    },
    
    onCommunity: function(list, index, target, record) {
    	this.getMainView().push({xtype: 'communityShow'});
    	this.getCommunityImg().setSrc('http://14.63.218.122/' + record.get('file_name1'));
    	Ext.getCmp('communitySubject').setHtml(record.get('subject'));
    	Ext.getCmp('communityMemo').setHtml(record.get('memo'));
    
//    	this.getCommunityShow().setHtml(
//			'<div>' + 
//				record.get('memo') +
//		    '</div>'			
//    	);
    	
//    	this.getUserImg().setSrc(record.get('file_name1'));
    },
    
    onNotice: function(list, index, target, record) {
    	this.getMainView().push({xtype: 'noticeShow'});
    	this.getNoticeImg().setSrc('http://14.63.218.122/' + record.get('file_name1'));
    	Ext.getCmp('noticeSubject').setHtml(record.get('subject'));
    	Ext.getCmp('noticeMemo').setHtml(record.get('memo'));
    }
});

//if (!this.showCommunities) {
//this.showCommunities = Ext.create('plants.view.communities.show');
//}
//this.getMainView().push(this.showCommunities);
//this.getMainView().push({xtype: 'showCommunities'});

//this.getMainView().push({
//xtype: 'panel',
//title: record.get('subject'),
//html: record.get('memo'),
//scrollable: true,
//styleHtmlContent: true
//});
//},

//launch: function(){
//var mainBackButton = this.getMainBackButton();
//
//if (!backButton.isHidden()) {
//mainBackButton.hide();
//}

//if (!this.showCommunities) {
//    this.showCommunities = Ext.create('plants.view.communities.show');
//}
//this.showCommunities.setRecord(record);
//this.getMainView().push(this.showCommunities);

//xtype: 'panel',
//title: record.get('subject'),
//html: record.get('memo'),