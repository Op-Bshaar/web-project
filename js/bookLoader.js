
function refresh() {
    document.getElementById("searchBar").value = "";
    var container = document.getElementById("books");
    var ul = document.createElement("ul");
    container.appendChild(ul);
    for (var i = 1; i < 10; i++) {
        var li = document.createElement("li");
        li.tabIndex = i;
        var div = document.createElement("div");
        div.innerHTML = `Name: <a href="google.com">book${i}</a><br />Author: author${i}<br /><br />`;
        li.appendChild(div);
        ul.appendChild(li);
    }
}
function search() {

}