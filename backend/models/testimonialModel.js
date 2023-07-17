const { default: mongoose } = require("mongoose")

const testimonialSchema = mongoose.Schema(
    {
        message: {
            type: String
        },

        name:{
            type: String
        },

        subject:{
            type: String
        },


    }
);

module.exports = mongoose.model('Testimonial',testimonialSchema);