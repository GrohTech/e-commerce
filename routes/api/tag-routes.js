const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
  // find all tags
    Tag.findAll({
    attributes: ["id", "tag_name"],
    include: [
      {
        model: Product,
        attributes: ["id", "product_name", "price", "stock", "category_id"],
        through: ProductTag
      }
    ],  
  }).then(dbTagAll => {
    res.json(dbTagAll);
    });
});

router.get('/:id', (req, res) => {
  // find a single tag by its `id`
  Tag.findOne({
    attributes: ["id", "tag_name"],
    where: {
      id: req.params.id
    },
    include: [
      {
        model: Product,
        attributes: ["id", "product_name", "price", "stock", "category_id"],
        through: ProductTag
      }
    ],
  }).then(dbTagOne => {
    res.json(dbTagOne);
    });
});

router.post('/', (req, res) => {
  // create a new tag
  Tag.create({
    tag_name: req.body.tag_name
  }).then(dbTagNew => {
    res.json(dbTagNew);
  });
});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
  Tag.update(
    {
      tag_name: req.body.tag_name
    },
    {
      where: {
        id: req.params.id
      }
    }
  ).then(dbTagUpdate => {
    res.json(dbTagUpdate);
  });
});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
  Tag.destroy(
    {
      where: {
        id: req.params.id
      }
    }
  ).then(dbTagDelete => {
    res.json(dbTagDelete);
  });
});

module.exports = router;
