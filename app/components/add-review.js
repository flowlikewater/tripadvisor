import Ember from 'ember';

export default Ember.Component.extend({
  addNewReview: false,
  actions: {
    reviewFormShow() {
      this.set('addNewReview', true);
    },
    saveReview() {
     var params = {
       name: this.get('name'),
       rating: this.get('rating'),
       comment: this.get('comment'),
       topic: this.get('topic')
     };
     this.set('addNewReview', false);
     this.sendAction('saveReview', params);
   }
  }
});
