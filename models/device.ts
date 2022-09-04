class Device {
    name: string;
    timestamp: number;
    constructor(obj: { name: string; timestamp: number }) {
        this.name = obj.name;
        this.timestamp = obj.timestamp;
    }
}
