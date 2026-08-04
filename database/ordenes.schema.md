# Esquema de Órdenes - Cafetería (MongoDB / Mongoose)

```typescript
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
