// Function to download the resume
function downloadResume() {
    const userConfirmed = confirm("Do you want to download the resume?");
    if (userConfirmed) {
        const link = document.createElement('a');
        link.href = 'venkata_sai_kalyan_resume.pdf';
        link.download = 'venkata_sai_kalyan_resume.pdf';
        link.click();
    }
}

// Function to toggle the visibility of the contact card
function toggleContactCard() {
    const contactCard = document.getElementById('contact-card');
    const socialIcons = document.getElementById('social-icons');

    // Ensure both icons and contact card are accessible
    if (contactCard.style.display === 'none' || !contactCard.style.display) {
        contactCard.style.display = 'block';
        socialIcons.style.display = 'flex'; // Ensure social icons remain visible
    } else {
        contactCard.style.display = 'none';
        socialIcons.style.display = 'flex'; // Keep social icons visible at all times
    }
}
