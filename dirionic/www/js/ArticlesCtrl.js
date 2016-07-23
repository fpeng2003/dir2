(function () {
    'use strict';

    angular.module('starter').controller('ArticlesCtrl', ['$state', 'dirApi', ArticlesCtrl]);

    function ArticlesCtrl($state, dirApi) {
        var vm = this;
        
        var articles = dirApi.getArticles();
        vm.articles = articles;

       
        vm.selectArticle = function(articleId){
                //TODO: select correct league
                $state.go("app.index");
        };

    };
})();
