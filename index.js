/*function workexp(){
    //console.log("ready");
    let newnode = document.createElement("textarea");
    newnode.classList.add('form-control')
    newnode.classList.add('wefeild')
    newnode.classList.add('mt-2')
    newnode.setAttribute("placeholder","enter here")
    newnode.classList.add('rows',3)
let weaddbutton = document.getElementById('weaddbutton')
let weob = document.getElementById("we")

weob.insertBefore(newnode,weaddbutton);
}

function addacd(){
    let newnode1 = document.createElement("textarea");
    newnode1.classList.add('form-control')
    newnode1.classList.add('wefeild')
    newnode1.classList.add('mt-2')
    newnode1.setAttribute("placeholder","enter here")
    newnode1.classList.add('rows',3)
    let aqaddbutton = document.getElementById('aqaddbutton')
    let aq = document.getElementById("aq")

aq.insertBefore(newnode1,aqaddbutton)

}
*/

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





button.addEventListener("click", function() {
    console.log("working");
    //name feild
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

    addFields();
}

function addFields() {
         // Get the container of all field groups
    var fieldsDiv = document.getElementById("fields");
    var fieldGroups = fieldsDiv.getElementsByClassName("field-group");

    var wetList = document.getElementById("wet");

    // Iterate through all field groups and add them to the list
    for (var i = 0; i < fieldGroups.length; i++) {
        var companyValue = fieldGroups[i].querySelector("textarea[id='company']").value;
        var descValue = fieldGroups[i].querySelector("textarea[id='description']").value;

        if (companyValue && descValue) {
            var listItem = document.createElement("li");

            var companyName = document.createElement("strong");
            companyName.textContent = companyValue;

            var description = document.createElement("p");
            description.textContent = descValue;

            listItem.appendChild(companyName);
            listItem.appendChild(description);

            wetList.appendChild(listItem);
        }
    }

    // Clear the fieldsDiv for new inputs
    fieldsDiv.innerHTML = "";

    // Create new input fields for the next entry
    var newFields = document.createElement("div");
    newFields.classList.add("field-group");

    var newCompanyLabel = document.createElement("label");
    newCompanyLabel.textContent = "Company";
    var newCompanyInput = document.createElement("textarea");
    newCompanyInput.id = "company";
    newCompanyInput.classList.add("form-control");

    var newDescLabel = document.createElement("label");
    newDescLabel.textContent = "Description";
    var newDescInput = document.createElement("textarea");
    newDescInput.id = "description";
    newDescInput.classList.add("form-control");

    newFields.appendChild(newCompanyLabel);
    newFields.appendChild(newCompanyInput);
    newFields.appendChild(newDescLabel);
    newFields.appendChild(newDescInput);

    fieldsDiv.appendChild(newFields);
}
 





