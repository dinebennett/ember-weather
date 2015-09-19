import Ember from 'ember';

export default Ember.Route.extend({

  model: function () {

    return this.store.find('weather', {id: 3369157});

  }

});
