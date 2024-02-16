import { Column, Entity } from "typeorm";

@Entity()
export class Prestamo {

    @Column()
    id_usuario: number;

    @Column()
    id_libro: number;

    @Column()
    retornado: boolean;


}
