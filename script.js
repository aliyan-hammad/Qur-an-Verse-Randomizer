const getButton = document.querySelector("#btn")
const matan = document.querySelector("#arabic")
const englishTran = document.querySelector("#english")
const urduTran = document.querySelector("#urdu")
const sources = document.querySelector("#source")
const surahName = document.querySelector("#surah-name")
const ayahNumber = document.querySelector("#ayah-number")


getButton.addEventListener("click", () => {
    const randomInd = Math.floor(Math.random()*comfortVerses.length)
    matan.innerHTML = comfortVerses[randomInd].arabic;
    englishTran.innerHTML = comfortVerses[randomInd].english;
    urduTran.innerHTML = comfortVerses[randomInd].urdu
    surahName.innerHTML = `Surah: ${comfortVerses[randomInd].surah}`
    ayahNumber.innerHTML = `Ayah: ${comfortVerses[randomInd].ayah}`;
})

// Select the button for showing sources
const btnSource = document.querySelector("#btn-source")
// Add event listener for the source button
// This will toggle the source display when clicked
// If the source is already displayed, it will hide it
// If not displayed, it will show the source of the verse
btnSource.addEventListener("click", () => {
    if (!sources) {
        console.error("Source element not found");
        return;
    }
    if (matan.innerHTML === "") {
        alert("Please get an Ayah first!");
        return;
    }
    // Check if the source is already displayed
    if (sources.innerHTML) {
        sources.innerHTML = ""; // Clear the source if already displayed
        btnSource.innerHTML = "Show Source"; // Change button text
        return;
    }
    // If not displayed, show the source
    const randomInd = Math.floor(Math.random()*comfortVerses.length)
    sources.innerHTML = `Source (English): ${comfortVerses[randomInd].sourceEnglish} <br> Source (Urdu): ${comfortVerses[randomInd].sourceUrdu}`;
    sources.style.display = "block"; // Ensure the source is visible
    btnSource.innerHTML = "Hide Source"; // Change button text
})
