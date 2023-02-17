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

/* -----------------Text-Align Area---------------- */
document.getElementById('align-center').addEventListener('click', function () {
    getTextAlignById('text-area', "center");
})

document.getElementById('align-left').addEventListener('click', function () {
    getTextAlignById('text-area', "left");
})
document.getElementById('align-right').addEventListener('click', function () {
    getTextAlignById('text-area', "right");
})
document.getElementById('align-justify').addEventListener('click', function () {
    getTextAlignById('text-area', "justify");
})

/* -----------------Font-Size------------- */
document.getElementById('font-size').addEventListener('change', function(event){
    if ( event.target.value < 14){
        event.target.value = 14;
    }
    const textArea = document.getElementById('text-area');
    textArea.style.fontSize = `${event.target.value}px`;
})

// Common-function....
function getTextAlignById(id, value) {
    const textArea = document.getElementById(id);
    textArea.style.textAlign = value;
}