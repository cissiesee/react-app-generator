import { encodeUrlParam, IObj } from "../utils/commonUtils";
// import "es6-promise/auto";
import { IWin } from "../containers/PageCommon";
const dev = true;

interface IData extends IObj {
    _?: number; // 时间戳
}

export interface IRequestOption {
    /**
     * 数据返回类型
     * @type {string}
     * @memberof IRequestOption
     */
    dataType?: string;
    /**
     * 请求方法（get or post）
     * @type {string}
     * @memberof IRequestOption
     */
    type?: string;
    /**
     * 请求参数
     * @type {IData}
     * @memberof IRequestOption
     */
    data?: IData;
    /**
     * 超时时间
     * @type {number}
     * @memberof IRequestOption
     */
    timeout?: number;
    /**
     * 是否自动弹出错误
     * @type {boolean}
     * @memberof IRequestOption
     */
    autoHandleError?: boolean;
    /**
     * 是否使用缓存（仅对get有效）
     * @type {boolean}
     * @memberof IRequestOption
     */
    cache?: boolean;
    /**
     * 是否显示loading
     * @type {boolean}
     * @memberof IRequestOption
     */
    showLoading?: boolean;
}

export default function (url: string, option: IRequestOption): Promise<any> {
    const opts = Object.assign({}, {
        url,
        dataType: "json",
        type: "get",
        data: {},
        timeout: 30000,
        autoHandleError: true,
        cache: false,
        showLoading: true
    }, option);
    return new Promise((resolve, reject) => {
        const xmlhttp: XMLHttpRequest = new XMLHttpRequest();
        if (xmlhttp != null) {
            const httpTimer = setTimeout(() => {
                xmlhttp.abort();
                reject("timeout");
            }, opts.timeout);
            xmlhttp.onreadystatechange = () => {
                if (xmlhttp.readyState === 4) {// 4 = "loaded"
                    clearTimeout(httpTimer);
                    if (xmlhttp.status === 200 || xmlhttp.status === 304) {
                        if (opts.dataType === "json") {
                            resolve(JSON.parse(xmlhttp.responseText));
                        } else {
                            resolve(xmlhttp.responseText);
                        }
                    } else {
                        let message = "";
                        if (xmlhttp.responseText !== undefined && (xmlhttp.responseText !== null && xmlhttp.responseText !== "")) {
                            const obj = JSON.parse(xmlhttp.responseText);
                            if (Array.isArray(obj)) {
                                for (const value of obj) {
                                    message = [value.code, value.message].join("::");
                                }
                            }
                        }
                        if (opts.autoHandleError) {
                            (window as IWin).onAjaxError(message);
                        }
                        // reject(message);
                    }
                }
            };
            if (opts.type === "get" && !opts.cache) {
                opts.data._ = (new Date()).getTime();
                opts.url += "?" + encodeUrlParam(opts.data);
            }
            xmlhttp.open(opts.type.toUpperCase(), (window.location.port === "3456" ? "http://localhost:3003/" : "") + opts.url, true);
            xmlhttp.timeout = opts.timeout;
            xmlhttp.setRequestHeader("Accept", "application/json;charset=utf-8");
            xmlhttp.setRequestHeader("Content-Type", "application/json;charset=utf-8");
            if (opts.type === "post") {
                xmlhttp.send(JSON.stringify(opts.data));
            } else {
                xmlhttp.send();
            }
        } else {
            console.log("Your browser does not support XMLHTTP.");
        }
    });
}