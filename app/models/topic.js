import DS from 'ember-data';

export default DS.Model.extend({
  location: DS.attr(),
  type: DS.attr(),
  name: DS.attr(),
  description: DS.attr(),
  price: DS.attr(),
  reviews: DS.hasMany('review', {async: true})
});
