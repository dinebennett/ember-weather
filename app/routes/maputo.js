import Ember from 'ember';

export default Ember.Route.extend({

  model: function () {
    if (this.store.hasRecordForId('weather', 1040652)) {
      return this.store.peekRecord('weather', 1040652);
    } else {
      return this.store.queryRecord('weather', {id: 1040652, units: 'metric'}).then(function (data) {
        return data;
      });
    }
  }

});
