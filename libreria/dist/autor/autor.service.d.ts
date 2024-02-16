import { CreateAutorDto } from './dto/create-autor.dto';
import { UpdateAutorDto } from './dto/update-autor.dto';
export declare class AutorService {
    create(createAutorDto: CreateAutorDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateAutorDto: UpdateAutorDto): string;
    remove(id: number): string;
}
