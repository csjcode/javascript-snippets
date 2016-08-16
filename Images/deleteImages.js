var images = document.getElementsByTagName('img');
var l = images.length;
for (var i = 0; i < l; i++) {
    images[0].parentNode.removeChild(images[0]);
}
