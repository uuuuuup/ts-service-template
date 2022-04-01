import 'source-map-support/register';
import './utils/logger';
import serverlessExpress from '@vendia/serverless-express';
import { APIGatewayEvent, Context, Callback } from 'aws-lambda';
import { getLogger } from 'log4js';

import app from './app';

const logger = getLogger('app');

let serverlessExpressInstance: (event: APIGatewayEvent, context: Context, callback: Callback) => any;

logger.info('api-service cold start');

async function setup(event: APIGatewayEvent, context: Context, callback: Callback) {
  serverlessExpressInstance = serverlessExpress({ app, resolutionMode: 'CALLBACK' });
  return serverlessExpressInstance(event, context, callback);
}

export function handler(event: APIGatewayEvent, context: Context, callback: Callback) {
  if (serverlessExpressInstance) {
    return serverlessExpressInstance(event, context, callback);
  }

  return setup(event, context, callback);
}
