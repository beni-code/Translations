const fs = require("fs");
var md = require('markdown-it')();

let str = fs.readFileSync("./test.md",'utf-8')

var result = md.render(str);

while (result.indexOf("&lt;$") >= 0) {
    let startIndex = result.indexOf("&lt;$")
    let endIndex = result.indexOf("$&gt;",17)+4

    let midStr = result.substring(startIndex,endIndex+1)
    let preStr = result.substring(0,startIndex)
    let sufStr = result.substring(endIndex+1,result.length)

    let midendindex = midStr.indexOf("$}&amp;&amp;")
    let yuanwenstr= midStr.slice(7,midendindex)
    let yiwenstr = midStr.slice(midendindex+14,midStr.length - 7)

    let span = `<span class="translateSpan" title="${yiwenstr}">${yuanwenstr}</span>`

    result = preStr+span+sufStr;
}

fs.writeFileSync("./data.js",`let md = \`${result}\``,'utf-8')

fs.mkdirSync("dist")

fs.cpSync("./index.html","./dist/index.html")
fs.cpSync("./data.js","./dist/data.js")
