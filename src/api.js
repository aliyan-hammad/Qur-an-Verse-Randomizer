async function getAhadiths() {
    const response = await fetch("https://hadithapi.com/public/api/hadiths?apiKey=$2y$10$POD18J3lOcMBgnjQt0HHTtHfsNZW8xdAAcc8UI7wN7gif20i6")
    const data = await response.json();
    // console.log(data)  //<-- resolved here
    return data;
}

async function getQuranVerse() {
    const response = await fetch("https://api.alquran.cloud/v1/ayah/random/en.asad")
    const data = await response.json();
    // console.log(data)  //<-- resolved here
    return data;
}
// getAhadiths().then((ahadiths) =>{
//     console.log(ahadiths)
// })

// async function main(){
//     let ahadiths = await getAhadiths()
//     console.log(ahadiths)
// }

// main();
