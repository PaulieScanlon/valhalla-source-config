exports.createPages = async ({ actions: { createRedirect } }) => {
  createRedirect({
    fromPath: '/*',
    toPath: process.env.APOLLO_SANDBOX_URL
  });
};
