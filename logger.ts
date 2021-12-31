import winston from "winston";

const logConfiguration = {
    'transports': [
        // The Logger configuration below logs to a console and a file.
        new winston.transports.Console({
            level: 'info',
            format: winston.format.combine(
                winston.format.colorize(),
                winston.format.simple())
        }),
        new winston.transports.File({
            level: 'debug',
            filename: './logs/api_log.log',
            format: winston.format.combine(
                winston.format.timestamp(),
                winston.format.json(),
                winston.format.ms()
            ),
           // expressFormat: true,
        }),
        new winston.transports.File({
            level: 'info',
            filename: './logs/api_log.log',
            format: winston.format.combine(
                winston.format.timestamp(),
                winston.format.json(),
                winston.format.ms()
            ),
            //expressFormat: true,
        }),
    ]
}
//Creating a logger and pass it to the Winston configuration object
const logger = winston.createLogger(logConfiguration);

export { logger };
