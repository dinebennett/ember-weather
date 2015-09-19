import Ember from 'ember';

export default Ember.Route.extend({

  model: function () {
    if (this.store.hasRecordForId('weather', 909137)) {
      return this.store.peekRecord('weather', 909137);
    } else {
      return this.store.queryRecord('weather', {id: 909137, units: 'metric'}).then(function (data) {
        return data;
      });
    }
  }

});
