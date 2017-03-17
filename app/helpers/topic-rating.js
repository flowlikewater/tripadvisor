import Ember from 'ember';

export function topicRating(params) {
  var reviews = params[0];


  if (reviews.get('length')>2){
    return Ember.String.htmlSafe('<span class="glyphicon glyphicon-fire"></span><span class="glyphicon glyphicon-fire"></span><span class="glyphicon glyphicon-fire"></span>');
  }
  else if (reviews.get('length')>1){
    return Ember.String.htmlSafe('<span class="glyphicon glyphicon-fire"></span><span class="glyphicon glyphicon-fire"></span>');
  }
  else if (reviews.get('length')>0){
    return Ember.String.htmlSafe('<span class="glyphicon glyphicon-fire"></span>');
  };
}

export default Ember.Helper.helper(topicRating);
