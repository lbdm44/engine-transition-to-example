import Ember from 'ember';
import Resolver from './resolver';
import loadInitializers from 'ember-load-initializers';
import config from './config/environment';

let App;

Ember.MODEL_FACTORY_INJECTIONS = true;

App = Ember.Application.extend({
  modulePrefix: config.modulePrefix,
  podModulePrefix: config.podModulePrefix,
  Resolver,
  engines: {
    blog: {
      dependencies: {
        externalRoutes: {
          cookbook: 'cookbook',
          'cookbook.recipe': 'cookbook.recipe',
        },
        services: [
          'router',
          'store',
          'urlRouter',
        ],
      }
    },
    cookbook: {
      dependencies: {
        externalRoutes: {
          blog: 'blog',
          'blog.post': 'blog.post',
        },
        services: [
          'router',
          'store',
          'urlRouter',
        ],
      },
    },
  },
});

loadInitializers(App, config.modulePrefix);

export default App;
