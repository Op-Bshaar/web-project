
function refresh() {
    document.getElementById("searchBar").value = "";
    var container = document.getElementById("books");
    container.innerHTML = '';
    for (var i = 1; i <= 10; i++) {
        var span = document.createElement("span");
        span.innerHTML = `<div onclick ="window.location.href='BookDetails.html?id=${i}'" class="book">Name: Book${i}<br />Author: Author${i}<br /></div >`
        container.appendChild(span);
    }
}
function loadBook() {
    const params = new URLSearchParams(document.location.search);
    const id = params.get("id");
    document.getElementById("title").innerHTML = `Book${id}`;
    document.getElementById("author").innerHTML = `author${id}`;
    document.getElementById("catogery").innerHTML = `catogery${id}`;
    document.getElementById("description").innerHTML = `This book is called Book${id}, and is written by author${id}. It is part of catogery${id} catogery.`;
}
function search() {

}