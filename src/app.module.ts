import { MovieModule } from './movie/movie.module';
import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { AuthMiddleware } from './middlewares/authmiddleware';
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      cache: true,
      expandVariables: true,
    }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        useNewUrlParser: true,
        uri: configService.get<string>('MONGO_URI'),
      }),
    }),
    MovieModule,
    UsersModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
    .apply(AuthMiddleware)
    .exclude({ path: 'signup', method: RequestMethod.POST })
    .exclude({ path: 'signin', method: RequestMethod.POST })
    .forRoutes({ path: '*', method: RequestMethod.ALL });
  }
}
