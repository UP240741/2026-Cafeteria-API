# Esquemas de Base de Datos - Cafetería (MongoDB / Mongoose)

A continuación se presentan los modelos y esquemas diseñados para la base de datos no relacional.

## 1. Esquema de Categorías (`categoria.schema.ts`)
```typescript
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Categoria extends Document {
  @Prop({ required: true })
  nombre: string;
}

export const CategoriaSchema = SchemaFactory.createForClass(Categoria);

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@Schema()
export class Producto extends Document {
  @Prop({ required: true })
  nombre: string;

  @Prop({ required: true })
  precio: number;

  @Prop({ required: true })
  stock: number;

  @Prop({ type: Types.ObjectId, ref: 'Categoria', required: true })
  id_cat: Types.ObjectId;
}

export const ProductoSchema = SchemaFactory.createForClass(Producto);

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@Schema()
export class Orden extends Document {
  @Prop({ required: true })
  cliente: string;

  @Prop({ required: true })
  total: number;

  @Prop({ default: Date.now })
  fecha: Date;

  @Prop({ type: Types.ObjectId, ref: 'Producto', required: true })
  id_prod: Types.ObjectId;
}

export const OrdenSchema = SchemaFactory.createForClass(Orden);

