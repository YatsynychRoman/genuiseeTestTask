module.exports = (req, res) => {
    try {
        const {asin, sellerName} = req.body


        global.products[asin].forEach(item => {
            if(item.sellerName === sellerName) {
                for (const key in req.body) {
                    if (req.body[key] && req.body.hasOwnProperty(key)) {
                        item[key] = req.body[key];
                    }
                }
            }
        })

        res.status(200).send({message: 'success', error: false})
    } catch (e) {
        console.log(e)
        res.status(200).send({message: e.message, error: true})
    }
}