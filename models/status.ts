const StatusEndpoint = "/status";

class Status {
    device: string;
    hash: string;
    mime: string;
    name: string;
    timestamp: number;
    type: string;
    constructor(obj: {
        device: string;
        hash: string;
        mime: string;
        name: string;
        timestamp: number;
        type: string;
    }) {
        this.device = obj.device;
        this.hash = obj.hash;
        this.mime = obj.mime;
        this.name = obj.name;
        this.timestamp = obj.timestamp;
        this.type = obj.type;
    }
}

export { Status, StatusEndpoint };
