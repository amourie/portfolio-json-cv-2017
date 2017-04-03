/* DATA AND HTML STRUCTURES FOR RESUME BUILDER - STARTS */
var titleTag = "%data% - Curriculum Vitae";
var HTMLheaderName = '<h1 id="name">%data%</h1>';
var HTMLheaderRole = '<h2>%data%<h2/>';
var HTMLcontactGeneric = '<span class="item-copy">%contact%</span>';
var HTMLtwitter = '<a href="%data%" target="blank"><i class="fa fa-twitter-square fa-4" aria-hidden="true"></i></a>';
var HTMLgithub = '<a href="%data%" target = "blank"><i class="fa fa-github-square fa-4" aria-hidden="true"></i>';
var HTMLlinkedIn = '<a href="%data%" target = "blank"><i class="fa fa-linkedin-square fa-4" aria-hidden="true"></i>';

var HTMLbioPic = '<div class="profilePic selfImg" style="background-image: url(%data%)"></div>';
var HTMLwelcomeMsg = '<span class="welcome-message">%data%</span>';

var HTMLskillsStart = '<div class="skills"></div>';
var HTMLskills = '<div>%data%</div>';

var HTMLworkStart = '<div class="work-entry"></div>';
var HTMLworkEmployer = '<div class="work-entry-place">%data%';
var HTMLworkTitle = ' - %data%</div>';
var HTMLworkDates = '<div class="work-entry-dates">%data%</div>';
var HTMLworkLocation = '<div class="work-entry-location">%data%</div>';
var HTMLworkDescription = '<div class="work-entry-desc"><p><br>%data%</p></div>';

var HTMLprojectStart = '<div class="project-entry"></div>';
var HTMLprojectTitle = '<div class="project-entry-title">%data%</div>';
var HTMLprojectLocation = '<div class="project-entry-location">%data%</div>';
var HTMLprojectDates = '<div class="project-entry-dates">%data%</div>'
var HTMLprojectDescription = '<div class="project-entry-desc"><p><br>%data%</p></div>';
var HTMLprojectImage = '<img src="%data%">';

var HTMLschoolStart = '<div class="education-entry"></div>';
var HTMLschoolName = '<div class="education-entry-name"<a href="#">%data%</a></div>';
var HTMLschoolDegree = '<div class="education-entry-degree">%data%</div>';
var HTMLschoolDates = '<div class="education-entry-date">%data%</div>';
var HTMLschoolLocation = '<div class="education-entry-location">%data%</div>';

var HTMLonlineClasses = '<h3>Online Classes</h3>';
var HTMLonlineTitle = '<a href="#">%data%';
var HTMLonlineSchool = ' - %data%</a>';
var HTMLonlineDates = '<div class="date-text">%data%</div>';
var HTMLonlineURL = '<br><a href="#">%data%</a>';

/* DATA AND HTML STRUCTURES FOR RESUME BUILDER - ENDS */

/* DATA AND HTML STRUCTURES FOR RESUME BUILDER - STARTS */
var googleMap = '<div id="map"></div>';

/* generate the custom Google Map for the website.
https://developers.google.com/maps/documentation/javascript/reference */
var map;    // declares a global map variable

/* initializeMap() is called when page is loaded.*/
function initializeMap() {
  var locations;
  var mapOptions = {
    disableDefaultUI: true
  };

            /* Append googleMap var to #mapDiv in resumeBuilder.js.  */
            map = new google.maps.Map(document.querySelector('#mapDiv'), mapOptions);

            /* locationFinder() returns an array of every location string from the JSONs written for bio, education, projects and work.  */
            function locationFinder() {

              var locations = [];
              // adds the single location property from bio to the locations array
              locations.push(bio.contacts.location);
              // iterates through school locations and appends each location to the locations array
                for (var school in education.schools) {
                  locations.push(education.schools[school].location);
                }
                // iterates through work locations and appends each location to the locations array
                for (var job in work.jobs) {
                  locations.push(work.jobs[job].location);
                }
                return locations;
            }//end function locationFinder

            /*
            createMapMarker(placeData) reads Google Places search results to create map pins.
            placeData is the object returned from search results containing information  about a single location.
            */
            function createMapMarker(placeData) {
                // The next lines save location data from the search result object to local variables
                var lat = placeData.geometry.location.lat();  // latitude from the place service
                var lon = placeData.geometry.location.lng();  // longitude from the place service
                var name = placeData.formatted_address;   // name of the place from the place service
                var bounds = window.mapBounds;            // current boundaries of the map window

                // marker is an object with additional data about the pin for a single location
                var marker = new google.maps.Marker({
                  map: map,
                  position: placeData.geometry.location,
                  title: name
                });

                // infoWindows are the little helper windows that open when you click or hover over a pin on a map. They usually contain more information about a location.

                var infowindow = new google.maps.InfoWindow();
                google.maps.event.addListener(marker, 'click', function() {
                    infowindow.setContent(marker.title);
                    infowindow.open(map, this);
                });

              // this is where the pin actually gets added to the map.
              // bounds.extend() takes in a map location object
                  bounds.extend(new google.maps.LatLng(lat, lon));
              // fit the map to the new marker
                  map.fitBounds(bounds);
              // center the map
                  map.setCenter(bounds.getCenter());
          }// end function createMapMarker

              /*
              callback(results, status) makes sure the search returned results for a location.
              If so, it creates a new map marker for that location.
              */
              function callback(results, status) {
                if (status == google.maps.places.PlacesServiceStatus.OK) {
                  createMapMarker(results[0]);
                }
              }

              /*
              pinPoster(locations) takes in the array of locations created by locationFinder()
              and fires off Google place searches for each location
              */
              function pinPoster(locations) {

                // creates a Google place search service object. PlacesService does the work of
                // actually searching for location data.
                var service = new google.maps.places.PlacesService(map);

                // Iterates through the array of locations, creates a search object for each location
                for (var place in locations) {

                  // the search request object
                  var request = {
                    query: locations[place]
                  };

                  // Actually searches the Google Maps API for location data and runs the callback
                  // function with the search results after each search.
                  service.textSearch(request, callback);
                }
              }//end function pinPoster

  // Sets the boundaries of the map based on pin locations
  window.mapBounds = new google.maps.LatLngBounds();

  // locations is an array of location strings returned from locationFinder()
  locations = locationFinder();

  // pinPoster(locations) creates pins on the map for each location in the locations array
  pinPoster(locations);

}//end function initializeMap

// Calls the initializeMap() function when the page loads
window.addEventListener('load', initializeMap);

// Vanilla JS way to listen for resizing of the window
// and adjust map bounds
window.addEventListener('resize', function(e) {
  //Make sure the map bounds get updated on page resize
  map.fitBounds(mapBounds);
});
