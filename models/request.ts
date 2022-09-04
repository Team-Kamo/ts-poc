class RoomConnectRequest {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
}

class RoomCreateRequest {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
}

export { RoomConnectRequest, RoomCreateRequest };
