function convertTemperature() {
    // Get the input value and selected conversion
    const tempInput = parseFloat(document.getElementById('celsius').value);
    const conversionType = document.getElementById('temps').value;
    let result;

    if (isNaN(tempInput)) {
        result = "Please enter a valid number.";
    } else {
        // Perform the conversion based on the selected option
        switch (conversionType) {
            case 'C->F':
                result = (tempInput * 9/5) + 32 + " °F";
                break;
            case 'C->K':
                result = tempInput + 273.15 + " K";
                break;
            case 'F->C':
                result = (tempInput - 32) * 5/9 + " °C";
                break;
            case 'F->K':
                result = ((tempInput - 32) * 5/9) + 273.15 + " K";
                break;
            case 'K->C':
                result = tempInput - 273.15 + " °C";
                break;
            case 'K->F':
                result = ((tempInput - 273.15) * 9/5) + 32 + " °F";
                break;
            default:
                result = "Please select a valid conversion.";
        }
    }

    // Display the result
    document.getElementById('result').innerText = result;
}
