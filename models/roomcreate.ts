
const RoomCreateEndpoint = "room";

class RoomCreate {
    id: bigint;
    constructor(obj: { id: string }) {
        this.id = BigInt(obj.id);
    }
}

export { RoomCreate, RoomCreateEndpoint };
