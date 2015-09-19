import Ember from 'ember';

export default Ember.Route.extend({

  model: function () {
    if (this.store.hasRecordForId('weather', 3369157)) {
      return this.store.peekRecord('weather', 3369157);
    } else {
      return this.store.queryRecord('weather', {id: 3369157, units: 'metric'}).then(function (data) {
        return data;
      });
    }
  }

});
