import { Transform } from 'class-transformer';
import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';

export class LoginDto {
  @IsNotEmpty({
    message: 'El email es obligatorio',
  })
  @IsEmail({}, { message: 'El email debe ser válido' })
  email: string;

  @IsString()
  @IsNotEmpty({
    message: 'La contraseña es obligatoria',
  })
  @MinLength(8, { message: 'La contraseña debe tener almenos 8 caracteres' })
  @Transform(({ value }) => value.trim())
  password: string;
}
