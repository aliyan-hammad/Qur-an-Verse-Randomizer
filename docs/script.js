const getButton = document.querySelector("#btn")
const matan = document.querySelector("#arabic")
const englishTran = document.querySelector("#english")
const urduTran = document.querySelector("#urdu")
const sources = document.querySelector(".source")
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


const hadeethPeragraph = document.querySelector("#hadeeth")
const narrator = document.querySelector(".narrator")
const source = document.querySelector("#source-peragraph")
const hadeethContent = document.querySelector(".content")
let i = 0;

document.querySelector(".homburgur-button").addEventListener("click", function() {
    this.classList.toggle("active");
});


// let loadedHadith = main() //<-- stored a promise in pending state
// console.log(loadedHadith) // <-- print the promise

document.addEventListener("DOMContentLoaded",() =>{
    getAhadiths().then((ahadiths) => {
        function loadHadith(){
            hadeethContent.style.opacity = 0; // Start with opacity 0
            setTimeout(() => {
                currentHadith = ahadiths.hadiths.data[i] || ahadiths.hadiths.data[0];
                hadeethPeragraph.innerHTML = `Hadeeth: ${currentHadith.hadithEnglish}`;
                narrator.innerHTML = `${currentHadith.englishNarrator}`;
                source.innerHTML = `Book: ${currentHadith.book.bookName}`;
                hadeethContent.style.opacity = 1; // Start with opacity 0
                i++;
                if (i >= ahadiths.hadiths.data.length) {
                    i = 0;
                }
            }, 800);
        }
        loadHadith();
        setInterval(loadHadith, 10000);
    })
})

const menuButton = document.querySelector(".homburgur-button");
const dropDownMenu = document.querySelector(".dropdown");
const searchButton = document.querySelector("#search-btn");
const searchBar = document.querySelector(".search-bar");
const dropdownContainer = document.querySelector(".dropdown-container");
const navbarRightContainer = document.querySelector("#right")

menuButton?.addEventListener('click', (e) => {
e.stopPropagation(); // prevent bubbling if you like
dropDownMenu.style.display = (dropDownMenu.style.display === 'block') ? 'none' : 'block';
});
searchButton?.addEventListener("click", (e) => {
    e.stopPropagation();
    dropdownContainer.style.display = (dropdownContainer.style.display === "block") ? "none" : "block";
})

document.addEventListener('click', (e) => {
    if (menuButton && dropDownMenu && !menuButton.contains(e.target) && !dropDownMenu.contains(e.target)) {
    dropDownMenu.style.display = 'none';
    menuButton.classList.remove('active'); // toggle the "X" effect
    }
    if (dropdownContainer && searchButton && !dropdownContainer.contains(e.target) && !searchButton.contains(e.target)) {
        dropdownContainer.style.display = "none";
    }
});

// const colorChanger = document.querySelector(".color-changer")
const movers = document.querySelectorAll(".mover")
const targets = document.querySelectorAll(".gradient-text")
targets.forEach((target,index )=> {
target.addEventListener("mouseover" , () => {
    target.classList.add("animate")
    const textWidth = target.offsetWidth + "px";
    movers[index].style.transform = `translateX(${textWidth})`; 
    movers[index].style.backgroundColor = "blue"
})
})
targets.forEach((target, index) => {
target.addEventListener("mouseout", () => {
    target.classList.remove("animate")
    movers[index].style.transform = "translateX(0)"
    movers[index].style.backgroundColor = "#f0e3e3"
})
})
