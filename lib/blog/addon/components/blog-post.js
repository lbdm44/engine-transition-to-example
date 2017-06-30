import Ember from 'ember';
import layout from '../templates/components/blog-post';

const {
  inject: { service },
  Component
} = Ember;

export default Component.extend({
  layout,

  router: service('router'),

  urlRouter: service('url-router'),

  actions: {
    handleWithPublicRouter(url) {
      return this.get('router').transitionTo(url);
    },

    handleWithUrlRouter(url) {
      return this.get('urlRouter').routeToUrl(url);
    },
  },
});

