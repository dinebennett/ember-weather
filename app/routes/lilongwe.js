import Ember from 'ember';

export default Ember.Route.extend({

  model: function () {
    if (this.store.hasRecordForId('weather', 927967)) {
      return this.store.peekRecord('weather', 927967);
    } else {
      return this.store.queryRecord('weather', {id: 927967, units: 'metric'}).then(function (data) {
        return data;
      });
    }
  }

});
