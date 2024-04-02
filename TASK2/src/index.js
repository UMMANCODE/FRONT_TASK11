const imageBox = document.querySelector(".image-box");
const primaryButton = document.querySelector("#primary");
const fileInput = document.querySelector("#file");

primaryButton.addEventListener("click", (e) => {
    fileInput.click();
});

fileInput.addEventListener("change", (e) => {
    const files = fileInput.files;
    for (const file of files) {
        if (!file.type.startsWith("image/")) continue;
        const fileReader = new FileReader();
        fileReader.readAsDataURL(file);
        fileReader.onload = () => {
            const img = document.createElement("img");
            img.src = fileReader.result;
            imageBox.appendChild(img);
        };
    }
});

document.addEventListener("dragover", (e) => {
    e.preventDefault();
});

document.addEventListener("drop", (e) => {
    e.preventDefault();
    const files = e.dataTransfer.files;
    for (const file of files) {
        if (!file.type.startsWith("image/")) continue;
        const fileReader = new FileReader();
        fileReader.readAsDataURL(file);
        fileReader.onload = () => {
            const img = document.createElement("img");
            img.src = fileReader.result;
            imageBox.appendChild(img);
        };
    }
});