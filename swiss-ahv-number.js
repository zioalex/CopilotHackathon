// Create a function to validate a swiss ahv number using regex 
// and return true if the number is valid and false if not.

function validateSwissAhvNumber(number) {
    const regex = /^(756\.)(\d{4}\.){2}\d{3}$/;
    return regex.test(number);
}

