import Ember from 'ember';

export default Ember.Component.extend({
  addNewTopic: false,
  actions: {
    formShow(){
      this.set('addNewTopic',true)
    },
    saveTopic(){
      var params = {
        location: this.get('location'),
        type: this.get('type'),
        name: this.get('name'),
        description: this.get('description'),
        price: this.get('price')
      };
      this.set('addNewTopic', false);
      this.sendAction('saveTopic', params);
    }
  }
});
