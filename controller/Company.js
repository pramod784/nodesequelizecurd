var {Company} = require('../models');
module.exports = {
    saveCompany:async (req,res)=>{
        console.log(req.body);
        const inserted_data = await Company.create(req.body);
        return res.send(inserted_data)
    }
}