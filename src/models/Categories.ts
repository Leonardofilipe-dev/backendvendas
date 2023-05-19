import { Schema, model, Document } from 'mongoose';

interface Category extends Document {
  name: string;
}

const CategorySchema = new Schema({name: {type: String, required: true,},
});

const Category = model<Category>("Category", CategorySchema);

export default Category
 
