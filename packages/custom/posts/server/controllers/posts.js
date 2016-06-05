'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
  Post = mongoose.model('Post'),
   _ = require('lodash');

/**
 * Create a goal
 */
exports.createPost = function(req, res) {
  var post = new Post(req.body);

  post.save(function(err) {
    if (err) {
      return res.status(500).json({
        error: 'Cannot save the post'
      });
    }
    res.json(post);
  });
};


/**
 * List of goals
 */
exports.all = function(req, res) {

  Post.find().sort('created').exec(function(err, posts){
    if (err) {
      return res.status(500).json({
        error: 'Cannot list the posts'
      });
    }
    res.json(posts);
  });
};

/**
 * Destroy a goal
 */
exports.destroy = function(req, res) { 
  var post = req.post;
  post.remove(function(err) {
    if (err) {
      console.log(err);
      return res.status(500).json({
        error: 'Cannot delete the post'
      });
    }
    res.json(post);
  });
};

/**
 * Update an goal
 */
exports.update = function(req, res) {

  var post = req.post;
  post = _.extend(post, req.body);

  post.save(function(err) {
    if (err) {
      return res.status(500).json({
        error: 'Cannot update the post'
      });
    }
    res.json(post);
  });
};

/**
 * Show a goal
 */
exports.show = function(req, res) {
  res.json(req.post);
};

/**
 * Find goal by id
 */
exports.post = function(req, res, next, id) {
  Post.load(id, function(err, post) {
    if (err) return next(err);
    if (!post) return next(new Error('Failed to load post ' + id));
    req.post = post;
    next();
  });
};
