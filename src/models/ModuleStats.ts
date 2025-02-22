import { PrimaryGeneratedColumn, Column, Entity, CreateDateColumn, ManyToOne, JoinColumn } from "typeorm";
import { SessionStats } from "./SessionStats";

@Entity()
export class ModuleStats {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    moduleName!: string;

    @Column("json")
    adaptive?: Array<{answers: string[], isCompleted: boolean, score: number }>;

    @Column("json")
    quiz?: Array<{answers: string[], isCompleted: boolean, score: number }>;

    @Column("json")
    wrongAnswers?: Array<{ answers: string[], isCompleted: boolean, score: number}>;

    @ManyToOne(() => SessionStats, sessionStats => sessionStats.modulesStats)
    @JoinColumn({ name: 'sessionId' })  // The foreign key column name in ModuleStats
    sessionStats!: SessionStats;
}