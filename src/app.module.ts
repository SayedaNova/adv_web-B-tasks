import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import {GuardianModule} from './guardian/guardian.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
//import { AdminModule } from './admin/admin.module';



@Module({
  imports: [GuardianModule, TypeOrmModule.forRoot(
    { type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'nova',
    database: 'nova',//Change to your database name
    autoLoadEntities: true,
    synchronize: true,
    } ),
    ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
