import express from 'express';
import multer from 'multer';
import csvParser from 'csv-parser';
import fs from 'fs';
import Product from '../models/Product.js';
import cloudinary from '../config/cloudinary.js';
const router = express.Router();

const upload = multer({ dest: 'uploads/' });

router.post('/upload', upload.single('file'), async (req, res) => {
  try {
    const results = [];
    const filePath = req.file.path;

    fs.createReadStream(filePath)
      .pipe(csvParser())
      .on('data', (data) => results.push(data))
      .on('end', async () => {
        try {
          const uploadedProducts = [];

          for (const product of results) {
            let imageUrl = product.image_url;

            // Check if local file exists for Cloudinary upload
            const localPath = `uploads/${product.image_url}`;
            if (fs.existsSync(localPath)) {
              const uploadResult = await cloudinary.uploader.upload(localPath);
              imageUrl = uploadResult.secure_url;
            }

            uploadedProducts.push({
              name: product.name,
              price: parseFloat(product.price),
              old_price: parseFloat(product.old_price),
              stock: parseInt(product.stock),
              gender: product.gender,
              category: product.category,
              sizes: product.sizes ? product.sizes.split(',') : [],
              image_url: imageUrl,
              rating: product.rating,
              brand: product.brand,
              description: product.description,
              // ✅ Safely convert "TRUE"/"FALSE" to real Boolean
              is_new: product.is_new?.toString().toLowerCase() === 'true',
              arrival_date: product.arrival_date,
            });
          }


          await Product.insertMany(uploadedProducts);
          fs.unlinkSync(filePath);

          res.status(200).json({ message: '✅ Products imported with Cloudinary images!' });
        } catch (error) {
          res.status(500).json({ message: '❌ Failed to insert products', error: error.message });
        }
      });
  } catch (error) {
    res.status(500).json({ message: '❌ Error uploading file', error: error.message });
  }
});

router.put('/:id', async (req, res) => {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    )
    if (!updatedProduct) {
      return res.send(404).json({ message: "product not found" })
    }
    res.status(200).json({
      message: "product updated successfully",
      product: updatedProduct
    })
  } catch (error) {
    res.status(500).json({ message: "failed to updated the product", error: error.message })
  }
})


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


router.get('/all_products', async (req, res) => {
  try {
    const all_products = await Product.find()
    if (all_products.length === 0) {
      res.status(404).json({ message: 'no products found' })
    } else {

      res.status(200).json({
        message: 'All products fetched successfully',
        products: all_products
      });
    }

  } catch (error) {
    res.status(500).json({ message: "error while fetching products", error: error.message })
  }
})

export default router;
