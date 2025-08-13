# Qur-an-Verse-Randomizer

A simple JavaScript-based project that displays motivational and comforting verses from the Qur’an to help in times of depression, anxiety, tension, and hopelessness. The app randomly shows a verse in Arabic with English and Urdu translation. It now includes two key sections: **Ayah** and **Hadiths**.

## Features
- 📖 Random verse display
- 🌍 Arabic with English & Urdu translation
-  Hadith support
  - Displays Hadith in English (with future support for Urdu)
  - Includes narrator and source metadata
  - Rotates through Hadiths at regular intervals (customizable timing)
- 🎯 Verses specifically selected for motivation and comfort
- 📱 Simple and beautiful UI

## How It Works
- **Data Storage**:  
  - Ayahs in a local JSON file  
  - Hadiths in a separate JSON file with keys: `matan`, `english`, `narrator`, and `source`
- **JavaScript Logic**:
  - On page load, a random Ayah or Hadith is picked and displayed
  - A `setInterval()` function rotates Hadiths after a configurable delay (e.g., every 6 seconds)
- **UI & Effects**:
  - Smooth fade transition for Hadith container when content updates
  - Responsive design across devices

## Technologies Used
- HTML5  
- CSS3  
- JavaScript (ES6)  

## Future Improvements
- Search functionality for specific topics
- Bookmark favorite verses & Hadiths
- Add Tafseer for verses
- Include Urdu translation for Hadiths
- Add filtering by narrator, source, or topic

---

**Source of Data**  
- **Verses**: Sahih International (English), standard Urdu translation  
- **Hadiths**: Curated collection with metadata (English translation, narrator, source)

---

