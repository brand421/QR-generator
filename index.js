const inquirer = require('inquirer');
const qr = require('qr-image');
const fs = require('fs');

inquirer
    .prompt([{
        message: "Please provide a URL",
        name: "URL",
    }])
    .then((answers) => {
        console.log(answers);
        const url = answers.URL
        const qr_img = qr.image(url);
        qr_img.pipe(fs.createWriteStream('url.png'));
        fs.writeFile("url.txt", url, (err) => {
            if (err) throw err;
            console.log("QR code has been generated!");
        })
    })
    .catch((error) => {
    if(error.isTtyError) {
        console.log("Prompt couldn't be rendered");
    } else {
        console.error();
    }
})

/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/
