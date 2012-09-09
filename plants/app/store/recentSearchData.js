var data = {
	names: [
		{ 
			url : './resources/images/TY.png',
			name  : '개망초',
			//lastName  : 'last01',
			//content : '동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리나라 만세.'
		},
		{ 
			url : './resources/images/TY.png',
			name  : '민들레',
			//lastName  : 'last02',
			//content : '무궁화 삼천리 화려 강산. 대한 사람 대한으로 길이 보전하세.'
		},
		{ 
			url : './resources/images/TY.png',
			name  : '수련',
			//lastName  : 'last03',
			//content : '남산 위에 저 소나무 철갑을 두른 듯 바람 서리 불변함은 우리 기상일세.'
		},
		{ 
			url : './resources/images/TY.png',
			name  : '도라지',
			//lastName  : 'last04',
			//content : '가을 하늘 공활한데 높고 구름 없이 밝은 달은 우리 가슴 일퍈 단심일세.'
		}					
	]
};


Ext.define('plants.store.recentSearchData', {
    extend: 'Ext.data.Store',

    config: {
    	autoLoad: true,
    	storeId : 'recentSearchData',
    	model: 'plants.model.recentSearchModel',
    	data : data.names,
		   
		proxy: {
			type: 'memory',
			reader: {
				 type: 'json',
				 root: 'names',
			}
		},
    }
});