import { Type } from 'class-transformer';
import { IsNotEmpty, IsNumber, IsPositive, IsString } from 'class-validator';

export class CreateEpisodioDto {
  @IsString({ message: 'El título debe ser texto' })
  @IsNotEmpty({ message: 'El titulo es obligatorio' })
  titulo: string;

  @Type(() => Number)
  @IsNumber({}, { message: 'La duración debe ser un numero' })
  @IsPositive({ message: 'La duración debe ser un numero, y no debe ser negativo' })
  @IsNotEmpty({ message: 'La duración es obligatorio' })
  duracion: number;

  @Type(() => Number)
  @IsNumber({}, { message: 'El numero de capítulo debe ser un numero' })
  @IsPositive({ message: 'El numero de capítulo debe ser un numero, y no debe ser negativo' })
  @IsNotEmpty({
    message: 'El numero de capítulo es obligatorio',
  })
  Num_Cap: number;

  @Type(() => Number)
  @IsNumber(
    {},
    {
      message:
        'El ID de la serie debe ser un numero',
    },
  )
  @IsNotEmpty({
    message: 'El ID de la serie es obligatorio',
  })
  serieId: number;
}
