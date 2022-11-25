import mongoose from 'mongoose';

const blogSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true,
        unique: true
    },
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
    image: {
        type: String,
    }
});

export default mongoose.model('blog', blogSchema);