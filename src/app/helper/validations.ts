export class validations {

   constructor(document:Document){
   

}

vlidate(){
    const validInputs = Array.from(document.querySelectorAll('input')).filter( input => input.value === "");
    console.log(validInputs)
    if (validInputs.length == 0) {
    return true;
       } else {
           return false;
       }
}
}