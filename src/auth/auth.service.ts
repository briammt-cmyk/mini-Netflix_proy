import { BadRequestException, Injectable, Logger } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';
import { RegisterDto } from './dto/register.dto';
import bcryptjs from 'bcryptjs';
import { LoginDto } from './dto/login.dto';

@Injectable()
export class AuthService {
  private readonly logger = new Logger(AuthService.name);

  constructor(private readonly usersService: UsersService,
    private readonly jwtService: JwtService
  ) { }

  async register(registerDto: RegisterDto) {
    if (!registerDto) {
      throw new BadRequestException('Request body is required');
    }

    const { password, email, username } = registerDto;

    const user = await this.usersService.findOneByEmail(email);
    if (user) {
      throw new BadRequestException('Email already exists');
    }

    const hashedPassword = await bcryptjs.hash(password, 10);

    await this.usersService.create({
      username,
      email,
      password: hashedPassword,  
    });

    return {
      message: 'User created successfully',
    };
  }

  async login({ email, password }: LoginDto) {
    const user = await this.usersService.findOneByEmail(email);
    this.logger.debug(`Login attempt for email: ${email}`);
    if (!user) {
      throw new BadRequestException('Usuario no encontrado');
    }

    const isPasswordValid = await bcryptjs.compare(password.trim(), user.password);
    this.logger.debug(`Password valid: ${isPasswordValid}`);
    if (!isPasswordValid) {
      throw new BadRequestException('Contraseña incorrecta');
    }

    const payload = { email: user.email };

    const token = await this.jwtService.signAsync(payload);

    return {
      token: token,
      email: user.email,
    };
  }
}
