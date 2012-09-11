Ext.Loader.setConfig({
    enabled: true
});

Ext.application({
    name: 'plants',
    	
    views: [
         //kongflower
         'Main',
         'plantsMain',
         'searchPlants',
         'detailResult',
         'resultInfo',
         'overlaySelect',
         'plantsTitlebar',
         'selectLeafPart',
         'selectFlowerPart',
         'selectFruitPart',
         //wooram
         'community',
//         'communityLogin',
         'communityShow',
//         'communityWrite',
         'notice',
         'noticeShow',       
         //sungphil
         'favo',
         'favoBookmarkList',
         'favoBookmarkInfo',
         'recentSearchList',
         'recentSearchInfo',
         //myungsung
         'set',
         'setInfo'
         /*etc
         'etcMs',
         'etcMyPage',
         'etcTestPage',
         'etcBoardInput'*/
    ],
    
    models:['plantsModel', 'bookmarkModel', 'recentSearchModel', 'communityModel', 'noticeModel'],
    stores: ['searchData', 'bookmarkData', 'recentSearchData', 'communityStore', 'noticeStore'],
    controllers: ['searchController', 'myPageController', 'communityController'],

    launch: function() {
    	Ext.fly('appLoadingIndicator').destroy();
        Ext.create('plants.view.Main', {fullscreen: true});
    }

});
