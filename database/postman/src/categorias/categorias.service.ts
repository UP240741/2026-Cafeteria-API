import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Categoria } from './schemas/categoria.schema';

@Injectable()
export class CategoriasService {
  constructor(@InjectModel(Categoria.name) private categoriaModel: Model<Categoria>) {}

  async crear(data: { nombre: string }): Promise<Categoria> {
    const nuevaCategoria = new this.categoriaModel(data);
    return nuevaCategoria.save();
  }

  async obtenerTodas(): Promise<Categoria[]> {
    return this.categoriaModel.find().exec();
  }
}
