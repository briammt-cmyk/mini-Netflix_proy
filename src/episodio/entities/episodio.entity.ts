import { Serie } from './../../serie/entities/serie.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
@Index(['serie', 'Num_Cap'], { unique: true })
export class Episodio {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  titulo: string;

  @Column()
  duracion: number;

  @Column()
  Num_Cap: number;

  @CreateDateColumn()
  regDate: Date;

  @UpdateDateColumn()
  actDate: Date;

  @ManyToOne(() => Serie, (serie) => serie.episodios, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'serie_Id' })
  serie: Serie;
  @Column({ nullable: false })
  serieId: number;
}
