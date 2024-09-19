import { Router } from "express";
const router = Router();
import {
  getAllJobs,
  getJob,
  createJob,
  updateJob,
  deleteJob,
  showStats,
} from "../controllers/jobController.js";
import {
  validateJobInput,
  validateIdParam,
} from "../middleware/validationMiddleware.js";
import { checkForTestUser } from "../middleware/authMiddleware.js";

router.get("/", getAllJobs);
router.post("/", checkForTestUser, validateJobInput, createJob);
router.route("/stats").get(showStats);
router.get("/:id", validateIdParam, getJob);
router.patch(
  "/:id",
  checkForTestUser,
  validateIdParam,
  validateJobInput,
  updateJob
);
router.delete("/:id", checkForTestUser, validateIdParam, deleteJob);

export default router;
