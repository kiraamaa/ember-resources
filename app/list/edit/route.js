import Ember from 'ember';

export default Ember.Route.extend({
  model (params) {
    console.log(params);
    return this.get('store').findRecord('list', params.list_id);
  },
  actions: {
    saveList (list) {
      console.log("you got to the list/edit route. your list is ", list);
      list.save();
      this.transitionTo('lists');
    },
    cancel (list) {
      list.rollbackAttributes();
      this.transitionTo('lists');
    },
  },
});
