import labelsJson from './labels.json';
import LabelTopics from './LabelTopics';
// To produce labels.json and LabelTopics.js,
//   run ioc-liturgical-ws net.ages.alwb.utils.transformers.RunToWriteUiLabelsToWebStormProject
// Note that labels.json is replaced once the user logs on.
// Also, you need to build a new npm package for ioc-liturgical-react and install the
// new version in the ioc-tms-app.
// And, be aware that if you have someone work on entering a new user interface language,
// if that language does not exist in your local database, you will get an error after logging
// on.  TODO: detect that situation and handle it gracefully insteading of throwing an error.

class LocalLabels {
  constructor() {
    this.labelsJson = labelsJson;
    this.LabelTopics = LabelTopics;
  };
}
export default LocalLabels;
