import { Task } from "@/types";
import { getApiUrl } from "@/utils";
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: getApiUrl(),
});

export const getTasks = async () => await axiosInstance.get(`/tasks`);

export const storeTask = async (payload: Object) =>
  await axiosInstance.post(`/tasks/`, payload);

export const getTaskById = async (id: string) =>
  await axiosInstance.get<Task>(`/tasks/${id}`);

export const updateTask = async (id: string, payload: Object) =>
  await axiosInstance.put(`/tasks/${id}`, payload);

const deleteTask = async (id: string) =>
  await axiosInstance.delete(`/tasks/${id}`);
