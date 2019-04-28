export declare class EventDataType {
    readonly from: string;
    readonly to: string;
    readonly uuid: string;
    readonly conversation_uuid: string;
    readonly status: string;
    readonly direction: string;
    readonly timestamp: string;
}
export declare class AppController {
    constructor();
    getHello(): Object;
    postEvent(body: EventDataType): Promise<void>;
}
export declare class AppModule {
}
