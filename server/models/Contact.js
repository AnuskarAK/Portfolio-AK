const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, 'Please provide your name'],
            trim: true,
            maxLength: [50, 'Name cannot be more than 50 characters']
        },
        email: {
            type: String,
            required: [true, 'Please provide your email'],
            match: [
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                'Please provide a valid email',
            ],
        },
        message: {
            type: String,
            required: [true, 'Please provide a message'],
            maxLength: [1000, 'Message cannot be more than 1000 characters']
        }
    },
    { timestamps: true }
);

module.exports = mongoose.model('Contact', contactSchema);
