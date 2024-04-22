declare const _default: () => {
    database: {
        type: string;
        host: string;
        port: number;
        username: string;
        password: string;
        database: string;
        entities: string[];
        synchronize: boolean;
    };
    graphql: {
        schema: string;
    };
    elasticsearch: {
        node: string;
        username: string;
        password: string;
    };
};
export default _default;
