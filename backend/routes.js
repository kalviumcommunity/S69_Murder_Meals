const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Item = require('./models/Item');


// POST - Added validation
router.post('/items', async (req, res) => {
  try {
      const { name } = req.body;

      // Validation: name is required, must be a non-empty string
      if (!name || typeof name !== 'string' || name.trim() === '') {
          return res.status(400).json({ message: 'Name is required and must be a non-empty string' });
      }

      const newItem = new Item({ name });
      await newItem.save();

      res.status(201).json({ message: 'Item added successfully', newItem });
  } catch (err) {
      res.status(400).json({ message: err.message });
  }
});



//GET
router.get('/items',async(req,res)=>{
    try{
        const Items = await Item.find();
        res.status(200).json({message:'items found',Items});

    }catch(err){
        res.status(400).json({message:err.message});
    }
});


//GET BY ID
router.get('/items/:id', async (req, res) => {
    try {
      const item = await Item.findById(req.params.id);
      if (!item) {
        return res.status(404).json({ message: 'Item not found' });
      }
      res.status(200).json(item);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  });


// PUT - Added validation
router.put('/items/:id', async (req, res) => {
  try {
      const { name } = req.body;

      // Validation: name is required, must be a non-empty string
      if (!name || typeof name !== 'string' || name.trim() === '') {
          return res.status(400).json({ message: 'Name is required and must be a non-empty string' });
      }

      const updated = await Item.findByIdAndUpdate(req.params.id, { name }, { new: true });

      if (!updated) {
          return res.status(404).json({ message: 'Item not found' });
      }

      res.status(200).json({ message: 'Updated successfully', updated });
  } catch (err) {
      res.status(400).json({ message: err.message });
  }
});



// DELETE BY ID
router.delete('/items/:id', async (req, res) => {
    try {
      const deleted = await Item.findByIdAndDelete(req.params.id);  // Delete item
      if (!deleted) {
        return res.status(404).json({ message: 'Item not found' });
      }
      res.status(200).json({ message: 'Item deleted', deleted});
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  });
  


  module.exports = router;
