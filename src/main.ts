import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { generateDocument } from './swagger';
import { AllExceptionsFilter } from '@/filter/all-exception.filter'; // 全局异常过滤器
import { HttpExceptionsFilter } from '@/filter/http-exception.filter'; // http 异常过滤器
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify'; // 引入 Fastify 适配器

async function bootstrap() {
  // 使用 FastifyAdapter 创建应用
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter()
  );

  // 配置 swagger
  generateDocument(app);

  // 错误异常捕获 和 过滤处理
  app.useGlobalFilters(new AllExceptionsFilter());
  app.useGlobalFilters(new HttpExceptionsFilter());

  // 启动应用
  await app.listen(process.env.PORT ?? 3000, '0.0.0.0');
}
bootstrap();
