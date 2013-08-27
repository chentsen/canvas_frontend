window.App = Ember.Application.create({
  LOG_TRANSITIONS: true
});

/*
App.Store = DS.Store.extend({
});
*/

App.Store = DS.Store.extend({
  revision: 13,
  adapter: DS.FixtureAdapter.create()
});

App.model = {};
App.view = {};
App.controller = {};