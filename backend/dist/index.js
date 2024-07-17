import app from "./app.js";
import connectToDatabase from "./db/connection.js";
//connections and listners
const PORT = process.env.PORT || 5000;
connectToDatabase()
    .then(() => {
    app.listen(5000, () => {
        console.log("Server Open and connected to DataBase");
    });
})
    .catch((err) => {
    console.log(err);
});
//sk-None-V6o7PiibcxpMxvXkUBwWT3BlbkFJpOiZerWlsFntivQBom4l
//# sourceMappingURL=index.js.map