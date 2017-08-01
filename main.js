// The Form Data
let formData = [
  // For demonstration purposes,
  // the first form element has been added to the HTML file as a comment
  // compare the input in the HTML file with the contents of this first object
  {
    "type": "text",
    "label": "First Name",
    "id": "user-first-name",
    "icon": "fa-user",
    "options": []
  },
  {
    "type": "text",
    "label": "Last Name",
    "id": "user-last-name",
    "icon": "fa-user",
    "options": []
  },
  {
    "type": "email",
    "label": "Email Address",
    "id": "user-email",
    "icon": "fa-envelope",
    "options": []
  },
  {
    "type": "text",
    "label": "Current Website URL",
    "id": "user-website",
    "icon": "fa-globe",
    "options": []
  },
  {
    "type": "select",
    "label": "Select Language",
    "id": "user-language",
    "icon": "",
    "options": [
      {
        "label": "English",
        "value": "EN"
      },
      {
        "label": "French",
        "value": "FR"
      },
      {
        "label": "Spanish",
        "value": "SP"
      },
      {
        "label": "Chinese",
        "value": "CH"
      },
      {
        "label": "Japanese",
        "value": "JP"
      }
    ]
  },
  {
    "type": "textarea",
    "label": "Your Comment",
    "id": "user-comment",
    "icon": "fa-comments",
    "options": []
  },
  {
    "type": "tel",
    "label": "Mobile Number",
    "id": "user-mobile",
    "icon": "fa-mobile-phone",
    "options": []
  },
  {
    "type": "tel",
    "label": "Home Number",
    "id": "user-phone",
    "icon": "fa-phone",
    "options": []
  }
];

// HINTS:
// As you can see, we access the first element in the array
// with [0] and then grab the property "label" using the "." operator
( function(){
  // Select the first element from the array
  let first = formData[ 0 ];
  // Log the first object
  console.log( first );
  // Log the string "First Name"
  console.log( first.label );
} )();


// -------- Your Code Goes Below this Line --------
function form_first_name(i){

  let first = formData[i];
  let firstField = document.getElementById('fields');
  switch(formData[i].id){
    case "user-language":
      let languageField = document.createElement('select');
      firstField.appendChild(languageField);
      //Here is where I start my loop for language options//
      console.log(formData[i].options);
      for (k=0;k<formData[i].options.length;k++){
        option = document.createElement('option');
        languageField.appendChild(option);
        option.setAttribute('label',`${formData[i].options[k].label}`);
        option.setAttribute('value',formData[i].options[k].value);
        option.setAttribute('icon',`${formData[i].icon}`)
        // console.log(formData[i].options[k]);
      }
      // console.log(formData[i].id);
      break;
    case "user-comment":
      let textArea = document.createElement('textarea');
      firstField.appendChild(textArea);
      textArea.setAttribute("rows","8");
      textArea.setAttribute("cols","55");
      // console.log(formData[i].id);
      break;
    default:
      let firstLabel = document.createElement('input')
      firstField.appendChild(firstLabel);
      firstLabel.setAttribute("type",formData[i].type);
      firstLabel.setAttribute("id",formData[i].id);
      firstLabel.setAttribute("placeholder",`${formData[i].label}`);
      firstLabel.setAttribute("icon",`${formData[i].icon}`)
  }
}

for (let i = 0; i < formData.length; i++){
  form_first_name(i);
}
