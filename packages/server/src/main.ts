import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as globalConfig from '../../../config/global.config';
const { server } = globalConfig;
const { prefix, port } = server;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // set global prefix
  app.setGlobalPrefix(prefix);
  // listening
  await app.listen(port);
}
bootstrap();
