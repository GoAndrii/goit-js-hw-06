const query = document.querySelectorAll("li.item");

console.log("Number of categories:", query[0].parentElement.childElementCount);
query.forEach((elem) => {
  console.log("Category:", elem.children[0].textContent);
  console.log("Elements", elem.children[1].childElementCount);
});