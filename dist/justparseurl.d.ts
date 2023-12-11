declare class JustParseUrl {
    private url;
    protocol: string;
    slashes: boolean;
    auth?: string;
    username: string;
    password: string;
    host: string;
    hostname: string;
    port: string;
    pathname: string;
    query: Record<string, string>;
    hash: string;
    href: string;
    origin: string;
    constructor(input: string);
    private parseQuery;
}
export default JustParseUrl;
