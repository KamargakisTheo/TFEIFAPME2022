module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '8b2a9d95744c80bc5e3ea7bd4e87fb4d'),
  },
});
