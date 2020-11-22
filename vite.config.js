export default {
  proxy: {
    // with options
    "/": {
      target: "http://localhost:7000",
      changeOrigin: true,
      ws: true,
    },
  },
};
