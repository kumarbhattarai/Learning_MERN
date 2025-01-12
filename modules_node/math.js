const add = (a,b) => {
return a+b;
}
function composite (callback){
    return function() {
        return callback ();
    };
}
const property= () => console.log("This is closure in js");
const closurefunc=composite(property)

module.exports={
add,
closurefunc,
};
