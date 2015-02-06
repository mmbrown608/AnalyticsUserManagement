//Set Configuration Values
var clientId = '337609559131-04q7l66v4ooedba9ete0f71apnq7jcat.apps.googleusercontent.com';
var apiKey = 'AIzaSyA2B5x5-n_OBA0Erzxc9MAyE_A5pmFxavk';
var scopes = 'https://www.googleapis.com/auth/analytics.readonly';

//Handle the onload event for the Google APIs JavaScript Client Library
// This function is called after the Client Library has finished loading
function handleClientLoad() {
  // 1. Set the API Key
  gapi.client.setApiKey(apiKey);

  // 2. Call the function that checks if the user is Authenticated. This is defined in the next section
  window.setTimeout(checkAuth,1);
}

//Check if the user has Authenticated and Authorized
function checkAuth() {
  // Call the Google Accounts Service to determine the current user's auth status.
  // Pass the response to the handleAuthResult callback function
  gapi.auth.authorize({client_id: clientId, scope: scopes, immediate: true}, handleAuthResult);
}
