import httpRequest from "lk-http-request";
import host from "./host";

/**
 * @param data datadesc 
 * @return {Promise<>} {
 *  ...
 * }
 */

export function <%=serviceName %>Service(data) {
    const requestOption = {
        type: "post", //or get
        data // if has request data
    };
    return httpRequest(host + "/*url*/", requestOption);
}