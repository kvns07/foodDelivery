const mongoose = require('mongoose');
const uri = 'mongodb+srv://ecelltechdomain:NFDz65AugtcaDuEh@cluster0.6eo5nx1.mongodb.net/foodDelMern?retryWrites=true&w=majority&appName=Cluster0';
const connectToMongo = async () => {
    try {
        // Connect to MongoDB using async/await
        await mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log("Connected to the database");
        // Get the specified collection
        const collection = mongoose.connection.db.collection("foodData");

        // Find all documents in the collection
        const documents = await collection.find({}).toArray();

        // Print the documents
        // console.log(`Documents in the  collection:`);
        // console.log(documents);
    } catch (error) {
        console.error('Connection error:', error);
    } finally {
        // Close the connection
        // await mongoose.connection.close();
    }


}
// mongo.coonect callback not supported
const mongoDB = async () => {
    await mongoose.connect(uri, { useNewUrlParser: true }, async (err, result) => {
        if (err) console.log(".....", err)
        else {
            console.log("connected");
            // const
        }
    })
}
module.exports = connectToMongo;