import log4js from 'log4js';

const pattern = '%d %p [%c] %f{1}@%l: %m';

const option = {
  appenders: { out: { type: 'stdout', layout: { type: 'pattern', pattern } } },
  categories: { default: { appenders: ['out'], level: 'info', enableCallStack: true } },
};

log4js.configure(option);
