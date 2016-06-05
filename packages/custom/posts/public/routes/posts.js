(function() {
    'use strict';

    function Posts($stateProvider) {
        $stateProvider.state('post-list', {
            url: '/posts/example',
            templateUrl: 'posts/views/index.html'
        }).state('post-create', {
            url: '/posts/create',
            templateUrl: 'posts/views/create.html'
        }).state('posts circles example', {
            url: '/posts/example/:circle',
            templateUrl: 'posts/views/example.html'
        });
    }

    angular
        .module('mean.posts')
        .config(Posts);

    Posts.$inject = ['$stateProvider'];

})();
