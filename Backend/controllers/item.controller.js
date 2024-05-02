const Item = require("../models/item.model");

async function addItem(req, res) {
    try {
        const { name, desc, price, imgLink, size } = req.body;
        const item = new Item({
            name,
            desc,
            price,
            imageLink: imgLink,
            size,
        });
        await item.save();
        res.status(201).send(item);
    } catch (error) {
        res.status = 400;
        res.send(error);
    }
}

async function getItems(req, res) {
    try {
        let category = req.params.category;

        const items = await Item.find({
            desc: category,
        });
        res.status(200).send(items);
    } catch (error) {
        res.status = 400;
        res.send(error);
    }
}

module.exports = {
    addItem,
    getItems,
};
