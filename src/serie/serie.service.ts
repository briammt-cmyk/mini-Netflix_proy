import { Injectable } from '@nestjs/common';
import { CreateSerieDto } from './dto/create-serie.dto';
import { UpdateSerieDto } from './dto/update-serie.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Serie } from './entities/serie.entity';
import { Repository } from 'typeorm';

@Injectable()
export class SerieService {
  constructor(
    @InjectRepository(Serie)
    private readonly serieRepository: Repository<Serie>,
  ) {}

  async create(createSerieDto: CreateSerieDto) {
    const newSerie = this.serieRepository.create(createSerieDto);
    return await this.serieRepository.save(newSerie);
  }

  async findAll() {
    return await this.serieRepository
      .createQueryBuilder('serie')
      .leftJoinAndSelect('serie.episodios', 'episodio')
      .select([
        'serie.id',
        'serie.titulo',
        'serie.genero',
        'serie.sinopsis',
        'serie.urlPortada',
        'episodio.titulo',
        'episodio.Num_Cap',
        'episodio.duracion',
      ])
      .getMany();
  }

  async findOne(id: number) {
    return await this.serieRepository
      .createQueryBuilder('serie')
      .leftJoinAndSelect('serie.episodios', 'episodio')
      .select([
        'serie.id',
        'serie.titulo',
        'serie.genero',
        'serie.sinopsis',
        'serie.urlPortada',
        'episodio.titulo',
        'episodio.Num_Cap',
        'episodio.duracion',
      ])
      .where('serie.id = :id', { id })
      .getOne();
  }

  async update(id: number, updateSerieDto: UpdateSerieDto) {
    await this.serieRepository.update(id, updateSerieDto);
    return await this.findOne(id);
  }

  async remove(id: number) {
    return await this.serieRepository.delete(id);
  }
}
