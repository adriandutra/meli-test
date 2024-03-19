const appConfig = {
    host: process.env.APP_HOST || "localhost",
    port: process.env.APP_DOCKER_PORT || 3000,
};

export default appConfig;