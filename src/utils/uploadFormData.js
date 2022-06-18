const { appServer } = require("../config.json"),
  fs = require("fs"),
  request = require("request");
function uploadFormData(n, t, apiMethod, u = {}, headers = {}) {
  const formData = Object.assign({}, { [n]: fs.createReadStream(t) }, u);
  return new Promise((_, rej) => {
    let reqInfo = { url: `${appServer}${apiMethod}`, formData, headers: {} };
    uploadFormData.userToken && (reqInfo.headers.authorization = uploadFormData.userToken),
      headers.headers && Object.assign(reqInfo.headers, headers.headers),
      request.post(reqInfo, function (err, res, body) {
        if (err) return void rej(err);
        let t = JSON.parse(body);
        console.log("Upload successful!  Server responded with:", t.message),
          res(body);
      });
  });
}
(process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0"),
  (uploadFormData.setToken = (e) => {
    uploadFormData.userToken = e;
  }),
  (module.exports = uploadFormData);
