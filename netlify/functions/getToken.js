exports.handler = async function(event, context) {
    console.log("Function called"); // Log to confirm function is called
    return {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "Content-Type",
        "Access-Control-Allow-Methods": "GET, POST, OPTIONS"
      },
      body: JSON.stringify({ token: "84e37ae6-573b-457f-a8d8-babad7b41c7d" }) // Replace with actual token
    };
  };
  