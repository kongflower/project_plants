Ext.setup({
	onReady:function(){
		Ext.define('plants.view.setId',{
			extend : 'Ext.Panel',
			xtype: 'setId',
			
			config:{
				items:[
				    {
				    	
				    }
				],
			},
			
			html:[ //Ext.get('id').getHTML()
			      '<html>' +
			      '<head>' +
			      '<title>이벤트 연습 </title>' +
			      '<script type="text/javascript">' +
			      'function new1()' +
			      '{' +
			    	  'window.open("blank.htm","","width=200 height=200");'+
			      '}' +

			      'function check()' +
			      '{' +
			    	  'if(document.member.value=="")' +
			    		  'alert("아이디를 입력하시오");' +
			      '}' +

			      '</script>' +
			      '</head>' +

			      '<body onload="new1()">' +
			      '<form name="log">' +

			      '아이디 :<input type="text" name="member" size="20" onblur="check();"/><br>' +
			      '비밀번호 :<input type="text" name="pw" size="20" onfocus="alert(\'4글자이상 넣으시오\');"/>' +


			      '<a href="http://www.naver.com" onmouseover="window.status=\'네이버로가기\'">네이버</a>' +


			      '</form>' +
			      '</body>' +
			      '</html>' 
			],
			
			
//			Ext.setup({
//				onReady:function(){
//					var btnLoginForm = {
//							xtype:"button",
//							text:"아이디설정",
//							
//							hendler:function(){
//								var messageBox = new Ext.MessageBox();
//								messageBox.show({
//									msg: Ext.get("longform").getHTML(),
//									buttons:[{text:"로그인"},{text:"취소"}],
//									fn:function(button){
//										if(button == "로그인"){
//											var mid = Ext.get("mid").getValue();
//											var mpassword = Ext.get("mid").getValue();
//											console.log("mid:" + mid);
//											console.log("mpassword:" + mpassword);
//										}
//										messageBox.destroy();
//									}
//								});
//							}
//					};
//					
//					var rootPanel = new Ext.Panel({
//					fullscreen: true,
//					layout:{ type:"hbox",align:"start",pack:"start"},
//					items:[btnLoginForm]
//					});
//				}
		//
//					})
		});	var btnLoginForm = {
				xtype:"button",
				text:"아이디설정",
				
				hendler:function(){
					var messageBox = new Ext.MessageBox();
					messageBox.show({
						msg: Ext.get("longform").getHTML(),
						buttons:[{text:"로그인"},{text:"취소"}],
						fn:function(button){
							if(button == "로그인"){
								var mid = Ext.get("mid").getValue();
								var mpassword = Ext.get("mid").getValue();
								console.log("mid:" + mid);
								console.log("mpassword:" + mpassword);
							}
							messageBox.destroy();
						}
					});
				}
		};
		
		var rootPanel = new Ext.Panel({
		fullscreen: true,
		layout:{ type:"hbox",align:"start",pack:"start"},
		items:[btnLoginForm]
		});
	}

		})
		;