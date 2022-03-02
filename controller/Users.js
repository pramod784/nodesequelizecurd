var {User,User_company_mapper} = require('../models');
const user = require('../models/user');
const Company = require('./Company');
module.exports = {
    saveUsers:async (req,res)=>{
        console.log(req.body);
        const inserted_data = await User.create(req.body);
        return res.send(inserted_data)
    },
    assignCompany:async(req,res)=>{
        console.log(req.body);
        const inserted_data = await User_company_mapper.create(req.body);
        return res.send(inserted_data)
    },
    getUsersList:async(req,res)=>{
        const result_data = await User_company_mapper.findAll({
            attributes: [],
            include: [
                { model: User, required: true },
                { model: Company, required: true },
             ],
          }).catch(e=>{
             console.log(`Error occured ${e}`)
            });
        return res.send(result_data)
    }
}