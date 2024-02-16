import { AutorService } from './autor.service';
import { CreateAutorDto } from './dto/create-autor.dto';
import { UpdateAutorDto } from './dto/update-autor.dto';
export declare class AutorController {
    private readonly autorService;
    constructor(autorService: AutorService);
    create(createAutorDto: CreateAutorDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateAutorDto: UpdateAutorDto): string;
    remove(id: string): string;
}
