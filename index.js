const readline = require('readline');
const os = require("os");
const fs = require('fs');
const rl = readline.createInterface(process.stdin, process.stdout);

function mainMenu(){
rl.question('Choose an option:' +'\n' +'1. Read pacakage.json' +'\n' + '2. Display OS info'+ '\n' + '3. Start HTTP server'+ '\n' + 'Type a number: '  , function(answer){  
        if(isNumeric(answer)){
            switch (answer) {
                case "1":
                    readPackageJsonFile()
                    break;
                case "2":
                    displayOsInfo()
                    break;
                case "3":
                    startHttpServer()
                    break;
                default:
                    console.log("Your choise has to be between 1, 2 or 3")
            }
             rl.close();
        }
        else{
            console.log("You choise has to be numeric!")
            rl.close();
        }
});
}

function isNumeric(str) {
    if (typeof str != "string") return false 
    return !isNaN(str) && 
           !isNaN(parseFloat(str)) 
  }

function displayOsInfo(){
    console.log("Getting OS info...")
    console.log(`TOTAL MEMORY: ${(os.totalmem() /1024 / 1024 / 1024).toFixed(2) + "GB" }`);
    console.log(`FREE MEMORY: ${(os.freemem() /1024 / 1024 / 1024).toFixed(2) + "GB" }`);
    console.log(`CPU CORES: ${os.cpus().length}`);
    console.log(`ARCH: ${os.arch()}`);
    console.log(`PLATFORM: ${os.platform()}`);
    console.log(`RELEASE: ${os.release()}`);
    console.log(`USER: ${os.userInfo().username}`);
}

function startHttpServer(){
    console.log("The HTTP server is listning on port number:8080")
    require('http').createServer(function(req,res){
        res.statusCode=200;
        res.setHeader('content-Type', 'text/plain');
        res.end('Hello world')
     }).listen(8080);
}

function readPackageJsonFile(){
    fs.readFile(__dirname + '/package.json', 'utf-8', (err, data) => {
        if (err) throw err;
        console.log(data)
    })
}
mainMenu()