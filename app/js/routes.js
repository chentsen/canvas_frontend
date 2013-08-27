App.Router.map(function() {
  
  this.route('canvas');
  this.resource('canvas', { path: '/canvas/:canvas_id' });

  this.resource('browse', function() {
    this.route('trending');
    this.route('my');
  });
  this.route('settings');

  //this.resource('people');


  this.route('signup');
  this.route('landing');
  this.route('public');
  //this.route("favorites", { path: "/favs" });
  //this.route("index", { path: "/" });
});

/*
App.ApplicationRoute = Ember.Route.extend({  
  renderTemplate: function(controller, model) {
    console.debug('application template rendered');
  }
});
*/

/*
App.IndexRoute = Ember.Route.extend({
  //redirect: function(controller, model) {
  //  this.transitionTo('signup');
  //}
  model: function(params) {
    console.debug(1);
  },
  renderTemplate: function(controller, model) {
    console.debug(2);
  }

});
*/


App.CanvasRoute = Ember.Route.extend({
  model: function(params) {
    if (params.canvas_id) {
      return App.model.Canvas.find(params.canvas_id);
    } else {
      //console.debug('asdfasdfs');
      //console.debug(App.model.Canvas.find(1));
      //return App.model.Canvas.find(1);
      this.transitionTo('canvas', App.model.Canvas.find(1));
    }
  },
  afterModel: function() {
    console.debug('afterModel');
  },
  renderTemplate: function(controller, model) {
    console.debug('CanvasRoute renderTemplate');
    this.render('header', {outlet: 'header'});
    this.render();
    //console.debug(controller.get('target.view'));
  }
});

App.BrowseRoute = Ember.Route.extend({
  renderTemplate: function(controller, model) {
    this.render('header', {outlet: 'header'});
    this.render();
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
  renderTemplate: function(controller, model) {
    this.render('header', {outlet: 'header'});
    this.render();
  }
});

App.SignupRoute = Ember.Route.extend({

});

App.PublicRoute = Ember.Route.extend({});

App.LandingRoute = Ember.Route.extend({

});

App.LoadingRoute = Ember.Route.extend({});