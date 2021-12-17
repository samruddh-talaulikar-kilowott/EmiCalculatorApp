//Google sign out and sign in


var googleUser = {};
  var startApp = function() {
    gapi.load('auth2', function(){
      // Retrieve the singleton for the GoogleAuth library and set up the client.
      auth2 = gapi.auth2.init({
        client_id: '1022490176411-olkchcs9lcoqftvvq64cbummgt34bkhq.apps.googleusercontent.com',
        cookiepolicy: 'none',
      });
      attachSignin(document.getElementById('customBtn'));
    });
  };

  function attachSignin(element) {
    console.log(element.id);
    auth2.attachClickHandler(element, {},
        function(googleUser) {

          location.href = 'https://flamboyant-tesla-c14c11.netlify.app/homepage.html'
          document.getElementById("name").innerText = "Signed in " +
              googleUser.getBasicProfile().getName();
        }, function(error) {
          alert(JSON.stringify(error, undefined, 2));
        });
  }


// Function for sign out
  function signOut(){
    var auth2=gapi.auth2.getAuthIntance();
    auth2.signOut().then(function(){
      console.log('User signed out');
    });
  }


