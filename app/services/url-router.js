import Ember from 'ember';

const {
  inject: { service },
  Service,  
} = Ember;

export default Service.extend({
  router: service('router'),

  routeToUrl(url) {
    const routing = this.get('router');
    return routing.transitionTo(url);
  }
});
