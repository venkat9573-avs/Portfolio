function downloadResume( ){
    const link = document.createElement('a');
    link.href = 'venkata_sai_kalyan_resume.docx';
    link.download = 'venkata_sai_kalyan_resume.docx';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}