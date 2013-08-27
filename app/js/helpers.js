App.getUserInfo = function(callback) {
  $.ajax({
    type: "GET",
    url: "http://use-canvas.com/v1/user/get_info",
    success: function(data, textStatus, jqXHR) {
      console.debug('SUCCESS');
      App.currentUser = data;
      callback();
    },
    error: function(jqXHR, textStatus, errorThrown) {
      console.debug('ERROR');
    }
  });
};

App.login = function(email, password) {
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
      App.getUserInfo(function() {
        window.location.href='#/canvas';
      });
    },
    error: function(jqXHR, textStatus, errorThrown) {
      console.debug('ERROR');
    }
  });
};

App.signup = function(first, last, email, password) {
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
      App.login(email, password);
    },
    error: function(jqXHR, textStatus, errorThrown) {
      console.debug('ERROR');
    }
  });
};

// FAKE

App.getUserInfo = function(callback) {
  console.debug('user info');
  App.currentUser = {first_name: 'Wooju', last_name: 'Choi'};
  callback();
};

App.login = function(email, password) {
  console.debug('login');
  App.getUserInfo(function() {
    window.location.href='#/canvas';
  });
};

App.signup = function(first, last, email, password) {
  console.debug('signup');
  App.login(email, password);
};
