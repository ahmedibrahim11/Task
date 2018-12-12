import { BASE_URL } from "../../sevices/constants";
export class UserProxyService {
    async getUsers() {
        return await fetch(`${BASE_URL}`, {
            method: "get",
            headers: { "content-Type": "application/json" }
        });
    }


    async getRequestById(requestId: number) {
        return await fetch(`${BASE_URL}/vendor/requestById/${requestId}`, {
            method: "get",
            headers: { "content-Type": "application/json" }
        });
    }
}
