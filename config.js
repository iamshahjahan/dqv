const env = process.env;

export default {
	port : env.port || 8085,
	host : env.host || "http://dailyquranicverses.com",
}