import Ember from 'ember';

export default Ember.Route.extend({
  type: 'all',

  model() {
    return Ember.RSVP.hash({
      all: this.store.findAll('topic'),
      restaurant: this.store.query('topic', {
        orderBy: 'type',
        equalTo: 'restaurant'
      }),
      hotel: this.store.query('topic', {
        orderBy: 'type',
        equalTo: 'hotel'
      }),
      landmark: this.store.query('topic', {
        orderBy: 'type',
        equalTo: 'landmark'
      })
    });
  },

  actions: {
    changeType(type){
      this.set('type',type);
    },
    saveTopic(params){
      var publishTopic = this.store.createRecord ('topic',params);
      publishTopic.save();
      this.transitionTo('index')
    }
  }

});
