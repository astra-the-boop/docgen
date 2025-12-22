document.addEventListener('DOMContentLoaded', () => {
    const fontSelect = document.getElementById('font-select');

    fontSelect.addEventListener('change', () => {
        switch(fontSelect.value) {
            case "times":
                fontSelect.style.fontFamily = `"Times New Roman", times, serif`;
                break;
            case "jetbrains":
                console.log("dfkldfgklgdfjlk");
                break;
            case "phantom":
                break;
        }
    })
})