import { Router } from "express";
import { requestController } from "./request.controller";

const requestRouter = Router()

requestRouter.post('/create', requestController.createRequest)
requestRouter.get('/get-requests/:tutorId', requestController.getRequestsByTutorId);
requestRouter.get('/get/:userEmail', requestController.getRequestsByStudentEmail);


export default requestRouter