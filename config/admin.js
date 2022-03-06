module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '705db8f23759d1a41e9ed76a8d89f419'),
  },
});
