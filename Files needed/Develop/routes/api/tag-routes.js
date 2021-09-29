const router = require("express").Router();
const { Tag, Product, ProductTag } = require("../../models");

// The `/api/tags` endpoint

router.get("/", (req, res) => {
    Tag.findAll({
      include: [Product],
  })
  .then((tag) => res.json(tag))
  .catch((err) => res.status(400).json(err));
  });
  
  // find all tags
  router.get('/:id', (req, res) => {
  Tags.findAll({
    // be sure to include its associated Products
    where: {
      id: req.params.id,
    },
    include: [Product],
  })// be sure to include its associated Product data
    .then((tag) => res.json(tag))
    .catch((err) => res.status(400).json(err));
});

router.get("/:id", (req, res) => {
  // find a single tag by its `id`
  Tags.findOne({
    where: {
      id: req.params.id,
    },
    include: [Product],
  })
    // be sure to include its associated Product data
    .then((tag) => res.json(tag))
    .catch((err) => res.status(400).json(err));
});

router.post("/", (req, res) => {
  // create a new tag
  tag
    .create(req.body)
    .then((tag) => res.status(200).json(tag))
    .catch((err) => res.status(400).json(err));
});

router.put("/:id", (req, res) => {
  // update a tag's name by its `id` value
  tag
    .update(req, body, {
      where: {
        id: req.params.id,
      },
    })
    .then((tag) => res.status(200).json(tag))
    .catch((err) => res.status(400).json(err));
});

router.delete("/:id", (req, res) => {
  // delete on tag by its `id` value
  tag
    .destroy(req, body, {
      where: {
        id: req.params.id,
      },
    })
    .then((tag) => res.status(200).json(tag))
    .catch((err) => res.status(400).json(err));
});

module.exports = router;
