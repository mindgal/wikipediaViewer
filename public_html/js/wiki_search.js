function wiki_search() {

  document.getElementById("results").innerHTML = "";
  
  var api = "https://en.wikipedia.org/w/api.php?action=query&format=json&origin=*&prop=extracts&generator=search&exsentences=1&exlimit=10&exintro=1&explaintext=1&gsrlimit=10&gsrsearch=";
  var text = document.getElementById("text-search").value;
  
  var httpRequest = new XMLHttpRequest();
  
  httpRequest.onreadystatechange = function () {
    if (httpRequest.readyState === XMLHttpRequest.DONE && httpRequest.status === 200) {
        var response = JSON.parse(httpRequest.responseText);
        displayResult(response);
    }
  };
  
  httpRequest.open("GET", api + text);
  httpRequest.send(null);
  
}

function validateForm() {
  var inputText = document.getElementById("text-search").value;
  
  if (inputText === null || inputText === "") {
    return false;
  } else {
    return true;
  }
}

function displayResult(data) {
  
  for (var key in data.query.pages) {
    var h = document.createElement("h3");
    var text = document.createTextNode(data.query.pages[key].title);
    h.appendChild(text);
    
    var p = document.createElement("p");
    p.innerHTML = data.query.pages[key].extract;
    
    var div = document.createElement("div");
    div.appendChild(h);
    div.appendChild(p);
    
    document.getElementById("results").appendChild(div);
  }
}
