const fs = require('fs');
const path = require('path');
const dirPath= path.join(__dirname, 'crud');
const filePath = `${dirPath}/apple.txt`;

 //fs.writeFileSync(filePath, 'THis is the basic file created');

//  fs.readFile(filePath, 'utf-8', (err, item) => {
// console.log(item)
//  });

// fs.appendFile(filePath, ' and file name is apple.txt', (err) => {
//     if(!err) {
//         console.log('file is updated')
//     }
// });

// fs.rename(filePath, `${dirPath}/banana.txt`, (err) => {
//     if(!err) console.log('File name is updated')
// })

 //fs.unlinkSync( `${dirPath}/banana.txt`);

