const axios = require('axios');
require('dotenv').config();

exports.getAllPays = (req ,res)=>{
    axios.get(process.env.URL).then(response=>{
        res.render('view-pays',{pays:response.data});
    }).catch(error=>{
        res.render('view-error');
    });
}


exports.getPay = (req,res)=>{
    axios.get(process.env.URL).then(response=>{
        pay = response.data.find(pay=>pay.name.common==req.params.pay);
        res.render('view-single-pay',{data:pay});
    }).catch(error=>{
        res.render('view-error');
    });
}