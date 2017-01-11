import Ember from 'ember';

export default Ember.Component.extend({
  isEmpty: Ember.computed('list', function() {
    let items = this.get('list').hasMany('items');
    console.log("items is", items);
    return items.ids().length === 0;
  }),
  actions: {
    edit () {
      console.log("inside editLIst in listr-list/card component");
      console.log("the list im clicking edit on is", this.get('list'));
      this.sendAction('edit', this.get('list'));
    },
    delete () {
      this.sendAction('delete', this.get('list'));
    },
  },
});
