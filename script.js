document.getElementById('convert-button').addEventListener('click', () => {
    const inputTemp = parseFloat(document.getElementById('temperature-input').value);
    const selectedUnit = document.getElementById('unit-select').value;

    if (isNaN(inputTemp)) {
        alert('Please enter a valid temperature value.');
        return;
    }

    let celsius, fahrenheit, kelvin;

    switch (selectedUnit) {
        case 'celsius':
            celsius = inputTemp;
            fahrenheit = (inputTemp * 9/5) + 32;
            kelvin = inputTemp + 273.15;
            break;
        case 'fahrenheit':
            celsius = (inputTemp - 32) * 5/9;
            fahrenheit = inputTemp;
            kelvin = celsius + 273.15;
            break;
        case 'kelvin':
            celsius = inputTemp - 273.15;
            fahrenheit = (celsius * 9/5) + 32;
            kelvin = inputTemp;
            break;
        default:
            alert('Invalid unit selected.');
            return;
    }

    document.getElementById('celsius-result').textContent = celsius.toFixed(2);
    document.getElementById('fahrenheit-result').textContent = fahrenheit.toFixed(2);
    document.getElementById('kelvin-result').textContent = kelvin.toFixed(2);

    updateThermometer(celsius);
});

function updateThermometer(celsius) {
    const thermometerFill = document.getElementById('thermometer-fill');

    // Normalize Celsius to a percentage (e.g., -30°C = 0%, 50°C = 100%)
    const minTemp = -30;
    const maxTemp = 50;
    const percentage = Math.min(Math.max((celsius - minTemp) / (maxTemp - minTemp), 0), 1);

    thermometerFill.style.height = `${percentage * 100}%`;
}
