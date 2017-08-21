const env = process.env;

export default {
	port : env.port || 8081,
	host : env.host || "http://0.0.0.0",
}