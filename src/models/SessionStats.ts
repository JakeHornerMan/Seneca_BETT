import { PrimaryGeneratedColumn, Column, Entity, CreateDateColumn, ManyToOne, JoinColumn, OneToMany, Index } from "typeorm";
import { User } from "./User";
import { Course } from "./Course";
import { ModuleStats } from "./ModuleStats";

@Entity()
export class SessionStats {
    @PrimaryGeneratedColumn('uuid')
    id!: number;

    @Index()
    @ManyToOne(() => User)
    @JoinColumn({ name: 'userId' })
    userId!: number;

    @Index()
    @ManyToOne(() => Course)
    @JoinColumn({ name: 'courseId' })
    courseId!: number;

    @Column({nullable: true })
    courseTitle!: string;

    @Column()
    topic!: string;

    @OneToMany(() => ModuleStats, moduleStats => moduleStats.sessionStats)
    modulesStats?: ModuleStats[];

    @CreateDateColumn() 
    sessionStart!: Date;

    @Column({ type: 'timestamp', nullable: true })
    sessionEnd?: Date;

    @Column({ type: 'boolean', default: false })
    isEnd!: boolean;

    @Column({default: 0 })
    sessionPoints!: number;
}