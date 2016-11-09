function wiki_search() {
  
  var api = "https://en.wikipedia.org/w/api.php?action=query&format=json&prop=extracts&generator=search&exlimit=10&exintro=1&explaintext=1&gsrsearch=";
  var text = document.getElementById("text-search").value;
  
  var httpRequest = new XMLHttpRequest();
  
  httpRequest.onreadystatechange = function () {
    if (httpRequest.readyState === XMLHttpRequest.DONE && httpRequest.status === 200) {
        alert(httpRequest.responseText);
    }
  };
  
  httpRequest.open("GET", api + text);
  httpRequest.send(null);
  
}
