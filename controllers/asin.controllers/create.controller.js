const axios = require('axios')

module.exports = async (req, res) => {
    try {
        const {data} = await axios.get(process.env.API_URL)

        global.products = data.reduce((result, obj) => {
            result[obj.ASIN] = [...(result[obj.ASIN] || []), obj]

            delete obj.ASIN

            return result
        }, {})

        res.status(200).send({message: 'Created', error: false})
    } catch (e) {
        console.log(e)
        res.status(200).send({message: e.message, error: true})
    }
}