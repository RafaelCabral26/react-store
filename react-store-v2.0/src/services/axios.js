import axios from "axios";

const configure = {
    local: "http://localhost:5000/"
    //local: BOTA O SEU LOCALHOST AQUI E COMENTA O MEU, SEU CALVO
  };
  
  const http = axios.create({
    baseURL: configure.local,
    headers: {
      "Access-Control-Allow-Origin": "*",
      // 'Access-Control-Allow-Methods': '*',
      // 'Access-Control-Allow-Headers': '*',
      "Content-Type": "application/json;charset=utf-8",
    },
  });

  export default http;