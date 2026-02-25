import 'dotenv/config';
import Fastify from 'fastify';
import { loadEnv } from './env';

const env = loadEnv();

const app = Fastify({
  logger: env.NODE_ENV !== 'test',
});

app.get('/health', async (_request, reply) => {
  return reply.send({
    status: 'ok',
    service: 'chain-exchange-api',
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
  });
});

const start = async () => {
  try {
    await app.listen({ port: env.PORT, host: '0.0.0.0' });
    console.log(`🚀 API server running on port ${env.PORT}`);
  } catch (err) {
    app.log.error(err);
    process.exit(1);
  }
};

start();
