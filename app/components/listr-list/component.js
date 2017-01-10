import Ember from 'ember';

export default Ember.Component.extend({
  newItem: {
    content: null,
    done: false,
  },
  classNames: ['listr'],
  classNameBindings: ['listDetailHidden'],
  listDetailHidden: false,
  actions: {
    toggleListDetail () {
      return this.toggleProperty('listDetailHidden');
    },
    toggleItemDone (item) {
      console.log("you're inside toggleItemDone");
      this.sendAction('toggleItemDone', item);
    },
    deleteItem (item) {
      this.sendAction('deleteItem', item);
    },
    createItem () {
      // console.log("inside createItem", this.get('newItem'));
      // this.sendAction('createItem', this.get('newItem'));
      console.log("inside createItem, this.get(newItem) is ", this.get('newItem'));
      let data = this.get('newItem');
      data.list = this.get('list');
      this.sendAction('createItem', data);
    },
  },
});
