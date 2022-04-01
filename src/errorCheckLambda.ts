import 'source-map-support/register';
import './utils/logger';
import { APIGatewayEvent, Context, Callback } from 'aws-lambda';
import { getLogger } from 'log4js';

const logger = getLogger('app');

export function handler(event: APIGatewayEvent, context: Context, callback: Callback) {
  logger.info('error-checker called');
  context.callbackWaitsForEmptyEventLoop = false;
  setTimeout(() => {
    logger.info('error-checker completed');
    callback(null, 'succeeded');
  }, 3000);
}
