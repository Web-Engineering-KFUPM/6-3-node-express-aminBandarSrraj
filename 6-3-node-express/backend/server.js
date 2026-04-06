// TODO 1: Import and Create express app instance
import express from "express";
const app = express();

// TODO 1: Define server port
const PORT = process.env.PORT || 3000;

// TODO 4: Import and Apply CORS middleware
import middleware from "cors";
app.use(middleware);

// TODO 5: Import and apply Morgan middleware
import morgan from "morgan";
app.use(morgan("dev"));

// TODO 6.1: Create root route "/"

 app.get("/", (req, res) => {
     res.send("plain text response :)");
   });

// TODO 6.2: Create "/api/quote" route
app.get("/api/quote", (req, res) => {
     const quote = getRandomQuote();// i may need to import it first
     res.send({ quote });// i dont think it is in json
   });

// TODO 7: Start server using app.listen
