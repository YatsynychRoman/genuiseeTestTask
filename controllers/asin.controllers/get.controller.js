

module.exports = (req, res) => {
    try{
        const asin = req.params.asin

        const data = global.products[asin]

        if(!data) return res.status(200).send({messsage: 'There is no products with such ASIN', error: false})

        res.status(200).send({data, error: false})
    } catch (e) {
        console.log(e)
        res.status(200).send({message: e.message, error: true})
    }

}