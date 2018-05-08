import apisauce from "apisauce";

import { apiUrlPrefix as proxyBaseURL } from "../config";

export interface IInstallation {
  uuid: string;
  token: string;
  platform: string;
}

const create = () => {
  const api = apisauce.create({
    baseURL: proxyBaseURL,
    timeout: 1500
  });

  const setBearerToken = (token: string) => {
    api.setHeader("Authorization", `Bearer ${token}`);
    return Promise.resolve();
  };

  const updateInstallation = (installation: IInstallation) => {
    return api.put(`api/v1/installations/${installation.uuid}`, {
      platform: installation.platform,
      pushChannel: installation.token
    });
  };
};

export default {
  create
};