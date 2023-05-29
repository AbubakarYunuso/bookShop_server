const express = require(`express`);
const mongoose = require(`mongoose`);

const app = express();
const port = 4000;

app.use(express.json())
app.use(require(`./routes/authors.route.js`));
app.use(require(`./routes/books.route.js`));
app.use(require(`./routes/genres.route.js`));
app.use(require(`./routes/reviews.route.js`));

async function startServerAndDataBase () {
    try {
        await app.listen(port);
        await mongoose.connect(`mongodb+srv://abubakar:abk1234@cluster0.qxkuuhm.mongodb.net/BookShop`)
        console.log(`Сервер запущен`)
    } catch (error) {
        console.log(error)   
    }
};
startServerAndDataBase();