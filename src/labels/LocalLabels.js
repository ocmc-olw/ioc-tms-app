import labelsJson from './labels.json';
import LabelTopics from './LabelTopics';
// To produce labels.json and LabelTopics.js,
//   run ioc-liturgical-ws net.ages.alwb.utils.transformers.LabelsNeoToJson
// Note that labels.json is replaced once the user logs on.

class LocalLabels {
  constructor() {
    this.labelsJson = labelsJson;
    this.LabelTopics = LabelTopics;
  };
}
export default LocalLabels;
