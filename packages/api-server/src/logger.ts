import pino from "pino";
import LoggerOptions = pino.LoggerOptions;

const opts: LoggerOptions = {
  base: {
    service: 'api-server'
  },
  transport: {
    targets: [
      {
        level: process.env.LOG_LEVEL || 'info',
        target: 'pino-pretty',
        options: {
          ignore: 'pid,hostname,service',
        }
      },
      {
        level: 'warn',
        target: 'pino-sentry-transport',
        options: {
          sentry: {
            dsn: process.env.SENTRY_DSN,
            environment: process.env.NODE_ENV || 'production',
            tracesSampleRate: 1.0,
          },
          tags: ['service'],
          withLogRecord: true,
        }
      }
    ]
  },
};

module.exports = pino(opts);