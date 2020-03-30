exports.userSignupValidator = (req, res, next) => {
    req.check('name', "Name is required").notEmpty()

    req.check('email', "Email must be between 3 to 32 characters")
         .matches(/.+\@.+\..+/)
         .withMessage("Email must contains @")
         .isLength({
             min: 4, 
             max: 32
         })

    req.check('password', 'password is required').notEmpty()
   
    req.check('password')
         .isLength({ min: 4 })
         .withMessage('Password must contains at leat 4 character')
         .matches(/\d/)
         .withMessage("Password must contain a number")

         const errors = req.validationErrors();

         if(errors){
             const firstError = errors.map(error => error.msg)[0]
             return res.status(400).json({ error : firstError})
         }

         next()

}