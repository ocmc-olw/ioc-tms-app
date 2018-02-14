/**
 * Created by mac002 on 1/2/17.
 */
import axios from 'axios';

const adminApi = "/admin/api/v1/";
const dbApi = "/db/api/v1/";
const user = "/user/";
const hostname = document.location.hostname;
const protocol = document.location.protocol;

var getDbServer = () => {
  return protocol +  "//" + hostname + ":7474";
};

var getWsServer = () => {
  if (hostname === "localhost") {
    return protocol +  "//" + hostname + ":4567";
  } else {
    return protocol +  "//" + hostname;
  }
};

export default {
  getDbInfo: () => {
    return new Promise(function(resolve,reject) {
      axios.get(getWsServer() + "/admin/api/v1/info"
      )
        .then(response => {
          resolve(
              response.data
          );
        })
        .catch( (error) => {
          reject(Error());
        });
    })
  }
  , isReadOnly: () => {
    axios.get(getWsServer() + "/admin/api/v1/info"
    )
    .then(response => {
      return response.data.databaseReadOnly;
    })
    .catch( (error) => {
      return false; // when in doubt, protect it
    });
  },
  getDbUserAuthPath: () => {
    return getDbServer() + user;
  }
  , getDbServerPath: () => { return getDbServer();}
  , getWsServerPath: () => { return getWsServer();}
  , getWsServerAdminApi: () => { return getWsServer() + adminApi;}
  , getWsServerDbApi: () => { return getWsServer() + dbApi;}
}
