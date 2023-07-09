import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { User, UserSchema } from './schemas/user.schema';
import { UsersService } from './user.service';
import { UsersController } from './user.controller';
import { UsersRepository } from './users.repository';

@Module({
    imports: [MongooseModule.forFeature([{ name: User.name, schema: UserSchema }], 'users')],
    providers: [UsersService, UsersRepository] ,
    controllers: [UsersController],
    exports:[UsersRepository]
})
export class UsersModule {}
