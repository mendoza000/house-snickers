const {db} = require('@data/db');

export default function handler(req, res) {
  const {id} = req.query
  const product = db.filter(e => e.imgName === id)
  res.status(200).json(product)
}