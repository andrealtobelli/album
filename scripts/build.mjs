import {mkdir,copyFile,cp} from 'node:fs/promises';
await mkdir('dist',{recursive:true});
for(const file of ['index.html','style.css','app.js','config.js','time.js'])await copyFile(file,`dist/${file}`);
await cp('public','dist/public',{recursive:true});
console.log('Site pronto em dist/');
