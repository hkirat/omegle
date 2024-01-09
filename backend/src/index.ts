import express from "express";

async function init() {
  const app = express();
  const PORT = Number(process.env.PORT) || 8000;
  app.use(express.json());

  app.get("/", (req, res) => {
    res.json({ message: "Server is up and running" });
  });

  app.listen(PORT, () => console.log(`Server started at PORT:${PORT}`));
}

init();
