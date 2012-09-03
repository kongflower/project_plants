Ext.define('plants.view.boardInput', {
	extend: 'Ext.form.Panel',
	xtype: 'boardInput',
	cls: 'myPageBG',
	
	requires: [
	   'Ext.form.FieldSet',
	   'Ext.field.Text',
	   'Ext.field.TextArea',
	   'Ext.MessageBox',
	   'Ext.Img'
	],
	
	config: {
		title: '새글쓰기',
		cls: 'myPageBG',
		
        items: [
            
            {
                xtype: 'fieldset',
                cls: 'myPageBG',
                
                title: '내용입력',
                //cls: 'TitleTest',
                items: [
                    {
                        xtype: 'textfield',
                        cls: 'textBox_Act1',
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
                cls: 'myPageBG',
                
                layout: {
                    align: 'center',
                    type: 'hbox',                                     	
                },
                defaults : {width: '92px', height: '37px',  margin  : '0 4 10 4'},
                
                items: [
                    {
                    	xtype 	: 'image',
                    	itemId: 'btnPost',
                    	id: 'btnPost',
                    	action:'btnPostTap',
                    	//text: '게시',
                    	cls: 'btnPost'
		    		    //src 	: './resources/images/btnPost.jpg',
//		    		    //style 	: "background-image:url('./resources/images/btn1.jpg')",
                    },
                    {
                    	xtype 	: 'image',
                    	itemId: 'btnCancle',
                    	id: 'btnCancle',
                    	action:'btnCancleTap',
                    	//text: '게시',
                    	cls: 'btnCancel'
		    		    //src 	: './resources/images/btnCancle.jpg',
//                        handler: function() {
//                        	console.log('a');
//                        	Ext.Msg.alert('Message', '입력을 취소하셨습니다.', 
//                        		function(){
//         							console.log('on ok button');
//         							Ext.getCmp('mainView').pop(1);
//                        	});                        	
//                        },	            
                    }
                ],
                listeners: [
                    {
                        fn: 'onBtnPostTap',
                        event: 'tap',
                        delegate: '#btnPost'
                    },
                    {
                        fn: 'onBtnCancleTap',
                        event: 'tap',
                        delegate: '#btnCancle'
                    }
                ]
            }
        ]
    },
});