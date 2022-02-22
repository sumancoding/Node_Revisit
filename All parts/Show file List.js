 const fs = require('fs');
const path = require('path');
const dirPath= path.join(__dirname, 'files');

// for(i=0; i<5; i++) {
//     fs.writeFileSync(dirPath+ '/hello'+i+'.txt' ,'a simple way');
// }

fs.readdir(dirPath, (error, files) => {
   files.forEach((file) => {
console.log(`File name is ${file}`)
   })
})
