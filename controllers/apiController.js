const api = require('../config/api');


const apiController = {

    getStates: function(req, res){
        api.get('/estados?orderBy=nome')
        .then(statesReturned=>{
            const states = statesReturned.data
            return res.render('index',{states:states})
        })
        .catch(error =>console.log(error))
    }
}

module.exports = apiController
