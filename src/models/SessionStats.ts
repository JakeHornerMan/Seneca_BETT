import { PrimaryGeneratedColumn, Column, Entity, CreateDateColumn, ManyToOne, JoinColumn, OneToMany, Index } from "typeorm";
import { User } from "./User";
import { Course } from "./Course";
import { ModuleStats } from "./ModuleStats";

@Entity()
export class SessionStats {
    @PrimaryGeneratedColumn()
    id!: number;

    @Index()
    @ManyToOne(() => User)
    @JoinColumn({ name: 'userId' })
    userId!: number;

    @Index()
    @ManyToOne(() => Course)
    @JoinColumn({ name: 'courseId' })
    courseId!: number;

    @Column()
    topic!: string;

    @OneToMany(() => ModuleStats, moduleStats => moduleStats.sessionStats)
    modulesStats?: ModuleStats[];

    @CreateDateColumn() 
    sessionStart!: Date;

    @Column({ type: 'timestamp', nullable: true })
    sessionEnd?: Date;
}