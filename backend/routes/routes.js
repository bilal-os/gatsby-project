 
 const router = require('express').Router();

 const { sendmail,sendmail1, getTestimonials, createTestimonial, deleteTestimonial } = require('../controllers/controllers.js');

    /**HTTP Request */

    router.post('/mail/sendmail',sendmail);
    router.post('/mail/sendmail1',sendmail1);
    router.get('/getTestimonials',getTestimonials);
    router.post('/createTestimonial',createTestimonial);
    router.delete('/deleteTestimonial/:testimonialID', deleteTestimonial)

    module.exports = router;