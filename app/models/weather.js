import DS from 'ember-data';
var attr = DS.attr;

export default DS.Model.extend({

  coord: DS.attr(),
  base: DS.attr(),
  weather: DS.attr(),
  main: DS.attr(),
  wind: DS.attr(),
  rain: DS.attr(),
  clouds: DS.attr(),
  snow: DS.attr(),
  dt: DS.attr(),
  sys: DS.attr(),
  name: DS.attr('string'),
  cod: DS.attr('number')

});
