export default {
  port: 3000,
  watch: true,
  nodeResolve: true,
  appIndex: 'index.html',
  open: true,
  middleware: [
    async function rewriteApi(context, next) {
      if (context.url.startsWith('/api/photos')) {
        const photosHandler = await import('./api/photos.js');
        
        const mockRes = {
          status: (code) => mockRes,
          json: (data) => {
            context.response.type = 'application/json';
            context.body = JSON.stringify(data);
          }
        };
        
        photosHandler.default({}, mockRes);
        return;
      }
      return next();
    }
  ]
};
