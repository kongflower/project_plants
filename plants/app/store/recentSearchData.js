var data = {
	names: [
		{ 
			url : './resources/images/TY.png',
			name  : 'first01',
			//lastName  : 'last01',
			//content : '동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리나라 만세.'
		},
		{ 
			url : './resources/images/TY.png',
			name  : 'first02',
			//lastName  : 'last02',
			//content : '무궁화 삼천리 화려 강산. 대한 사람 대한으로 길이 보전하세.'
		},
		{ 
			url : './resources/images/TY.png',
			name  : 'first03',
			//lastName  : 'last03',
			//content : '남산 위에 저 소나무 철갑을 두른 듯 바람 서리 불변함은 우리 기상일세.'
		},
		{ 
			url : './resources/images/TY.png',
			name  : 'first04',
			//lastName  : 'last04',
			//content : '가을 하늘 공활한데 높고 구름 없이 밝은 달은 우리 가슴 일퍈 단심일세.'
		},
		{ 
			url : './resources/images/TY.png',
			name  : 'first05',
			//lastName  : 'last05',
			//content : '이 기상과 이 맘으로 충성을 다하여 로우나 즐거우나 나라 사랑하세.'
		},
		{ 
			url : './resources/images/TY.png',
			name  : 'first06',
//			lastName  : 'last06',
//			content : '나는 자랑스러운 태극기 앞에 자유롭고 정의로운 대한민국의 무궁한 영광을 위하여 충성을 다할 것을 굳게 다짐합니다.'
		},
		{ 
			url : './resources/images/TY.png',
			name  : 'first07',
//			lastName  : 'last07',
//			content : '우리는 민족 중흥의 역사적 사명을 띠고 이 땅에 태어났다.'
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