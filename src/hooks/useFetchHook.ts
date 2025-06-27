/* eslint-disable import/no-unresolved */
/* eslint-disable consistent-return */
import { useState } from 'react';
import Axios from 'config/Axios';
import { getAuthToken } from 'utils/cookies';

const useFetchHook = (Url: string) => {
  const token = getAuthToken();

  Axios.defaults.headers.common = { Authorization: `Bearer ${token}` };
  const [data, setData] = useState<any>();
  const Get = async () => {
    const response = await Axios.get(Url);

    setData(response?.data);
    return response?.data;
  };
  const GetPayload = async (payload: any) => {
    const response = await Axios.get(`${Url}?${payload}`);

    setData(response?.data);
    return response?.data;
  };
  const GetPayloadWithId = async (payload: any) => {
    const response = await Axios.get(`${Url}/${payload}`);
    setData(response?.data);
    return response?.data;
  };

  const DeletePayload = async (payload: any) => {
    const response = await Axios.delete(`${Url}?id=${payload}`);

    setData(response?.data);
  };
  const Post = async (payload: any) => {
    let config = {};
    if (payload instanceof FormData) {
      config = {
        headers: {
          'Content-Type': 'undefined',
        },
      };
    }
    const response = await Axios.post(Url, payload, config);

    setData(response?.data);
    return response?.data;
  };
  const PostPayload = async (payload: any) => {
    const response = await Axios.post(`${Url}/${payload}`);

    setData(response?.data);
    return response?.data;
  };

  const Delete = async (payload: any) => {
    const response = await Axios.delete(Url, payload);

    setData(response?.data);
    return response?.data;
  };
  const Update = async (payload: any) => {
    let config = {};
    if (payload instanceof FormData) {
      config = {
        headers: {
          'Content-Type': 'undefined',
        },
      };
    }
    const response = await Axios.put(Url, payload, config);

    setData(response?.data);
    return response?.data;
  };
  const UpdatePayloadWithId = async (id: string, payload: any) => {
    let config = {};
    if (payload instanceof FormData) {
      config = {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      };
    }

    const response = await Axios.put(`${Url}/${id}`, payload, config);

    setData(response?.data);
    return response?.data;
  };

  const UpdatePayload = async (payload: any) => {
    const response = await Axios.put(`${Url}/${payload}`);

    setData(response?.data);
    return response?.data;
  };
  const UpdateSpecialPayload = async (id: any, payload: any) => {
    const response = await Axios.put(`${Url}/${id}`, payload);

    setData(response?.data);
    return response?.data;
  };

  const service = {
    Get,
    Post,
    Update,
    GetPayload,
    DeletePayload,
    Delete,
    UpdatePayload,
    UpdatePayloadWithId,
    UpdateSpecialPayload,
    GetPayloadWithId,
    PostPayload,
  };

  return [data, service];
};

export default useFetchHook;
