import apiClient from "./api-client";

export interface entity {
    id: number;
    name: string;
    username: string;
  }

class HtppService {
    endpoint: string;
    constructor(endpoint: string){
        this.endpoint = endpoint;
    }
    getAll<T>() {
        const controller = new AbortController();
        const request = apiClient
            .get<T[]>(this.endpoint, {signal: controller.signal});
        return { request, cancel: () => controller.abort()}
    }
    delete(id: number){
        return apiClient.delete(this.endpoint + "/" + id);
    }
    create<T>(entity: T){
        return apiClient.post(this.endpoint + "/", entity);
    }
    update<T extends entity>(entity: T){
        return apiClient.patch(this.endpoint + "/" + entity.id, entity);
    }
}

const create = (endpoint: string) => new HtppService(endpoint);
export default create;