# textyler.js
## A JS librery to style text.
[textyler.js](https://github.com/Huma88/textyler) is a library which allows you to style text with custom number of characters per line, and number of lines per page, returning it with a custom format.

## Import

~~~js
var BookFormatter = require("path/to/textyler.js");
~~~

## Download

Source code of [textyler.js](https://github.com/Huma88/textyler) is available on [GitHub](https://github.com/Huma88/textyler/blob/master/bookFormatter.js).

## License

[textyler.ts](https://github.com/Huma88/textyler) source code is released under the terms of the [GNU General Public License v3.0](LICENSE).

## How to use it:

### example text:
~~~js
var text = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
~~~
- ### lineLengthFormatter(lineLength, text, whiteSpaceRegex, breakLineCharacter) example:

~~~js
    var a = lineLengthFormatter(54, text, /(\s|\t|\r|\n|<br>\n)/, "<br>\n");
~~~
    
#### output:
~~~js
Lorem Ipsum is simply dummy text of the printing and<br>
typesetting industry. Lorem Ipsum has been the<br>
industry's standard dummy text ever since the 1500s,<br>
when an unknown printer took a galley of type and<br>
scrambled it to make a type specimen book. It has<br>
survived not only five centuries, but also the leap<br>
into electronic typesetting, remaining essentially<br>
unchanged. It was popularised in the 1960s with the<br>
release of Letraset sheets containing Lorem Ipsum<br>
passages, and more recently with desktop publishing<br>
software like Aldus PageMaker including versions of<br>
Lorem Ipsum.
~~~

___

- ### pageLengthFormatter(pageLines, text, breakLineCharacter, newPageCharacter) example:

~~~js
    var b = pageLengthFormatter(5, a, "<br>\n", "<div class='page'>\n", "</div>\n"); 
~~~
    
#### output:
~~~js
<div class='page'>
Lorem Ipsum is simply dummy text of the printing and<br>
typesetting industry. Lorem Ipsum has been the<br>
industry's standard dummy text ever since the 1500s,<br>
when an unknown printer took a galley of type and<br>
scrambled it to make a type specimen book. It has<br>
</div>
<div class='page'>
survived not only five centuries, but also the leap<br>
into electronic typesetting, remaining essentially<br>
unchanged. It was popularised in the 1960s with the<br>
release of Letraset sheets containing Lorem Ipsum<br>
passages, and more recently with desktop publishing<br>
</div>
<div class='page'>
software like Aldus PageMaker including versions of<br>
Lorem Ipsum.<br>
</div>
~~~

