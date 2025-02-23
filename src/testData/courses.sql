INSERT INTO "course"("courseTitle", "qualification", "topicsAndModules", "createdAt") 
VALUES 
(
    'Mathematics - GCSE', 
    'GCSE', 
    '[{"topic":"Number","modules":["Integers","Fractions","Percentages","Ratios"]},
    {"topic":"Algebra","modules":["Linear Equations","Inequalities","Quadratics","Graphing"]},
    {"topic":"Geometry","modules":["Angles","Circles","Pythagoras'' Theorem","Trigonometry"]},
    {"topic":"Statistics and Probability","modules":["Averages","Probability","Data Collection","Interpretation of Data"]}]', 
    DEFAULT
);

INSERT INTO "course"("courseTitle", "qualification", "topicsAndModules", "createdAt") 
VALUES 
(
    'Mathematics - A-Level', 
    'A-Level', 
    '[{"topic":"Pure Mathematics","modules":["Algebra","Trigonometry","Calculus","Sequences and Series"]},
    {"topic":"Mechanics","modules":["Forces and Motion","Energy and Power","Kinematics","Newton''s Laws"]},
    {"topic":"Statistics","modules":["Data Representation","Probability","Distributions","Hypothesis Testing"]}]', 
    DEFAULT
);

INSERT INTO "course"("courseTitle", "qualification", "topicsAndModules", "createdAt") 
VALUES 
(
    'English - GCSE', 
    'GCSE', 
    '[{"topic":"Shakespeare","modules":["Macbeth","Romeo and Juliet"]},
    {"topic":"Poetry","modules":["The Romantic Poets","Modern Poetry"]},
    {"topic":"Prose","modules":["Of Mice and Men","Animal Farm","To Kill a Mockingbird"]}]', 
    DEFAULT
);

INSERT INTO "course"("courseTitle", "qualification", "topicsAndModules", "createdAt") 
VALUES 
(
    'English - A-Level', 
    'A-Level', 
    '[{"topic":"Literary Analysis","modules":["Shakespeare","Poetry Analysis","Modern Literature"]},
    {"topic":"Creative Writing","modules":["Narrative Techniques","Character Development","Creative Non-Fiction"]},
    {"topic":"Language and Power","modules":["Language in Society","Language and Gender","Media Language"]},
    {"topic":"Comparative Literature","modules":["Comparing Texts","Literary Themes","Cultural Context"]}]', 
    DEFAULT
);

INSERT INTO "course"("courseTitle", "qualification", "topicsAndModules", "createdAt") 
VALUES 
(
    'Physics - A-Level', 
    'A-Level', 
    '[{"topic":"Mechanics","modules":["Motion","Forces","Energy and Work"]},
    {"topic":"Electricity","modules":["Current and Voltage","Resistance","Power"]},
    {"topic":"Waves and Optics","modules":["Wave Properties","Sound Waves","Light and Optics"]},
    {"topic":"Nuclear Physics","modules":["Radioactivity","Fission and Fusion","Particle Physics"]}]', 
    DEFAULT
);

INSERT INTO "course"("courseTitle", "qualification", "topicsAndModules", "createdAt") 
VALUES 
(
    'Chemistry - A-Level', 
    'A-Level', 
    '[{"topic":"Atomic Structure","modules":["Elements","Compounds","Periodic Table"]},
    {"topic":"Chemical Reactions","modules":["Reaction Types","Balancing Equations","Rates of Reaction"]},
    {"topic":"Acids and Bases","modules":["Acid-Base Reactions","Neutralization","pH Scale"]},
    {"topic":"Organic Chemistry","modules":["Alkanes","Alkenes","Alcohols and Carboxylic Acids"]}]', 
    DEFAULT
);

INSERT INTO "course"("courseTitle", "qualification", "topicsAndModules", "createdAt") 
VALUES 
(
    'History - A-Level', 
    'A-Level', 
    '[{"topic":"Early Modern History","modules":["The Reformation","The English Civil War","The Glorious Revolution"]},
    {"topic":"Modern History","modules":["The Industrial Revolution","World Wars","Cold War"]},
    {"topic":"Historical Sources","modules":["Using Primary Sources","Interpretation of Sources"]}]', 
    DEFAULT
);

INSERT INTO "course"("courseTitle", "qualification", "topicsAndModules", "createdAt") 
VALUES 
(
    'History - GCSE', 
    'GCSE', 
    '[{"topic":"The World Wars","modules":["World War I","World War II","The Interwar Period"]},
    {"topic":"The Industrial Revolution","modules":["Industry and Innovation","Social Changes","Working Conditions"]},
    {"topic":"The Cold War","modules":["Origins of the Cold War","Key Events","End of the Cold War"]},
    {"topic":"Civil Rights Movement","modules":["American Civil Rights","Anti-Apartheid Movement","Women''s Rights"]}]', 
    DEFAULT
);

INSERT INTO "course"("courseTitle", "qualification", "topicsAndModules", "createdAt") 
VALUES 
(
    'Geography - GCSE', 
    'GCSE', 
    '[{"topic":"Physical Geography","modules":["Plate Tectonics","Weather and Climate","Rivers and Coasts"]},
    {"topic":"Human Geography","modules":["Urbanization","Population Growth","Economic Development"]},
    {"topic":"Environmental Issues","modules":["Global Warming","Sustainability","Pollution"]}]', 
    DEFAULT
);

INSERT INTO "course"("courseTitle", "qualification", "topicsAndModules", "createdAt") 
VALUES 
(
    'Geography - A-Level', 
    'A-Level', 
    '[{"topic":"Physical Geography","modules":["Plate Tectonics","Weather Systems","Coastal Erosion"]},
    {"topic":"Human Geography","modules":["Globalization","Urbanization","Population Dynamics"]},
    {"topic":"Sustainability","modules":["Climate Change","Energy Resources","Pollution"]},
    {"topic":"Geographical Skills","modules":["Fieldwork","Geographical Research","Map Reading"]}]', 
    DEFAULT
);  

--DAVID
INSERT INTO "session_stats"("id", "userId", "courseId", "topic", "sessionStart", "sessionEnd", "isEnd", "sessionPoints")
VALUES
(
    'dc01c6bc-3b58-4b34-8905-b63a7c8a47bb',
    'c31f76f2-1e98-4429-9070-e41388ccf53e',
    '6',
    'Atomic Structure',
    '2025-03-04 09:00:00',
    '2025-03-04 12:00:00',
    true,
    310
);

INSERT INTO "module_stats"("moduleName", "adaptive", "quiz", "wrongAnswers", "sessionId")
VALUES
(
    'Elements and Compounds',
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

INSERT INTO "session_stats"("id", "userId", "courseId", "topic", "sessionStart", "sessionEnd", "isEnd", "sessionPoints")
VALUES
(
    'ef23c5ae-d62a-4c5d-906e-3bb19e1d241f',
    'c31f76f2-1e98-4429-9070-e41388ccf53e',
    '5',
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
    'Resistance and Power',
    '{"answers":["C", "B", "D", "A"], "isCompleted": true, "score": 85}', 
    '{"answers":["D", "C", "A", "B"], "isCompleted": true, "score": 90}',
    '{"answers":["adaptive: 4", "quiz: 3"], "isCompleted": false, "score": 0}', 
    'ef23c5ae-d62a-4c5d-906e-3bb19e1d241f'
);

INSERT INTO "session_stats"("id", "userId", "courseId", "topic", "sessionStart", "sessionEnd", "isEnd", "sessionPoints")
VALUES
(
    '0b883d80-d7d5-4a13-a167-68ea4b4697e7',
    'c31f76f2-1e98-4429-9070-e41388ccf53e',
    '2',
    'Algebra',
    '2025-03-06 11:00:00',
    '2025-03-06 14:00:00',
    true,
    340
);

INSERT INTO "module_stats"("moduleName", "adaptive", "quiz", "wrongAnswers", "sessionId")
VALUES
(
    'Linear Equations',
    '{"answers":["A", "B", "C", "D"], "isCompleted": true, "score": 85}', 
    '{"answers":["C", "A", "B", "D"], "isCompleted": true, "score": 80}',
    '{"answers":["adaptive: 3", "quiz: 2"], "isCompleted": false, "score": 0}', 
    '0b883d80-d7d5-4a13-a167-68ea4b4697e7'
),
(
    'Inequalities',
    '{"answers":["B", "D", "A", "C"], "isCompleted": true, "score": 90}', 
    '{"answers":["A", "B", "C", "D"], "isCompleted": true, "score": 85}',
    '{"answers":["adaptive: 4", "quiz: 3"], "isCompleted": false, "score": 0}', 
    '0b883d80-d7d5-4a13-a167-68ea4b4697e7'
);

