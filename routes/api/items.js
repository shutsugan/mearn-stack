'use strict';

const router = require('express').Router();
const Item = require('../../models/Item');

router.route('/')
  .get((req, res) => {
    Item.find({})
      .sort({data: -1})
      .then(items => res.json(items));
  })
  .post((req, res) => {
    const new_item = new Item({name: req.body.name});
    new_item.save()
      .then(item => res.json(item));
  });

router.route('/:id')
  .delete((req, res) => {
    const id = req.params.id;
    Item.findById(id)
      .then(item => {
        item.remove().then(_ => res.json({'msg': 'removed'}));
      })
      .catch(err => res.status(404).json({'msg': err}));
  });

module.exports = router;
