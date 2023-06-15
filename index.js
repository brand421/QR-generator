import inquirer from 'inquirer';
const qr = require('qr-image');

inquirer.prompt(["Please provide a webaddress"]).then((answers) => {
    var qr_png=qr.image(answers, {type: 'png'});
    qr_png.pipe(require('fs').createWriteStream(answers+".png"));
}).catch((error) => {
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
