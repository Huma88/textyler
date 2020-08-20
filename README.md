# textyler
js library to style text

## How to use it:

### example text:
~~~
var text = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
~~~
- ### lineLengthFormatter(lineLength, text, whiteSpaceRegex, breakLineCharacter) example:

~~~
    var a = lineLengthFormatter(54, text, /(\s|\t|\r|\n|<br>\n)/, "<br>\n");
    console.log(a);
~~~
    
#### output:
~~~    
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

~~~
    var b = pageLengthFormatter(5, a, "<br>\n", "<div class='page'>\n", "</div>\n");
    console.log(b); 
~~~
    
#### output:
~~~
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

