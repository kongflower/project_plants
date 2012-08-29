Ext.define('plants.controller.myPageController', {
    extend: 'Ext.app.Controller',
    config: {
    	refs: {
            
        },
        control: {
        	"[action=test]": {
                tap: 'onBtnPostTap2'
            },
//        	'boardInput button#btnPost': {
//        		tap: 'onBtnPostTap2'
//        	}
        }
    },
    
    onBtnPostTap2: function(img, e, options) {
    	console.log('게시');
    	Ext.Msg.alert('Message', '게시하였습니다.', 
    		function(){
				console.log('on ok button');
				Ext.getCmp('mainView').pop(1);
    	});
    },

});