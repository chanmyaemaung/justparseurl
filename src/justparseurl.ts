class JustParseUrl {
  private url: URL;

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

  constructor(input: string) {
    this.url = new URL(input);
    this.protocol = this.url.protocol;
    this.slashes = this.url.protocol.endsWith(":");
    this.auth =
      this.url.username && this.url.password
        ? `${this.url.username}:${this.url.password}`
        : undefined;
    this.username = this.url.username;
    this.password = this.url.password;
    this.host = this.url.host;
    this.hostname = this.url.hostname;
    this.port = this.url.port;
    this.pathname = this.url.pathname;
    this.query = this.parseQuery();
    this.hash = this.url.hash;
    this.href = this.url.href;
    this.origin = this.url.origin;
  }

  private parseQuery() {
    const query: Record<string, string> = {};
    this.url.searchParams.forEach((value, key) => {
      query[key] = value;
    });
    return query;
  }
}

export default JustParseUrl;
