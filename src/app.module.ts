import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SerieModule } from './serie/serie.module';
import { EpisodioModule } from './episodio/episodio.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { LoggerModule } from 'nestjs-pino/LoggerModule';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),

    TypeOrmModule.forRoot({
      type: 'postgres', //"mysql",
      host: process.env.POSTGRES_HOST || 'localhost',
      port: parseInt(process.env.POSTGRES_PORT || '5432'),
      username: process.env.POSTGRES_USERNAME || 'postgres',
      password: (process.env.POSTGRES_PASSWORD || 'adminpg').toString(),
      database: process.env.POSTGRES_DATABASE || 'mini_netflix',
      autoLoadEntities: true,
      synchronize: true,
      ssl: process.env.POSTGRES_SSL === 'true',
      extra: {
        ssl:
          process.env.POSTGRES_SSL === 'true'
            ? {
                rejectUnauthorized: false,
              }
            : null,
      },
    }),

    SerieModule,
    EpisodioModule,
    UsersModule,
    AuthModule,
    LoggerModule.forRoot({
      pinoHttp: {
        level: 'debug', // set minimum log level
        transport: {
          target: 'pino-pretty',
          options: {
            colorize: true,
            translateTime: 'HH:MM:ss',
            ignore: 'pid,hostname',
            singleLine: true,
          },
        },
      },
    }),

  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
