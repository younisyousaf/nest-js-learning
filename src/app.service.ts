import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { log } from 'console';

@Injectable()
export class AppService {
    constructor(
        private configService: ConfigService
    ) { }
    getHello(): string {
        // const port = this.configService.get('PORT', '5000');
        const port = this.configService.get('PORT');
        console.log('PORT', port);
        return 'Hello World!';
    }
}
