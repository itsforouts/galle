import axios from "axios";
import BaseService from "../Base/BaseService";

class NotificationService {
    constructor() {
        BaseService.getBaseURL()
        this.GET_NOTI = "notification/getAllNotificationOfUser"
        this.NOTI_DONE = "notification/update"
    }
    getAllNotificationOfUser(input) {
        let data = {
            email: input
        }
        return axios.post(this.GET_NOTI, data,BaseService.getHeader())
    }
    makeNotiDone(input) {
        let data = {
            id: input,
            seen:true
        }
        return axios.put(this.NOTI_DONE,data,BaseService.getHeader())
    }
}
export default NotificationService = new NotificationService();