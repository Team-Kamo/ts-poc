class RoomConnectRequest {
    name: string;
    method: string;
    constructor(name: string, method: string) {
        this.name = name;
        this.method = method;
    }
}

class RoomCreateRequest {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
}

export { RoomConnectRequest, RoomCreateRequest };
