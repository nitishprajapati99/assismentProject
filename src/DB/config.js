const mongoose = require('mongoose');

const ConnectDB = async (URI) => {
    if (!URI) {
        console.error("❌ FATAL ERROR: MONGO_URI is not defined in the environment variables.");
        // We exit because the app cannot run without a database connection
        process.exit(1);
    }

    await mongoose.connect(URI)
        .then(() => console.log("Database is Connected "))
        .catch((err) => console.log("error in database" + err));
};


//module exporting
module.exports = ConnectDB;