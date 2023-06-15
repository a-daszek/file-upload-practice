const filePickerElement = document.getElementById("image");
const imagePreviewElement = document.getElementById("image-preview");

function showPreview() {
    const files = filePickerElement.files;
    if (!files || files.length === 0) {
        imagePreviewElement.style.display = "none";
        return;
    }
    const pickedFile = files[0];

    imagePreviewElement.src = URL.createObjectURL(pickedFile); // local url for the image for the user to see the preview
    imagePreviewElement.style.display = "block";
}

filePickerElement / addEventListener("change", showPreview); //showpreview bez (), wtedy nie odpali się ta funkcja od razu, tylko wtedy kiedy zajdzie zmiana
