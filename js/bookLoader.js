
function refresh() {
    document.getElementById("searchBar").value = "";
    var container = document.getElementById("books");
    var ul = document.createElement("ul");
    container.appendChild(ul);
    for (var i = 1; i <= 10; i++) {
        var li = document.createElement("li");
        li.tabIndex = i;
        var div = document.createElement("div");
        div.innerHTML = `Name: <a href="BookDetails.html?id=${i}">book${i}</a><br />Author: author${i}<br /><br />`;
        li.appendChild(div);
        ul.appendChild(li);
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