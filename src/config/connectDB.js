const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        mongoose
            .connect(
                `mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASSWORD}@cluster0.8pl1w.mongodb.net/${process.env.MONGO_DB_DATABASE}?retryWrites=true&w=majority`,
                {
                    useNewUrlParser: true,
                    useUnifiedTopology: true,
                    useCreateIndex: true,
                    useFindAndModify: false,
                }
            )
            .then(() => {
                console.log("Database connected");
            });
    }
    catch (err) {
        console.log(err);
    }
}

export default connectDB;