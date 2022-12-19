function gettingCats(cats){
    fetch("https://al-hajjar.github.io/phase1project/db.json")
    .then(response => response.json())
    .then((data) => {
      console.log(data);
    })
}