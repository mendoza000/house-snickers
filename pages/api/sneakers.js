const {db} = require('@data/db');

export default function handler(req, res) {
  res.status(200).json(db)
}