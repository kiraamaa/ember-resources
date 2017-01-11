import Ember from 'ember';

export default Ember.Route.extend({
  model () {
    return this.get('store').findAll('list');
  },
  actions: {
    editList (list) {
      console.log("inside lists route, list is ", list);
      this.transitionTo('list/edit', list);
    },
    deleteList (list) {
      list.destroyRecord();
    },
  },
});
