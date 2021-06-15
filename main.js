const fields = document.querySelectorAll("[required]")

// console.log(fields)

function customValidation(event) {

    // eliminar o bubble
    event.preventDefault()

    const field = event.target

    // verificar se existem erros
    function verifyErrors() {
       let foundError = false;
       
       for(let error in field.validity) {

            if(error !=  "customError" && field.validity[error] ) {
                foundError = true;
            } else {

            }
       }

       return foundError;
    }
    const error = verifyErrors()
    console.log(`Error Existes`, error)


    
    if(error) {
    // trocar mensagem de required
    field.setCustomValidity("Esse campo é obrigátorio")    
    } else {
    field.setCustomValidity("")    
    }
    
    

for( field of fields) {
    field.addEventListener("invalid", customValidation)
}


document.querySelector("form").addEventListener("submit", event => {
    console.log("enviar o formulário")
    // não vai enviar o formulário
    event.preventDefault()
})