import { PrimaryGeneratedColumn, Column, Entity, CreateDateColumn } from "typeorm";

@Entity()
export class Course {
    @PrimaryGeneratedColumn('uuid')
    id!: string;
    @Column({ unique: true })
    courseTitle!: string;
    @Column()
    qualification!: string;
    @Column("json")
    topicsAndModules!: Array<{ topic: string, modules: string[] }>;
    @CreateDateColumn()
    createdAt!: Date;
}