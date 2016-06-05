(function() {
    'use strict';

    function Posts($http, $q) {
        return {
            name: 'posts',
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

    angular
        .module('mean.posts')
        .factory('Posts', Posts);

    Posts.$inject = ['$http', '$q'];

})();
