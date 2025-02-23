--ALICE
INSERT INTO "session_stats"("id", "userId", "courseId", "topic", "sessionStart", "sessionEnd", "isEnd", "sessionPoints")
VALUES
(
    'a1b2c3d4-e5f6-7890-abcd-ef1234567890',
    'f0e1c82a-6c23-4b7f-b2a7-35776e22fc3f',
    '1',
    'Number',
    '2025-02-23 10:00:00',
    '2025-02-23 12:30:00',
    true,
    315  -- (78+74) + (82+81) = 315 sessionPoints
);

INSERT INTO "module_stats"("moduleName", "adaptive", "quiz", "wrongAnswers", "sessionId")
VALUES
(
    'Integers', 
    '{"answers":["A", "B", "C", "A", "D"], "isCompleted": true, "score": 78}', 
    '{"answers":["D", "A", "C", "B", "D", "A", "C", "B"], "isCompleted": true, "score": 74}',
    '{"answers":["adaptive: 3", "quiz: 1"], "isCompleted": false, "score": 0}', 
    'a1b2c3d4-e5f6-7890-abcd-ef1234567890'
),
(
    'Fractions',
    '{"answers":["A", "B", "C", "C", "D"], "isCompleted": true, "score": 82}',
    '{"answers":["C", "D", "B", "A", "D", "C"], "isCompleted": true, "score": 81}',
    '{"answers":["adaptive: 4", "quiz: 5"], "isCompleted": false, "score": 0}',
    'a1b2c3d4-e5f6-7890-abcd-ef1234567890'
);

INSERT INTO "session_stats"("id", "userId", "courseId", "topic", "sessionStart", "sessionEnd", "isEnd", "sessionPoints")
VALUES
(
    'b2c3d4e5-f678-90ab-cdef-1234567890ab',
    'f0e1c82a-6c23-4b7f-b2a7-35776e22fc3f',
    '3',
    'Shakespeare',
    '2025-02-23 14:00:00',
    '2025-02-23 17:00:00',
    true,
    365  -- (92+78) + (97+98) = 365 sessionPoints
);

INSERT INTO "module_stats"("moduleName", "adaptive", "quiz", "wrongAnswers", "sessionId")
VALUES
(
    'Macbeth', 
    '{"answers":["B", "A", "C", "D", "B", "C"], "isCompleted": true, "score": 92}', 
    '{"answers":["C", "D", "A", "C", "B"], "isCompleted": true, "score": 78}',
    '{"answers":["adaptive: 3", "quiz: 6"], "isCompleted": false, "score": 0}', 
    'b2c3d4e5-f678-90ab-cdef-1234567890ab'
),
(
    'Romeo and Juliet',
    '{"answers":["D", "A", "B", "C", "A", "C"], "isCompleted": true, "score": 97}', 
    '{"answers":["B", "C", "A", "D"], "isCompleted": true, "score": 98}',
    '{"answers":["adaptive: 2", "quiz: 8"], "isCompleted": false, "score": 0}',
    'b2c3d4e5-f678-90ab-cdef-1234567890ab'
);

INSERT INTO "session_stats"("id", "userId", "courseId", "topic", "sessionStart", "sessionEnd", "isEnd", "sessionPoints")
VALUES
(
    'c3d4e5f6-7890-abcd-ef12-34567890abcd',
    'f0e1c82a-6c23-4b7f-b2a7-35776e22fc3f',
    '8',
    'The World Wars',
    '2025-02-24 09:30:00',
    '2025-02-24 12:00:00',
    true,
    325  -- (83+73) + (90+79) = 325 sessionPoints
);

INSERT INTO "module_stats"("moduleName", "adaptive", "quiz", "wrongAnswers", "sessionId")
VALUES
(
    'World War I', 
    '{"answers":["C", "B", "D", "A", "C"], "isCompleted": true, "score": 83}', 
    '{"answers":["D", "A", "C", "B", "A"], "isCompleted": true, "score": 73}',
    '{"answers":["adaptive: 7", "quiz: 2"], "isCompleted": false, "score": 0}', 
    'c3d4e5f6-7890-abcd-ef12-34567890abcd'
),
(
    'World War II',
    '{"answers":["A", "C", "B", "D", "C", "A"], "isCompleted": true, "score": 90}', 
    '{"answers":["B", "D", "A", "C", "A"], "isCompleted": true, "score": 79}',
    '{"answers":["adaptive: 6", "quiz: 3"], "isCompleted": false, "score": 0}',
    'c3d4e5f6-7890-abcd-ef12-34567890abcd'
);

-- BOB
INSERT INTO "session_stats"("id", "userId", "courseId", "topic", "sessionStart", "sessionEnd", "isEnd", "sessionPoints")
VALUES
(
    '84d20a1b-507a-4577-8e7f-137a288e4e26', 
    '8f2b8c61-5fe7-450b-b16c-1c6fe7d31d23',
    '3',
    'Shakespeare',
    '2025-02-23 14:00:00',
    '2025-02-23 17:00:00',
    true,
    365  
);

INSERT INTO "module_stats"("moduleName", "adaptive", "quiz", "wrongAnswers", "sessionId")
VALUES
(
    'Macbeth', 
    '{"answers":["B", "A", "C", "D", "B", "C"], "isCompleted": true, "score": 92}', 
    '{"answers":["C", "D", "A", "C", "B"], "isCompleted": true, "score": 78}',
    '{"answers":["adaptive: 3", "quiz: 6"], "isCompleted": false, "score": 0}', 
    '84d20a1b-507a-4577-8e7f-137a288e4e26' 
),
(
    'Romeo and Juliet',
    '{"answers":["D", "A", "B", "C", "A", "C"], "isCompleted": true, "score": 97}', 
    '{"answers":["B", "C", "A", "D"], "isCompleted": true, "score": 98}',
    '{"answers":["adaptive: 2", "quiz: 8"], "isCompleted": false, "score": 0}', 
    '84d20a1b-507a-4577-8e7f-137a288e4e26' 
);

INSERT INTO "session_stats"("id", "userId", "courseId", "topic", "sessionStart", "sessionEnd", "isEnd", "sessionPoints")
VALUES
(
    '7d9aa036-ad67-4190-9040-6bc9b44302f9', 
    '8f2b8c61-5fe7-450b-b16c-1c6fe7d31d23',  
    '8', 
    'The World Wars', 
    '2025-02-24 09:30:00',  
    '2025-02-24 12:00:00',
    true,  
    325  
);

INSERT INTO "module_stats"("moduleName", "adaptive", "quiz", "wrongAnswers", "sessionId")
VALUES
(
    'World War I', 
    '{"answers":["C", "B", "D", "A", "C"], "isCompleted": true, "score": 83}', 
    '{"answers":["D", "A", "C", "B", "A"], "isCompleted": true, "score": 73}',
    '{"answers":["adaptive: 7", "quiz: 2"], "isCompleted": false, "score": 0}', 
    '7d9aa036-ad67-4190-9040-6bc9b44302f9' 
),
(
    'World War II',
    '{"answers":["A", "C", "B", "D", "C", "A"], "isCompleted": true, "score": 90}', 
    '{"answers":["B", "D", "A", "C", "A"], "isCompleted": true, "score": 79}',
    '{"answers":["adaptive: 6", "quiz: 3"], "isCompleted": false, "score": 0}', 
    '7d9aa036-ad67-4190-9040-6bc9b44302f9'  
);

--Charlie
INSERT INTO "session_stats"("id", "userId", "courseId", "topic", "sessionStart", "sessionEnd", "isEnd", "sessionPoints")
VALUES
(
    '15751363-42ab-496c-afb1-75a35932a2e7',
    'adf6c292-e94a-4f83-bfe4-b498813d58b5',
    '5',
    'Newtonian Mechanics',
    '2025-03-01 09:00:00',
    '2025-03-01 12:00:00',
    true,
    325
);

INSERT INTO "module_stats"("moduleName", "adaptive", "quiz", "wrongAnswers", "sessionId")
VALUES
(
    'Kinematics',
    '{"answers":["A", "C", "B", "D", "C"], "isCompleted": true, "score": 80}', 
    '{"answers":["B", "A", "C", "D"], "isCompleted": true, "score": 70}',
    '{"answers":["adaptive: 4", "quiz: 3"], "isCompleted": false, "score": 0}', 
    '15751363-42ab-496c-afb1-75a35932a2e7'
),
(
    'Forces and Motion',
    '{"answers":["D", "B", "A", "C", "D"], "isCompleted": true, "score": 85}', 
    '{"answers":["C", "D", "A", "B"], "isCompleted": true, "score": 90}',
    '{"answers":["adaptive: 5", "quiz: 4"], "isCompleted": false, "score": 0}', 
    '15751363-42ab-496c-afb1-75a35932a2e7'
);

INSERT INTO "session_stats"("id", "userId", "courseId", "topic", "sessionStart", "sessionEnd", "isEnd", "sessionPoints")
VALUES
(
    '60c279b4-7249-4ea8-9e3c-c63b84a55efb',
    'adf6c292-e94a-4f83-bfe4-b498813d58b5',
    '1',
    'Calculus',
    '2025-03-02 09:30:00',
    '2025-03-02 12:30:00',
    true,
    360
);

INSERT INTO "module_stats"("moduleName", "adaptive", "quiz", "wrongAnswers", "sessionId")
VALUES
(
    'Differentiation',
    '{"answers":["C", "B", "D", "A"], "isCompleted": true, "score": 90}', 
    '{"answers":["A", "C", "B", "D"], "isCompleted": true, "score": 85}',
    '{"answers":["adaptive: 2", "quiz: 4"], "isCompleted": false, "score": 0}', 
    '60c279b4-7249-4ea8-9e3c-c63b84a55efb'
),
(
    'Integration',
    '{"answers":["A", "B", "C", "D", "A"], "isCompleted": true, "score": 95}', 
    '{"answers":["B", "C", "D", "A"], "isCompleted": true, "score": 90}',
    '{"answers":["adaptive: 3", "quiz: 5"], "isCompleted": false, "score": 0}', 
    '60c279b4-7249-4ea8-9e3c-c63b84a55efb'
);

INSERT INTO "session_stats"("id", "userId", "courseId", "topic", "sessionStart", "sessionEnd", "isEnd", "sessionPoints")
VALUES
(
    '77655de1-0d93-4ca0-a279-3a48ef887881',
    'adf6c292-e94a-4f83-bfe4-b498813d58b5',
    '6',
    'Organic Chemistry',
    '2025-03-03 10:00:00',
    '2025-03-03 13:00:00',
    true,
    348
);

INSERT INTO "module_stats"("moduleName", "adaptive", "quiz", "wrongAnswers", "sessionId")
VALUES
(
    'Alkanes and Alkenes',
    '{"answers":["A", "C", "B", "D", "A"], "isCompleted": true, "score": 85}', 
    '{"answers":["B", "A", "C", "D"], "isCompleted": true, "score": 78}',
    '{"answers":["adaptive: 4", "quiz: 3"], "isCompleted": false, "score": 0}', 
    '77655de1-0d93-4ca0-a279-3a48ef887881'
),
(
    'Reactions and Mechanisms',
    '{"answers":["D", "B", "A", "C", "D"], "isCompleted": true, "score": 90}', 
    '{"answers":["C", "A", "B", "D"], "isCompleted": true, "score": 95}',
    '{"answers":["adaptive: 5", "quiz: 4"], "isCompleted": false, "score": 0}', 
    '77655de1-0d93-4ca0-a279-3a48ef887881'
);
