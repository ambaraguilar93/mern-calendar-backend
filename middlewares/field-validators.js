const { response } = require('express');
const { validationResult } = require('express-validator');

const fieldValidation = (req, res = response, next) => {

    //manejo de errores
    const errors = validationResult( req );
    if ( !errors.isEmpty() ){
        return res.status(400).json({
            ok: false,
            errors: errors.mapped()
        });
    }

    next();

}

module.exports = {
    fieldValidation
}

// db user: mern_user
// db pass: i3yWdcsCH3nzPcyX