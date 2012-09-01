Ext.define('plants.view.setNoticeItem', {
			 extend: 'Ext.tab.Panel',
			 xtype: 'setNoticeItem',
			 
			 config:{			 
			    activeItem: 2,
				tabBar: {
					docked: 'top',
					ui: 'netural',
					layout: {
						pack: 'center'
				    }
			    },
			items: [
			        {
						title: 'simple',
						layout: Ext.os.deviceType == 'phone' ? 'fit': {
							type : 'vbox',
							align: 'center',
							pack: 'center'
						
					},	
			        cls: 'demo-list',
			        
			        items: [{
			        width: Ext.os.deviceType == 'Phone' ? null : 300,
			        hight: Ext.os.deviceType == 'Phone' ? null : 500,
			        xtype: 'list',
			        store: 'ListStore',
			        itemTpl: '<div class="contact"><strong>{firstName}</strong> {lastName}</div>'
			        }]
			        },
			        {
			        title: 'Grouped',
			        layout: Ext.os.deviceType == 'Phone' ? 'fit': {
			        type: 'vbox',
			        aligh: 'center',
			        pack: 'center'
			        },
			        cls: 'demo-list',
			        items: [{
			        width: Ext.os.deviceType == 'Phone' ? null : 300,
			        heighr: Ext.os.deviceType == 'Phone' ? null : 500,
			        xtype: 'list',
			        store: 'ListStore',
			        itemTpl: '<div class="contact"><strong>{firstName}</strong>{lastName}</div>',
			        grouped: true,
			        indexBar: true
			        }]
			        }, {
			        title: 'Disclosure',
			        layout: Ext.os.deviceType == 'Phone' ? 'fit' : {
			        type: 'vbox',
			        align: 'center',
			        pack: 'center'
			        },
			        cls: 'demo-list',
			        items: [{
			        width: Ext.os.deviceType == 'Phone' ? null : 300,
			        height: Ext.os.deviceType == 'Phone' ? null : 500,
			        xtype: 'list',
			        ui: 'round',
			        grouped: true,
			        pinHeaders: false,
			        onItemDisclosure: function(record, btn, index) {
			        Ext.Msg.alert('Tap', 'Disclose more info for ' + record.get('firstName'), Ext.emptyFn);
			        },
			        store: 'ListStore',
			        itemTpl: '<div class="contact"><strong>{firstName}</strong> {lastName}</div>'
			        }]
			        }]}});