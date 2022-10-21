import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
} from '@nestjs/common';
import { EventSourcingService } from './event-sourcing.service';
import { UserService } from './user.service';
import { User as UserModel, Profile as ProfileModel } from '@prisma/client';

@Controller()
export class EventSourcingController {
  constructor(
    private readonly eventSourcingService: EventSourcingService,
    private readonly userService: UserService,
  ) {}

  @Get()
  getHello(): string {
    return this.eventSourcingService.getHello();
  }

  @Post('user')
  async signupUser(
    @Body() userData: { name?: string; email: string },
  ): Promise<UserModel> {
    return this.userService.createUser(userData);
  }

  @Patch('user')
  async updateUser(
    @Body() userData: { name?: string; email: string },
  ): Promise<UserModel> {
    return this.userService.updateUser({
      where: { email: userData.email },
      data: userData,
    });
  }

  @Get('user')
  async getAllUsers(): Promise<UserModel[]> {
    return this.userService.users({});
  }

  @Delete('user/:id')
  async deleteUser(@Param('id') id: string): Promise<UserModel> {
    return this.userService.deleteUser({ id });
  }
}
