Ext.define('plants.view.MyPage01', {
    extend: 'Ext.Panel',
    xtype: 'mypage01',

    config: {
        items: [
            {
                xtype: 'segmentedbutton',
                items: [
                    {
                        xtype: 'button',
                        text: '내소식'
                    },
                    {
                        xtype: 'button',
                        text: '즐겨찾기'
                    },
                    {
                        xtype: 'button',
                        text: '최근찾기'
                    }
                ]
            },
            {
                xtype: 'list',
                itemTpl: [
                    '<div>List Item1 {string}</div>',
                    '<div>List Item2 {string}</div>',
                    '<div>List Item3 {string}</div>',
                    '<div>List Item4 {string}</div>',
                    '<div>List Item5 {string}</div>'
                ]
            }
        ]
    }

});