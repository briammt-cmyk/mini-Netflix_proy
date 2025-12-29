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
import { EpisodioService } from './episodio.service';
import { CreateEpisodioDto } from './dto/create-episodio.dto';
import { UpdateEpisodioDto } from './dto/update-episodio.dto';
import { AuthGuard } from '../auth/auth.guard';

@Controller('episodio')
export class EpisodioController {
  constructor(private readonly episodioService: EpisodioService) {}

  @UseGuards(AuthGuard)
  @Post()
  create(@Body() createEpisodioDto: CreateEpisodioDto) {
    return this.episodioService.create(createEpisodioDto);
  }

  @Get()
  findAll() {
    return this.episodioService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.episodioService.findOne(+id);
  }

  @UseGuards(AuthGuard)
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateEpisodioDto: UpdateEpisodioDto,
  ) {
    return this.episodioService.update(+id, updateEpisodioDto);
  }

  @UseGuards(AuthGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.episodioService.remove(+id);
  }
}
