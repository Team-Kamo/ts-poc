const //Error
    ERR_DUP_DEVICE = "ERR_DUP_DEVICE", //Connected with duplicated device name
    ERR_BAD_REQUEST = "ERR_BAD_REQUEST", // Generic bad request
    ERR_INVALID_ID = "ERR_INVALID_ID", // Room ID is invalid
    ERR_INTERNAL_EXCEPTION = "ERR_INTERNAL_EXCEPTION", // Server side error
    ERR_NO_SUCH_ROOM = "ERR_NO_SUCH_ROOM", // No such room exists
    ERR_NO_STATUS_SET = "ERR_NO_STATUS_SET", // Status is not set
    ERR_DEVICE_NOT_CONNECTED = "ERR_DEVICE_NOT_CONNECTED", // Device is not connected
    ERR_CONTENT_MISMATCH = "ERR_CONTENT_MISMATCH", // Content crc hash or mime is wrong
    ERR_BAD_HASH = "ERR_BAD_HASH", // Hash style is wrong
    ERR_UNAUTHORIZED = "ERR_UNAUTHORIZED", // Bad token
    //Enum
    Faulty = "faulty",
    Degraded = "degraded",
    Healthy = "healthy",
    TypeClipboard = "clipboard",
    TypeFile = "file";

class APIError {
    code: string;
    reason: string;
    constructor(obj: { code: string; reason: string }) {
        this.code = obj.code;
        this.reason = obj.reason;
    }
}

export {
    APIError,
    ERR_DUP_DEVICE,
    ERR_BAD_REQUEST,
    ERR_INVALID_ID,
    ERR_INTERNAL_EXCEPTION,
    ERR_NO_SUCH_ROOM,
    ERR_NO_STATUS_SET,
    ERR_DEVICE_NOT_CONNECTED,
    ERR_CONTENT_MISMATCH,
    ERR_BAD_HASH,
    ERR_UNAUTHORIZED,
    Faulty,
    Degraded,
    Healthy,
    TypeClipboard,
    TypeFile,
};
