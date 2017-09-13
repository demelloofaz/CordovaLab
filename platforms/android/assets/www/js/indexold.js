/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */


var pictureSource;   // picture source
var destinationType; // sets the format of returned value

document.addEventListener("deviceready",onDeviceReady,false);

// Cordova is ready to be used!
//
function onDeviceReady() {
    pictureSource=navigator.camera.PictureSourceType;
    destinationType=navigator.camera.DestinationType;
}



function getLocation() {
  Console.log("Getting location");
  // get the location
  // cnstruct the location string
  // use DOM/InnerHtml to display.
}

function onPhotoDataSuccess(imageData) {

   getLocation();

   // Get image handle
   var smallImage = document.getElementById('smallImage');
   // Unhide image elements
   smallImage.style.display = 'block';
   // Show the captured photo
   // The inline CSS rules are used to resize the image
   //
   smallImage.src = "data:image/jpeg;base64," + imageData;
}

function onFail() {
  console.log("photo failed");
}

function capturePhotoWithData() {
  // Take picture using device camera and retrieve image as base64-encoded string
  navigator.camera.getPicture(onPhotoDataSuccess, onFail, { quality: 50,
        destinationType: destinationType.DATA_URL });
  console.log("Taking Picture");
}

function getLocation() {
  Console.log("Getting location");
  // get the location
  // cnstruct the location string
  // use DOM/InnerHtml to display.
}
