const notifyByEmail = (email_address) => {
    return `Email sent to: ${email_address}`
}

const notifyByText = (number_string) => {
    return `Text sent to: ${number_string}`
}

const notify = (input, notifyFunction) => {
    return notifyFunction(input)
}

console.log(notify('hello@makers.tech.test', notifyByEmail))
console.log(notify('+1000000000', notifyByText))