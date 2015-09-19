import Ember from 'ember';

export default DS.RESTSerializer.extend({
  normalizePayload: function (payload) {
    var toReturn = {
      "weather": [payload]
    };
    return toReturn;
  }
});
