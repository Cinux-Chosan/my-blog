import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from './schemas/user.schema';

@Module({
  imports: [
    MongooseModule.forFeatureAsync([{
      name: User.name,
      useFactory: () => {
        UserSchema.pre('save', function (this: User) {
          this.createdAt = this.createdAt || new Date
        })
        return UserSchema
      }
    }])
  ],
  providers: [UserService],
  exports: [UserService]
})
export class UserModule { }
