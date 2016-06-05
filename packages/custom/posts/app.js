'use strict';

/*
 * Defining the Package
 */
var Module = require('meanio').Module;

var Posts = new Module('posts');

/*
 * All MEAN packages require registration
 * Dependency injection is used to define required modules
 */
Posts.register(function(app, auth, database, circles) {

  //We enable routing. By default the Package Object is passed to the routes
  Posts.routes(app, auth, database, circles);

  //We are adding a link to the main menu for all authenticated users
  Posts.menus.add({
    title: 'View Posts',
    link: 'post-list',
    roles: ['authenticated','anonymous'],
    menu: 'main'
  });
  
  /**
    //Uncomment to use. Requires meanio@0.3.7 or above
    // Save settings with callback
    // Use this for saving data from administration pages
    Posts.settings({
        'someSetting': 'some value'
    }, function(err, settings) {
        //you now have the settings object
    });

    // Another save settings example this time with no callback
    // This writes over the last settings.
    Posts.settings({
        'anotherSettings': 'some value'
    });

    // Get settings. Retrieves latest saved settigns
    Posts.settings(function(err, settings) {
        //you now have the settings object
    });
    */

  return Posts;
});
