import Ember from 'ember';

export default Ember.Component.extend({
  url: function () {
    return 'http://openweathermap.org/img/w/' + this.get('weather')[0].icon + '.png';
  }.property('weather'),
  roundedTemp: function() {
    return Math.floor(this.get('main.temp'));
  }.property('main'),
  iconClass: function() {
    return "owm-" + this.get('weather')[0].id;
  }.property('weather')
});
