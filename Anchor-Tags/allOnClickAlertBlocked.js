
var blockedDomains = new Array(
                    "washingtonpost.com",
                    "newyorktimes.com",
                    "cnn.com"
                    );                                          //  array of blocked domains

var anchors = document.getElementsByTagName("a");               //  get all anchor tags
for (var i = 0; i < anchors.length; i++) {                      //  loop through anchor tags
    for(var k = 0; k < blockedDomains.length; k++){             //  loop through blocked domains array
        if(anchors[i].href.indexOf(blockedDomains[k]) > -1) {   //  if  href attribute and matches blocked domain
            var anchorUrl = anchors[i].href;                    //  assign var to href value
            console.log(anchorUrl);                             //  console log href value
            anchors[i].onclick = function() {                   //  if blcoked, on click of the anchor tags
                alert("Blocked.\n\nDisable Blocker\n");         //  show alert
                return(false);
            };                                                  //  end on click function
        }                                                       //  end if match on blocked domains
    }                                                           //  end loop on blocked domains
}                                                               //  end loop all anchor tags
