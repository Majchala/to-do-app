const designButtons = document.querySelectorAll(".design-btn");
const coverImg = document.getElementById("coverImg");


document.addEventListener("DOMContentLoaded", function() {
    const selectedDesign = localStorage.getItem("selectedDesign");
    if (selectedDesign) {
        document.body.classList.add(selectedDesign);
        coverImg.innerHTML = `<img src="assets/${selectedDesign}.png" alt="${selectedDesign} Design"></img>`;
    }
});


designButtons.forEach(function(button) {
    button.addEventListener("click", function() {
        const design = button.dataset.design;
        document.body.classList.remove("white", "yellow", "brown", "red", "pink", "black");
        document.body.classList.add(design);

        if (design === "white") {
            coverImg.innerHTML = '<img src="assets/white.png" alt="White Design"></img>';
        } else if (design === "yellow") {
            coverImg.innerHTML = '<img src="assets/yellow.png" alt="Yellow Design"></img>';
        } else if (design === "brown") {
            coverImg.innerHTML = '<img src="assets/brown.png" alt="Brown Design"></img>';
        }
        else if (design === "red") {
            coverImg.innerHTML = '<img src="assets/red.png" alt="Red Design"></img>';
        }
        else if (design === "pink") {
            coverImg.innerHTML = '<img src="assets/pink.png" alt="Pink Design"></img>';
        }
        else if (design === "black") {
            coverImg.innerHTML = '<img src="assets/black.png" alt="Black Design"></img>';
        }

        localStorage.setItem("selectedDesign", design);
    });

    });
