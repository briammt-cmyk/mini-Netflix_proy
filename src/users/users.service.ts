import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>
  ) { }

  async create(userData: { username: string; email: string; password: string }): Promise<User> {
    // Opción 1: Crear la entidad explícitamente (recomendada)
   // const user = this.usersRepository.create(userData);
    return await this.usersRepository.save(userData);

    // Opción 2: Aún más directo (también funciona)
    // return await this.usersRepository.save(userData);
  }
  /*
    async create(createUserDto: CreateUserDto) {
      return this.usersRepository.save(createUserDto);
      //return 'This action adds a new user';
    }
  
    async findOneByEmail(email:string){ 
      return this.usersRepository.findOneBy({email});
    }*/

  async findOneByEmail(email: string): Promise<User | null> {
    return this.usersRepository.findOneBy({ email });
  }

  findAll() {
    return `This action returns all users`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
