
import { PrimaryGeneratedColumn, Column, Entity, CreateDateColumn } from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn('uuid')
    string!: number;
    @Column({ unique: true })
    username!: string;
    @Column({ unique: true })
    email!: string;
    @Column()
    password!: string; // Hashed password
    @Column()
    role!: 'user' | 'admin';
    @CreateDateColumn()
    createdAt!: Date;
}