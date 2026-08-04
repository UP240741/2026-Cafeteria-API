import { Controller, Get, Post, Body } from '@nestjs/common';
import { CategoriasService } from './categorias.service';

@Controller('categorias')
export class CategoriasController {
  constructor(private readonly categoriasService: CategoriasService) {}

  @Post()
  async crear(@Body() body: { nombre: string }) {
    return this.categoriasService.crear(body);
  }

  @Get()
  async obtenerTodas() {
    return this.categoriasService.obtenerTodas();
  }
}
