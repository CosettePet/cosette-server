import { Injectable } from '@nestjs/common'
import { responseMessage } from '@/utils/useResponse'
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
@Injectable()
export class AppService {
  async getHello(): Promise<Promise<any>> {
    // try {
    //   // 插入数据到 User 表

    //   const newUser = await prisma.user.create({
    //     data: {
    //       name: 'Alice',
    //       email: 'alice@example.com',
    //       phone: '14823456789'
    //     },
    //   });
    //   console.log('New User Created:', newUser);
    // } catch (error) {
    //   console.error("插入数据时出错：", error);
    // } finally {
    //   // 关闭 Prisma 客户端连接
    //   await prisma.$disconnect();
    // }
    return responseMessage({
      result: 'Hello World111',
    })
  }
}
