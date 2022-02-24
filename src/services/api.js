import SteinStore from "stein-js-client";
import SteinConfig from "../constant/stein";

const store = new SteinStore(SteinConfig.base_url);

export const option = {
  getArea: () => store.read(SteinConfig.option_area),
  getSize: () => store.read(SteinConfig.option_size)
};

export function getList () {
  return store.read(SteinConfig.list);
}

export function getByID (uuid) {
  return store.read(SteinConfig.list, { search: { uuid } });
}

export function createList (payload) { 
 return store.append(SteinConfig.list, [payload]);
}

export function updateList (uuid, payload) {
  return store.edit(SteinConfig.list, { search: { uuid }, set: payload });
}

export function deleteList (uuid) {
  return store.delete(SteinConfig.list, { search: { uuid } });
}