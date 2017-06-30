import Ember from 'ember';

const {
  inject: { service },
  Route,
} = Ember;

export default Route.extend({
  store: service('store'),

  _routing: service('-routing'),

  actions: {
    // This action fails when passing in a routeName that is external to this engine.
    handleTransitionToRoute(routeName) {
      return this.transitionTo(routeName);
    },

    // This action fails stating programatic transitions by URL cannot be used within an Engine. Please use a route name instead.
    handleTransitionToUrl(url) {
      return this.transitionTo(url);
    },

    // This action works as expected
    handleTransitionToExternalRoute(routeName) {
      return this.transitionToExternal(routeName);
    },
    
    // This action failes stating there is no route matching the argument passed in.
    handleTransitionToExternalUrl(url) {
      return this.transitionToExternal(url);
    },

    // This action works as expected.
    handlePrivateTransitionRoute(routeName) {
      return this.get('_routing').transitionTo(routeName);
    },
    
    // This action errors out stating there is no route matching the argument passed in.
    handlePrivateTransitionUrl(url) {
      return this.get('_routing').transitionTo(url);
    },
  },
});

