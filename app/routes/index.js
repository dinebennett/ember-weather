import Ember from 'ember';

export default Ember.Route.extend({

  model() {
    return Ember.RSVP.hash({
      lusaka: this.store.query('weather', {id: 909137, units: 'metric'}),
      lilongwe: this.store.query('weather', {id: 927967, units: 'metric'}),
      maputo: this.store.query('weather', {id: 1040652, units: 'metric'}),
      capetown: this.store.query('weather', {id: 3369157, units: 'metric'})
    });
  }

});
