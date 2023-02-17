/* ------------------- Font-Style Here ------------------ */
document.getElementById('bold').addEventListener('click', function () {
    const textArea = document.getElementById('text-area');
    if (textArea.style.fontWeight == 'bold') {
        textArea.style.fontWeight = 'normal';
    }
    else {
        textArea.style.fontWeight = 'bold';
    }
})

document.getElementById('italic').addEventListener('click', function () {
    const textArea = document.getElementById('text-area');
    if (textArea.style.fontStyle == 'italic') {
        textArea.style.fontStyle = 'normal';
    }
    else {
        textArea.style.fontStyle = 'italic';
    }
})

document.getElementById('underline').addEventListener('click', function () {
    const textArea = document.getElementById('text-area');
    if (textArea.style.textDecoration == 'underline') {
        textArea.style.textDecoration = 'none';
    }
    else {
        textArea.style.textDecoration = 'underline';
    }
})

