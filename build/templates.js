this["App"] = this["App"] || {};
this["App"]["TEMPLATES"] = this["App"]["TEMPLATES"] || {};

this["App"]["TEMPLATES"]["js/templates/canvas/actions.hbs"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  


  data.buffer.push("<div class=\"cn-container\">\n  <button class=\"cn-button\" id=\"cn-button\">+</button>\n  <div class=\"cn-wrapper\" id=\"cn-wrapper\">\n      <ul>\n        <li><a href=\"#\"><span class=\"icon-picture\"></span></a></li>\n        <li><a href=\"#\"><span class=\"icon-headphones\"></span></a></li>\n        <li><a href=\"#\"><span class=\"icon-home\"></span></a></li>\n        <li><a href=\"#\"><span class=\"icon-facetime-video\"></span></a></li>\n        <li><a href=\"#\"><span class=\"icon-envelope-alt\"></span></a></li>\n       </ul>\n  </div>\n  <div id=\"cn-overlay\" class=\"cn-overlay\"></div>\n</div>");
  
});

this["App"]["TEMPLATES"]["js/templates/settings.hbs"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  


  data.buffer.push("<h2>Settings</h2>");
  
});