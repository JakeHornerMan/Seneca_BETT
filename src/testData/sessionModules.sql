--ALICE
INSERT INTO "session_stats"("id", "userId", "courseId", "courseTitle", "topic", "sessionStart", "sessionEnd", "isEnd", "sessionPoints")
VALUES
(
    'a1b2c3d4-e5f6-7890-abcd-ef1234567890',
    'f0e1c82a-6c23-4b7f-b2a7-35776e22fc3f',
    '9e263811-0cfb-45f0-a0f9-c155c916dfed',
    'Mathematics - GCSE', 
    'Number',
    '2025-02-23 10:00:00',
    '2025-02-23 12:30:00',
    true,
    315 
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

INSERT INTO "session_stats"("id", "userId", "courseId", "courseTitle", "topic", "sessionStart", "sessionEnd", "isEnd", "sessionPoints")
VALUES
(
    'b2c3d4e5-f678-90ab-cdef-1234567890ab',
    'f0e1c82a-6c23-4b7f-b2a7-35776e22fc3f',
    'c6e7f8a9-1b2c-4d5e-af67-89b0c1d2e3f4',
    'English - GCSE', 
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
    'b2c3d4e5-f678-90ab-cdef-1234567890ab'
),
(
    'Romeo and Juliet',
    '{"answers":["D", "A", "B", "C", "A", "C"], "isCompleted": true, "score": 97}', 
    '{"answers":["B", "C", "A", "D"], "isCompleted": true, "score": 98}',
    '{"answers":["adaptive: 2", "quiz: 8"], "isCompleted": false, "score": 0}',
    'b2c3d4e5-f678-90ab-cdef-1234567890ab'
);

INSERT INTO "session_stats"("id", "userId", "courseId", "courseTitle", "topic", "sessionStart", "sessionEnd", "isEnd", "sessionPoints")
VALUES
(
    'c3d4e5f6-7890-abcd-ef12-34567890abcd',
    'f0e1c82a-6c23-4b7f-b2a7-35776e22fc3f',
    'b2c3d4e5-6f78-9012-3456-789abcdef012',
    'History - GCSE', 
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
INSERT INTO "session_stats"("id", "userId", "courseId", "courseTitle", "topic", "sessionStart", "sessionEnd", "isEnd", "sessionPoints")
VALUES
(
    '84d20a1b-507a-4577-8e7f-137a288e4e26', 
    '8f2b8c61-5fe7-450b-b16c-1c6fe7d31d23',
    'c6e7f8a9-1b2c-4d5e-af67-89b0c1d2e3f4',
    'English - GCSE',
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

INSERT INTO "session_stats"("id", "userId", "courseId", "courseTitle", "topic", "sessionStart", "sessionEnd", "isEnd", "sessionPoints")
VALUES
(
    '7d9aa036-ad67-4190-9040-6bc9b44302f9', 
    '8f2b8c61-5fe7-450b-b16c-1c6fe7d31d23',  
    'b2c3d4e5-6f78-9012-3456-789abcdef012',
    'History - GCSE', 
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
INSERT INTO "session_stats"("id", "userId", "courseId", "courseTitle", "topic", "sessionStart", "sessionEnd", "isEnd", "sessionPoints")
VALUES
(
    '15751363-42ab-496c-afb1-75a35932a2e7',
    'adf6c292-e94a-4f83-bfe4-b498813d58b5',
    'b9d1c2f3-8e76-4d2f-bdc4-8a3f93c27d12',
    'Mathematics - A-Level',
    'Pure Mathematics',
    '2025-03-01 09:00:00',
    '2025-03-01 12:00:00',
    true,
    325
);

INSERT INTO "module_stats"("moduleName", "adaptive", "quiz", "wrongAnswers", "sessionId")
VALUES
(
    'Algebra',
    '{"answers":["A", "C", "B", "D", "C"], "isCompleted": true, "score": 80}', 
    '{"answers":["B", "A", "C", "D"], "isCompleted": true, "score": 70}',
    '{"answers":["adaptive: 4", "quiz: 3"], "isCompleted": false, "score": 0}', 
    '15751363-42ab-496c-afb1-75a35932a2e7'
),
(
    'Calculus',
    '{"answers":["D", "B", "A", "C", "D"], "isCompleted": true, "score": 85}', 
    '{"answers":["C", "D", "A", "B"], "isCompleted": true, "score": 90}',
    '{"answers":["adaptive: 5", "quiz: 4"], "isCompleted": false, "score": 0}', 
    '15751363-42ab-496c-afb1-75a35932a2e7'
);

INSERT INTO "session_stats"("id", "userId", "courseId", "courseTitle", "topic", "sessionStart", "sessionEnd", "isEnd", "sessionPoints")
VALUES
(
    '60c279b4-7249-4ea8-9e3c-c63b84a55efb',
    'adf6c292-e94a-4f83-bfe4-b498813d58b5',
    'b9d1c2f3-8e76-4d2f-bdc4-8a3f93c27d12',
    'Mathematics - A-Level', 
    'Statistics',
    '2025-03-02 09:30:00',
    '2025-03-02 12:30:00',
    true,
    360
);

INSERT INTO "module_stats"("moduleName", "adaptive", "quiz", "wrongAnswers", "sessionId")
VALUES
(
    'Probability',
    '{"answers":["C", "B", "D", "A"], "isCompleted": true, "score": 90}', 
    '{"answers":["A", "C", "B", "D"], "isCompleted": true, "score": 85}',
    '{"answers":["adaptive: 2", "quiz: 4"], "isCompleted": false, "score": 0}', 
    '60c279b4-7249-4ea8-9e3c-c63b84a55efb'
),
(
    'Distributions',
    '{"answers":["A", "B", "C", "D", "A"], "isCompleted": true, "score": 95}', 
    '{"answers":["B", "C", "D", "A"], "isCompleted": true, "score": 90}',
    '{"answers":["adaptive: 3", "quiz: 5"], "isCompleted": false, "score": 0}', 
    '60c279b4-7249-4ea8-9e3c-c63b84a55efb'
);

INSERT INTO "session_stats"("id", "userId", "courseId", "courseTitle", "topic", "sessionStart", "sessionEnd", "isEnd", "sessionPoints")
VALUES
(
    '77655de1-0d93-4ca0-a279-3a48ef887881',
    'adf6c292-e94a-4f83-bfe4-b498813d58b5',
    'f4a5b6c7-8d9e-0123-4567-89abcdef0123',
    'Chemistry - A-Level', 
    'Organic Chemistry',
    '2025-03-03 10:00:00',
    '2025-03-03 13:00:00',
    true,
    348
);

INSERT INTO "module_stats"("moduleName", "adaptive", "quiz", "wrongAnswers", "sessionId")
VALUES
(
    'Alkanes',
    '{"answers":["A", "C", "B", "D", "A"], "isCompleted": true, "score": 85}', 
    '{"answers":["B", "A", "C", "D"], "isCompleted": true, "score": 78}',
    '{"answers":["adaptive: 4", "quiz: 3"], "isCompleted": false, "score": 0}', 
    '77655de1-0d93-4ca0-a279-3a48ef887881'
),
(
    'Alcohols and Carboxylic Acids',
    '{"answers":["D", "B", "A", "C", "D"], "isCompleted": true, "score": 90}', 
    '{"answers":["C", "A", "B", "D"], "isCompleted": true, "score": 95}',
    '{"answers":["adaptive: 5", "quiz: 4"], "isCompleted": false, "score": 0}', 
    '77655de1-0d93-4ca0-a279-3a48ef887881'
);

--========================================================================
--======================================================================== 
--========================================================================
--========================================================================
--========================================================================

--DAVID
INSERT INTO "session_stats"("id", "userId", "courseId", "courseTitle", "topic", "sessionStart", "sessionEnd", "isEnd", "sessionPoints")
VALUES
(
    'dc01c6bc-3b58-4b34-8905-b63a7c8a47bb',
    'c31f76f2-1e98-4429-9070-e41388ccf53e',
    'f4a5b6c7-8d9e-0123-4567-89abcdef0123',
    'Chemistry - A-Level',
    'Atomic Structure',
    '2025-03-04 09:00:00',
    '2025-03-04 12:00:00',
    true,
    310
);

INSERT INTO "module_stats"("moduleName", "adaptive", "quiz", "wrongAnswers", "sessionId")
VALUES
(
    'Elements',
    '{"answers":["A", "B", "C", "D"], "isCompleted": true, "score": 85}', 
    '{"answers":["A", "C", "B", "D"], "isCompleted": true, "score": 80}',
    '{"answers":["adaptive: 3", "quiz: 2"], "isCompleted": false, "score": 0}', 
    'dc01c6bc-3b58-4b34-8905-b63a7c8a47bb'
),
(
    'Periodic Table',
    '{"answers":["B", "A", "C", "D"], "isCompleted": true, "score": 90}', 
    '{"answers":["C", "B", "A", "D"], "isCompleted": true, "score": 95}',
    '{"answers":["adaptive: 4", "quiz: 5"], "isCompleted": false, "score": 0}', 
    'dc01c6bc-3b58-4b34-8905-b63a7c8a47bb'
);

INSERT INTO "session_stats"("id", "userId", "courseId", "courseTitle", "topic", "sessionStart", "sessionEnd", "isEnd", "sessionPoints")
VALUES
(
    'ef23c5ae-d62a-4c5d-906e-3bb19e1d241f',
    'c31f76f2-1e98-4429-9070-e41388ccf53e',
    'e3f4a5b6-7c8d-9e01-2345-6789abcdef01',
    'Physics - A-Level',
    'Electricity',
    '2025-03-05 10:00:00',
    '2025-03-05 13:00:00',
    true,
    295
);

INSERT INTO "module_stats"("moduleName", "adaptive", "quiz", "wrongAnswers", "sessionId")
VALUES
(
    'Current and Voltage',
    '{"answers":["B", "D", "A", "C"], "isCompleted": true, "score": 90}', 
    '{"answers":["A", "B", "C", "D"], "isCompleted": true, "score": 85}',
    '{"answers":["adaptive: 3", "quiz: 4"], "isCompleted": false, "score": 0}', 
    'ef23c5ae-d62a-4c5d-906e-3bb19e1d241f'
),
(
    'Resistance',
    '{"answers":["C", "B", "D", "A"], "isCompleted": true, "score": 85}', 
    '{"answers":["D", "C", "A", "B"], "isCompleted": true, "score": 90}',
    '{"answers":["adaptive: 4", "quiz: 3"], "isCompleted": false, "score": 0}', 
    'ef23c5ae-d62a-4c5d-906e-3bb19e1d241f'
);

INSERT INTO "session_stats"("id", "userId", "courseId", "courseTitle", "topic", "sessionStart", "sessionEnd", "isEnd", "sessionPoints")
VALUES
(
    '0b883d80-d7d5-4a13-a167-68ea4b4697e7',
    'c31f76f2-1e98-4429-9070-e41388ccf53e',
    'b9d1c2f3-8e76-4d2f-bdc4-8a3f93c27d12',
    'Mathematics - A-Level',
    'Pure Mathematics',
    '2025-03-06 11:00:00',
    '2025-03-06 14:00:00',
    true,
    340
);

INSERT INTO "module_stats"("moduleName", "adaptive", "quiz", "wrongAnswers", "sessionId")
VALUES
(
    'Trigonometry',
    '{"answers":["A", "B", "C", "D"], "isCompleted": true, "score": 85}', 
    '{"answers":["C", "A", "B", "D"], "isCompleted": true, "score": 80}',
    '{"answers":["adaptive: 3", "quiz: 2"], "isCompleted": false, "score": 0}', 
    '0b883d80-d7d5-4a13-a167-68ea4b4697e7'
),
(
    'Calculus',
    '{"answers":["B", "D", "A", "C"], "isCompleted": true, "score": 90}', 
    '{"answers":["A", "B", "C", "D"], "isCompleted": true, "score": 85}',
    '{"answers":["adaptive: 4", "quiz: 3"], "isCompleted": false, "score": 0}', 
    '0b883d80-d7d5-4a13-a167-68ea4b4697e7'
);

