import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AutorModule } from './autor/autor.module';
import { LibroModule } from './libro/libro.module';
import { UsuarioModule } from './usuario/usuario.module';
import { PrestamoModule } from './prestamo/prestamo.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '',
      database: 'libreria',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    AutorModule,
    LibroModule,
    UsuarioModule,
    PrestamoModule,
  ],
  controllers: [],
  providers: [],
  exports: [],
})
export class AppModule {}
