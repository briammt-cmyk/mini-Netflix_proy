import { Module } from '@nestjs/common';
import { EpisodioService } from './episodio.service';
import { EpisodioController } from './episodio.controller';
import { SerieModule } from '../serie/serie.module';
import { Episodio } from './entities/episodio.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Episodio]), SerieModule],
  controllers: [EpisodioController],
  providers: [EpisodioService],
})
export class EpisodioModule {}
