import Ember from 'ember';

export default Ember.Route.extend({

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

});
