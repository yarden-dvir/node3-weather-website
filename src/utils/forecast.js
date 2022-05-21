const request = require('postman-request')

const forecast = (latitude, longitude, callback) => {
    const url = "http://api.weatherstack.com/current?access_key=cfc3f6d418627acf5d296f8cabaa8d9d&query=" + latitude + "," + longitude + "&units=f"

    request({url, json: true}, (error, {body}) => {
        if (error) {
            callback("Failed to fetch weather data!", undefined)
        } else if (body.error) {
            callback(body.error.info, undefined)
        } else {
            const temperature = body.current.temperature
            const rainChance = body.current.precip
            const realFeel = body.current.feelslike
            callback(undefined, "It is currently " + temperature + " degrees out with a real feel of " + realFeel + " degrees. There is a " + rainChance + "% chance of rain.")
        }
    })
}

module.exports = forecast