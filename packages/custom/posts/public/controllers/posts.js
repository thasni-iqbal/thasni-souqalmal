(function() {
    'use strict';

    /* jshint -W098 */

    function PostsController($scope, Global, Posts,PostCircle, $stateParams) {
        $scope.global = Global;
        $scope.package = {
            name: 'posts',
        };
        $scope.posts = Posts.query()
        $scope.checkCircle = function(role) {
            PostCircle.checkCircle(role).then(function(response) {
                $scope.res = response;
                $scope.resStatus = true;
            }, function(error) {
                $scope.res = error;
                $scope.resStatus = false;
            });
        };
        $scope.addPost = function(post){
            createPost(post);
        };
        function createPost(post){
            var postService = new Posts({
                        name: post.name,
                        description: post.description,
            });
            postService.$save(function (response) {
                $scope.posts.push(response);
            });
        }
    }

    angular
        .module('mean.posts')
        .controller('PostsController', PostsController);

    PostsController.$inject = ['$scope', 'Global', 'Posts','PostCircle', '$stateParams'];

})();
