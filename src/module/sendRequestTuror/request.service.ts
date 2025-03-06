import { IRequest } from "./request.interface"
import RequestTutor from "./request.model"


const sendRequestService = async ({ tutorId, userEmail }: IRequest) => {
    try {
        if (!tutorId || !userEmail) {
          throw new Error("Invalid data provided");
        }
    
        const result = await RequestTutor.create({ tutorId, userEmail });
        return result;
      } catch (error) {
        throw new Error("Error while creating the request: ");
      }

    }


    const getRequestsForTutor = async (tutorId: string) => {
      const requests = await RequestTutor.find({ tutorId }).exec();
      return requests;
    };

export const requestService = {
    sendRequestService,
    getRequestsForTutor
}