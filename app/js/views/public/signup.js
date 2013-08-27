App.SignupView = Ember.View.extend({
  templateName: 'signup',
  classNames: ['signup-view'],
  init: function(){
    this._super();
  },

  didInsertElement: function() {
    var self = this;
    $('.canvas-signup-button').click( function(e) {
      e.preventDefault();
      /*
      console.debug(JSON.stringify({
          first_name: $('#signup-first-name').val(),
          last_name: $('#signup-last-name').val(),
          email: $('#signup-email').val(),
          password: $('#signup-password').val()
        }));
      */
      self.signup($('#signup-first-name').val(), $('#signup-last-name').val(), $('#signup-email').val(), $('#signup-password').val());
    });
  },

  signup: function(first, last, email, password) {
    var self = this;
    $.ajax({
      type: "POST",
      url: "http://use-canvas.com/v1/user/register",
      data: JSON.stringify({
        first_name: first,
        last_name: last,
        email: email,
        password: password
      }),
      contentType:"application/json;charset=utf-8", //?
      success: function(data, textStatus, jqXHR) {
        console.debug('SUCCESS');
        self.login(email, password);
      },
      error: function(jqXHR, textStatus, errorThrown) {
        console.debug('ERROR');
      }
    });
  },

  login: function(email, password) {
    var self = this;
    $.ajax({
      type: "POST",
      url: "http://use-canvas.com/v1/user/login",
      data: JSON.stringify({
        email: email,
        password: password
      }),
      contentType:"application/json;charset=utf-8", //?
      success: function(data, textStatus, jqXHR) {
        console.debug('SUCCESS');
        self.get('controller').transitionToRoute('canvas');
      },
      error: function(jqXHR, textStatus, errorThrown) {
        console.debug('ERROR');
      }
    });
  },

  signup2: function(first, last, email, password) {
    console.debug('signup');
    this.login();
  },

  login2: function() {
    console.debug('login');
    var controller = this.get('controller');
    controller.transitionToRoute('canvas');
  }

}); 