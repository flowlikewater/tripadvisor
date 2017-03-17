import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('restaurant');
  this.route('landmark');
  this.route('hotel');
  this.route('topic', {path: '/topic/:topic_id'});
  this.route('saved');
});

export default Router;
