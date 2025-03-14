let output = document.querySelector("main");

window.onload = () => {
  let directory = "";

  for(let book in bible){
    directory += `<div class="menuBookName"><h3>${bookMap[book]}</h3>`;
    directory += `<hr><div class="menuChapContainer">`;
    for (let chap in bible[book]){
      directory += `<div class="menuChap" onclick="loadPassage('${book}', '${chap}')">${chap}</div>`;
    }
    directory += "</div></div>";
  }

  document.getElementById("chapterSelections").innerHTML = directory;
}

function loadPassage(book, chapter){
  output.innerHTML = bible[book][chapter];
}