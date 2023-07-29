var lines = parseInt (prompt("Enter number of lines to create triangle"));
var triangle = "*"

for (var i = 1; i <= lines; i++) {
    document.write(`<b> <center> <br> ${triangle}`)
    triangle = triangle + "*";
}