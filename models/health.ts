const HealthEndpoint = "health";

class Health {
    health: string;
    message: string;
    constructor(obj: { health: string; message: string }) {
        this.health = obj.health;
        this.message = obj.message;
    }
}

export { Health, HealthEndpoint };
