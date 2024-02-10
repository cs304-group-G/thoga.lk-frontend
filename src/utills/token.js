const Cookies = require("js-cookie");

exports.getToken = () => {
  const tokendata = Cookies.get("au_thogalk");
  return tokendata;
};
