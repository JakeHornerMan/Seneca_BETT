
import { PrimaryGeneratedColumn, Column, Entity, CreateDateColumn } from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn('uuid')
    id!: string;
    @Column({ unique: true })
    username!: string;
    @Column({ unique: true })
    email!: string;
    @Column()
    password!: string; 
    @Column()
    role!: 'user' | 'admin';
    @CreateDateColumn()
    createdAt!: Date;
}