import Ember from 'ember';

export default Ember.Service.extend({
  items: [],
  type: 'all',
  changeType(product){
    this.set('itemId',product);
  }
});
