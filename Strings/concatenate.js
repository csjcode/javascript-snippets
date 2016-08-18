function concatenate() {
    var i, str;
    str = "";
    // console.log(arguments.length);
    for (i = 0; i < arguments.length; i += 1) {
        str += arguments[i];

    }
    return console.log(str);
}
concatenate("Christopher"," - ","Smith");
