//this function lets us easily print messages to the screen, one line at a time
function print(message) {
    document.body.innerHTML += message + "<br/>";
};

function addSelectOption(element, text, value) {
    if (value === undefined) {
        value = text;
    }
    
    element.innerHTML += "<option value='" + value + "'>" + text + "</option>";
};