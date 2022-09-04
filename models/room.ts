const RoomEndpoint = "room/";

class Room {
    id: bigint;
    name: string;
    devices: Device[] = [];
    constructor(obj: { id: string; name: string; devices: Device[] }) {
        this.id = BigInt(obj.id);
        this.name = obj.name;
        obj.devices.forEach((element: any) => {
            this.devices.push(new Device(element));
        });
    }
}

export { Room, RoomEndpoint };
