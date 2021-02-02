module.exports = (req, res) => {
    try {
        const {asin} = req.body

        delete global.products[asin]

        res.status(200).send({message: 'Success', error: false})
    } catch (e) {
        console.log(e)
        res.status(200).send({message: e.message, error: true})
    }
}