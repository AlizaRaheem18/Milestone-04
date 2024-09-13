var form = document.getElementById('resume-form');
var resumeDisplayElement = document.getElementById('resume-display');
form.addEventListener('submit', function (event) {
    event.preventDefault();
    var profilePictureInput = document.getElementById("profile-picture");
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var DateOfBirth = document.getElementById('DateOfBirth').value;
    var education = document.getElementById('education').value;
    var experience = document.getElementById('experience').value;
    var skills = document.getElementById('skills').value;
    var displayResume = function (profileImageSrc) {
        var resumeHtml = "\n      <h2><b>Editable Resume</b></h2>\n      <h3>Personal Information</h3>\n      ".concat(profileImageSrc ? "<img src=\"".concat(profileImageSrc, "\" alt=\"Profile Picture\" style=\"width:150px; height:150px; object-fit:cover;\"/>") : '', "\n      <p><b>Name:</b><span contenteditable=\"true\">").concat(name, "</span></p>\n      <p><b>Email:</b><span contenteditable=\"true\">").concat(email, "</span></p>\n      <p><b>Phone:</b><span contenteditable=\"true\">").concat(phone, "</span></p>\n      <p><b>Date Of Birth:</b><span contenteditable=\"true\">").concat(DateOfBirth, "</span></p>\n      \n      <h3>Education</h3>\n      <p contenteditable=\"true\">").concat(education, "</p>\n      \n      <h3>Experience</h3>\n      <p contenteditable=\"true\">").concat(experience, "</p>\n      \n      <h3>Skills</h3>\n      <p contenteditable=\"true\">").concat(skills, "</p>\n    ");
        if (resumeDisplayElement) {
            resumeDisplayElement.innerHTML = resumeHtml;
        }
        else {
            console.error('The resume display element is missing.');
        }
    };
    if (profilePictureInput && profilePictureInput.files && profilePictureInput.files[0]) {
        var reader = new FileReader();
        reader.onload = function (e) {
            var _a;
            displayResume((_a = e.target) === null || _a === void 0 ? void 0 : _a.result);
        };
        reader.readAsDataURL(profilePictureInput.files[0]);
    }
    else {
        displayResume(null);
    }
});
