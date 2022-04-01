import './utils/logger';
import { getLogger } from 'log4js';
import mongoose from 'mongoose';
import util from 'util';

import app from './app';

util.inspect.defaultOptions.depth = null;

const logger = getLogger('app');
const port = 8080;

async function start() {
  try {
    logger.info('mongodb connecting');
    await mongoose.connect(
      'mongodb://localhost:27017/?replicaSet=rs0&readPreference=primary&appname=MongoDB%20Compass&ssl=false',
    );
    logger.info('mongodb connected');
  } catch (error) {
    logger.error('mongodb connect error:', error);
  }

  app.listen(port, async () => {
    logger.info('Listen on port:', port);
  });
}

start();
