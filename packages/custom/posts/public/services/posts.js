(function() {
    'use strict';

    function PostCircle($http, $q) {
        return {
            name: 'postCircle',
            checkCircle: function(circle) {
                var deferred = $q.defer();

                $http.get('/api/posts/example/' + circle).success(function(response) {
                    deferred.resolve(response);
                }).error(function(response) {
                    deferred.reject(response);
                });
                return deferred.promise;

            }
        };
    }
    function Posts($resource) {
        return $resource('/api/posts:postId', {
          goalId: '@_id'
        }, {
          update: {
            method: 'PUT'
          }
        });
    }

    angular
        .module('mean.posts')
        .factory('PostCircle', PostCircle)
        .factory('Posts', Posts);

    Posts.$inject = ['$resource'];
    PostCircle.$inject = ['$http', '$q'];

})();
