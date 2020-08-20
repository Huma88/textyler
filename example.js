var BookFormatter = require("./bookFormatter.js");

var text = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
//           012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789001234567890123456789012345678901234567890
//           0         1         2         3         4         5         6         7         8         9         0

var a = BookFormatter.lineLengthFormatter(54, text, /(\s|\t|\r|\n|<br>\n)/, "<br>\n");
var b = BookFormatter.pageLengthFormatter(5, a, "<br>\n", "<div class='page'>\n", "</div>\n");
console.log(b);