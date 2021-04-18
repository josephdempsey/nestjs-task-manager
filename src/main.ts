import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const logger = new Logger('bootstrap');

  const app = await NestFactory.create(AppModule);
  // Dev only for now
  app.enableCors();
  await app.listen(3000);

  logger.log(`Application started on port ${3000}`);
}
bootstrap();
