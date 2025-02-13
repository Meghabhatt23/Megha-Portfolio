exports.handler = async function(event, context) {
    return {
        statusCode: 200,
        headers: {
            "Access-Control-Allow-Origin": "*", // Allow all origins or specify your frontend URL
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            token: process.env.SMTP_SECURE_TOKEN  // Fetches the token securely from Netlify environment variables
        })
    };
};
