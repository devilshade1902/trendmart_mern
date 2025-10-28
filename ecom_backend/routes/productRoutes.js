import express from 'express';
import multer from 'multer';
import csvParser from 'csv-parser';
import fs from 'fs';
import Product from '../models/Product.js';

const router = express.Router();

// ✅ Configure Multer
const upload = multer({ dest: 'uploads/' });

// ✅ POST: Upload CSV file and insert products
router.post('/upload', upload.single('file'), async (req, res) => {
  try {
    const results = [];
    const filePath = req.file.path;

    fs.createReadStream(filePath)
      .pipe(csvParser())
      .on('data', (data) => results.push(data))
      .on('end', async () => {
        try {
          await Product.insertMany(results);
          fs.unlinkSync(filePath); // delete uploaded file
          res.status(200).json({ message: '✅ Products imported successfully!' });
        } catch (error) {
          res.status(500).json({ message: '❌ Failed to insert products', error: error.message });
        }
      });
  } catch (error) {
    res.status(500).json({ message: '❌ Error uploading file', error: error.message });
  }
});

router.put('/:id', async (req,res)=>{
  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      req.body,
      {new:true}
    )
    if(!updatedProduct){
      return res.send(404).json({message:"product not found"})
    }
    res.status(200).json({
      message:"product updated successfully",
      product:updatedProduct
    })
  } catch (error) {
    res.status(500).json({message:"failed to updated the product",error:error.message})
  }
})
// DELETE a product by ID
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const deletedProduct = await Product.findByIdAndDelete(id);

    if (!deletedProduct) {
      return res.status(404).json({ message: "❌ Product not found" });
    }

    res.status(200).json({ message: "✅ Product deleted successfully", deletedProduct });
  } catch (error) {
    res.status(500).json({ message: "❌ Error deleting product", error: error.message });
  }
});


router.get('/all_products',async(req,res)=>{
  try {
    const all_products = Product.find()
    if(!all_products){
      res.status(404).json({message:'no products found'})
    }

    res.status(200).json({message:'All products fetched'})
  } catch (error) {
    res.status(500).json({message:"error while fetching products",error:error.message})
  }
})

export default router;
