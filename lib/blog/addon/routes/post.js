import Ember from 'ember';

const { Route } = Ember;

export default Route.extend({
  model() {
    return 'I am the post route';
  },
});

