import axios from "axios"
import _ from "lodash"
import {BASE_URL} from "./constants"

axios.defaults.headers = { "Access-Control-Allow-Origin": "*" };
axios.defaults.baseURL = BASE_URL;

class ApiWorker{
    getResFrame = () => ({
        data: null,
        success: false,
        code: null,
        message: "",
        additionalInfo: "",
      });

      processError = (e:any) => {
        const result = this.getResFrame();
    
        if (_.get(e, "Errors") && _.get(e, "Errors").lenght !== 0) {
          result.message = _.get(e, "Errors[0].Message");
          result.code = _.get(e, "Errors[0].ErrorCode");
          result.additionalInfo = _.get(e, "Errors[0].AdditionalInfo");
        } else if (e.message) {
          result.message = e.message;
        } else {
          result.message = "something went wrong";
        }
    
        return result;
      };

      // prepareData = (data:any) => {
      //   let result = {};
    
      //   result = {
      //     RequestHeader: {
      //       ..._.get(data, "RequestHeader"),
      //       // EmailId: this.emailId
      //     },
      //   };
    
      //   return result;
      // };

      send = async (method:any, url:string, body = {}, params = {}) => {
        let result = this.getResFrame();
        let response = null;
        // const updatedReqHeader = this.prepareData(body);
        const data = { ...body };
        const opt = {
          method,
          url,
          data,
          params,
        };
        try {
          axios.defaults.withCredentials = true;
          response = await axios(opt as any);
          console.log(opt.url, "headers", response);
    
          // if (_.get(response, 'status') === 200 && _.get(response, 'data.ResponseHeader.Succeeded')) {
          // 	result.success = _.get(response, 'data.ResponseHeader.Succeeded');
          // } else {
          // 	result = this.processError(_.get(response, 'data.ResponseHeader'));
          // }
          // result.data = _.omit(_.get(response, 'data'), ['ResponseHeader']);
          result = response as any;
        } catch (e) {
          result = this.processError(e);
        }
        return result;
      };
}

export default new ApiWorker();
