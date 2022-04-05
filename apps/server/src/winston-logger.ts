import * as DailyRotateFile from 'winston-daily-rotate-file';
import * as winston from 'winston';
import { WinstonModule } from 'nest-winston';

const rotate = new DailyRotateFile({
  filename: 'application-%DATE%.log',
  dirname: 'logs',
  datePattern: 'YYYY-MM-DD',
  zippedArchive: true,
  maxSize: '20m',
  maxFiles: '28d',
});

export default WinstonModule.createLogger({
  format: winston.format.combine(
    winston.format.timestamp({
      format: 'hh:MM:ss',
    }),
    winston.format.printf(
      (info) => `${info.timestamp} [${info.level}] ${info.message}`,
    ),
  ),
  transports: [
    rotate,
    new winston.transports.Console({
      format: winston.format.combine(
        winston.format.colorize(),
        winston.format.printf((info) => `[${info.level}] ${info.message}`),
      ),
    }),
  ],
});
