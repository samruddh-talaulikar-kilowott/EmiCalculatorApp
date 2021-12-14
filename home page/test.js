var googleUser = {};
  var startApp = function() {
    gapi.load('auth2', function(){
      // Retrieve the singleton for the GoogleAuth library and set up the client.
      auth2 = gapi.auth2.init({
        client_id: 'YOUR_CLIENT_ID.apps.googleusercontent.com',
        cookiepolicy: 'single_host_origin',
        // Request scopes in addition to 'profile' and 'email'
        //scope: 'additional_scope'
      });
      attachSignin(document.getElementById('customBtn'));
    });
  };

  function attachSignin(element) {
    console.log(element.id);
    auth2.attachClickHandler(element, {},
        function(googleUser) {
          document.getElementById('name').innerText = "Signed in: " +
              googleUser.getBasicProfile().getName();
        }, function(error) {
          alert(JSON.stringify(error, undefined, 2));
        });
  }
  window.onload=function(){
    DARK_STYLE_LINK.setAttribute("href", "");
    document.getElementById("theme-toggler").innerHTML = "🌞 Light";
    document.getElementById("image2").setAttribute("src", LIGHT_IMAGE);
  }
  


  // you can use app's unique identifier here
const LOCAL_STORAGE_KEY = "toggle-bootstrap-theme";

const LOCAL_META_DATA = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));

// you can change this url as needed
const DARK_THEME_PATH = "style-dark.css";
const DARK_IMAGE = "./images/image1.png";
const LIGHT_IMAGE = "./images/image2.png";


const DARK_STYLE_LINK = document.getElementById("dark-theme-style");
const THEME_TOGGLER = document.getElementById("theme-toggler");

let isDark = LOCAL_META_DATA && LOCAL_META_DATA.isDark;

const enableDarkTheme = () => {
    DARK_STYLE_LINK.setAttribute("href", DARK_THEME_PATH);
    document.getElementById("theme-toggler").innerHTML = "🌙 Dark";
    document.getElementById("image2").setAttribute("src", DARK_IMAGE);
}
  
const disableDarkTheme = () => {
    DARK_STYLE_LINK.setAttribute("href", "");
    document.getElementById("theme-toggler").innerHTML = "🌞 Light";
    document.getElementById("image2").setAttribute("src", LIGHT_IMAGE);
}



// check if user has already selected dark theme earlier
if (isDark) {
  enableDarkTheme();
} else {
  disableDarkTheme();
}

/**
 * Apart from toggling themes, this will also store user's theme preference in local storage.
 * So when user visits next time, we can load the same theme.
 *
 */
function toggleTheme() {
  isDark = !isDark;
  if (isDark) {
    enableDarkTheme();
  } else {
    disableDarkTheme();
  }
  const META = { isDark };
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(META));
}


