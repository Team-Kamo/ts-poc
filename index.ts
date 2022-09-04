import { Fetch } from "./fetch/fetch.js";
import { Health, HealthEndpoint } from "./models/health.js";
import { RoomCreate, RoomCreateEndpoint } from "./models/roomcreate.js";
import { RoomConnectRequest, RoomCreateRequest } from "./models/request.js";
import { APIError, Faulty } from "./models/error.js";
import { Room, RoomEndpoint } from "./models/room.js";
import JsonParseBigInt from "./node_modules/json-parse-bigint/index.js";
import { Status, StatusEndpoint } from "./models/status.js";

class Client {
    apiKey: string;
    pathPrefix: string;
    fetch: Fetch;
    timer: number;
    isAvailable: boolean;
    constructor(apiKey: string | string, pathPrefix: string | string) {
        this.apiKey = apiKey;
        this.pathPrefix = pathPrefix;
        this.fetch = new Fetch(this.apiKey, this.pathPrefix);
        this.timer = setInterval(this.checkHealth, 1800);
        this.isAvailable = false;
        this.checkHealth();
    }
    async checkHealth() {
        const health = await this.GetHealth();
        if (health instanceof Health && health.health != Faulty) {
            this.isAvailable = true;
        } else {
            this.isAvailable = false;
        }
    }
    async GetHealth() {
        const res = await this.fetch.do(HealthEndpoint, "GET", undefined);
        if (res.status != 200) {
            return new APIError(await res.json());
        }
        return new Health(await res.json());
    }
    async CreateRoom(obj: RoomCreateRequest) {
        const res = await this.fetch.do(RoomCreateEndpoint, "POST", obj);
        if (res.status != 200) {
            return new APIError(await res.json());
        }
        return new RoomCreate(JsonParseBigInt(await res.text()));
    }
    async GetRoom(id: bigint) {
        const res = await this.fetch.do(RoomEndpoint + id, "GET", undefined);
        if (res.status != 200) {
            return new APIError(await res.json());
        }
        return new Room(await res.json());
    }
    async ConnectRoom(id: bigint, obj: RoomConnectRequest) {
        const res = await this.fetch.do(RoomEndpoint + id, "POST", obj);
        if (res.status != 200) {
            return new APIError(await res.json());
        }
        return null;
    }
    async DeleteRoom(id: bigint) {
        const res = await this.fetch.do(RoomEndpoint + id, "DELETE", undefined);
        if (res.status != 200) {
            return new APIError(await res.json());
        }
        return null;
    }
    async DeleteStatus(id: bigint) {
        const res = await this.fetch.do(
            RoomEndpoint + id + StatusEndpoint,
            "DELETE",
            undefined
        );
        if (res.status != 200) {
            return new APIError(await res.json());
        }
        return null;
    }
    async GetStatus(id: bigint) {
        const res = await this.fetch.do(
            RoomEndpoint + id + StatusEndpoint,
            "GET",
            undefined
        );
        if (res.status != 200) {
            return new APIError(await res.json());
        }
        return new Status(await res.json());
    }
    async SetStatus(id: bigint, obj: Status) {
        const res = await this.fetch.do(
            RoomEndpoint + id + StatusEndpoint,
            "PUT",
            obj
        );
        if (res.status != 200) {
            return new APIError(await res.json());
        }
        return null;
    }
    async DeleteContent(id: bigint) {
        const res = await this.fetch.do(
            RoomEndpoint + id + StatusEndpoint,
            "GET",
            undefined
        );
        if (res.status != 200) {
            return new APIError(await res.json());
        }
        return null;
    }
    async GetContent(id: bigint) {
        const res = await this.fetch.rawRequest(
            RoomEndpoint + id + StatusEndpoint,
            "GET",
            undefined,
            undefined
        );
        if (res.status != 200) {
            return new APIError(await res.json());
        }
        return await res.blob();
    }
    async SetContent(id: bigint, blob: Blob, type: string | undefined) {
        const res = await this.fetch.rawRequest(
            RoomEndpoint + id + StatusEndpoint,
            "GET",
            blob,
            type === undefined ? blob.type : type
        );
        if (res.status != 200) {
            return new APIError(await res.json());
        }
        return await res.blob();
    }
}

export { Client };
