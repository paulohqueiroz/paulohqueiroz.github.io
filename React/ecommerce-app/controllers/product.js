const formidable = require("formidable")
const _ = require("lodash")
const Product = require("../models/product")
const fs = require("fs")
const { errorHandler } = require("../helpers/dbErrorHandler")

exports.create = (req, res) => {

    let form = new formidable.IncomingForm()
    form.keepExtensions = true

    form.parse(req, (err, fields, files) => {

        if(err) {
            return res.status(400).json({
                error: "image not found"
            })
        }

        let product = new Product(fields) 

        if (files.photo) {
            // console.log("FILES PHOTO: ", files.photo);
            if (files.photo.size > 1000000) {
                return res.status(400).json({
                    error: 'Image should be less than 1mb in size'
                });
            }
            console.log('1------------------')
            console.log(product)
            product.photo = {}
            product.photo.data = {}
            console.log(product)
            product.photo.data = fs.readFileSync(files.photo.path);
            product.photo.contentType = files.photo.type;
        }



        product.save((err, result) =>{

            if(err){
                return res.status(400).json({
                    error: errorHandler(err)
                })
            }
            res.json(result)
        })

    })
   
}