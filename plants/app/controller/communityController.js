Ext.define('plants.controller.communityController', {
    extend: 'Ext.app.Controller',
    
    config: {
        refs: {
        	mainView: '#mainView',
        	community: 'community',
        },
        control: {
            'community list' : {
            	itemtap: 'onCommunity'
            }
        }
    },
    
    onCommunity: function(list, index, target, record) {
    	this.getMainView().push(this.communityShow);
//    	if (!this.showCommunities) {
//            this.showCommunities = Ext.create('plants.view.communities.show');
//        }
//    	this.getMainView().push(this.showCommunities);
//       	this.getMainView().push({xtype: 'showCommunities'});
    	
//    	this.getMainView().push({
//    		xtype: 'panel',
//    		title: record.get('subject'),
//    		html: record.get('memo'),
//    		scrollable: true,
//    		styleHtmlContent: true
//    	});
//    },
    
//    launch: function(){
//    	var mainBackButton = this.getMainBackButton();
//    	
//        if (!backButton.isHidden()) {
//        	mainBackButton.hide();
//        }
    }
});

//if (!this.showCommunities) {
//    this.showCommunities = Ext.create('plants.view.communities.show');
//}
//this.showCommunities.setRecord(record);
//this.getMainView().push(this.showCommunities);

//xtype: 'panel',
//title: record.get('subject'),
//html: record.get('memo'),