const aws = require('aws-sdk');
const constants = require('../config/consts');
aws.config.update({
    accessKeyId: constants.AKI,
    secretAccessKey: constants.SecretAccessKey,
    region: 'eu-west-2'
});
const s3 = new aws.S3();

const getAwsData = async () => {
    try{
        const response = await s3.listObjectsV2({Bucket: 'adludiotest'}).promise()
        console.log(response)
        return(response)
    }catch(e){
        return {error: e, status: 503, codePlacement: "1001"}
    }
}


module.exports = { getAwsData };