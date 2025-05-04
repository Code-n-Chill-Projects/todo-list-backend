import { Router } from "express";

const router = Router();

const inMemoryDb: Record<any, any> = {}; // For now until we add Postgres

router.get("/", async (req, res) => {
  res.send({ todoItems: inMemoryDb });
});

router.post("/", async (req, res) => {
  inMemoryDb[req.body?.name] = req.body?.description;
  res.send({ mesasge: "Successfully added todo list item." });
});

router.put("/:id", async (req, res) => {
  inMemoryDb[req.params?.id] = req.body?.description;
  res.send({ mesasge: "Successfully updated todo list item." });
});

router.delete("/:id", async (req, res) => {
  delete inMemoryDb[req.params?.id];
  res.send({ mesasge: "Successfully deleted todo list item." });
});

export default router;
