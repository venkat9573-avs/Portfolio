function downloadResume( ){
    const link = document.createElement('a');
    link.href = 'venkata_sai_kalyan_resume.pdf';
    link.download = 'venkata_sai_kalyan_resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}
function showContactCard(){
    document.getElementById('contact-card').style.display = 'grid';
}