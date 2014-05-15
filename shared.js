//this function lets us easily print messages to the screen, one line at a time
function print(message) {
    document.body.innerHTML += message + "<br/>";
};

function getValueOfInputElement(id) {
    var element = document.getElementById(id);
    if (element && element.value) {
        return element.value;
    }
    
    throw new Error('cannot get value from element ' + id);
};

function setInnerHtmlOfElement(id, html) {
    var element = document.getElementById(id);
    if (element) {
        element.innerHTML = html;
    } else {
        throw new Error('element ' + id + ' was not found');
    }
}

function addSelectOption(id, text, value) {
    var element = document.getElementById(id);
    
    if (value === undefined) {
        value = text;
    }
    
    element.innerHTML += "<option value='" + value + "'>" + text + "</option>";
};