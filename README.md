# textyler
js library to style text

## How to use it:

### example text:
~~~
var text = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
~~~
### lineLengthFormatter example:

    var a = lineLengthFormatter(54, text, /(\s|\t|\r|\n|\&para\;\n)/, "&para;\n");
    console.log(a);
    
#### output:
~~~    
Lorem Ipsum is simply dummy text of the printing and&para;
typesetting industry. Lorem Ipsum has been the&para;
industry's standard dummy text ever since the 1500s,&para;
when an unknown printer took a galley of type and&para;
scrambled it to make a type specimen book. It has&para;
survived not only five centuries, but also the leap&para;
into electronic typesetting, remaining essentially&para;
unchanged. It was popularised in the 1960s with the&para;
release of Letraset sheets containing Lorem Ipsum&para;
passages, and more recently with desktop publishing&para;
software like Aldus PageMaker including versions of&para;
Lorem Ipsum.
~~~

### pageLengthFormatter example:

    var b = pageLengthFormatter(5, a, "&para;\n", "----- page jump -----\n");
    console.log(b);
    
#### output:
~~~
Lorem Ipsum is simply dummy text of the printing and&para;
typesetting industry. Lorem Ipsum has been the&para;
industry's standard dummy text ever since the 1500s,&para;
when an unknown printer took a galley of type and&para;
scrambled it to make a type specimen book. It has&para;
----- page jump -----
survived not only five centuries, but also the leap&para;
into electronic typesetting, remaining essentially&para;
unchanged. It was popularised in the 1960s with the&para;
release of Letraset sheets containing Lorem Ipsum&para;
passages, and more recently with desktop publishing&para;
----- page jump -----
software like Aldus PageMaker including versions of&para;
Lorem Ipsum.
~~~

