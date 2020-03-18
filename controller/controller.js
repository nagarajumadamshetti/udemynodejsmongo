const tour = require('../models/tour');
console.log("controller reached");
async function created(req, res) {
    try {
        console.log("Started creating")
        const data = await tour.create(req.body);
        console.log("Entered Created")
        res.status(200).json({
            status: 'success',
            data: data
        });
    } catch (error) {
        next(error);
    }
}

async function reading(req, res) {
    try {
        const data = await tour.find();
        res.status(200).json({
            status: 'success',
            data: data
        });
    } catch (error) {
        next(error);
    }
}

async function updated(req, res) {
    try {
        const data = await tour.update({ name: req.params.id }, req.body);

        res.status(200).json({
            status: 'success',
            updated: data
        });
    } catch (error) {
        next(error);
    }
}

async function deleteData(req, res) {
    try {
        const data = await tour.delete({ name: req.params.id });
        res.status(200).json({
            status: 'success',
            deleted: data
        });
    } catch (error) {
        next(error);
    }
}

module.exports = {
    created,
    updated,
    deleteData,
    reading
}
