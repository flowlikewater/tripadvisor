import Ember from 'ember';

export default Ember.Component.extend({
  categorization: Ember.inject.service(),
  actions: {
    add(topic){
      this.get('categorization').love(topic);
    }
  }
});
