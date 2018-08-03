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

const restGetAddress = (callback) => {
  return new Promise((resolve, reject) => {
    let path = "https://api.ipify.org/?format=json";
    let result = {
      ip: ""
      , status: 0
    };

    axios.get(path)
        .then(response => {
          result.status = response.status;
          result.ip = response.data.ip;
          callback(result);
        })
        .catch((error) => {
          result.status = error.status;
          callback(result);
        });
  })
};

const restGetLocation = (address, callback) => {
  return new Promise((resolve, reject) => {
    let path = "http://ip-api.com/json/" + address;

    let result = {
      location: ""
      , status: 0
    };

    axios.get(path)
        .then(response => {
          result.status = response.status;
          result.location = response.data.countryCode
              + "|"
              + response.data.country
              + "|"
              + response.data.region
              + "|"
              + response.data.regionName
              + "|"
              + response.data.city
          ;
          callback(result);
        })
        .catch((error) => {
          result.status = error.status;
          callback(result);
        });
  })
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
  , restGetAddress: (
      callback
  ) => {
    return restGetAddress(
        callback
    );
  }
  , restGetLocation: (
      address
      , callback
  ) => {
    return restGetLocation(
        address
        , callback
    );
  }
}
