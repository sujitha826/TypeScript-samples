import winston from "winston";

const logConfiguration = {
    'transports': [
        new winston.transports.File({
            level: 'error',
            filename: './logs/errors_log.log',
            format: winston.format.combine(
                winston.format.timestamp(),
                winston.format.json(),
                winston.format.ms()
            ),
            //expressFormat: true,
        })
    ]
}
const logger_err = winston.createLogger(logConfiguration);

export { logger_err };