const moment = require('moment');

let response;

exports.getTime = async (event) => {
    try {
        console.log('getTime function started')
        const message = moment().format();
        response = {
            'statusCode': 200,
            'body': JSON.stringify({
                message: message,
            })
        }
    } catch (err) {
        console.log(err);
        return err;
    }

    return response
};
