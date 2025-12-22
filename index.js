const fontSelect = document.getElementById('font-select');
const fontSize = document.getElementById('font-size');
const darkMode = document.getElementById('dark-mode');
const root = document.documentElement;

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

    if(!darkMode.checked){
        root.style.setProperty("--text", "#000");
        root.style.setProperty("--preview-background", "#fff");
    }else{
        root.style.setProperty("--text", "#fff");
        root.style.setProperty("--preview-background", "#000");
    }

    preview.style.fontSize = fontSize.value + "pt";
}

document.addEventListener('DOMContentLoaded', () => {
    const bottomRow = document.getElementById('gay-homosexual-bottom-grrr');
    const bottomRowContent = document.getElementById("bottom-row");
    const bottomRowLabel = document.getElementById("label-bottom");

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

    darkMode.addEventListener('change', () => {
        updatePreview();
    })

    bottomRow.addEventListener('change', () => {
        console.log(bottomRow.value);
        if(bottomRow.value === "date"){
            bottomRowContent.type = "date";
            bottomRowContent.style.width = "auto";
            bottomRowLabel.innerText = "Date of Document: ";
        }else{
            bottomRowContent.type = "text";
            bottomRowContent.style.width = "18rem";
            bottomRowLabel.innerText = "Sub-Jurisdiction: ";
        }
    })
})