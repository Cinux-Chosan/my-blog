import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import globalConfig = require('../../../config/global.config');

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // set global prefix
  app.setGlobalPrefix(globalConfig.serverPrefix);
  // listening
  await app.listen(globalConfig.serverPort);
}
bootstrap();
