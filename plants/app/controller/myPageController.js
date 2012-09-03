Ext.define('plants.controller.myPageController', {
    extend: 'Ext.app.Controller',
    config: {
    	refs: {
            
        },
        control: {
        	"[action=btnPostTap]": {
                tap: 'onBtnPostTap'
            },
            "[action=btnCancleTap]": {
                tap: 'onBtnCancleTap'
            }
//        	'boardInput button#btnPost': {
//        		tap: 'onBtnPostTap2'
//        	}
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

});