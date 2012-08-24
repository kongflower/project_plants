Ext.define('plants.view.boardInput', {
	extend: 'Ext.form.Panel',
	xtype: 'boardInput',
	
	requires: [
	   'Ext.form.FieldSet',
	   'Ext.field.Text',
	   'Ext.field.TextArea',
	   'Ext.MessageBox'
	],
	
	config: {
		title: '새글쓰기',
		
        items: [
            
            {
                xtype: 'fieldset',
                title: '내용입력',
                items: [
                    {
                        xtype: 'textfield',
                        label: '제목'
                    },
                    {
                        xtype: 'textfield',
                        label: '카테고리'
                    },
                    {
                        xtype: 'textareafield',
                        label: '내용'
                    }
                ]
            },
            {
                //xtype: 'segmentedbutton',
                xtype: 'panel',
                layout: {
                    align: 'center',
                    type: 'hbox',                                     	
                },
                defaults : {width: '45px', height: '45px',  margin  : '0 4 10 4'},
                items:[
  		    		{
  		    		    xtype 	: 'button',
  		    		    id  	: 'buttonLeaf',
  		    		    style 	: "background-image:url('./resources/images/btn1.jpg')",
  		   			    //text  	: '잎',
  		   			    action 	: 'showSelect'
  		   		    },
  		    		{
  		   		        xtype 	: 'button',
  		    		    id  	: 'buttonFlower',
  		    		    text  	: '꽃',
  		    		    action 	: 'showSelect'
  		    		},
  		    	    {
  		    			xtype 	: 'button',
  		    			id  	: 'buttonFruit',
  		    			text 	: '열매',
  		    			action: 'showSelect'
  		    		},
  		        ]
                
//                {	
//    		    	xtype 	: 'panel',
//    		    	layout 	: {type:'hbox', align:'stretch',pack:'center'},
//    		    	defaults: {flex:1, margin  : '0 4 10 4'},
//    		    	width 	: '90%',
//    		    	flex:1,
//    		    	
//    		    },
                
//                items: [
//                    {
//                        xtype: 'button',
//                        text: '게시',
//                        handler: function() {
//                        	console.log('게시퍼튼 눌림');
//                        	Ext.Msg.alert('Message', '입력을 취소하셨습니다.', 
//                        		function(){
//         							console.log('on ok button');
//         							Ext.getCmp('mainView').pop(1);
//                        	});                        	
//                        },
//                    },
//                    {
//                        xtype: 'button',
//                        text: '취소',
//                        handler: function() {
//                        	console.log('a');
//                        	Ext.Msg.alert('Message', '입력을 취소하셨습니다.', 
//                        		function(){
//         							console.log('on ok button');
//         							Ext.getCmp('mainView').pop(1);
//                        	});                        	
//                        },	            
//                    }
//                ]
            }
        ]
    }
});