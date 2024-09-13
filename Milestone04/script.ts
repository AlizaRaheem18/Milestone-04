const form = document.getElementById('resume-form') as HTMLFormElement;
const resumeDisplayElement = document.getElementById('resume-display') as HTMLDivElement;

form.addEventListener('submit', (event: Event) => {
  event.preventDefault();

  const profilePictureInput = document.getElementById("profile-picture") as HTMLInputElement;
  const name = (document.getElementById('name') as HTMLInputElement).value;
  const email = (document.getElementById('email') as HTMLInputElement).value;
  const phone = (document.getElementById('phone') as HTMLInputElement).value;
  const DateOfBirth = (document.getElementById('DateOfBirth') as HTMLInputElement).value;
  const education = (document.getElementById('education') as HTMLInputElement).value;
  const experience = (document.getElementById('experience') as HTMLInputElement).value;
  const skills = (document.getElementById('skills') as HTMLInputElement).value;

  
  const displayResume = (profileImageSrc: string | null) => {
    const resumeHtml = `
      <h2><b>Editable Resume</b></h2>
      <h3>Personal Information</h3>
      ${profileImageSrc ? `<img src="${profileImageSrc}" alt="Profile Picture" style="width:150px; height:150px; object-fit:cover;"/>` : ''}
      <p><b>Name:</b><span contenteditable="true">${name}</span></p>
      <p><b>Email:</b><span contenteditable="true">${email}</span></p>
      <p><b>Phone:</b><span contenteditable="true">${phone}</span></p>
      <p><b>Date Of Birth:</b><span contenteditable="true">${DateOfBirth}</span></p>
      
      <h3>Education</h3>
      <p contenteditable="true">${education}</p>
      
      <h3>Experience</h3>
      <p contenteditable="true">${experience}</p>
      
      <h3>Skills</h3>
      <p contenteditable="true">${skills}</p>
    `;

    
    if (resumeDisplayElement) {
      resumeDisplayElement.innerHTML = resumeHtml;
    } else {
      console.error('The resume display element is missing.');
    }
  };

  
  if (profilePictureInput && profilePictureInput.files && profilePictureInput.files[0]) {
    const reader = new FileReader();
    reader.onload = function (e) {
      displayResume(e.target?.result as string);
    };
    reader.readAsDataURL(profilePictureInput.files[0]);
  } else {
    
    displayResume(null);
  }
});
