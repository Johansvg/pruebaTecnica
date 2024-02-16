import { LibroService } from './libro.service';
import { CreateLibroDto } from './dto/create-libro.dto';
import { UpdateLibroDto } from './dto/update-libro.dto';
export declare class LibroController {
    private readonly libroService;
    constructor(libroService: LibroService);
    create(createLibroDto: CreateLibroDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateLibroDto: UpdateLibroDto): string;
    remove(id: string): string;
}
