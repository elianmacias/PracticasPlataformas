const { vaResul } = require('express-validator')

const camposValidar = (req,res,next)=>{
    const errors = vaResul(req);
    if ( !errors.isEmpty() )
    {
        return res.status(400).json(errors);
    }
    next();
}

module.exports = {
    camposValidar
}