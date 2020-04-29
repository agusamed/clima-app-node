const axios = require('axios');

const getClima = async(lat, lng) => {
    const resp = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=790934206e88912d73c42a86403fc90e&units=metric`)
    return resp.data.main.temp;
}

module.exports = {
    getClima
}