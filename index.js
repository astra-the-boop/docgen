const fontSelect = document.getElementById('font-select');
const fontSize = document.getElementById('font-size');
const darkMode = document.getElementById('dark-mode');
const root = document.documentElement;
const content = document.getElementById('content');
const mainPreview = document.getElementById('cuntier-preview');

marked.setOptions({
    sanitize: true,
    breaks: true
});

function printTheFucker(){
    window.print();
}

function updatePreview(){
    const preview = document.getElementById('preview-box');

    switch(fontSelect.value) {
        case "times":
            preview.style.fontFamily = `"Times New Roman", times, serif`;
            mainPreview.style.fontFamily = `"Times New Roman", times, serif`;
            document.getElementById("if-anyone-finds-this-div-tell-my-lovely-wife-hana-that-i-love-her-a-lot-less-than-3").style.fontFamily = `"Times New Roman", times, serif`;
            break;
        case "jetbrains":
            preview.style.fontFamily = `"JetBrains Mono", monospace`;
            mainPreview.style.fontFamily = `"JetBrains Mono", monospace`;
            document.getElementById("if-anyone-finds-this-div-tell-my-lovely-wife-hana-that-i-love-her-a-lot-less-than-3").style.fontFamily = `"JetBrains Mono", monospace`;
            break;
        case "phantom":
            preview.style.fontFamily = `"Phantom Sans", sans-serif`;
            mainPreview.style.fontFamily = `"Phantom Sans", sans-serif`;
            document.getElementById("if-anyone-finds-this-div-tell-my-lovely-wife-hana-that-i-love-her-a-lot-less-than-3").style.fontFamily = `"Phantom Sans", sans-serif`;
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
    mainPreview.style.fontSize = (fontSize.value - 2) + "pt";
    document.getElementById("if-anyone-finds-this-div-tell-my-lovely-wife-hana-that-i-love-her-a-lot-less-than-3").style.fontSize = fontSize.value + "pt";
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

    document.getElementById("jurisdiction").addEventListener('input', () => {
        document.getElementById("jurisdiction-preview").innerText = document.getElementById("jurisdiction").value;
        document.getElementById('real-jurisdiction').innerText = document.getElementById("jurisdiction").value;
    });

    document.getElementById("bottom-row").addEventListener('input', () => {
        if (document.getElementById("gay-homosexual-bottom-grrr").value === "date") {
            const date = new Date(document.getElementById("bottom-row").value);
            document.getElementById("bottomrow-preview").innerText = document.getElementById("bottomrow-preview").innerText = date.toLocaleString("en-GB", {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric"
            });
            document.getElementById("bottomrow-real").innerText = document.getElementById("bottomrow-preview").innerText = date.toLocaleString("en-GB", {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric"
            });
        } else {
            document.getElementById("bottomrow-preview").innerText = document.getElementById("bottom-row").value;
            document.getElementById("bottomrow-real").innerText = document.getElementById("bottom-row").value;
        }
    });

    document.getElementById("document-type").addEventListener('input', () => {
        document.getElementById("doc-type-preview").innerText = document.getElementById("document-type").value.toUpperCase();
        document.getElementById("real-document-type").innerText = document.getElementById("document-type").value.toUpperCase();
    })

    document.getElementById("title").addEventListener('input', () => {
        document.getElementById("title-preview").innerText = `"${document.getElementById("title").value}"`;
        document.getElementById("real-title").innerText = `"${document.getElementById("title").value}"`;
    })

    document.getElementById("authors").addEventListener('input', () => {
        document.getElementById("authors-preview").innerText = document.getElementById("authors").value;
        document.getElementById("real-authors").innerText = document.getElementById("authors").value;
    })

    document.getElementById("secondary-for").addEventListener('input', () => {
        document.getElementById("the-fuckassed-thing").innerText = document.getElementById("secondary-for").value;
        document.getElementById("real-sec-for").innerText = document.getElementById("secondary-for").value;
    })

    document.getElementById("secondary").addEventListener('input', () => {
        document.getElementById("the-other-fuckassed-thing").innerText = document.getElementById("secondary").value;
        document.getElementById("real-sec").innerText = document.getElementById("secondary").value;
    })

    document.getElementById("date-grrr").addEventListener('change', () => {
        const date = new Date(document.getElementById("date-grrr").value);
        document.getElementById("date-preview").innerText = date.toLocaleString("en-GB", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric"
        });
        document.getElementById("real-date").innerText = date.toLocaleString("en-GB", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric"
        })
    })

    document.getElementById("hc").addEventListener('change', () => {
        if(document.getElementById("hc").value === "democratic"){
            document.getElementById("drhc").innerText = "Democratic Republic of Hack Club";
            document.getElementById("urhc").innerText = "Democratic Republic of Hack Club"
        }else{
            document.getElementById("drhc").innerText = "United Republic of Hack Club";
            document.getElementById("urhc").innerText = "United Republic of Hack Club"
        }
    })

    document.getElementById("orph").addEventListener('change', () => {
        if(document.getElementById("orph").value === "orpheus"){
            document.getElementById("lesbianism").innerText = "In Orpheus We Trust";
            document.getElementById("i-love-my-wife").innerText = "In Orpheus We Trust"
        }else{
            document.getElementById("lesbianism").innerText = "In Orpheo Confidimus";
            document.getElementById("i-love-my-wife").innerText = "In Orpheo Confidimus"
        }
    })

    content.addEventListener('input', () => {
        const md = content.value;
        document.getElementById("cunt-preview").innerHTML = marked.parse(md);
        mainPreview.style.fontSize = (fontSize.value - 2) + "pt";
        document.getElementById("if-anyone-finds-this-div-tell-my-lovely-wife-hana-that-i-love-her-a-lot-less-than-3").innerHTML = marked.parse(md);
        document.getElementById("if-anyone-finds-this-div-tell-my-lovely-wife-hana-that-i-love-her-a-lot-less-than-3").style.fontSize = fontSize.value() + "pt";
    })
})