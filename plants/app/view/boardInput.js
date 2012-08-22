Ext.define('plants.view.boardInput', {
	extend: 'Ext.form.Panel',
	xtype: 'boardInput',

	config: {
        items: [
            {
                xtype: 'titlebar',
                docked: 'top',
                title: '새글쓰기'
            },
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
            }
        ]
    }
});