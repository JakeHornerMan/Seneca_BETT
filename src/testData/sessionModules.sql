INSERT INTO "session_stats"("userId", "courseId", "topic", "sessionStart", "sessionEnd", "isEnd")
VALUES
(
    'f0e1c82a-6c23-4b7f-b2a7-35776e22fc3f',  -- Alice's userId
    '1',  -- Mathematics - GCSE courseId
    'Number',  -- Topic
    '2025-02-23 10:00:00',  -- Session start
    '2025-02-23 12:30:00',  -- Session end (2.5 hours)
    true  -- Session ended
);

INSERT INTO "module_stats"("moduleName", "adaptive", "quiz", "wrongAnswers", "sessionId")
VALUES
(
    'Integers', 
    '[{"answers":["A", "B", "C", "A", "D"], "isCompleted": true, "score": 80}]', 
    '[{"answers":["D", "A", "C", "B", "D", "A", "C", "B"], "isCompleted": true, "score": 75}]',
    '[{"answers":["adaptive: 3", "quiz: 1"], "isCompleted": false, "score": 0}]', 
    1  -- sessionId from SessionStats
),
(
    'Fractions',
    '[{"answers":["A", "B", "C", "C", "D"], "isCompleted": true, "score": 85}]', 
    '[{"answers":["C", "D", "B", "A", "D", "C"], "isCompleted": true, "score": 90}]',
    '[{"answers":["adaptive: 4", "quiz: 5"], "isCompleted": false, "score": 0}]',
    1  -- sessionId from SessionStats
);

INSERT INTO "session_stats"("userId", "courseId", "topic", "sessionStart", "sessionEnd", "isEnd")
VALUES
(
    'f0e1c82a-6c23-4b7f-b2a7-35776e22fc3f',  -- Alice's userId
    '3',  -- English - GCSE courseId
    'Shakespeare',  -- Topic
    '2025-02-23 14:00:00',  -- Session start
    '2025-02-23 17:00:00',  -- Session end (3 hours)
    true  -- Session ended
);

INSERT INTO "module_stats"("moduleName", "adaptive", "quiz", "wrongAnswers", "sessionId")
VALUES
(
    'Macbeth', 
    '[{"answers":["B", "A", "C", "D", "B", "C"], "isCompleted": true, "score": 90}]', 
    '[{"answers":["C", "D", "A", "C", "B"], "isCompleted": true, "score": 80}]',
    '[{"answers":["adaptive: 3", "quiz: 6"], "isCompleted": false, "score": 0}]', 
    2  -- sessionId from SessionStats
),
(
    'Romeo and Juliet',
    '[{"answers":["D", "A", "B", "C", "A", "C"], "isCompleted": true, "score": 95}]', 
    '[{"answers":["B", "C", "A", "D"], "isCompleted": true, "score": 85}]',
    '[{"answers":["adaptive: 2", "quiz: 8"], "isCompleted": false, "score": 0}]',
    2  -- sessionId from SessionStats
);

INSERT INTO "session_stats"("userId", "courseId", "topic", "sessionStart", "sessionEnd", "isEnd")
VALUES
(
    'f0e1c82a-6c23-4b7f-b2a7-35776e22fc3f',  -- Alice's userId
    '8',  -- History - GCSE courseId
    'The World Wars',  -- Topic
    '2025-02-24 09:30:00',  -- Session start
    '2025-02-24 12:00:00',  -- Session end (2.5 hours)
    true  -- Session ended
);

INSERT INTO "module_stats"("moduleName", "adaptive", "quiz", "wrongAnswers", "sessionId")
VALUES
(
    'World War I', 
    '[{"answers":["C", "B", "D", "A", "C"], "isCompleted": true, "score": 80}]', 
    '[{"answers":["D", "A", "C", "B", "A"], "isCompleted": true, "score": 75}]',
    '[{"answers":["adaptive: 7", "quiz: 2"], "isCompleted": false, "score": 0}]', 
    3  -- sessionId from SessionStats
),
(
    'World War II',
    '[{"answers":["A", "C", "B", "D", "C", "A"], "isCompleted": true, "score": 90}]', 
    '[{"answers":["B", "D", "A", "C", "A"], "isCompleted": true, "score": 85}]',
    '[{"answers":["adaptive: 6", "quiz: 3"], "isCompleted": false, "score": 0}]',
    3  -- sessionId from SessionStats
);