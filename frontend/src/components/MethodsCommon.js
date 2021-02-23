function notNumber(events){
    if(isNaN(events.key) || events.key == ' '){
        events.preventDefault()
    }
}

module.exports = { notNumber }