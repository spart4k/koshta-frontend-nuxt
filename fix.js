const fs = require('fs');
console.log('fix')
const file = './node_modules/fullpage-vue/dist/fullpage.js';
// fs.readFile(file, 'utf8', (err, data) => {
//   const formatted = data.replace(1200, 600).replace(500, 1500);
//   fs.writeFile(file, formatted, 'utf8', (error) => {
//     if (error) { return console.log(error); }
//   });
// });

const file2 = './node_modules/fullpage-vue/src/libs/Fullpage.js';
// fs.readFile(file2, 'utf8', (err, data) => {
//   const formatted = data.replace(1200, 600).replace(500, 1500);
//   fs.writeFile(file2, formatted, 'utf8', (error) => {
//     if (error) { return console.log(error); }
//   });
// });

const file3 = './node_modules/fullpage-vue/src/fullpage.css';
fs.readFile(file3, 'utf8', (err, data) => {
  const formatted = data.replace(/all 500ms ease-out 0s/g, 'all 1000ms cubic-bezier(0.11, 0.86, 0.32, 1.03) 0s');
  fs.writeFile(file3, formatted, 'utf8', (error) => {
    if (error) { return console.log(error); }
  });
});

const replaceFile = './utils/fullpage.js';
fs.readFile(replaceFile, 'utf8', (err, data) => {
  fs.writeFile(file, data, 'utf8', (error) => {
    if (error) { return console.log(error); }
  });
  fs.writeFile(file2, data, 'utf8', (error) => {
    if (error) { return console.log(error); }
  });
});