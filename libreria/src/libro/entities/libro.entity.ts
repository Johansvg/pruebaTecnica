import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";


@Entity()
export class Libro {
    @Column({ primary: true, generated: true })
    idLibro: number;

    @Column()
    id_autor: number;

    @Column()
    nombreLib: string;

    @Column()
    cantidadPaginas: number;
}
