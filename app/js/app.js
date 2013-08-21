window.App = Ember.Application.create({
  LOG_TRANSITIONS: true
});

App.Store = DS.Store.extend({
});


App.Router.map(function() {
  this.route('canvas');
  this.resource('browse', function() {
    this.route('trending');
    this.route('my');
  });
  this.route('settings');

  //this.resource('people');


  this.route('landing');
  //this.route("favorites", { path: "/favs" });
});

App.CanvasRoute = Ember.Route.extend({
  model: function() {
    //return { name: 'My App', timer: 0 };
    return {};
  }
});

App.BrowseRoute = Ember.Route.extend({
  model: function() {
    console.debug('111111111');
    return {};
  }
});

App.BrowseTrendingRoute = Ember.Route.extend({
  model: function() {
    return test_data.trending;
  }
});

App.BrowseMyRoute = Ember.Route.extend({
  model: function() {
    //console.debug(test_data.my);
    return test_data.my;
  }
});

App.SettingsRoute = Ember.Route.extend({
  model: function() {
    return {};
  }
});

App.LandingRoute = Ember.Route.extend({

});