import { Injectable } from '@nestjs/common';
import { HelloService } from 'src/hello/hello.service';

@Injectable()
export class UserService {
  // Injecting the hello service
  //Hello Module must export the hello service
  //user module must import the hello module
  constructor(private readonly helloService: HelloService) {}

  getAllUsers() {
    return [
      {
        id: 1,
        name: 'Younis',
      },
      {
        id: 2,
        name: 'Imran',
      },
      {
        id: 3,
        name: 'Zahid',
      },
    ];
  }

  getUserbyId(id: number) {
    const user = this.getAllUsers().find((user) => user.id === id);

    if (!user) throw new Error('User not found');
    return user;
  }

  getWelcomeMessage(userId: number) {
    const user = this.getUserbyId(userId);
    if (!user) throw new Error('User not found');
    return this.helloService.getHelloWithName(user?.name);
  }
}
