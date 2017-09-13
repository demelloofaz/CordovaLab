var pictureSource;   // picture source
var destinationType; // sets the format of returned value


// Wait for Cordova to connect with the device
//
document.addEventListener("deviceready",onDeviceReady,false);

// Cordova is ready to be used!
//
function onDeviceReady() {
    pictureSource=navigator.camera.PictureSourceType;
    destinationType=navigator.camera.DestinationType;
}

var onMapSuccess = function (position) {
  var Longitude = position.coords.longitude;
  var Latitude = position.coords.longitude;
  var pictureLocation = "Location:  Long(" + Longitude +") Lat(" + Latitude +")";
  var locItem = document.getElementById('picLocation');
  console.log(pictureLocation);
  locItem.innerHtml = pictureLocation;
  alert(pictureLocation);
}

function onMapError(error) {
    console.log('code: ' + error.code + '\n' +
        'message: ' + error.message + '\n');
}

function getMapLocation() {
    console.log('getMapLocation called');
    navigator.geolocation.getCurrentPosition(onMapSuccess, onMapError, { enableHighAccuracy: true });
}

// Called when a photo is successfully retrieved
//
function onPhotoDataSuccess(imageData) {

  // Get image handle
  var smallImage = document.getElementById('smallImage');

  // Unhide image elements
  smallImage.style.display = 'block';

  // Show the captured photo
  // The inline CSS rules are used to resize the image
  //
  smallImage.src = "data:image/jpeg;base64," + imageData;

  getMapLocation();
}



// A button will call this function
//
function capturePhoto() {
  // Take picture using device camera and retrieve image as base64-encoded string
  navigator.camera.getPicture(onPhotoDataSuccess, onFail, { quality: 50,
    destinationType: destinationType.DATA_URL });
}

// A button will call this function
//
function capturePhotoEdit() {
  // Take picture using device camera, allow edit, and retrieve image as base64-encoded string
  navigator.camera.getPicture(onPhotoDataSuccess, onFail, { quality: 20, allowEdit: true,
    destinationType: destinationType.DATA_URL });
}

// Called if something bad happens.
//
function onFail(message) {
  alert('Failed because: ' + message);
}
