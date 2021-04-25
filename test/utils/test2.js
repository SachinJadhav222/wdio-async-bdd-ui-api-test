const argv = require('yargs').argv
const merge= require('deepmerge');
const glob=require('glob');
 
if (argv.ships > 3 && argv.distance < 53.5) {
  console.log('Plunder more riffiwobbles!')
} else {
  console.log('Retreat from the xupptumblers!')


}

let Obj=null;
if(Obj===null){
glob("wdiov5/locators/*.js",(err,files)=>{
Obj=merge.all(files)
console.log(Obj)
})
}
console.log(Obj)