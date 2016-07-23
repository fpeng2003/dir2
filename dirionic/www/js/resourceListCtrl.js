(function () {
    'use strict';

    angular.module('starter').controller('resourceListCtrl', ['$state', 'dirApi', resourceListCtrl]);

    function resourceListCtrl($state, dirApi) {
        var vm = this;
        
        dirApi.getResources().then(function(data){
                    // vm.resources = data.resources;
                    vm.resources = data;

        });
        // vm.articles = articles;

       
        vm.selectArticle = function(resourceId){
                //TODO: select correct league
                dirApi.setResourceId(resourceId)
                $state.go("app.index");
        };

    };
})();


// (function () {
//     'use strict';

//     angular.module('starter').controller('resourceListCtrl', ['$state', 'dirApi', resourceListCtrl]);

//     function resourceListCtrl($state, dirApi) {
//         var vm = this;
        
//         var articles = dirApi.getArticles();
//         vm.articles = articles;

       
//         vm.selectArticle = function(articleId){
//                 //TODO: select correct league
//                 $state.go("app.index");
//         };

//     };
// })();

// (function () {
//     'use strict';

//     angular.module('starter').controller('resourceListCtrl', ['$state', 'dirApi', resourceListCtrl]);

//     function resourceListCtrl($state, dirApi) {
//         var vm = this;
        
//         var articles = dirApi.getArticles();
//         vm.articles = articles;

       
//         vm.selectArticle = function(articleId){
//                 //TODO: select correct league
//                 $state.go("app.index");
//         };

//     };
// })();