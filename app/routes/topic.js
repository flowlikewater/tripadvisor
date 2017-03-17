import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('topic', params.topic_id);
  },
  actions: {
    update(model, params) {
      Object.keys(params).forEach(function(key) {
        if(params[key]!==undefined) {
          model.set(key,params[key]);
        }
      });
      model.save();
    },
    saveReview(params) {
      var newReview = this.store.createRecord('review', params);
      var topic = params.topic;
      topic.get('reviews').addObject(newReview);
      newReview.save().then(function() {
        return topic.save();
      });
    },
  }
});
