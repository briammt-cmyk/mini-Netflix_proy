import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column({ unique: true, nullable: false })
  email: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  password: string;

  @CreateDateColumn()
  regDate: Date;

  @UpdateDateColumn()
  actDate: Date;
}
