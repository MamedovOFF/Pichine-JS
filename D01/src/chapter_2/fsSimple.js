import fs from 'fs'

const readAndWriteCallbackHell = () => {
  fs.readFile('./files/fsSimple/file1.txt', 'utf-8', (err, data) =>  fs.writeFile('./files/fsSimple/file2.txt', data, 'utf-8', (err) => {if (err) console.log(err)}))
};

const readAndWritePromises = () => {
 new Promise((res) => {
    fs.readFile('./files/fsSimple/file1.txt', 'utf-8', (err, data) => res(data) )
  }).then((res) => fs.writeFile('./files/fsSimple/file2.txt', res, 'utf-8', (err) => {if (err) console.log(err)}))
};

const readAndWriteAsyncAwait = async () => {
  const res = await fs.promises.readFile('./files/fsSimple/file1.txt', 'utf-8')
  fs.promises.writeFile('./files/fsSimple/file2.txt', res)
};

export {
  readAndWriteAsyncAwait,
  readAndWritePromises,
  readAndWriteCallbackHell,
};