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
    contactCard.style.display = contactCard.style.display === 'none' || !contactCard.style.display ? 'grid' : 'none';
}
