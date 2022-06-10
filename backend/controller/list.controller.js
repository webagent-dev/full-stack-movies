const List = require('../model/list.model')
// create list
const createList = async (req, res) => {
    if (req.user.isAdmin) {
      try {
        const list = await List.create(req.body)
        res.status(201).json(list)
    } catch (err) {
        res.status(500).json(err)
    }
    } else {
        res.status(403).json('you are not authenticated')
    }
}
// get List
const getList = async (req, res) => {
    const type = req.query.type;
    const genre = req.query.genre
    let list = []
    try {
        if (type) {
            if (genre) {
                list = await List.aggregate([
                    { $sample: { size: 10 } },
                    {$match:{type:type}, genre: genre}
                    ])
            } else {
                list = await List.aggregate([{$sample:{size: 10}}])
                } 
        } else {
            list = await List.aggregate([
                {$sample:{size:10}}
            ])
        }
        res.status(200).json(list)
    } catch (err) {
        res.status(500).json(err)
    }
}
// get single list
const getSingleList = async (req, res) => {
    try {
        const list = await List.findById(req.params.id)
        res.status(200).json(list)
    } catch (err) {
        res.status(500).json(err)
    }
}
// update list
const updateList = async (req, res) => {
    if (req.user.isAdmin) {
            try {
                const list = await List.findByIdAndUpdate(
                     req.params.id,
                    { $set: req.body },
                    { new: true, runValidators: true }
                )
        res.status(201).json(list)
    } catch (err) {
        res.status(500).json(err)
    }
    } else {
        res.status(403).json('you are not authenticated')
    }
}
// delete list
const deleteList = async (req, res) => {
    if (req.user.isAdmin) {
                try {
        const list = await List.findByIdAndDelete(req.params.id)
        res.status(201).json('list delete successfully')
    } catch (err) {
        res.status(500).json(err)
    }
    } else {
        res.status(403).json('you are not authenticated')
    }
}

module.exports = { createList, getSingleList, getList, updateList, deleteList}