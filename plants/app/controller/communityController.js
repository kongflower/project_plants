Ext.define('plants.controller.communityController', {
    extend: 'Ext.app.Controller',
    
    config: {
        refs: {
        	mainView: '#mainView',
        	community: 'community',
        	communityWrite : 'communityWrite',
        	communityShow  : 'communityShow',
        	userImage      : '#userImage',
        },
        control: {            
//        	'community' : {
//        		pop: 'communityPagePop',
//			 	push: 'communityPagePush',
//        	},
        	'[action=posting]': {
                tap: 'onPosting'
            },
    		'community list' : {
            	itemtap: 'onCommunity'
            }
        }
    },
    
//    communityPagePush: function(navi,view, eOpts){
//    	this.getActiveItem().deselectAll();
//    },
    onPosting : function(button, e, options){
    	this.getMainView().push({xtype: 'communityWrite'});
    },
    
    onCommunity: function(list, index, target, record) {
    	this.getMainView().push({xtype: 'communityShow'});
    	
//    	this.getCommunityShow().setHtml(
//			'<div>' + 
//				record.get('subject') +
//		    "</div>"			
//    	);
    	
//    	this.getUserImg().setSrc(record.get('file_name1'));
    },
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