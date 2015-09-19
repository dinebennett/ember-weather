import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {

  this.route('cape-town');
  this.route('lilongwe');
  this.route('lusaka');
  this.route('maputo');

});

export default Router;
