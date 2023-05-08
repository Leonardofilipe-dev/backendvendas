import express from "express"
import cors from "cors"
const app = express()
import routes from "./routes/categoriesRoutes"
const port = 5000

app.use(cors())

app.use("/", routes)
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })
  