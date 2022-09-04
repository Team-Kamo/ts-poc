import BigNumber from "../node_modules/bignumber.js/bignumber";

const RoomCreateEndpoint = "room";

class RoomCreate {
    id: bigint;
    constructor(obj: { id: BigNumber }) {
        this.id = BigInt(obj.id.toString());
    }
}

export { RoomCreate, RoomCreateEndpoint };
