

document.getElementById("menuIcon").addEventListener("click", function () {
  document.getElementById("brandsList").classList.toggle("-left-[1200px]");
  document.getElementById("brandsList").classList.toggle("left-0");
});

document.getElementById("brandsList").addEventListener("click", function () {
  document.getElementById("brandsList").classList.toggle("-left-[1200px]");
  document.getElementById("brandsList").classList.toggle("left-0");
});

document.getElementById("categories").addEventListener("click", function () {
  document.getElementById("categoriesList").classList.toggle("-left-[1200px]");
  document.getElementById("categoriesList").classList.toggle("left-0");
});

document.getElementById("searchIcon").addEventListener("click", function () {
  document.getElementById("searchBar").classList.toggle("hidden");
  document.getElementById("searchBar").classList.toggle("block");
});
