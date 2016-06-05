(function() {
    'use strict';

    /* jshint -W098 */
    // The Package is past automatically as first parameter
    var posts = require('../controllers/posts');

    module.exports = function(Posts, app, auth, database, circles) {

        var requiresAdmin = circles.controller.hasCircle('admin');
        var requiresLogin = circles.controller.hasCircle('authenticated');
        app.get('/api/posts', posts.all);
        app.post('/api/posts', posts.createPost);
        app.get('/api/posts/example/anyone', function(req, res) {
            res.send('Anyone can access this');
        });

        app.get('/api/posts/example/auth', requiresLogin, function(req, res) {
            res.send('Only authenticated users can access this');
        });

        app.get('/api/posts/example/admin', requiresAdmin, function(req, res) {
            res.send('Only users with Admin role can access this');
        });

        app.get('/api/posts/example/render', function(req, res) {
            Posts.render('index', {
                package: 'posts'
            }, function(err, html) {
                //Rendering a view from the Package server/views
                res.send(html);
            });
        });
    };
})();
