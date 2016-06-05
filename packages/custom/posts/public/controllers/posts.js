(function() {
    'use strict';

    /* jshint -W098 */

    function PostsController($scope, Global, Posts, $stateParams) {
        $scope.global = Global;
        $scope.package = {
            name: 'posts'
        };

        $scope.checkCircle = function(role) {
            Posts.checkCircle(role).then(function(response) {
                $scope.res = response;
                $scope.resStatus = true;
            }, function(error) {
                $scope.res = error;
                $scope.resStatus = false;
            });
        };
    }

    angular
        .module('mean.posts')
        .controller('PostsController', PostsController);

    PostsController.$inject = ['$scope', 'Global', 'Posts', '$stateParams'];

})();
