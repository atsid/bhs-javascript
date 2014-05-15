var fibArray = [ 1,1,2,3,5 ];

function getAtIndex() {
    var index = getValueOfInputElement('indexToGet'),
        val = 0;
    try {
        val = fibArray[parseInt(index)]
        setInnerHtmlOfElement('indexValue', val);
    } catch(err) {
        alert(err);
    }
};

function findIndexFor() {
    var value = getValueOfInputElement('valueToFind'),
        index = -1;
        
    try {
        for(var i = 0; i < fibArray.length; i++) {
            if(fibArray[i] === parseInt(value)) {
                index = i;
                break;
            }
        }
        
        setInnerHtmlOfElement('foundValue', index);
    } catch(err) {
        alert(err);
    }
};

function printArray() {
    var theArray = fibArray.join(',');
    setInnerHtmlOfElement('values', theArray);
};

function addNextValue() {
    var length = fibArray.length,
        total = 0;

    // TODO: Calculate the total of the last two elements of the fibArray.

    fibArray.push(total);
    printArray();
}


