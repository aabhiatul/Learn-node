console.log("hello wordwesfsld!")

//Global module and non-global module

// ..const fs = require('fs')

// fs.writeFileSync('firstfile.pdf',"hello world")


// .....create server.......

const http = require('http')
http.createServer((req,res) => {
    res.write("<h1>First server!</h2>")
    res.end();
}).listen(8000)