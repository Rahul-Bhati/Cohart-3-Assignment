// promisify SetTimeOut
function promisifySetTimeout(data, time){
    return new Promise(
        resolve => setTimeout(()=> console.log(resolve,data), time)
    );
}

promisifySetTimeout("hello", 2000); // time in milisecond

// promisified Fetch
function promisifiedFetch(url){
    return fetch(url).then(res => {
        return res.json()
    }).catch(err => {
        return err;
    });
}

const res = promisifiedFetch("https://catfact.ninja/fact");
res.then((data) => console.log(data))

// promisified fs.readfile
const fs = require('fs');

function promisifiedReadFile(path){
    return new Promise(
        (resolve, reject) => {
            fs.readFile(path,'utf-8', (err, data) => {
                if(err) reject(err);
                else resolve(data);
            })
        }
    )
}

promisifiedReadFile('a.txt')
  .then(data => console.log(data))
  .catch(error => console.error('Error reading file:', error));