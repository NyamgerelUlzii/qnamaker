import express from "express"
import cors from "cors"
import qnamaker from "./api/qnamaker.route.js"

const app = express()

app.use(cors())
app.use(express.json())

app.use("/api/v1/qnamaker", qnamaker)
app.use("*", (req, res) => res.status(404).json({error: "oldsongui"}))

export default app
