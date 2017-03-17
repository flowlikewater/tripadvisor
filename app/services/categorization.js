import Ember from 'ember';

export default Ember.Service.extend({
  topics: [],
  love(topic){
    this.get('topics').push(topic)
  }
});
