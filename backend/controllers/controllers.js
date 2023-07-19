const nodemailer = require('nodemailer');
const Mailgen = require('mailgen');
const expressAsyncHandler = require("express-async-handler");
const Testimonial = require('../models/testimonialModel');

const { EMAIL, PASSWORD } = require('../env.js')



const sendmail = expressAsyncHandler(async (req,res) => {
    const { name,email,phone,message, option1, option2, option3} = req.body;

    console.log(name,email,phone,message);

    let config = {
        service : 'gmail',
        auth : {
            user: EMAIL,
            pass: PASSWORD
        }
    }

    let transporter = nodemailer.createTransport(config);

    let MailGenerator = new Mailgen({
        theme: "default",
        product : {
            name: "Mailgen",
            link : 'https://mailgen.js/'
        }
    })

    let response = {
        body: {
            name : "Book Workshop",
            intro: "A new Booking has arrived!",
            table : {
                data : [
                    {
                        Name : name,
                        Email: email,
                        PhoneNumber: phone,
                        Message: message,
                        Month: option1,
                        Time: option2,
                        Subject: option3
                    }
                ]
            },
            outro: "Looking forward to do more business"
        }
    }

    let mail = MailGenerator.generate(response)

    let message1 = {
        from: "MailGen",
        to : EMAIL,
        subject: "Workshop Booking.",
        html: mail
    }

    transporter.sendMail(message1).then(() => {
        return res.status(201).json({
            msg: "you should receive an email"
        })
    }).catch(error => {
        return res.status(500).json({ error })
    })


} )


const sendmail1 = expressAsyncHandler(async (req,res) => {
    const { name,email,phone,message, subject, selectedBudget} = req.body;

    console.log(name,email,phone,message, subject, selectedBudget);

    let config = {
        service : 'gmail',
        auth : {
            user: EMAIL,
            pass: PASSWORD
        }
    }

    let transporter = nodemailer.createTransport(config);

    let MailGenerator = new Mailgen({
        theme: "default",
        product : {
            name: "Mailgen",
            link : 'https://mailgen.js/'
        }
    })

    let response = {
        body: {
            name : "Contact",
            intro: "Someone has contacted you!",
            table : {
                data : [
                    {
                        Name : name,
                        Email: email,
                        PhoneNumber: phone,
                        Message: message,
                        Subject: subject,
                        Budget: selectedBudget
                    }
                ]
            },
            outro: "Looking forward to do more business"
        }
    }

    let mail = MailGenerator.generate(response)

    let message1 = {
        from: "MailGen",
        to : EMAIL,
        subject: "Workshop Booking.",
        html: mail
    }

    transporter.sendMail(message1).then(() => {
        return res.status(201).json({
            msg: "you should receive an email"
        })
    }).catch(error => {
        return res.status(500).json({ error })
    })


} )

const getTestimonials = async(req,res) => {
    try{
        const testimonials1 = await Testimonial.find({});
        res.json(testimonials1);
    }catch (error) {
        console.log(error);
        res.json("fail"); 
    }
}

const createTestimonial = async (req,res) => {
    
    const { message, name, subject} = req.body;
    console.log(message,name,subject);

    try{
        await Testimonial.create({
            message: message,
            name: name,
            subject: subject, 
        });

        res.json({msg:'Testimonial Created'});
       
    }catch (error) {
       console.log(error);
    }
}

const deleteTestimonial = async (req,res) => {

    try{
        await Testimonial.findByIdAndDelete(req.params.testimonialID);
         res.json({msg:'Testimonial Deleted'});


    }catch (error) {
       console.log(error);
    }

}

module.exports = {
   
    sendmail,
    sendmail1,
    getTestimonials,
    createTestimonial,
    deleteTestimonial    
}