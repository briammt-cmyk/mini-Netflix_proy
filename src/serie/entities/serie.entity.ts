import { Episodio } from './../../episodio/entities/episodio.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Serie {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  titulo: string;

  @Column()
  genero: string;

  @Column()
  sinopsis: string;

  @Column()
  urlPortada: string;

  @CreateDateColumn()
  regDate: Date;

  @UpdateDateColumn()
  actDate: Date;

  @OneToMany(() => Episodio, (episodio) => episodio.serie)
  episodios: Episodio[];
}
