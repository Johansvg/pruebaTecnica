import { Libro } from './entities/libro.entity';
import { Module } from '@nestjs/common';
import { LibroService } from './libro.service';
import { LibroController } from './libro.controller';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([ Libro ])],
  controllers: [LibroController],
  providers: [LibroService],
})
export class LibroModule {}
