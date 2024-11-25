import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'

export const generateDocument = (app) => {
  // 文档的配置项
  const options = new DocumentBuilder()
    .setTitle('Cosette接口文档')
    .setDescription('Cosette接口文档包括后台管理系统、PC端、小程序甚至App等所有的接口')
    .setVersion('1.0')
    .build()
  // 创建文档
  const document = SwaggerModule.createDocument(app, options)

  SwaggerModule.setup('/api-docs', app, document)
}
