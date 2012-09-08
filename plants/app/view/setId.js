Ext.define('plants.view.setId',{
	extend : 'Ext.form.Panel',
	xtype: 'setId',
	
	requires : [
		  	      'Ext.form.FieldSet',
		  	      'Ext.field.Email'
		],
		
	config:{
			
		
		items:[
		    {
		    	xtype:'fieldset',
		    	title: '아이디입력',

	 
		    	items: [
		    	    {
		    	    	xtype: 'textfield',
		    	    	name: 'id',
		    	    	label: '아이디',
		    	    },
		    	    {
		    	    	xtype: 'passwordfield',
		    	    	name: 'pass',
		    	    	label: '암호',
		    	    }
		    	],
		    },
		    {
		    	xtype:'button',
		    	text:'보내기',
		    	ui: 'confirm',
	 
		    }
		 ],
	},
});