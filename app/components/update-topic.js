import Ember from 'ember';

export default Ember.Component.extend({
  updateTopicForm: false,
  actions: {
    updateTopicForm() {
      this.set('updateTopicForm', true);
    },
    update(topic) {
      var params = {
        location: this.get('location'),
        type: this.get('type'),
        name: this.get('name'),
        description: this.get('description'),
        price: this.get('price'),
      };
      this.set('updateTopicForm', false);
      this.sendAction('update', topic, params);
    }
  }
});
