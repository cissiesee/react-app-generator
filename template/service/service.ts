import httpRequest, { IRequestOption } from "./httpRequest";

/**
 * 请求入参接口（非必须）
 * 
 * @export
 * @interface IRequestData
 */
export interface IRequestData {
    //todo
}

/**
 * 请求出参接口（必须）
 * 
 * @export
 * @interface IRequestData
 */
export interface IResponseData {
    //todo
}

export function /*funcname*/(value?: IRequestData): Promise<IResponseData> {
    const requestOption: IRequestOption = {
        type: "post", //or get
        data: value // if has request data
    };
    return httpRequest(/*url*/, requestOption);
}