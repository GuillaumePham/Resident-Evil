let clique_sur_moi = Document.getElementById("clique_sur_moi");

let wiki = Document.getElementById("wiki");
clique_sur_moi.addEventListener("click", () => {
  if(getComputedStyle(wiki).display != "none"){
    wiki.style.display = "none";
  } else {
    wiki.style.display = "block";
  }
})
