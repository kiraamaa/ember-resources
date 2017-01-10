import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'li',
  classNameBindings: ['listItemCompleted'],
  listItemCompleted: Ember.computed.alias('item.done'),
  actions: {
    // toggleDone () {
    //   this.sendAction('toggleItemDone', this.get('item'));
    //   // return this.toggleProperty('listItemCompleted');
    // },
    toggleDone () {
      console.log("youre in toggleDone in listr-list component and this.get(item is)", this.get('item'));
      this.sendAction('toggleDone', this.get('item'));
    },
    delete () {
      console.log("yeaah delete this");
      this.sendAction('delete', this.get('item'));
    },
  },
});
