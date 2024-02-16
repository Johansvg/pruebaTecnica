import { PrestamoService } from './prestamo.service';
import { CreatePrestamoDto } from './dto/create-prestamo.dto';
import { UpdatePrestamoDto } from './dto/update-prestamo.dto';
export declare class PrestamoController {
    private readonly prestamoService;
    constructor(prestamoService: PrestamoService);
    create(createPrestamoDto: CreatePrestamoDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updatePrestamoDto: UpdatePrestamoDto): string;
    remove(id: string): string;
}
