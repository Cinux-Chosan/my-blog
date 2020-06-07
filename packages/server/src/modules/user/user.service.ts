import { Injectable } from '@nestjs/common';
import { UserDto } from './dto/user'
import { User } from './schemas/user.schema'
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) { }

  findOne(userInfo: UserDto) {
    return this.userModel.findOne(userInfo);
  }
}
