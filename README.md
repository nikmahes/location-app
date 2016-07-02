# README #

This loacation-app is a single page application to fetch location data(location.json) from server and to show that on screen.

### What is this repository for? ###

* Location info is provided in JSON format.
* Group those locations by country and city.
* Show the location with address, city and post with its location in map.
* Documentation about technology used and flow can be found in README

### How do I get set up? ###

* Download this repository on your machine.
* Unzip the repository and host is on a server / localhost.
* Open the hosted application in Web Browser.
* Demo : http://location-app.nikhilmaheshwari.com/

### Technologies Used ###

* HTML/HTML5 : For application structure and skeleton.
* CSS/CSS3 : For application styling.
* JavaScript : For user interaction.
* AngularJS : Framework support for Single Page Application.
* Google Maps API : API for providing map and its functionalities.
* Font Awesome : For awesome fonts.

### Application Flow ###

* Step 1 : An Application skeleton is created in index.html and google-maps, font-awesome, AngularJS, custom-css, JavaScript and finally AngularJS directives ng-app="locationApp" & ng-controller="locationCtrl" are added.
* Step 2 : AngularJS application is bootstrapped with "locationApp" & "locationCtrl".
* Step 3 : Now location.json is fetched by making and ajax call to server in "locationCtrl" and the fetched location data is then categorized
* Step 4 : Once data is received initialized method is called.
* Step 4 : Categorized data is placed on map in hidden format.
* Step 5 : Only the selected Country or City data will be visible on map.
 
### Who do I talk to? ###

* Nikhil Maheshwari [http://www.nikhilmaheshwari.com/]
