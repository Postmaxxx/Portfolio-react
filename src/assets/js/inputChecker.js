export const checkInput = (text, type, minLength, maxLength) => {
    const emailFormat = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const textFormat = /[a-zA-Z]$/;
    const textNumbersFormat = /[a-zA-Z0-9]$/;
    const numbersFormat = /[0-9]$/;
    if (text.length < minLength) { 
        return `should be at least ${minLength} symbols`
    }
    if (text.length > maxLength) { 
        return `should be no more ${maxLength} symbols`
    }
    if (type ==='email' && !text.match(emailFormat)) { 
        return 'email is incorrect'
    }
    if (type ==='text' && !text.match(textFormat)) { 
        return 'only letters are allowed'
    }
    if (type ==='textNumbers' && !text.match(textNumbersFormat)) { 
        return 'only letters and numbers are allowed'
    }
    if (type ==='numbers' && !text.match(numbersFormat)) { 
        return 'only numbers are allowed'
    }
    if (type === 'all') {
        return false
    }
    return false
}

