import test from "../test.json";

export class EndpointModel {
  static getAll() {
    return new Promise((resolve, reject) => {
      const allEndpoint = test.endpoints;
      console.log(allEndpoint, "allEndpoint");
      if (!allEndpoint) reject(null);
      resolve(allEndpoint);
    });
  }
}
