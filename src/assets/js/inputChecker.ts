export const checkInput: Function = (text: string, type: string, minLength: number, maxLength: number): boolean | string => {
    const emailFormat: RegExp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const textFormat: RegExp = /[a-zA-Z]$/;
    const textNumbersFormat: RegExp = /[a-zA-Z0-9]$/;
    const numbersFormat: RegExp = /[0-9]$/;
    if (text.length < minLength) { 
        return `should be at least ${minLength} symbols`
    }
    if (text.length > maxLength) { 
        return `should be no more than ${maxLength} symbols`
    }
    if (type ==='email' && !text.match(emailFormat)) { 
        return 'format is incorrect'
    }
    if (type ==='text' && !text.match(textFormat)) { 
        return 'only english letters are allowed'
    }
    if (type ==='textNumbers' && !text.match(textNumbersFormat)) { 
        return 'only english letters and numbers are allowed'
    }
    if (type ==='numbers' && !text.match(numbersFormat)) { 
        return 'only numbers are allowed'
    }
    if (type === 'all') {
        return false
    }
    return false
}

