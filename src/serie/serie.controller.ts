import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { SerieService } from './serie.service';
import { CreateSerieDto } from './dto/create-serie.dto';
import { UpdateSerieDto } from './dto/update-serie.dto';
import { AuthGuard } from '../auth/auth.guard';

@Controller('serie')
export class SerieController {
  constructor(private readonly serieService: SerieService) {}

  @UseGuards(AuthGuard)
  @Post()
  create(@Body() createSerieDto: CreateSerieDto) {
    return this.serieService.create(createSerieDto);
  }

  @Get()
  findAll() {
    return this.serieService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.serieService.findOne(+id);
  }

  @UseGuards(AuthGuard)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSerieDto: UpdateSerieDto) {
    return this.serieService.update(+id, updateSerieDto);
  }

  @UseGuards(AuthGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.serieService.remove(+id);
  }
}
