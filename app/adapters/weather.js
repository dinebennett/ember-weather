import Ember from 'ember';
import DS from 'ember-data';

var Adapter = DS.RESTAdapter.extend({

  host: 'http://api.openweathermap.org',
  namespace: 'data/2.5',
  pathForType: function(type) {
    return Ember.String.underscore(type);
  }

});

export default Adapter;
