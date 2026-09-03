function download(){
    const file = "files/Leighton_Carpenter_Resume.pdf";

    const link = document.createElement('a');

    link.href = file;
    link.download = 'Leighton_Carpenter_Resume.pdf'

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

window.addEventListener("DOMContentLoaded", (event) => {
  const downloadBtn = document.querySelector('#download');
  downloadBtn?.addEventListener('click', download, false);
});