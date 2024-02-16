import { Column, Entity } from "typeorm";

@Entity()
export class Autor {

    @Column({ primary: true, generated: true})
    idAutor: number;

    @Column()
    nombreAutor: string;

    @Column()
    correoAutor: string;

}
