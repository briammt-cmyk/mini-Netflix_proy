import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );

  let port = parseInt(process.env.PORT ?? '3001', 10);
  const maxRetries = 10;
  let retries = 0;

  while (retries < maxRetries) {
    try {
      await app.listen(port);
      console.log(`Application listening on port ${port}`);
      break;
    } catch (error: any) {
      if (error.code === 'EADDRINUSE') {
        port++;
        retries++;
        console.log(`Port ${port - 1} in use, trying ${port}...`);
      } else {
        throw error;
      }
    }
  }

  if (retries === maxRetries) {
    console.error('No available port found after retries');
    process.exit(1);
  }
}
bootstrap();
