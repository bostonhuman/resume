var bio = {
    "name": "Sethya Thet",
    "role": "Front-End Web Developer, Senior Web Developer, Full Stack Web Developer, Software Engineer",
    "contacts": {
        "mobile": "857-222-9999",
        "email": "sethyathet@gmail.com",
        "github": "bostonhuman",
        "location": "Boston, MA"
    },
    "welcomeMessage": "Welcome to my personal website.",
    "skills": [
        "HTML", "CSS", "JavaScript", "jQuery", "JSON", "AJAX", "Bootstrap", "AngularJS", "jQuery UI", "PHP"
    ],
    "biopic": "images/david.jpg"

};

var work = {
    "jobs": [{
        "employer": "BostonInteractive",
        "title": "Front-End Web Developer",
        "location": "Charlestown, MA",
        "dates": "March 2016 - Present",
        "description": "This is the best job ever."
    }, {
        "employer": "InSegment",
        "title": "Senior Web Developer",
        "location": "Newton, MA",
        "dates": "November 2015 - January 2016",
        "description": "This is the best job ever."
    }, {
        "employer": "Franciscan Hospital for Children",
        "title": "Intranet Web Developer",
        "location": "Boston, MA",
        "dates": "July 2015 - November 2015",
        "description": "This is the best job ever."
    }]
};

var projects = {
    "projects": [{
        "title": "Sample Project 1",
        "dates": "2016",
        "description": "This is my sample project",
        "images": [
            "images/project1.jpg",
            "images/project1.jpg"
        ]
    }]
};

var education = {
    "schools": [{
            "name": "Harvard Extension School",
            "location": "Cambridge, MA",
            "degree": "Professional Graduate Degree",
            "majors": ["Computer Science"],
            "dates": "2015-2019",
            "url": "https://www.extension.harvard.edu/"
        }, {
            "name": "Lynn Classcial High School",
            "location": "Lynn, MA",
            "degree": "High School Diploma",
            "majors": ["General Subjects"],
            "dates": "2012-2015",
            "url": "https://en.wikipedia.org/wiki/Lynn_Classical_High_School"
        }

    ],
    "onlineCourses": [{
        "title": "Front-End Web Developer",
        "school": "Udacity",
        "date": "2016",
        "url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
    }, {
        "title": "Senior Web Developer",
        "school": "Udacity",
        "date": "2016",
        "url": "https://www.udacity.com/course/senior-web-developer-nanodegree--nd802"
    }, {
        "title": "Full Stack Web Developer",
        "school": "Udacity",
        "date": "2016",
        "url": "https://www.udacity.com/course/full-stack-web-developer-nanodegree--nd004"
    }, {
        "title": "Computer Science",
        "school": "HarvardX",
        "date": "2015",
        "url": "https://www.edx.org/course/introduction-computer-science-harvardx-cs50x"
    }, {
        "title": "Computer Science",
        "school": "MITx",
        "date": "2015",
        "url": "https://www.edx.org/course/introduction-computer-science-mitx-6-00-1x8"
    }]
};

//Function to display bio is encapsulated in the bio object
bio.display = function() {
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);

    $("#header").append(formattedName);
    $("#header").append(formattedRole);

    var formattedmobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    var formattedemail = HTMLemail.replace("%data%", bio.contacts.email);
    var formattedgithub = HTMLgithub.replace("%data%", bio.contacts.github);
    var formattedlocation = HTMLlocation.replace("%data%", bio.contacts.location);
    var formattedmessage = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);
    var formattedbiopic = HTMLbioPic.replace("%data%", bio.biopic);

    $("#topContacts, #footerContacts").append(formattedmobile);
    $("#topContacts, #footerContacts").append(formattedemail);
    $("#topContacts, #footerContacts").append(formattedgithub);
    $("#topContacts, #footerContacts").append(formattedlocation);
    $("#header").append(formattedmessage);
    $("#header").append(formattedbiopic);

    $("#header").append(HTMLskillsStart);
    for (var i = 0; i < bio.skills.length; i++) {
        var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
        $("#skills").append(formattedSkill);
    }
};
bio.display();

//Function to display work is encapsulated in the work object
work.display = function() {

    $("#workExperience").append(HTMLworkStart);
    for (var i = 0; i < work.jobs.length; i++) {
        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
        var formattedEmployerTitle = formattedEmployer + formattedTitle;

        $(".work-entry:last").append(formattedEmployerTitle);

        var formattedDates = HTMLworkDates.replace("%data%", work.jobs[i].dates);
        $(".work-entry:last").append(formattedDates);

        var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[i].location);
        $(".work-entry:last").append(formattedLocation);

        var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);
        $(".work-entry:last").append(formattedDescription);
    }
};
work.display();

//Function to display projects is encapsulated in the projects object
projects.display = function() {
    for (var project in projects.projects) {
        if (projects.projects.hasOwnProperty(project)) {
            $("#projects").append(HTMLprojectStart);

            var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
            $(".project-entry:last").append(formattedTitle);

            var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
            $(".project-entry:last").append(formattedDates);

            var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
            $(".project-entry:last").append(formattedDescription);

            if (projects.projects[project].images.length > 0) {
                for (var image in projects.projects[project].images) {
                    if (projects.projects[project].images.hasOwnProperty(image)) {
                        var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
                        $(".project-entry:last").append(formattedImage);
                    }
                }
            }
        }
    }
};
projects.display();

//Function to display education data is encapsulated in the education object
education.display = function() {
    for (var edu in education.schools) {
        if (education.schools.hasOwnProperty(edu)) {
            $("#education").append(HTMLschoolStart);

            var formattedschoolName = HTMLschoolName.replace("%data%", education.schools[edu].name);
            var formattedschoolDegree = HTMLschoolDegree.replace("%data%", education.schools[edu].degree);

            $(".education-entry:last").append(formattedschoolName + formattedschoolDegree);

            var formattedschoolMajor = HTMLschoolMajor.replace("%data%", education.schools[edu].majors);
            $("#education").append(formattedschoolMajor);

            var formattedschoolDate = HTMLschoolDates.replace("%data%", education.schools[edu].dates);
            $("#education").append(formattedschoolDate);

            var formattedschoolLocation = HTMLschoolLocation.replace("%data%", education.schools[edu].location);
            $("#education").append(formattedschoolLocation);
        }
    }

    $("#education").append(HTMLonlineClasses);
    for (var online in education.onlineCourses) {
        if (education.onlineCourses.hasOwnProperty(online)) {

            var formattedonlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[online].title);
            var formattedonlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[online].school);

            $("#education").append(formattedonlineTitle + formattedonlineSchool);

            var formattedonlineDate = HTMLonlineDates.replace("%data%", education.onlineCourses[online].date);
            $("#education").append(formattedonlineDate);

            var formattedonlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[online].url);
            $("#education").append(formattedonlineURL);
        }
    }
};
education.display();

$("#mapDiv").append(googleMap);
