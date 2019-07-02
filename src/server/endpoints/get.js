//Get Requests, If this were a prod application I would instead move this into controllers ect 
//Here we would also add extra headers, security tokens such as oauth, Jwt ect to prevent unwanted access to 
//our services
const api = require('../api/api')

module.exports = app => {
    app.get('/v1.0/amazon', async (req, res, next) => {
        //You would also want to add some headers to the request you send, for example application json, auth header ect
        const response = await api.getAwsData()
        if(response.Contents){
            res.json({data: response}).status(200)
        }else{
            res.send({error: "Internal Error"}).status(503)
        }
    })
}
