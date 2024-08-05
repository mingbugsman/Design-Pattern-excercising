class APIClient {
    constructor(builder) {
        this.baseURL = builder.baseURL;
        this.headers = builder.headers;
        this.queryParams = builder.queryParams;
        this.timeout = builder.timeout;
    }

    getRequestConfig() {
        return {
            baseURL : this.baseURL,
            headers : this.headers,
            params : this.queryParams,
            timeout : this.timeout
        };
    }
};

class APIClientBuilder {
    constructor(baseURL) {
        this.baseURL = baseURL;
        this.headers = {};
        this.queryParams = {};
    };

    setHeader(key, value) {
        this.headers[key] = value;
        return this;
    }

    addQueryParam(key, value) {
        this.queryParams[key] = value;
        return this;
    }

    setTimeout(timeout) {
        this.timeout = timeout;
        return this;
    }

    build() {
        return new APIClient(this);
    }
}

const apiClient = new APIClientBuilder('https://api.example.com')
  .setHeader('Authorization', 'Bearer token')
  .setHeader('Content-Type', 'application/json')
  .addQueryParam('lang', 'en')
  .setTimeout(5000)
  .build();

console.log(apiClient.getRequestConfig());