console.log("hello wordwesfsld!")

//Global module and non-global module

// ..const fs = require('fs')

// fs.writeFileSync('firstfile.pdf',"hello world")


// .....create server.......

// const http = require('http')
// http.createServer((req,res) => {
//     res.write("<h1>First server!</h2>")
//     res.end();
// }).listen(8000)

// -------Create Api-----

// const http = require('http')

// http.createServer((req,res)=>{
//     res.writeHead(200,{'content-type':'application\json'})
//     res.write(JSON.stringify({name:'abinash',email:'abc@gmail.com',mob:'9090932810'}))
//     res.end()

// }).listen(8080)

// ----taking input from terminal----
// const fs = require('fs')
// const input = process.argv
// if(input[2] == 'add'){
//     fs.writeFileSync(input[3],input[4])
// }else if(input[2]=='remove'){
//     fs.unlinkSync(input[3])
// }else{
//     console.log('invalid input')
// }

// ----Display List of files ----

// const fs = require('fs')
// const path = require('path')
// const dirPath = path.join(__dirname,'files')
// // for(i=0;i<5;i++){
// //     fs.writeFileSync(`${dirPath}/hello${i}.txt`,'simple file')
// // }
// fs.readdir(dirPath,(err,files) => {
//     files.map(item => {
//         console.log('this file name is - '+item)
//     })
// })

// ----crud operation with file system ----

const fs = require('fs')
const path = require('path')
const dirPath = path.join(__dirname,'crud')
const filepath = `${dirPath}/apple.text`

// fs.writeFileSync(filepath,"this is a file.") - write
// fs.readFile(filepath,'utf-8',(err,item)=>{
//     console.log(item)
// }) - read
// fs.appendFile(filepath," for new requirement!",(err) => {
//     if(err) return
//     console.log("updated")
// }) - update
// fs.rename(filepath,`${dirPath}/fruit.txt`,(err) =>{
//     if(err) return
//     console.log("update!")
// }) - rename

// fs.unlinkSync(`${dirPath}/fruit.txt`) - delete