export default Ember.Controller.extend({
  actions: {
    refresh() {
      this.set('model.lusaka', this.store.query('weather', {id: 909137, units: 'metric'}));
      this.set('model.lilongwe', this.store.query('weather', {id: 927967, units: 'metric'}));
      this.set('model.maputo', this.store.query('weather', {id: 1040652, units: 'metric'}));
      this.set('model.capetown', this.store.query('weather', {id: 3369157, units: 'metric'}));
    }
  }
});
