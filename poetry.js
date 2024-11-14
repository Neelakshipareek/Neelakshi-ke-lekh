function showImages(imageArray) {
    const poemImage = document.getElementById("poem-image");
    const poemPDF = document.getElementById("poem-pdf");
    const displayContainer = document.getElementById("poem-display");

    // Hide the PDF if it is showing
    poemPDF.style.display = "none";

    // Clear the previous images
    displayContainer.innerHTML = '';

    // Loop through the image array and create img elements
    imageArray.forEach(imageSrc => {
        const imgElement = document.createElement('img');
        imgElement.src = imageSrc;
        imgElement.alt = 'Poem Image';
        imgElement.style.width = '100%'; // Adjust the width as needed
        imgElement.style.maxWidth = '600px'; // Max width for the image
        imgElement.style.display = 'block'; // Ensure images are stacked
        displayContainer.appendChild(imgElement);
    });

    // Show the images
    displayContainer.style.display = "block";
}


function showPoemPDF(pdfName) {
    const poemImage = document.getElementById("poem-image");
    const poemPDF = document.getElementById("poem-pdf");

    // Hide the image if it is showing
    poemImage.style.display = "none";

    // Show the PDF in an iframe
    poemPDF.src = pdfName;
    poemPDF.style.display = "block";
}