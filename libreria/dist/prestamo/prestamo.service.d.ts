import { CreatePrestamoDto } from './dto/create-prestamo.dto';
import { UpdatePrestamoDto } from './dto/update-prestamo.dto';
export declare class PrestamoService {
    create(createPrestamoDto: CreatePrestamoDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updatePrestamoDto: UpdatePrestamoDto): string;
    remove(id: number): string;
}
