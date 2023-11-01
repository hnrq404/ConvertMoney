const convertButton = document.querySelector('.convert-button')
const selectConverter = document.querySelector('.converter')
const selectConverted = document.querySelector('.select-converted')

function convertValues(){
    const inputCurrencyValue = document.querySelector('.input-currency').value
    const currencyValueToConvert = document.querySelector('.currency-value-to-convert')
    const currencyValueToConverted = document.querySelector('.currency-value')

    const dolarToday = 5.04
    const euroToday = 5.32
    const libraToday = 6.12
    const btcToday = 173783.22

    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-br", {
        style:"currency",
        currency:"BRL"
    }).format(inputCurrencyValue)

    if(selectConverted.value == 'real'){
        {currencyValueToConverted.innerHTML = new Intl.NumberFormat("pt-br", {
            style:"currency",
            currency:"BRL"
        }).format(inputCurrencyValue)}}

    if(selectConverted.value == 'dolar'){
    {currencyValueToConverted.innerHTML = new Intl.NumberFormat("en-us", {
        style:"currency",
        currency:"USD"
    }).format(inputCurrencyValue/dolarToday)}}

    if(selectConverted.value == 'euro'){
        {currencyValueToConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style:"currency",
            currency:"EUR"
        }).format(inputCurrencyValue/euroToday)}}

    if(selectConverted.value == 'libra'){
        {currencyValueToConverted.innerHTML = new Intl.NumberFormat("en-GB", {
            style: 'currency',
            currency: "GBP"}).format(inputCurrencyValue/libraToday)}}

    if(selectConverted.value == 'btc'){
        {currencyValueToConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: 'currency',
            currency: "BTC"}).format(inputCurrencyValue/btcToday)}}

}

function changeCurrencyConverted(){
    const currencyName = document.querySelector("#currency-name")
    const currencyImage = document.querySelector('.currency-img')

    if (selectConverted.value == 'real'){
        currencyName.innerHTML = "Real"
        currencyImage.src = "./Assets/real.png"
    }

    if(selectConverted.value == 'dolar'){
        currencyName.innerHTML = "Dólar Americano"
        currencyImage.src = "./Assets/dolar.png"
    }

    if(selectConverted.value == 'euro'){
        currencyName.innerHTML = "Euro"
        currencyImage.src = "./Assets/Euro.png"
    }

    if(selectConverted.value == 'libra'){
        currencyName.innerHTML = 'Libra Esterlina'
        currencyImage.src = "./Assets/libra.png"
    }

    if(selectConverted.value == 'btc'){
        currencyName.innerHTML = 'Bitcoin'
        currencyImage.src = "./Assets/bitcoin.png"
    }
    convertValues()
}

function changeCurrencyConverter(){
    const currencyConverter = document.querySelector('#currency-to-convert')
    const currencyImageConverter = document.querySelector('.img-converter')
    const currencyValueToConvert = document.querySelector('.currency-value-to-convert')
    const inputCurrencyValue = document.querySelector('.input-currency').value

    const dolarToday = 5.04
    const euroToday = 5.32

    if(selectConverter.value == 'real'){
        currencyConverter.innerHTML = "Real"
        currencyImageConverter.src = "./Assets/real.png"
        
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-br", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue)
    }

    if(selectConverter.value == 'dolar'){ 
        currencyConverter.innerHTML = "Dólar Americano"
        currencyImageConverter.src = "./Assets/dolar.png"
        
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-us", {
            style:"currency",
            currency:"USD"
        }).format(inputCurrencyValue)
    }

    if(selectConverter.value == 'euro'){
        currencyConverter.innerHTML = "Euro"
        currencyImageConverter.src = "./Assets/Euro.png"
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
            style:"currency",
            currency:"EUR"
        }).format(inputCurrencyValue)
    }
}


convertButton.addEventListener('click',convertValues)
selectConverted.addEventListener('change',changeCurrencyConverted)
selectConverter.addEventListener('change',changeCurrencyConverter)