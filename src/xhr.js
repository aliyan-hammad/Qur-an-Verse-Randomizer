// const data = new XMLHttpRequest();
// data.open('GET', 'https://api.github.com/users/aliyan-hammad');
// data.send();
// data.onreadystatechange = function() {
//     if (data.readyState === 4 && data.status === 200) {
//         const user = JSON.parse(data.responseText);
//         console.log(`User: ${user.login}, ID: ${user.id}`);
//         console.log(user);
//         newdata = new XMLHttpRequest();
//         newdata.open('GET', user.followers_url);
//         newdata.send();
//         newdata.onreadystatechange = function() {
//             console.log(newdata.readyState)
//         }
//     }

// }
/// api for getting books detail
// console.log("start")
// const data = new XMLHttpRequest();
// data.open("Get" , "https://hadithapi.com/api/books?apiKey=$2y$10$POD18J3lOcMBgnjQt0HHTtHfsNZW8xdAAcc8UI7wN7gif20i6")
// data.send();
// data.onreadystatechange = function() {
//     if (data.readyState === 4 && data.status === 200) {
//         const jsonData = JSON.parse(data.responseText)
//     }
// }

// /// api for getting chapters detail of book
// const chapters = new XMLHttpRequest();
// chapters.open("Get" , "https://hadithapi.com/api/sahih-bukhari/chapters?apiKey=$2y$10$POD18J3lOcMBgnjQt0HHTtHfsNZW8xdAAcc8UI7wN7gif20i6")
// chapters.send();
// chapters.onreadystatechange = function() {
//     if (chapters.readyState === 4 && chapters.status === 200) {
//         const chpaterJson = (JSON.parse(chapters.responseText))
//     }

// }

/// api for get hadeeth of book


// let hadeethsJson;
// function getHadeethInJSON(callback){
//     console.log("enter in gethadithfunction")
//     const hadiths = new XMLHttpRequest()
//     hadiths.open("Get" , "https://hadithapi.com/public/api/hadiths?apiKey=$2y$10$POD18J3lOcMBgnjQt0HHTtHfsNZW8xdAAcc8UI7wN7gif20i6")
//     hadiths.onreadystatechange = () => {
//         if (hadiths.readyState === 4 && hadiths.status === 200) {
//             const hadeethsJson = JSON.parse(hadiths.responseText)
//             callback(hadeethsJson)

// }};
//     hadiths.send();
// }

    //         console.log(hadeethsJson)
    //         console.log(hadeethsJson.message) 
    //         console.log(hadeethsJson.hadiths)
    //         console.log(hadeethsJson.hadiths.data)
    //         console.log(hadeethsJson.hadiths.data[0])
    //         console.log("narratr ", hadeethsJson.hadiths.data[0].englishNarrator)
    //         console.log("urdu translate ", hadeethsJson.hadiths.data[0].hadithUrdu)
    //         console.log("english translate ", hadeethsJson.hadiths.data[0].hadithEnglish)
    //         console.log("book ", hadeethsJson.hadiths.data[0].book)
    // }
