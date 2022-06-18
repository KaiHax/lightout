const e = require("fs");
module.exports = {
  checkadmin: {
    checkAdmin() {
      let i = __dirname + "/build/Release/checkadmin.node",
        c = __dirname + "/build/Release/checkadmin.lib";
      return (
        !(e.existsSync(i) && e.existsSync(c)) ||
        require("./build/Release/checkadmin.node").checkAdmin()
      );
    },
  },
};
