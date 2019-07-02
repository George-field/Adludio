const aws = require('aws-sdk');
const constants = require('../config/consts');
aws.config.update({
    accessKeyId: constants.AKI,
    secretAccessKey: constants.SecretAccessKey,
    region: 'eu-west-2'
});
const s3 = new aws.S3();

//If this request was to a rest api / gateway then we would need to add some headers on here.
//Security and extra headers that would prevent someone calling a service directly from the FE. 
const getAwsData = async () => {
    try{
        const response = await s3.listObjectsV2({Bucket: 'adludiotest'}).promise()
        console.log(response)
        return(response)
    }catch(e){
        //Would also add loging in here on production, we can use below as a refrence to find errors in our code
        return {error: e, status: 503, codePlacement: "1001"}
    }
}


module.exports = { getAwsData };