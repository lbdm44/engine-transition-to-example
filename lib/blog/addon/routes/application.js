import Ember from 'ember';

const {
  inject: { service },
  Route,
} = Ember;

export default Route.extend({
  store: service('store'),

  _routing: service('-routing'),

  actions: {
    handleTransitionToRoute(route) {
      return this.transitionTo(route);
    },

    handleTransitionToUrl(url) {
      return this.transitionTo(url);
    },

    handleTransitionToExternalRoute(route) {
      return this.transitionToExternal(route);
    },

    handleTransitionToExternalUrl(url) {
      return this.transitionToExternal(url);
    },

    handlePrivateTransitionRoute(route) {
      return this.get('_routing').transitionTo(route);
    },

    handlePrivateTransitionUrl(url) {
      return this.get('_routing').transitionTo(url);
    },
  },
});

