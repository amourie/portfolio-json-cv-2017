
//*******************BIO STARTS HERE***********************************//
var skills = ["JavaScript","HTML,CSS","jQuery","AJAX","JSON","C# / Razor",".NET development","Native responsiveness","Git & GitHub", "Subversion","Cross-browser testing","Quality assurance and testing","Bootstrap", "Zurb Foundation", "CMS: Umbraco, Django, WordPress, custom etc.", "Information Architecture","Project Management", "Atlassian Jira", "Technical Documentation","Google Analytics", "Adobe Photoshop", "Google Analytics", "Google Tag Manager", ];
var bio = {

    "name" : "Amourie",
    "surname" : "Fourie",
    "role" : "Front-End Developer in Brisbane, Australia",
    "welcomeMessage" : "I'm a web professional with over ten years experience as a Webmaster looking after the digital and web presences of large organisations. The roles I've been in, have been hybrid roles exposing me to a range of web development practises and web project management methodologies. My true passion is web development and I would like to secure a full-time role in web development where I can have the opportunity to focus on web development and grow my skills by learning new frameworks. I love learning new technologies. I am not restricted to front-end development as I've done back-end development in the past with .NET C# / Razor Syntax and Umbraco. My focus currently is on Full-stack JavaScript development as I wish to eventually specialise in this area.",
    "extraBlurb" : "CV",
    "biopic" : "images/Amourie150x186greyscale.jpg",
    "contacts" : {
        "twitter" : "http://www.twitter.com/amourief",
        "linkedIn" : "https://au.linkedin.com/in/amourie-fourie-00b01028",
        "github" : "https://github.com/amourie/",
          "location" : "Brisbane, Australia"
    },
    "skills" : skills
};

bio.display = function() {
    var bioRole = HTMLheaderRole.replace("%data%",bio.role);
    $("#header-profileInfo").prepend(bioRole);
    var bioFullName = HTMLheaderName.replace("%data%",bio.name + " " + bio.surname + ": " + bio.extraBlurb);
    $("#header-profileInfo").prepend(bioFullName);
    var bioWelcomeMsg = HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage);
    $("#welcome").append(bioWelcomeMsg);
    var bioPic = HTMLbioPic.replace("%data%",bio.biopic);
    $("#header-profilePic").prepend(bioPic);
    //get bio.contacts properties
    var bioTwitter = bio.contacts.twitter;
    var bioLinkedIn = bio.contacts.linkedIn;
    var bioGithub = bio.contacts.github;

    if (bioTwitter.length > 1)
    {
        $("#topContacts").append(HTMLtwitter.replace("%data%",bioTwitter));
        $("#footerContacts").append(HTMLtwitter.replace("%data%",bioTwitter));
    }
      if (bioLinkedIn.length > 1)
    {
        $("#topContacts").append(HTMLlinkedIn.replace("%data%",bioLinkedIn));
        $("#footerContacts").append(HTMLlinkedIn.replace("%data%",bioLinkedIn));
    }
    if (bioGithub.length > 1)
    {
        $("#topContacts").append(HTMLgithub.replace("%data%",bioGithub));
        $("#footerContacts").append(HTMLgithub.replace("%data%",bioGithub));
    }

    $("#skills").append(HTMLskillsStart);
    if (bio.skills.length > 0)
    {
        for (var skill in bio.skills)
        {
           $("#skillsDiv").append(HTMLskills.replace("%data%",bio.skills[skill]));
        }
    }
}
//*******************BIO ENDS HERE***********************************//
//*******************GENERAL PROFILE STARTS HERE***********************************//

$('title').prepend(titleTag.replace("%data%",bio.name + " " + bio.surname));

//*******************GENERAL PROFILE ENDS HERE***********************************//

//*******************PROJECTS START HERE*********************************//
var projects = {
    "projects":
    [
            {
                "title" : "ZMOnline.com - site rebuild",
                "location" : "Auckland, New Zealand",
                "dates" : "2014",
                "description" : "Build of a new responsive website for our the company's flagship Youth brand / radio station - <a href='http://www.zmonline.com' target='_blank'>zmonline.com</a> as part of a small team. My contribution was mostly front-end development, but also some back-end development and CMS integration for certain componenets. Build of components and SASS themes to allow the site to be skinned with different colours and themes to better complement client creative. This was integrated with the CMS and allowed content editors to change out not only themes but specify which brand logos the site should use to complement the background skin / theme: for example a glitter logo, hot pink logo etc. Also responsible for project management of this site release."
                 /*"images": ["images/timthumb.jpg", "images/timthumb.jpg"]*/
            },
            {
                "title" : "Mobile responsive sites for additional NZME brands",
                "location" : "Auckland, New Zealand",
                "dates" : "2014",
                "description" : "Using the same front-end code and back-end framework as for <a href='http://www.zmonline.com' target='_blank'>zmonline.com</a>, we re-launched <a href='http://www.thehits.co.nz' target='_blank'>www.thehits.co.nz</a>, <a href='http://www.flava.co.nz' target='_blank'>www.flava.co.nz</a>, www.hauraki.co.nz and I assisted in similar capacity as with zmonline.com dividing my time equally between deveopment tasks and project management."
                /*"images": ["images/timthumb.jpg", "images/timthumb.jpg"]*/
            },
            {
                "title" : "New corporate website build for radionetwork.co.nz",
                "location" : "Auckland, New Zealand",
                "dates" : "2014",
                "description" : "Build of corporate website for <a href='http://www.theradionetwork.co.nz' target='_blank'>radionetwork.co.nz</a> (no longer available) before the company re-branded to NZME. Used HTML, CSS, jQuery, Umbraco, C# / RazorScript. Note that www.radionetwork.co.nz has been taken down and now redirects to www.nzme.co.nz."
                /*"images": ["images/timthumb.jpg", "images/timthumb.jpg"]*/
            },
            {
                "title" : "New responsive website for hokonui.co.nz",
                "location" : "Auckland, New Zealand",
                "dates" : "2013",
                "description" : "Small responsive site for one of NZME's rural radio stations - <a href='http://www.hokonui.co.nz' target='_blank'>hokonui.co.nz</a>."
                /*"images": ["images/timthumb.jpg", "images/timthumb.jpg"]*/
            },
            {
                  "title" : "All NZME brands (10 brand sites) - build of commercial background skin / take-over product:",
                  "location" : "Auckland, New Zealand",
                  "dates" : "2012",
                  "description" : "Development of schedulable full homepage takeover sponsorship product: background skin for advertisement including display of advertisements on top of background skin. This included integration into the CMS that was used at the time. Some of the sites that used the product were <a href='http://www.zmonline.com' target='_blank'>zmonline.com</a>, we re-launched <a href='http://www.thehits.co.nz' target='_blank'>www.thehits.co.nz</a>, <a href='http://www.flava.co.nz' target='_blank'>www.flava.co.nz</a>, <a href='http://www.thecoast.net.nz' target='_blank'>www.thecoast.net.nz</a>, <a href='www.easymix.co.nz' target='_blank'>www.easymix.co.nz</a>, <a href='www.hauraki.co.nz' target='_blank'>www.hauraki.co.nz</a>."
                /*"images": ["images/timthumb.jpg", "images/timthumb.jpg"]*/
              },
              {
                  "title" : "Mobile responsive site for newstalkzb.co.nz",
                  "location" : "Auckland, New Zealand",
                  "dates" : "2012",
                  "description" : "As part of small web dev team, we re-launched a mobile responsive site for <a href='http://www.newstalkzb.co.nz' target='_blank'>newstalkzb.co.nz</a> using Zurb Foundation. I personally built content templates for certain sections - landing page template, components for the home page, header, footer. I also used SASS to maintain colour variables for news sections."
                  /*"images": ["images/timthumb.jpg", "images/timthumb.jpg"]*/
              },
              {
                  "title" : "Other various portfolio projects",
                  "location" : "Brisbane, Australia",
                  "dates" : "2016, 2017",
                  "description" : "I'm expanding on my portfolio above with several small initiatives. Please see my GitHub profile at <a href='http://www.amourie.github.io' target='_blank'>amourie.github.io</a>"
                  /*"images": ["images/timthumb.jpg", "images/timthumb.jpg"]*/
            },
            {
                  "title" : "Peckishlaowai.com",
                  "location" : "Auckland, New Zealand ",
                  "dates" : "2010 - 2012",
                  "description" : "<strong>peckishlaowai.com</strong> was my own self-hosted WordPress blog that I had created with my own custom theme where I blogged about my experiences learning Mandarin. "
                  /*"images": ["images/timthumb.jpg", "images/timthumb.jpg"]*/
            },
            {
                "title" : "Campaign site (cricketfever.co.nz)",
                "location" : "Auckland, New Zealand",
                "dates"  : "2014",
                "description" : "Build of cricketfever.co.nz (no longer available).  The site used feeds from radiosport.co.nz, nzherald.co.nz and newstalkzb.co.nz and displayed aggregated content during the Cricket World Cup. (Implemented using Google's Feed API which is now deprecated). Have rebuilt this as a portfolio project."
                /*"images": ["images/timthumb.jpg", "images/timthumb.jpg"]*/
            }
    ]
}

projects.display = function() {
  console.log(projects.projects.length);
    for (var project in projects.projects)
    {
      if (project==1) {
        console.log("in loop");
      }
       $("#projects").append(HTMLprojectStart);
        var projTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
        $(".project-entry:last").append(projTitle);
        var projDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
        $(".project-entry:last").append(projDates);
        var projLocation = HTMLprojectLocation.replace("%data%", projects.projects[project].location);
        $(".project-entry:last").append(projLocation);
        var projDesc = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
        $(".project-entry:last").append(projDesc);
      /*  if (projects.projects[project].images.length > 0)
        {
            for (var img in projects.projects[project].images){
                var projImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[img]);
                $(".project-entry:last").append(projImage);
            }
        }
        */
    }
}
//*******************PROJECTS END HERE*********************************//

//*******************EDUCATION STARTS HERE***********************************//

var education  = {
    "schools":  [
        {
        "name" : "University of Pretoria",
        "location" : "Pretoria, South Africa",
        "degree" : "B.IS Multimedia specializing in Multimedia (Computer Science as dual major)",
        "dates" : "",
        "url" : "http://www.up.ac.za/"

        },
        {
        "name" : "Auckland University",
        "location" : "Auckland, New Zealand",
        "degree" : "Project Management - Non-degree Purposes",
        "dates" : "2010",
        "url" : "https://www.auckland.ac.nz/"
        },
        {
        "name" : "Umbraco",
        "location" : "Auckland, New Zealand",
        "degree" : "Level 1 Development Certification",
        "dates" : "2013",
        "url" : "http://www.umbraco.com/"
        }
    ],
    "onlineCourses" : [
    {
        "title": "JavaScript Full Stack Tech Degree (in progress)",
        "url" : "www.teamtreehouse.com",
        "school" : "Team Tree House",
        "date" : "2017",
    },
    {
        "title": "Programming in C#",
        "url" : "www.mvc.com",
        "school" : "Microsoft Virtual Academy",
        "date" : "2014",
    }
    ]
}
education.display = function() {
    var eduName, eduDegree, eduDates, eduLocation, eduMajor, eduUrl = "";
    for (var school in education.schools)
    {
        $("#education").append(HTMLschoolStart);
        eduDegree = HTMLschoolDegree.replace("%data%",education.schools[school].degree);
        $('.education-entry:last').append(eduDegree);
        eduName = HTMLschoolName.replace("%data%",education.schools[school].name);
        $('.education-entry:last').append(eduName);
        eduDates = HTMLschoolDates.replace("%data%",education.schools[school].dates);
        $('.education-entry:last').append(eduDates);
        eduLocation = HTMLschoolLocation.replace("%data%",education.schools[school].location);
        $('.education-entry:last').append(eduLocation);
        eduUrl = education.schools[school].url;
        $('.education-entry:last a').attr("href",eduUrl).attr("target","_blank");
    }
}

//******************EDUCATION ENDS HERE***********************************//

//*******************WORK STARTS HERE***********************************//
var work = {
          "jobs" : [
            {
                "employer" : "News Corp Australia",
                "title" : "Junior Technical Product Manager",
                "location" : "Brisbane, Australia",
                "dates" : "September 2016 - March 2017",
                "description" : "I worked as a tecnical liaison between the business and the team of web developers in an agile team. The role requires technical and research skills and being able to translate business requirements into technical requirements. For example investigating the subscription model and identifying web development changes that need to happen to change the subscription process through means of a new API. Adopting new technologies or new tracking such as Segment, AppLinks, external analytics tools etc and scoping these changes in agile tickets as user stories. The role also included mobile app testing and general UAT testing. "
            },
            {
              "employer" : "NZME. New Zealand Media",
              "title" : "Webmaster / Web Developer",
              "location" : "Nanjing, China",
              "dates" : "April 2009 - March 2015",
              "description" : "This role was a hands-on Webmaster role where I served a portfolio of ten brands within the company. The role was a combination of web development, web project management, vendor liaison and management and providing CMS and web operational support to a team of ten content editors across the company's ten radio stations. Beyond the web development projects listed below in the projects section, I provided web development support to sales and advertising building campaign landing pages for special campaigns and new advertising products as required. " +
              "The role acted as a main liaison between the brand and station managers and the digital department as a first point of contact for any web or mobile related enquiries. I assisted with several brand refresh and site re-build projects and worked closely with graphic designers and brand content editors to support any requirements they had for changes on their websites. In terms of web rebuilds I was managing website project from concept to delivery."

              },
            {
                "employer" : "Microsoft South Africa (outsourced by IT Event Management)",
                "title" : "Webmaster",
                "location" : "Johannesburg, South Africa",
                "dates" : "April 2005 – February 2008",
                "description" : "In this role, I localised and implemented global campaigns and websites for the local South African market. This included new site launches, product launches and event sites.  Created and maintained web portals and online campaign elements, web elements, forms and other online functionality using Microsoft’s own internal web tools and CMS. Vendor management on outsourced projects that required external design or development work. Supported global production teams: participated in user acceptance testing of global web properties before localization to SA market."
            },
             {
                "employer" : "Nanjing University of Finance and Economics",
                "title" : "English Teacher",
                "location" : "Nanjing, China",
                "dates" : "February 2008 – January 2009",
                "description" : "An overseas gap year experience."
            }
    ],
    "onlineCourses" : [
    {
        "title": "JavaScript Basics",
        "website" : "teamtreehouse.com"
    }
    ]
}
work.display = function() {
    for (job in work.jobs)
    {
        $("#workExperience").append(HTMLworkStart);
        var formattedWorkEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
        var formattedWorkTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
        var formattedWorkDate = HTMLworkDates.replace("%data%", work.jobs[job].dates);
        var formattedWorkDesc = HTMLworkDescription.replace("%data%", work.jobs[job].description);
        var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
        $(".work-entry:last").append(formattedWorkEmployer + formattedWorkTitle + formattedWorkDate + formattedWorkLocation + formattedWorkDesc);
    }
}

//*******************WORK ENDS HERE***********************************//

//******************CALL MAIN FUNCTIONS HERE***********************************//
projects.display();
bio.display();
work.display();
education.display();

//******************CALL MAIN FUNCTIONS ENDS HERE***********************************//

//******************GOOGLE MAP CALLED HERE ***********************************//
$("#mapDiv").append(googleMap);
