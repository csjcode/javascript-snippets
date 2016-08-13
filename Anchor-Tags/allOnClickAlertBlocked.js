
var blockedDomains = new Array("washingtonpost.com","newyorktimes.com","cnn.com");

var anchors = document.getElementsByTagName("a");
for (var i = 0; i < anchors.length; i++) {
    for(var k = 0; k < blockedDomains.length; k++){
        if(anchors[i].href.indexOf(blockedDomains[k]) > -1) {
            var anchorUrl = anchors[i].href + "\n";
            console.log(anchorUrl);
        }
    }

    anchors[i].onclick = function(anchorUrl) {
        alert("Blocked.\n\nDisable Blocker\n" + anchorUrl);
        return(false);
    };
}
