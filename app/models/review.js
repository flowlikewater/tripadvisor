import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  rating: DS.attr(),
  comment: DS.attr(),
  reviews: DS.hasMany('review', {async: true})
});
