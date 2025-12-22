const fontSelect = document.getElementById('font-select');
const fontSize = document.getElementById('font-size');

function updatePreview(){
    const preview = document.getElementById('preview-box');

    switch(fontSelect.value) {
        case "times":
            preview.style.fontFamily = `"Times New Roman", times, serif`;
            break;
        case "jetbrains":
            preview.style.fontFamily = `"JetBrains Mono", monospace`;
            break;
        case "phantom":
            preview.style.fontFamily = `"Phantom Sans", sans-serif`;
            break;
    }

    preview.style.fontSize = fontSize.value + "pt";
}

document.addEventListener('DOMContentLoaded', () => {
    fontSelect.addEventListener('change', () => {
        updatePreview();
        switch(fontSelect.value) {
            case "times":
                fontSelect.style.fontFamily = `"Times New Roman", times, serif`;
                break;
            case "jetbrains":
                fontSelect.style.fontFamily = `"JetBrains Mono", monospace`;
                break;
            case "phantom":
                fontSelect.style.fontFamily = `"Phantom Sans", sans-serif`;
                break;
        }
    })

    fontSize.addEventListener('change', () => {
        updatePreview();
    })
})