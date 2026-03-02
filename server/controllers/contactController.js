const Contact = require('../models/Contact');

// @desc    Submit a contact message
// @route   POST /api/contact
// @access  Public
const submitContact = async (req, res) => {
    try {
        const { name, email, message } = req.body;

        if (!name || !email || !message) {
            return res.status(400).json({ message: 'Please provide all required fields (name, email, message)' });
        }

        const contact = await Contact.create({
            name,
            email,
            message
        });

        res.status(201).json({
            success: true,
            data: contact,
            message: 'Message sent successfully'
        });

    } catch (error) {
        console.error('Error in submitContact:', error);
        res.status(500).json({
            message: error.message || 'Server Error. Could not process your request.'
        });
    }
};

// @desc    Get all contact messages
// @route   GET /api/contact
// @access  Public (Should be protected in production)
const getContacts = async (req, res) => {
    try {
        const contacts = await Contact.find().sort({ createdAt: -1 });
        res.status(200).json({
            success: true,
            count: contacts.length,
            data: contacts
        });
    } catch (error) {
        res.status(500).json({
            message: 'Server Error. Could not fetch messages.'
        });
    }
};

module.exports = {
    submitContact,
    getContacts
};
