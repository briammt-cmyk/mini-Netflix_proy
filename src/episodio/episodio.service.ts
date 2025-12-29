import { Injectable } from '@nestjs/common';
import { CreateEpisodioDto } from './dto/create-episodio.dto';
import { UpdateEpisodioDto } from './dto/update-episodio.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Episodio } from './entities/episodio.entity';
import { Repository } from 'typeorm';
import { Serie } from './../serie/entities/serie.entity';

@Injectable()
export class EpisodioService {
  constructor(
    @InjectRepository(Episodio)
    private readonly episodioRepository: Repository<Episodio>,
    @InjectRepository(Serie)
    private readonly serieRepository: Repository<Serie>,
  ) {}

  async create(createEpisodioDto: CreateEpisodioDto) {
    const serie = await this.serieRepository.findOneBy({
      id: createEpisodioDto.serieId,
    });

    if (!serie) {
      throw new Error('Serie no encontrada o no existente');
    }

    const newEpisodio = this.episodioRepository.create({
      ...createEpisodioDto,
      serie: serie,
    });
    return await this.episodioRepository.save(newEpisodio);
  }

  async findAll() {
    return await this.episodioRepository
      .createQueryBuilder('episodio')
      .leftJoinAndSelect('episodio.serie', 'serie')
      .select([
        'episodio.id',
        'episodio.titulo',
        'episodio.duracion',
        'episodio.Num_Cap',
        'serie.titulo',
      ])
      .getMany();
  }

  async findOne(id: number) {
    return await this.episodioRepository
      .createQueryBuilder('episodio')
      .leftJoinAndSelect('episodio.serie', 'serie')
      .select([
        'episodio.id',
        'episodio.titulo',
        'episodio.duracion',
        'episodio.Num_Cap',
        'serie.titulo',
      ])
      .where('episodio.id = :id', { id })
      .getOne();
  }

  async update(id: number, updateEpisodioDto: UpdateEpisodioDto) {
    await this.episodioRepository.update(id, updateEpisodioDto);
    return await this.episodioRepository.findOneBy({ id });
  }

  async remove(id: number) {
    await this.episodioRepository.delete(id);
    return { message: `Episodio con ID ${id} eliminado correctamente` };
  }
}
