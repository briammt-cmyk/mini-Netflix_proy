import { IsNotEmpty, IsString } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty({
    message: 'El nombre de usuario es obligatorio',
  })
  @IsString({ message: 'El nombre de usuario debe ser texto' })
  username: string;

  @IsNotEmpty({
    message: 'El correo electrónico es obligatorio',
  })
  @IsString({ message: 'El correo electrónico como cadena' })
  email: string;

  @IsNotEmpty({
    message: 'La contraseña es obligatoria',
  })
  @IsString({ message: 'La contraseña debe ser texto' })
  password: string;
}
