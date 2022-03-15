const express = require("express");
const app = express();
const port = 3000;
const SENTENCES = require("./sentences").SENTENCES;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("public"));

app.set("views", __dirname);
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  const secCount = Object.keys(SENTENCES).length;

  res.render("index", { secCount, SENTENCES });
});

app.get("/section", (req, res) => {
  const secNum = req.query.section;
  const secName = `section${secNum}`;
  const title = SENTENCES[secName].title;
  const contents = SENTENCES[secName].contents.sort(() => Math.random() - 0.5);

  res.render("section", {
    section: secNum,
    title,
    contents,
  });
});

app.listen(port, () => {
  console.log(`listening at http://localhost:${port}`);
});
