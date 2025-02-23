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
    '[{"answers":["A", "B", "C", "A", "D"], "isCompleted": true, "score": 78}]', 
    '[{"answers":["D", "A", "C", "B", "D", "A", "C", "B"], "isCompleted": true, "score": 74}]',
    '[{"answers":["adaptive: 3", "quiz: 1"], "isCompleted": false, "score": 0}]', 
    'a1b2c3d4-e5f6-7890-abcd-ef1234567890'
),
(
    'Fractions',
    '[{"answers":["A", "B", "C", "C", "D"], "isCompleted": true, "score": 82}]', 
    '[{"answers":["C", "D", "B", "A", "D", "C"], "isCompleted": true, "score": 81}]',
    '[{"answers":["adaptive: 4", "quiz: 5"], "isCompleted": false, "score": 0}]',
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
    '[{"answers":["B", "A", "C", "D", "B", "C"], "isCompleted": true, "score": 92}]', 
    '[{"answers":["C", "D", "A", "C", "B"], "isCompleted": true, "score": 78}]',
    '[{"answers":["adaptive: 3", "quiz: 6"], "isCompleted": false, "score": 0}]', 
    'b2c3d4e5-f678-90ab-cdef-1234567890ab'
),
(
    'Romeo and Juliet',
    '[{"answers":["D", "A", "B", "C", "A", "C"], "isCompleted": true, "score": 97}]', 
    '[{"answers":["B", "C", "A", "D"], "isCompleted": true, "score": 98}]',
    '[{"answers":["adaptive: 2", "quiz: 8"], "isCompleted": false, "score": 0}]',
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
    '[{"answers":["C", "B", "D", "A", "C"], "isCompleted": true, "score": 83}]', 
    '[{"answers":["D", "A", "C", "B", "A"], "isCompleted": true, "score": 73}]',
    '[{"answers":["adaptive: 7", "quiz: 2"], "isCompleted": false, "score": 0}]', 
    'c3d4e5f6-7890-abcd-ef12-34567890abcd'
),
(
    'World War II',
    '[{"answers":["A", "C", "B", "D", "C", "A"], "isCompleted": true, "score": 90}]', 
    '[{"answers":["B", "D", "A", "C", "A"], "isCompleted": true, "score": 79}]',
    '[{"answers":["adaptive: 6", "quiz: 3"], "isCompleted": false, "score": 0}]',
    'c3d4e5f6-7890-abcd-ef12-34567890abcd'
);
