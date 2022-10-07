import mongoose from 'mongoose';
import slugify from "slugify";

const blogSchema = new mongoose.Schema({
    heading: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    content: {
        type: String,
    },
    date: {
        type: Date,
        default: Date.now
    },
    slug: {
        type: String,
        required: true,
        unique: true
    },
    image: {
        type: String,
    }
});

blogSchema.pre('validate', function() {
    if (this.title) {
        this.slug = slugify(this.title, { lower: true, strict: true });
    }
})

export default mongoose.model('blog', blogSchema);