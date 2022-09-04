class Fetch {
    apiKey: string;
    pathPrefix: string;
    constructor(key: string, prefix: string) {
        this.apiKey = key;
        this.pathPrefix = prefix;
    }
    async do(path: string, method: string, body: any) {
        const res = await fetch(this.pathPrefix + path, {
            method: method,
            headers: {
                "X-Octane-API-Token": this.apiKey.toString(),
                "Content-Type": "application/json",
            },
            body: JSON.stringify(body),
        });
        return res;
    }
    async rawRequest(
        path: string,
        method: string,
        body: BodyInit | undefined,
        contentType: any
    ) {
        const res = await fetch(this.pathPrefix + path, {
            method: method,
            headers: {
                "X-Octane-API-Token": this.apiKey.toString(),
                "Content-Type": contentType,
            },
            body: body,
        });
        return res;
    }
}
export { Fetch };
