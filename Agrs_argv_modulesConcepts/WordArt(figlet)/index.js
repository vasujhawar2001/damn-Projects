const figlet = require("figlet");
const colors = require("colors");
figlet('vasu jhawar', function(err, data){
    if(err){
        console.log("eerrrorrr");
        console.dir(err);
        return;
    }
    console.log(data.rainbow);
});
