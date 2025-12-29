import { Transform } from 'class-transformer';
import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';

export class RegisterDto {
  @IsNotEmpty({
    message: 'El nombre de usuario es obligatorio.',
  })
  @IsString({ message: 'El nombre de usuario debe ser texto.' })
  @MinLength(1, {
    message: 'El nombre de usuario debe tener al menos 1 carácter.',
  })
  username: string;

  @IsNotEmpty({
    message: 'El correo electrónico es obligatorio.',
  })
  @IsEmail()
  email: string;

  @IsNotEmpty({
    message: 'La contraseña es obligatoria.',
  })
  @IsString({ message: 'La contraseña debe ser de texto.' })
  @MinLength(8, { message: 'La contraseña debe tener al menos 8 caracteres' })
  password: string;
}
