Ext.define('plants.view.boardInput', {
	extend: 'Ext.form.Panel',
	xtype: 'boardInput',
	
	requires: [
	   'Ext.form.FieldSet',
	   'Ext.field.Text',
	   'Ext.field.TextArea'
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
                xtype: 'segmentedbutton',
                layout: {
                    align: 'center',
                    type: 'hbox'
                },
                items: [
                    {
                        xtype: 'button',
                        text: '게시'
                    },
                    {
                        xtype: 'button',
                        text: '취소'
                    }
                ]
            }
        ]
    }
});