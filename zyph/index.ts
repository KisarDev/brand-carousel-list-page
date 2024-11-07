import config from "./config.json";
import StateZ from "statez";
window[`__zsdk_${config.id}__`] = new StateZ(config.props);