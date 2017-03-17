import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  rating: DS.attr("number"),
  comment: DS.attr(),
  topic: DS.belongsTo('topic', {async: true})
});
