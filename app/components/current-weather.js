import Ember from 'ember';

export default Ember.Component.extend({
  roundedTemp: function() {
    return Math.floor(this.get('model.main.temp'));
  }.property('model.main'),
  iconClass: function() {
    if (Ember.isBlank(this.get('model.weather'))) {
      return '';
    } else {
      return "owm-" + this.get('model.weather')[0].id;
    }
  }.property('model.weather')
});
