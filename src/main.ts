import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { generateDocument } from './swagger'

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  generateDocument(app)
  await app.listen(process.env.PORT ?? 3000);

}
bootstrap();
