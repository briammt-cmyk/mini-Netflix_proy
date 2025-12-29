import { IsNotEmpty, IsString } from 'class-validator';

export class CreateSerieDto {
  @IsString({ message: 'El título debe ser texto' })
  @IsNotEmpty({ message: 'El título es obligatorio y no null' })
  titulo: string;

  @IsString({ message: 'El genero debe ser una cadena de texto' })
  @IsNotEmpty({ message: 'El género es obligatorio y no null' })
  genero: string;

  @IsString({
    message: 'La sinopsis debe ser una cadena de texto',
  })
  @IsNotEmpty({ message: 'La sinopsis es obligatorio y no null' })
  sinopsis: string;

  @IsString({
    message: 'La url de la portada debe ser de texto URL',
  })
  @IsNotEmpty({
    message: 'La URL de la portada es obligatorio y no null',
  })
  urlPortada: string;
}
