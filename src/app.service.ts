import { Injectable } from '@nestjs/common'
import { responseMessage } from '@/utils/useResponse'
@Injectable()
export class AppService {
  getHello(): any {
    return responseMessage({
      result: 'Hello World',
    })
  }
}
