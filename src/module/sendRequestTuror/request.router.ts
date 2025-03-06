import { Router } from "express";
import { requestController } from "./request.controller";




const requestRouter = Router()

requestRouter.post('/create', requestController.createRequest)
requestRouter.get('/get-requests/:tutorId', requestController.getRequestsByTutorId);


export default requestRouter