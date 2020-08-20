/**
 * Function which receive a text and it insert breakline characters to fix it in
 * the right amount of characters per line.
 * @param {Number} lineLength Maximun number of characters per line.
 * @param {String} text Text to format.
 * @param {RegExp} whiteSpaceRegex Regular expression with all characters where a breakline could be inserted, by default [\s\t\r\n]
 * @param {String} breakLineSymbol String representing the breakline, it must be contained in whiteSpaceRegex regular expresion, by default "\n"
 */
module.exports.lineLengthFormatter = function lineLengthFormatter(lineLength, text, whiteSpaceRegex, breakLineSymbol) {
    whiteSpaceRegex = whiteSpaceRegex || /[\s\t\r\n]/;
    breakLineSymbol = breakLineSymbol || "\n";
    if (lineLength <= breakLineSymbol.length) {
        throw {
            name: "insuficient line length",
            message: "line length must be at least 2 to be able to print a character and insert a linebreak"
        };
    }
    if (!whiteSpaceRegex.test(breakLineSymbol)) {
        throw {
            name: "breakline character doesn't match",
            message: "breakline string must match whiteSpaceRegex regular expresion, otherwise it would be considered as a word character and it would lead to an infinite loop"
        };
    }
    text = text.split("");
    for (var i = lineLength; i < text.length; i += lineLength) {
        var flag_middleWord = false;
        while (!whiteSpaceRegex.test(text[i]) && i > -1) {
            flag_middleWord = true;
            i--;
        }
        if (i > -1) {
            text[i] = breakLineSymbol;
        }
        if (flag_middleWord) {
            var j = i + 1;
            var wordLength = 1;
            while (!whiteSpaceRegex.test(text[j]) && wordLength < lineLength) {
                j++;
                wordLength++;
            }
            if (wordLength === lineLength) {
                text.splice(j, 0, breakLineSymbol);
            }
        }
    }
    text = text.join("");
    return text;
}

/**
 * Function which receive a text and it insert jumppages string to fix the
 * number of lines per page.
 * @param {Number} pageLines Maximun number of characters per line.
 * @param {String} text Text to format.
 * @param {String} breakLineSymbol String representing a line break.
 * @param {String} startPageSymbol String representing the start of a page.
 * @param {String} endPageSymbol String representing a the end of a page.
 */
module.exports.pageLengthFormatter = function pageLengthFormatter(pageLines, text, breakLineSymbol, startPageSymbol, endPageSymbol) {
    text = text.split(breakLineSymbol);
    text.unshift(startPageSymbol);
    for (var i = pageLines; i < text.length; i += pageLines) {
        text.splice(i + 1, 0, endPageSymbol, startPageSymbol);
        i += 2;
    }
    text.push(endPageSymbol);
    text = text.join(breakLineSymbol);
    text = text.replace(new RegExp(startPageSymbol + breakLineSymbol, 'g'), startPageSymbol);
    text = text.replace(new RegExp(endPageSymbol + breakLineSymbol, 'g'), endPageSymbol);
    return text;
}
