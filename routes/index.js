import { Router } from "express"

const router = Router()

router.get("/", function (req, res) {
  res.render("index", { title: "Smash Bros. Review" })
})

export { router }
