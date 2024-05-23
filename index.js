
var button = document.getElementById("btn");
function addFields() {
    // Get the parent element
    var parent = document.getElementById("fields");

    // Create new div for label and input fields
    var newFields = document.createElement("div");

    // Company label and input
    var companyLabel = document.createElement("label");
    companyLabel.textContent = "Company";
    var companyInput = document.createElement("input");
    companyInput.type = "text";
    companyInput.classList.add("form-control");

    // Description label and input
    var descLabel = document.createElement("label");
    descLabel.textContent = "Description";
    var descInput = document.createElement("input");
    descInput.type = "text";
    descInput.classList.add("form-control");

    // Append label and input fields to new div
    newFields.appendChild(companyLabel);
    newFields.appendChild(companyInput);
    newFields.appendChild(descLabel);
    newFields.appendChild(descInput);

    // Append new div to parent
    parent.appendChild(newFields);
}

var namee = document.getElementById("name"); // Corrected ID to match the div element
var button = document.getElementById("btn");
var phonefeild = document.getElementById("phonefeild");
let phone = document.getElementById("phone");
let mail = document.getElementById("mail");
var mailfeild = document.getElementById("mailfeild");
var linkdinfeild = document.getElementById("linkdinfeild");
let linkdin = document.getElementById("linkdin");
let address = document.getElementById("address");
var addressfeild = document.getElementById("addressfeild")
var instafeild = document.getElementById("instafeild")
var insta = document.getElementById("insta")

//college

var college = document.getElementById("college");
//var collegefeild = document.getElementById("collegefeild");
var college_duration_feild = document.getElementById("college_dur_feild");
var college_duration = document.getElementById("college_duration");
var course = document.getElementById("course");
var coursefeild = document.getElementById("coursefeild");
var college_cgpa = document.getElementById("college_cgpa");
var collegemfeild = document.getElementById("collegemfeild");


var download = document.getElementById("download");


button.addEventListener("click", function() {
    console.log("working");
    //name feild
    var download = document.getElementById("download");
    download.style.display = "block";
    var namefeild = document.getElementById("namefeild"); // Access the input element
    let na = namefeild.value; // Get the value of the input element
    namee.innerHTML = String(na); // Set the innerHTML of the div to the input value

    //contact feild
    var phonefeild = document.getElementById("phonefeild"); // Access the input element
    let phone_data = phonefeild.value; // Get the value of the input element
    phone.innerHTML = phone_data;

    var mailfeild = document.getElementById("mailfeild"); // Access the input element
    let mail_data = mailfeild.value; // Get the value of the input element
    mail.innerHTML = mail_data;

    //lindin
    var linkdinfeild = document.getElementById("linkdinfeild");
    let link_data = linkdinfeild.value;
    linkdin.href = link_data;

   //address
   var addressfeild = document.getElementById("addressfeild");
   add_data = addressfeild.value;
   address.innerHTML = add_data;

//insta
   var instafeild = document.getElementById("instafeild");
   let insta_data = instafeild.value;
   insta.href = insta_data;

   //college
   let collegefeild = document.getElementById("collegefeild");
console.log("course");
   let college_data = collegefeild.value;
   college.innerHTML = String(college_data);

   //course
   let coursefeild = document.getElementById("coursefeild");
      let course_data = coursefeild.value;
      course.innerHTML = String(course_data);

       //course
   let college_dur_feild = document.getElementById("college_dur_feild");
   let dur_data = college_dur_feild.value;
   college_duration.innerHTML = String(dur_data);

   //cgpa
   let collegemfeild = document.getElementById("collegemfeild");
   var cmark_data = collegemfeild.value;
   college_cgpa.innerHTML = cmark_data;


    school12();

 
});


//class 12
var school_12 = document.getElementById("school_12");

var school12_cgpa = document.getElementById("school12_cgpa");


function school12(){
   //name
    let hschoolfeild = document.getElementById("hschoolfeild");
    let ss_data = hschoolfeild.value;
    school_12.innerHTML = ss_data;
    

    let school12mfeild = document.getElementById("school12mfeild");
    let ssdd_data = school12mfeild.value;
    school12_cgpa.innerHTML = ssdd_data;

    
    school10();
}

//class 10
var school_10 = document.getElementById("school_10");

var school10_cgpa = document.getElementById("school10_cgpa");

function school10(){

    let sschoolfeild = document.getElementById("sschoolfeild");
    let ss_data = sschoolfeild.value;
    school_10.innerHTML = ss_data;
     


    let school10mfeild = document.getElementById("school10mfeild");
    let ssdd_data = school10mfeild.value;
    school10_cgpa.innerHTML = ssdd_data;

    
}

//exp
function addExperience() {
    // Get the input fields
    
    var companyInput = document.getElementById('companyInput');
    var descriptionInput = document.getElementById('descriptionInput');
    
    // Get the values of the input fields
    var company = companyInput.value;
    var description = descriptionInput.value;

    // Check if the input fields are not empty
    if (company.trim() !== "" && description.trim() !== "") {
        
      
            
        // Create a new div element for the experience
        var experienceBox = document.createElement('div');
        experienceBox.className = 'experienceBox';
        
        // Create and set the company name element
        var companyElement = document.createElement('h3');
        companyElement.textContent = company;
        
        // Create and set the description element
        var descriptionElement = document.createElement('p');
        descriptionElement.textContent = description;
        
        // Append the company name and description to the experience box
        experienceBox.appendChild(companyElement);
        experienceBox.appendChild(descriptionElement);
        
        // Add the new experience box to the experiences container
        var experiencesContainer = document.getElementById('experiencesContainer');
        experiencesContainer.appendChild(experienceBox);
        
        // Clear the input fields
        companyInput.value = '';
        descriptionInput.value = '';
        alert("Succesfully added. you can add more");
    } else {
        alert("Please enter both company and description");
    }
}
 

function addSkill() {
  
    // Get the input field
    var skillInput = document.getElementById('skillInput');
    
    // Get the value of the input field
    var skill = skillInput.value;
    
    // Check if the input field is not empty
    if (skill.trim() !== "") {
        // Create a new div element for the skill
        var skillBox = document.createElement('div');
        skillBox.className = 'skillBox';
        skillBox.textContent = skill;
        
        // Add the new skill box to the skills container
        var skillsContainer = document.getElementById('skillsContainer');
        skillsContainer.appendChild(skillBox);
        
        // Clear the input field
        skillInput.value = '';
        alert("Succesfully added. you can add more");
    } else {
        alert("Please enter a skill");
    }
}


 function addProject() {
    
            // Get the input fields
            var projectInput = document.getElementById('projectInput');
            var descriptionInput = document.getElementById('descriptionInputP');
            
            // Get the values of the input fields
            var project = projectInput.value;
            var description = descriptionInput.value;
            
            // Check if the input fields are not empty
            if (project.trim() !== "" && description.trim() !== "") {
                // Create a new div element for the project
                var projectBox = document.createElement('div');
                projectBox.className = 'projectBox';
                
                // Create and set the project name element
                var projectElement = document.createElement('h3');
                projectElement.textContent = project;
                
                // Create and set the description element
                var descriptionElement = document.createElement('p');
                descriptionElement.textContent = description;
                
                // Append the project name and description to the project box
                projectBox.appendChild(projectElement);
                projectBox.appendChild(descriptionElement);
                
                // Add the new project box to the projects container
                var projectsContainer = document.getElementById('projectsContainer');
                projectsContainer.appendChild(projectBox);
                
                // Clear the input fields
                projectInput.value = '';
                descriptionInput.value = '';
                alert("Succesfully added. you can add more");
            } else {
                alert("Please enter both project name and description");
            }
        }

 function addCertificate() {
            // Get the input fields
            var certificateInput = document.getElementById('certificateInput');
            var issuedByInput = document.getElementById('issuedByInput');
            
            // Get the values of the input fields
            var certificate = certificateInput.value;
            var issuedBy = issuedByInput.value;
            
            // Check if the input fields are not empty
            if (certificate.trim() !== "" && issuedBy.trim() !== "") {
                // Create a new div element for the certificate
                var certificateBox = document.createElement('div');
                certificateBox.className = 'certificateBox';
                
                // Create and set the certificate text element
                var certificateText = document.createElement('div');
                certificateText.className = 'certificateText';
                certificateText.innerHTML = `<span>${certificate}</span> - <span class="issuedBy">${issuedBy}</span>`;
                
                // Append the certificate text to the certificate box
                certificateBox.appendChild(certificateText);
                
                // Add the new certificate box to the certificates container
                var certificatesContainer = document.getElementById('certificatesContainer');
                certificatesContainer.appendChild(certificateBox);
                
                // Clear the input fields
                certificateInput.value = '';
                issuedByInput.value = '';
                alert("Succesfully added. you can add more");
            } else {
                alert("Please enter both certificate and issued by");
            }
        }


 function addAchievement() {
            // Get the input field
            var achievementInput = document.getElementById('achievementInput');
            
            // Get the value of the input field
            var achievement = achievementInput.value;
            
            // Check if the input field is not empty
            if (achievement.trim() !== "") {
                // Create a new div element for the achievement
                var achievementBox = document.createElement('div');
                achievementBox.className = 'achievementBox';
                
                // Create and set the achievement text element
                var achievementText = document.createElement('div');
                achievementText.className = 'achievementText';
                achievementText.textContent = achievement;
                
                // Append the achievement text to the achievement box
                achievementBox.appendChild(achievementText);
                
                // Add the new achievement box to the achievements container
                var achievementsContainer = document.getElementById('achievementsContainer');
                achievementsContainer.appendChild(achievementBox);
                
                // Clear the input field
                achievementInput.value = '';
                alert("Succesfully added. you can add more");
            } else {
                alert("Please enter the achievement");
            }
        }

button.addEventListener("click",()=>{
  

    var loading = document.getElementById("load");
        var main = document.getElementById("maindiv");
        var main1 = document.getElementById("resumee");
        button.style.display = "none";
        main.style.display = "none";
        main1.style.display = "none";
        loading.style.display = "block";
        download.style.display = "none";
        

   
   setTimeout(function(){

    var main = document.getElementById("maindiv");
    var main1 = document.getElementById("resumee");
    main.style.display = "none";
    main1.style.display = "block";
    button.style.display = "none";
    button.style.display = "none";
    download.style.display = "block";
    loading.style.display = "none";
   },2000)
})     


//download
document.getElementById('download').addEventListener('click', function () {
    const element = document.getElementById('resumee');
    html2pdf().from(element).set({
        margin: [0.3, 0.5, 0.5, 0.5], // [top, right, bottom, left]
        filename: 'resume.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
    }).save();
});
