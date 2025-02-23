import { PrimaryGeneratedColumn, Column, Entity, CreateDateColumn, ManyToOne, JoinColumn } from "typeorm";
import { SessionStats } from "./SessionStats";

@Entity()
export class ModuleStats {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    moduleName!: string;

    @Column("json")
    adaptive?: {answers: string[], isCompleted: boolean, score: number };

    @Column("json")
    quiz?: {answers: string[], isCompleted: boolean, score: number };

    @Column("json")
    wrongAnswers?: { answers: string[], isCompleted: boolean, score: number};

    @ManyToOne(() => SessionStats, sessionStats => sessionStats.modulesStats)
    @JoinColumn({ name: 'sessionId' })  // The foreign key column name in ModuleStats
    sessionStats!: SessionStats;
}