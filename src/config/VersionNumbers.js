/**
 * Created by mac002 on 1/2/17.
 */


// because of the way the install bash script works
// the last number needs to be 9 or less
const packageNumber = "2021.09.06.03";

module.exports = {
  getPackageNumber: () => { return packageNumber;}
};
