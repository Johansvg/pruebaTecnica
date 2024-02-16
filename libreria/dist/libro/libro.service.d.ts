import { CreateLibroDto } from './dto/create-libro.dto';
import { UpdateLibroDto } from './dto/update-libro.dto';
export declare class LibroService {
    create(createLibroDto: CreateLibroDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateLibroDto: UpdateLibroDto): string;
    remove(id: number): string;
}
