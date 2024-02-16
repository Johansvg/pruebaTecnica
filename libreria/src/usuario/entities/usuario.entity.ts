import { Column, Entity } from "typeorm";

@Entity()
export class Usuario {

    @Column({ primary: true, generated: true})
    idUsuario: number;

    @Column()
    nombreUsuario: string;

    @Column()
    correoUsuario: string;
}
