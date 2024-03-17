
function refresh() {
    document.getElementById("searchBar").value = "";
    var container = document.getElementById("books");
    container.innerHTML = null;
    for (var i = 1; i < 10; i++) {
        var div = document.createElement("div");
        div.innerHTML = `ID: ${i}<br />Name: book${i}<br />Author: author${i}<br />Description:<br />This book is called book${i} and is written by author${i}.<br /><br />`;
        container.appendChild(div);
    }
}
function search() {

}