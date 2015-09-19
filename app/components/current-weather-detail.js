import Ember from 'ember';
import moment from 'moment';

export default Ember.Component.extend({
  roundedTemp: function() {
    return Math.floor(this.get('model.main.temp'));
  }.property('model.main'),
  iconClass: function() {
    return "owm-" + this.get('model.weather')[0].id;
  }.property('model.weather'),
  date: function() {
    return moment.unix(this.get('model.dt')).format('dddd HH:mm A');
  }.property('model.dt'),
  sunset: function() {
    return moment.unix(this.get('model.sys.sunset')).format('HH:mm A');
  }.property('model.sys'),
  sunrise: function() {
    return moment.unix(this.get('model.sys.sunrise')).format('HH:mm A');
  }.property('model.sys'),
  rainfall: function() {
    return (this.get('model.rain.3h') === undefined ? 0 : this.get('model.rain.3h'));
  }.property('model.rain')
});
