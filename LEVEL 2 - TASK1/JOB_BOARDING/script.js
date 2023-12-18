// Sample job data (replace this with actual data)
const jobs = [
    {
      title: 'Frontend Developer',
      company: 'ABC Corp',
      location: 'Bengaluru',
      description: 'Strong command over HTML, CSS, and JavaScript, and an understanding of their latest features and capabilities.'
    },
    {
      title: 'Backend Developer',
      company: 'XYZ Inc',
      location: 'Bengaluru',
      description: 'Proficiency in backend programming languages like Python, Node.js, Java, Ruby, PHP, etc., depending on the project'
    },
    // Add more job objects as needed
    {
      title: 'Support Developer',
      company: 'Mnc Inc',
      location: 'Bengaluru',
      description: 'Proficiency in communication skills , windows OS,Linux OS.' 
    },
    {
        title: 'Support Developer',
        company: 'Mnc Inc',
        location: 'Bengaluru',
        description: 'Proficiency in communication skills , windows OS,Linux OS.' 
    },
    {
      title: 'Backend Developer',
      company: 'XYZ Inc',
      location: 'Bengaluru',
      description: 'Proficiency in backend programming languages like Python, Node.js, Java, Ruby, PHP, etc., depending on the project'
    }
  ];
  
  // Display job listings
  const jobListingsContainer = document.getElementById('jobListings');
  
  jobs.forEach(job => {
    const jobListing = document.createElement('div');
    jobListing.classList.add('job-listing');
    jobListing.innerHTML = `
      <h3>${job.title}</h3>
      <p>${job.company}</p>
      <p>${job.location}</p>
      <p>${job.description}</p>
      <button><a href="index1.html" target="_top">Apply</a></button>
      
    `;
    jobListingsContainer.appendChild(jobListing);
  });
  

// Example: Populate job listings
const jobListingsDiv = document.getElementById('jobListings');
const jobListings = [ ]; // Replace with your actual job listings data

jobListings.forEach(job => {
  const p = document.createElement('p');
  p.textContent = job;
  jobListingsDiv.appendChild(p);
});

function toggleContactForm() {
  var contactForm = document.querySelector('.contact-form');
  contactForm.style.display = (contactForm.style.display === 'none') ? 'block' : 'none';
}

