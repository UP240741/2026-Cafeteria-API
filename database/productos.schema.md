# Esquema de Productos - Cafetería (MongoDB / Mongoose)

```typescript
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
