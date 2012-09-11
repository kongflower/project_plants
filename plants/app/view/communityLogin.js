Ext.define('plants.view.Login', {
	extend : 'Ext.form.Panel',
	xtype : 'Login',

	config : {
		layout : {
			type : 'vbox',
			align : 'stretch',
			pack : 'center'
		},

		items : [ {
			xtype : 'fieldset',

			// title: '로그인',
			// instructions: '아이디와 암호를 입력하십시오',
			items : [ {
				xtype : 'textfield',
				placeHolder : '아이디',
				name : 'userid',
				id : 'Username',
				useClearIcon : true,
				autoCapitalisze : true,
			}, {
				xtype : 'passwordfield',
				placeHolder : '비밀번호 4자리',
				name : 'userpw',
				id : 'Userpass',
				useClearIcon : true,
			} ]
		}, {
			xtype : 'button',
			text : '입장',
			id : 'loginbutton',
			
			handler : function(button, e, opts) {
				Ext.data.JsonP.request({
					url: 'http://14.63.218.122/test.php',
					callbackKey: 'callback',
					params: {
						reAction : 'login',
						userid: Ext.getCmp('Username').getValue(),
						userpw: Ext.getCmp('Userpass').getValue(),
					},
					success: function(result, request) {
						console.log(result);
//						returnVal = result.data.result;
						
//						if(returnVal == "true") {
//							userId = Ext.getCmp("login_ID").getValue();
//							Ext.getCmp("MainView").setActiveItem(0);
//							Ext.getCmp("Index").setActiveItem(1);
//							server.emit('login', userId);
//						}else{
//							Ext.Msg.alert("사용자 ID 또는 패스워드가 올바르지 않습니다.", "", Ext.emptyFn);
//						}
					}
				});
			}
		}, {
			xtype : 'spacer'
		} ]
	}
});