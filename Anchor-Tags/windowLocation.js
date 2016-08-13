// Various snippets related to winow.location and url paths

// 1 - parts of the URL
// 2 - parsing the query string (getParameterByName)
// 3 - different types of reloads


function getParameterByName(name, url) {                                        // get parameters of the query string
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

function myReload() {
    // location.reload(); // normal reload
    window.location.replace("?data=mydata"); // you want to pass the variable into the window.location URL
}



document.write('<br /><br />' + '<button onclick="myReload()">Reload page with location.reload</button>' + '<br /><br />')

document.write("href: " + window.location.href + '<br />');
document.write("pathname: " + window.location.pathname + '<br />');
document.write("host: " + window.location.host + '<br />');
document.write("protocol: " + window.location.protocol + '<br />');
document.write("data query string: " + getParameterByName("data") + '<br />');


var newURL = window.location.protocol + "//" + window.location.host + "/" + window.location.pathname;
var pathArray = window.location.pathname.split( '/' );
var secondLevelLocation = pathArray[2]; // this may vary by loclahost or host
var newPathname = "";
for (i = 0; i < pathArray.length; i++) {
  newPathname += "/";
  newPathname += pathArray[i];
}

document.write("2nd level location: " + secondLevelLocation + '<br />');
