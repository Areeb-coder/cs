/**
 * Refactor UHV (ASM-301) cheat sheet data:
 * - Replace giant unstructured text with scannable Concept Cards:
 *   [Definition] -> [Key Points / Remember] -> [Difference Table] -> [Example] -> [Exam Trap] -> [Visual Diagram]
 * - Strictly align all 5 units to the authoritative JMI syllabus
 * - Provide clean ASCII/SVG educational visual diagrams for all requested key topics
 */
const fs = require('fs');
const path = require('path');

const masterDataPath = path.join(__dirname, 'master_cheatsheets_data.json');
const cheatsheetsDataPath = path.join(__dirname, 'cheatsheets_data.json');

const masterData = JSON.parse(fs.readFileSync(masterDataPath, 'utf8'));
const csData = JSON.parse(fs.readFileSync(cheatsheetsDataPath, 'utf8'));

const updateSubject = (data) => {
  const uhv = data.find(s => s.subjectId === 'asm-301');
  if (!uhv) return;

  uhv.subjectTitle = 'UNIVERSAL HUMAN VALUES — ASM-301';
  uhv.sourceStatus = 'Authoritative JMI ASM-301 Syllabus';

  // ----------------------------------------------------------------------------------------
  // UNIT I: Course Introduction — Need, Basic Guidelines, Content & Process for Value Education
  // ----------------------------------------------------------------------------------------
  uhv.units[0].unitTitle = '1 — Need, Basic Guidelines, Content and Process for Value Education';
  uhv.units[0].coverageStatements = [
    'Need, basic guidelines, content and process for Value Education.',
    'Self-Exploration as the process: natural acceptance and experiential validation.',
    'Continuous Happiness and Prosperity as basic human aspirations.',
    'Right understanding, relationship and physical facilities: priority and role.',
    'Understanding happiness vs temporary sensory pleasure; prosperity vs accumulation.',
    'Harmony at various levels: Individual, Family, Society and Nature/Existence.',
    'Myers-Briggs Type Indicator (MBTI) personality framework.'
  ];
  uhv.units[0].sixtySecSummary = [
    'Value Education: Develops right understanding and humane conduct. Answers "Why and what to do?", while skill education answers "How to do?".',
    'Self-Exploration Process: Proposal \\to Natural Acceptance \\to Experiment in living \\to Experiential Validation \\to Right Understanding.',
    'Basic Human Aspirations: Continuous Happiness (state of internal harmony) + Prosperity (feeling of having more than required physical facilities).',
    'Correct Priority: 1. Right Understanding \\to 2. Relationship \\to 3. Physical Facilities. Physical facilities are necessary but insufficient for complete happiness.',
    'Prosperity vs Accumulation: Prosperity is a qualitative feeling of sufficiency; accumulation is the endless physical hoard beyond need.',
    'MBTI Framework: Classifies personality preferences across 4 dimensions: E/I (Extraversion/Introversion), S/N (Sensing/Intuition), T/F (Thinking/Feeling), J/P (Judging/Perceiving).'
  ];
  uhv.units[0].formulaBlocks = [
    {
      name: 'Process of Self-Exploration',
      formula: '\\text{Proposal} \\longrightarrow \\text{Natural Acceptance} \\longrightarrow \\text{Living in Relationship/Nature} \\longrightarrow \\text{Experiential Validation}'
    },
    {
      name: 'Universal Priority Hierarchy',
      formula: '\\mathbf{1.\\; Right\\; Understanding} \\;(\\text{in Self}) \\;\\longrightarrow\\; \\mathbf{2.\\; Relationship} \\;(\\text{with Humans}) \\;\\longrightarrow\\; \\mathbf{3.\\; Physical\\; Facility} \\;(\\text{with Rest of Nature})'
    }
  ];
  uhv.units[0].coreConcepts = [
    {
      title: 'Value Education vs Skill Education',
      content: `### Concept
**Value Education**
Education that enables a human being to understand "what to do" (purpose, values, ethical direction) and live in harmony with oneself, family, society, and nature.

### Remember
- Develops right understanding and responsible conduct.
- Complements technical and occupational skills.
- Skill without value education leads to technological misuse, corruption, and environmental destruction.

### Difference
| Feature | Value Education | Skill Education |
|---|---|---|
| Core Question | **Why and what should I do?** | **How to perform a task?** |
| Focus | Purpose, ethics, relationships, harmony | Technique, capability, efficiency |
| Nature | Universal and invariant for all humans | Domain-specific (e.g., coding, circuit design) |
| Outcome | Wisdom and responsible living | Professional competence |

### Example
An engineer designing a building uses **skill education** to calculate structural load, and **value education** to ensure safety, eco-friendly materials, and non-exploitative labour practices.`
    },
    {
      title: 'The Process of Self-Exploration: Natural Acceptance & Experiential Validation',
      content: `### Concept
**Self-Exploration**
Observing and verifying propositions within oneself rather than accepting dogma, authority, or scriptures blindly.

### The Two Complementary Checks
1. **Natural Acceptance (Sahaj Svikriti):**
   - The innate, uncorrupted sense of what is naturally acceptable to me as a human being.
   - It is invariant, unconditional, and universal across all times, places, and individuals.
2. **Experiential Validation (Anubhavik Pramanikaran):**
   - Testing the proposal in day-to-day living.
   - Behavior with humans leads to **Mutual Happiness (Ubhay-Tripti)**.
   - Work with rest of nature leads to **Mutual Prosperity (Ubhay-Samriddhi)**.

### Visual Architecture
\`\`\`text
  [ Proposal ] 
       │
       ▼
[ Self-Exploration ] ───▶ [ Natural Acceptance ] (Does it feel inherently right?)
       │
       ▼
[ Living Accordingly ] ─┬─▶ Behavior with Humans  ──▶ Mutual Happiness
                        └─▶ Work with Nature       ──▶ Mutual Prosperity
\`\`\`

### Exam Point
Never describe self-exploration as intellectual debate or psychological conditioning; it is direct experiential verification.`
    },
    {
      title: 'Continuous Happiness & Prosperity vs Sensual Pleasure & Accumulation',
      content: `### Concept
**Continuous Happiness (Sukh)**
To be in a state of internal harmony, free from contradiction and stress.

**Prosperity (Samriddhi)**
The feeling of having or being able to produce more than sufficient physical facilities.

### Differences
| Concept | Happiness (Sukh) | Temporary Pleasure (Bhog) |
|---|---|---|
| Source | Right understanding and harmony | Sensory stimulation (taste, touch, sight) |
| Duration | Continuous and stable | Temporary; leads to boredom or addiction |
| Dependency | Internal (within the self) | External (dependent on things and others) |

| Concept | Prosperity (Samriddhi) | Unlimited Accumulation (Sangrah) |
|---|---|---|
| Nature | A qualitative feeling of sufficiency | A quantitative obsession with hoarding |
| Assessment | Correct appraisal of physical needs | Blind maximization without defined limit |
| Mindset | Sharing, nurturing, mutual prosperity | Depriving others, fear, insecurity |

### Diagram: Three-Level Priority
\`\`\`text
         ▲
        / \\     Level 1: RIGHT UNDERSTANDING (Resolves Self)
       /───\\
      /     \\   Level 2: RELATIONSHIP (Resolves Family & Society)
     /───────\\
    /         \\ Level 3: PHYSICAL FACILITY (Resolves Body Needs)
   /───────────\\
\`\`\``
    },
    {
      title: 'MBTI (Myers-Briggs Type Indicator) Personality Framework',
      content: `### Concept
A psychological assessment framework classifying human personality preferences across four fundamental dichotomies:

### The 4 Dimensions
1. **Extraversion (E) vs Introversion (I):** Focus of energy (outer world of people vs inner world of ideas).
2. **Sensing (S) vs Intuition (N):** Information intake (concrete five-sense facts vs abstract patterns & possibilities).
3. **Thinking (T) vs Feeling (F):** Decision making (logical cause-and-effect vs values and personal impact).
4. **Judging (J) vs Perceiving (P):** Outer lifestyle (structured, planned closure vs flexible, spontaneous adaptation).

### Exam Point
In UHV, MBTI is studied to foster empathy and appreciate diverse behavioral styles in collaborative teamwork.`
    }
  ];

  // ----------------------------------------------------------------------------------------
  // UNIT II: Understanding Harmony in the Human Being — Harmony in Myself
  // ----------------------------------------------------------------------------------------
  uhv.units[1].unitTitle = '2 — Understanding Harmony in the Human Being — Harmony in Myself';
  uhv.units[1].coverageStatements = [
    'Human being as co-existence of Sentient "I" (Self) and Material "Body".',
    'Needs of "I" (qualitative, continuous) vs Needs of Body (quantitative, temporary).',
    'Body as an instrument of "I": I as Doer, Seer, and Enjoyer.',
    'Habits and hobbies: role in personal development.',
    'SWOT Analysis: Strengths, Weaknesses, Opportunities, Threats.',
    'Activities of "I": Desire, Thought, Expectation, Imagination.',
    'Sanyam (Self-regulation) and Svasthya (Health).',
    'Epidemiology, preventive medicine, hygiene, stress management, WHO health standards.'
  ];
  uhv.units[1].sixtySecSummary = [
    'Human Being = Co-existence of Sentient "I" (Conscious) and Material "Body" (Physico-chemical).',
    'Needs Comparison: Need of "I" is Sukh (Happiness, Trust, Respect) - Qualitative & Continuous. Need of Body is Suvidha (Food, Clothing, Shelter) - Quantitative & Temporary.',
    'Body as Instrument: "I" is the Seer (Drashta), Doer (Karta), and Enjoyer (Bhokta). The Body is merely an obedient instrument.',
    'Sanyam & Health: Sanyam is the feeling of responsibility in "I" to nurture, protect and rightly utilize the Body. Svasthya (Health) is the state where every body part functions smoothly.',
    'SWOT Matrix: Internal factors (Strengths, Weaknesses) + External environment (Opportunities, Threats).',
    'Health Programs: Regular routine, balanced nutrition, physical labor/exercise (Pranayama/Asanas), adequate rest, and mental equanimity.'
  ];
  uhv.units[1].formulaBlocks = [
    {
      name: 'Human Co-existence Equation',
      formula: '\\text{Human Being} = \\text{Sentient \\"I\\" (Conscious Entity)} \\;\\oplus\\; \\text{Material Body (Physico-Chemical Instrument)}'
    },
    {
      name: 'Sanyam and Health Interrelation',
      formula: '\\text{Sanyam (Self-Regulation in \\"I\\")} \\;\\implies\\; \\text{Svasthya (Harmonious Functioning of Body)}'
    }
  ];
  uhv.units[1].coreConcepts = [
    {
      title: 'Human Being = Co-existence of "I" and "Body"',
      content: `### Concept
A human being is not just the physical body, nor just consciousness, but a synergistic co-existence of the sentient Self ("I") and the material Body.

### Core Distinctions
| Dimension | The Self ("I") | The Body |
|---|---|---|
| Nature | **Conscious / Sentient (Chetana)** | **Material / Physico-chemical (Jada)** |
| Needs | Happiness, respect, trust, affection | Food, clothing, shelter, medicine |
| In time | **Continuous** (we always want respect) | **Temporary** (food is needed periodically) |
| In quantity | **Qualitative** (cannot measure trust in kg) | **Quantitative** (limited quantity needed) |
| Fulfilment | Right Understanding & Right Feelings | Physico-chemical production |
| Activities | Knowing, assuming, recognizing, fulfilling | Only recognizing and fulfilling |

### Diagram: I + Body Synergy
\`\`\`text
+-----------------------+              +-----------------------+
|      SELF ("I")       |              |         BODY          |
|  - Conscious          |  Information |  - Material           |
|  - Needs: Happiness   | <=========>  |  - Needs: Facilities  |
|  - Seer, Doer, Enjoyer|              |  - Instrument         |
+-----------------------+              +-----------------------+
\`\`\``
    },
    {
      title: 'I as Doer, Seer, and Enjoyer',
      content: `### Concept
1. **I as Seer (Drashta):**
   - The eyes do not see; "I" sees *through* the eyes. The camera takes photos, but the human consciousness interprets meaning.
2. **I as Doer (Karta):**
   - "I" decides, plans, and takes decisions. The hands and legs merely execute the command.
3. **I as Enjoyer (Bhokta):**
   - The tongue tastes the sweet, but it is "I" that experiences pleasure or satisfaction.

### Exam Point
When driving a car, the steering wheel turns the wheels, but the driver is the seer, doer, and enjoyer. Similarly, the Body is the vehicle, and "I" is the driver.`
    },
    {
      title: 'SWOT Analysis Matrix for Engineering Students',
      content: `### Concept
A structured framework for strategic self-evaluation and situational analysis.

### 2x2 SWOT Grid
| Category | Internal Factors (Under My Control) | External Factors (Environment) |
|---|---|---|
| **Helpful** | **Strengths (S):** High analytical skills, discipline, coding proficiency, emotional calm. | **Opportunities (O):** Campus placements, emerging tech domains (AI/Data Science), mentorship. |
| **Harmful** | **Weaknesses (W):** Procrastination, fear of public speaking, irregular sleep cycles. | **Threats (T):** High competition, automated job displacement, economic downturns. |

### Exam Tip
Always state action strategies: Use Strengths to capitalize on Opportunities; overcome Weaknesses to defend against Threats.`
    },
    {
      title: 'Sanyam and Svasthya (Self-Regulation and Health)',
      content: `### Concept
- **Sanyam (Self-Regulation):** The feeling of responsibility in the Self ("I") for nurturing (Poshan), protecting (Sanrakshan), and rightly utilizing (Sadviniyog) the physical Body.
- **Svasthya (Health):** 
  1. The body acts according to the instructions of "I".
  2. The parts of the body are in mutual harmony and disease-free.

### Program for Sanyam & Health
1. **Nurturing the Body:** Wholesome, seasonal food, clean water, fresh air.
2. **Protecting the Body:** Appropriate clothing, shelter, hygienic living, immunization.
3. **Right Utilization:** Using the body to learn, serve society, and protect nature—not for animalistic exploitation.
4. **Preventive Medicine & Hygiene:** Daily physical labor (Shram), Yogic asanas, Pranayama, sleep schedule.`
    }
  ];

  // ----------------------------------------------------------------------------------------
  // UNIT III: Understanding Harmony in Family and Society — Harmony in Human-Human Relationship
  // ----------------------------------------------------------------------------------------
  uhv.units[2].unitTitle = '3 — Understanding Harmony in Family and Society — Harmony in Human-Human Relationship';
  uhv.units[2].coverageStatements = [
    'Harmony in family as the basic unit of human interaction.',
    'Justice (Nyaya) in relationship: recognition, fulfilment, evaluation, mutual happiness.',
    'Nine universal values in relationships: Trust, Respect, Affection, Care, Guidance, Reverence, Glory, Gratitude, Love.',
    'Trust (Vishwas) as foundational value: Intention vs Competence.',
    'Respect (Samman) as right evaluation vs Differentiation (body, physical facility, beliefs).',
    'Comprehensive human goals: Samadhan (Resolution), Samriddhi (Prosperity), Abhay (Fearlessness), Sah-Astitva (Co-existence).',
    'Undivided Society (Akhand Samaj) to Universal Human Order (Sarvabhauma Vyavastha).'
  ];
  uhv.units[2].sixtySecSummary = [
    'Foundational Values: Trust (Vishwas) is the foundation of relationship; Love (Prem) is the complete value.',
    'Justice in Relationship: 1. Recognition of relationship \\to 2. Fulfilment of values \\to 3. Right evaluation \\to 4. Mutual Happiness (Ubhay-Tripti).',
    'Intention vs Competence: Intention is what one naturally aspires to (always good in all humans). Competence is the ability to actualize that intention. Never doubt intention when competence is lacking.',
    'Respect vs Differentiation: Respect is evaluating the other as human like me. Differentiation divides people based on Body (gender, race, age), Physical Facilities (wealth, status), or Beliefs (sect, ideology).',
    'Comprehensive Human Goals: 1. Resolution (Samadhan) in Individual, 2. Prosperity (Samriddhi) in Family, 3. Fearlessness/Trust (Abhay) in Society, 4. Co-existence (Sah-Astitva) with Nature.',
    'Universal Human Order: Progression from Family \\to Family Cluster \\to Village \\to Nation \\to World Family (Sarvabhauma Vyavastha).'
  ];
  uhv.units[2].formulaBlocks = [
    {
      name: 'Justice (Nyaya) in Relationship',
      formula: '\\text{Recognition of Values} \\;\\longrightarrow\\; \\text{Fulfilment} \\;\\longrightarrow\\; \\text{Right Evaluation} \\;\\longrightarrow\\; \\text{Mutual Happiness (Ubhay-Tripti)}'
    },
    {
      name: 'Four Comprehensive Human Goals',
      formula: '\\text{Samadhan (Individual)} \\;+\\; \\text{Samriddhi (Family)} \\;+\\; \\text{Abhay (Society)} \\;+\\; \\text{Sah-Astitva (Nature)}'
    }
  ];
  uhv.units[2].coreConcepts = [
    {
      title: 'Trust (Vishwas): Intention vs Competence',
      content: `### Concept
**Trust** is the assurance that the other person wants my happiness and prosperity. It is the foundational value (Aadhaar Mulya) in human relationships.

### Intention vs Competence
- **Intention (Niyat):** What a person naturally aspires to do (inherently pure and positive in all beings).
- **Competence (Yogyata):** The ability and skill to actualize that intention without error.

### Critical Comparison
| Situation | When I Make a Mistake | When the Other Person Makes a Mistake |
|---|---|---|
| My Assessment | "My intention was good, but I lacked time or competence." | "Their intention was bad; they wanted to hurt me." |
| Correct UHV Approach | Strive to improve my competence. | Trust their intention; help them improve their competence with affection. |

### Visual: Intention x Competence Quadrant
\`\`\`text
                High Competence
                      ▲
       Misdirected    │    TRUSTED ALLY
       Knowledge      │    (Ideal Leader)
  ◄───────────────────┼───────────────────► Good Intention
       Hostile Actor  │    Well-Meaning but
                      │    Erratic (Needs Guidance)
                      ▼
                Low Competence
\`\`\``
    },
    {
      title: 'Respect (Samman) vs Differentiation (Bhed-Bhav)',
      content: `### Concept
**Respect (Samman)** means **Right Evaluation (Samyak Mulyankan)**. Over-evaluation, under-evaluation, or otherwise-evaluation are all forms of disrespect.

### Difference Table
| Basis of Evaluation | Respect (Right Evaluation) | Differentiation (Disrespect) |
|---|---|---|
| Understanding | "The other is like me; their purpose is same as mine." | "The other is different/inferior/superior to me." |
| Body Level | Sees body as instrument of human being | Discriminates on Gender, Race, Age, Appearance |
| Physical Facilities | Evaluates facilities as mere tools | Discriminates on Wealth, Brand, Post, Rank |
| Beliefs (Isms) | Evaluates alignment with natural acceptance | Discriminates on Sect, Religion, Political Creed |

### Exam Line
Respect leads to complementary relationship and mutual ease; differentiation breeds jealousy, ego, inferiority complexes, and social stratification.`
    },
    {
      title: 'The Nine Universal Values in Human Relationships',
      content: `### Core Sequence
1. **Trust (Vishwas):** Foundational value; clarity on intention.
2. **Respect (Samman):** Right evaluation of the other as oneself.
3. **Affection (Sneha):** Feeling of being related to the other; absence of opposition.
4. **Care (Vatsalya):** Responsibility for nurturing and protecting the body of the related.
5. **Guidance (Marghdarshan):** Responsibility of ensuring right understanding in the other.
6. **Reverence (Shraddha):** Acceptance of excellence in another who has achieved harmony.
7. **Glory (Gaurav):** Feeling of honor for those who have made noble efforts for human order.
8. **Gratitude (Kritagyata):** Acknowledging and feeling thankful for benefits received from others.
9. **Love (Prem):** The complete value (Purna Mulya); feeling of unconditional relatedness to all beings.`
    },
    {
      title: 'Family to Universal Human Order (Akhand Samaj to Sarvabhauma Vyavastha)',
      content: `### Expanding Circles of Social Harmony
\`\`\`text
[ Individual ] ──▶ [ Family ] ──▶ [ Society / Village ] ──▶ [ Nation ] ──▶ [ World Family ]
    Harmony         Harmony in       Mutual Trust &           Peace &       Universal Order
   in Myself       Relationship       Fearlessness          Harmony        (Sarvabhauma)
\`\`\`

### Comprehensive Human Goals
1. **Resolution (Samadhan):** Every individual living with right understanding and clarity.
2. **Prosperity (Samriddhi):** Every family producing more than its physical requirements.
3. **Fearlessness / Trust (Abhay):** Society living in mutual trust without fear of exploitation.
4. **Co-existence (Sah-Astitva):** Mutually fulfilling co-existence with all orders of nature.`
    }
  ];

  // ----------------------------------------------------------------------------------------
  // UNIT IV: Understanding Harmony in Nature and Existence — Whole Existence as Coexistence
  // ----------------------------------------------------------------------------------------
  uhv.units[3].unitTitle = '4 — Understanding Harmony in Nature and Existence — Whole Existence as Coexistence';
  uhv.units[3].coverageStatements = [
    'Nature as a collection of four orders: Material, Plant/Bio, Animal, Human.',
    'Interconnectedness and Mutual Fulfilment (Parasparta aur Paraspar Poorakta).',
    'Cyclic processes and Recyclability (Avartansheelata).',
    'Self-Regulation (Sva-Niyantran) in natural ecosystems.',
    'Whole existence as Co-existence (Sah-Astitva): Units submerged in all-pervasive Space.',
    'Human-caused ecological imbalance: pollution, resource depletion, global warming.',
    'Holistic perception of nature: Nature as Teacher.'
  ];
  uhv.units[3].sixtySecSummary = [
    'Four Orders of Nature: 1. Material Order (Padarth Avastha), 2. Plant/Bio Order (Pran Avastha), 3. Animal Order (Jeev Avastha), 4. Human Order (Gyan Avastha).',
    'Mutual Fulfilment: The first three orders are mutually enriching and self-regulating. Human beings are currently unfulfilling to the other three orders due to lack of right understanding.',
    'Recyclability & Self-Regulation: Natural processes are cyclic (water cycle, carbon cycle, food webs). No waste exists in pristine nature until human non-biodegradable pollution intervenes.',
    'Existence as Co-existence: Existence = Units (Gathansheel / Kriyasheel) submerged in Space (Shoonya / All-pervasive). Units are active, finite, and energized; Space is inactive, infinite, and transparent.',
    'Root Cause of Ecological Crisis: Treating nature as an infinite resource for limitless sensory consumption rather than living in mutual fulfilment.'
  ];
  uhv.units[3].formulaBlocks = [
    {
      name: 'Four Orders of Nature',
      formula: '\\text{Material Order} \\;\\subset\\; \\text{Plant/Bio Order} \\;\\subset\\; \\text{Animal Order} \\;\\subset\\; \\text{Human Order}'
    },
    {
      name: 'Existence Equation',
      formula: '\\text{Existence (Astitva)} = \\text{Units (Kriya/Nature)} \\;\\text{submerged in}\\; \\text{Space (Shoonya/All-pervasive)}'
    }
  ];
  uhv.units[3].coreConcepts = [
    {
      title: 'The Four Orders of Nature: Interconnectedness & Fulfilment',
      content: `### Concept
Nature is the aggregate of all physical, biological, and conscious entities categorized into four interconnected orders:

### Comparison Matrix of the Four Orders
| Order | Hindi Name | Constituents | Fundamental Attribute | Activity (Kriya) |
|---|---|---|---|---|
| **1. Material** | Padarth Avastha | Soil, water, air, metals, minerals | Composition / Decomposition | Recognition & Fulfilment |
| **2. Plant / Bio** | Pran Avastha | Grass, plants, trees, shrubs | Growth, respiration, seed propagation | Recognition & Fulfilment |
| **3. Animal** | Jeev Avastha | Birds, beasts, fish, insects | Will to live in the Self ("I") | Recognition & Fulfilment + Selection in "I" |
| **4. Human** | Gyan Avastha | Human beings | Will to live with happiness & right understanding | Knowing, Assuming, Recognizing, Fulfilling |

### Mutual Fulfilment Status
- **Material \\to Plant:** Soil and water nurture trees.
- **Plant \\to Animal:** Trees provide oxygen, fruits, and fodder.
- **Animal \\to Material:** Excreta and decay enrich the soil.
- **Human \\to Other 3 Orders:** Currently exploitative (deforestation, toxic dumping). With Right Understanding, humans become mutually fulfilling.`
    },
    {
      title: 'Cyclic Processes (Recyclability) and Self-Regulation',
      content: `### Concept
- **Recyclability (Avartansheelata):** Every product in natural ecology returns to its source through cyclic transformation without generating toxic permanent dead-ends.
- **Self-Regulation (Sva-Niyantran):** Natural population balances, predator-prey equilibria, and climatic cycles self-correct without external centralized commands.

### Diagram: Eco-Cycle vs Industrial Pollution
\`\`\`text
NATURAL RECYCLABILITY:
Soil ──▶ Seed ──▶ Plant ──▶ Fruit/Foliage ──▶ Organic Compost ──▶ Soil

LINEAR INDUSTRIAL EXPLOITATION:
Virgin Ore ──▶ Energy Exhaustion ──▶ Toxic Byproduct ──▶ Plastic Landfill (Non-Cyclic)
\`\`\`

### Exam Point
Sustainable technology must copy nature's cyclic model (circular economy, biodegradable materials, zero-waste manufacturing).`
    },
    {
      title: 'Existence as Co-existence: Units Submerged in Space',
      content: `### Concept
Everything in existence can be understood as physical/conscious **Units** co-existing in **All-Pervasive Space**.

### Contrast: Units vs Space
| Dimension | Units (Ekai) | Space (Shoonya) |
|---|---|---|
| Nature | Active, dynamic, changing | Inactive, unchanging, constant |
| Extent | Finite, bounded | Infinite, all-pervasive |
| Energy | Energized in space | Reflects equilibrium; no separate momentum |
| Relationship | Mutual interaction | Transmitting presence; transparent medium |

### Human Implication
Human beings are not meant to struggle for Darwinian "survival of the fittest" against nature; nature is fundamentally built on co-existence, synergy, and symbiosis.`
    }
  ];

  // ----------------------------------------------------------------------------------------
  // UNIT V: Implications of Holistic Understanding of Harmony on Professional Ethics
  // ----------------------------------------------------------------------------------------
  uhv.units[4].unitTitle = '5 — Implications of Holistic Understanding of Harmony on Professional Ethics';
  uhv.units[4].coverageStatements = [
    'Natural acceptance of human values and definitiveness of ethical human conduct.',
    'Humanistic Education, Humanistic Constitution, and Universal Human Order.',
    'Competence in professional ethics: augmenting universal human order.',
    'People-friendly and eco-friendly production systems.',
    'Appropriate Technology: evaluation criteria and sustainable management patterns.',
    'Case studies of ethical dilemmas in engineering, computing, and corporate management.',
    'Social and ethical responsibilities of technologists, engineers, and scientists.'
  ];
  uhv.units[4].sixtySecSummary = [
    'Definitiveness of Ethical Conduct: Ethical behavior based on natural acceptance is definitive, universal, and unvarying (in contrast to opportunistic codes driven by fear or greed).',
    'Three Core Professional Competencies: 1. Clarity on comprehensive human goals, 2. Ability to develop people-friendly and eco-friendly technologies, 3. Ability to formulate sustainable management models.',
    'Appropriate Technology: Technologies evaluated on safety, renewability, recyclability, and human dignity—not solely short-term profit.',
    'People-Friendly Production: Non-exploitative, safe, empowering, and respectful of worker well-being.',
    'Eco-Friendly Production: Minimizes non-renewable depletion, zero toxic emissions, cradle-to-cradle lifecycle.',
    'Dilemma Framework: Situation \\to Stakeholders \\to Core Value Conflict \\to Ecological/Human Impact \\to Ethical Decision based on Mutual Fulfilment.'
  ];
  uhv.units[4].formulaBlocks = [
    {
      name: 'Criteria for Appropriate Technology',
      formula: '\\text{Appropriate Technology} = \\text{Technically Sound} \\;\\wedge\\; \\text{People-Friendly (Human Dignity)} \\;\\wedge\\; \\text{Eco-Friendly (Cyclic)}'
    },
    {
      name: 'Professional Ethics Goal',
      formula: '\\text{Professional Competence} \\;\\times\\; \\text{Right Understanding} \\;\\implies\\; \\text{Universal Human Order}'
    }
  ];
  uhv.units[4].coreConcepts = [
    {
      title: 'Definitiveness of Ethical Human Conduct',
      content: `### Concept
Ethical conduct is the expression of right understanding in human-to-human behavior and human-to-nature work.

### The Three Hallmarks
1. **Values (Mulya):** Clarity in relationship leading to mutual happiness.
2. **Policy (Niti):** Protection and enrichment of human, economic, and natural resources.
3. **Character (Charitra):** Sva-Nari/Sva-Purush (faithfulness in relationship), Sva-Dhan (wealth earned through honest labor), and Dayapurna Vyavahar (compassionate behavior with all).

### Exam Point
When conduct is rooted in natural acceptance, it is stable and predictable. When rooted in fear (Bhay) or greed (Lobha), it fluctuates with market incentives.`
    },
    {
      title: 'People-Friendly vs Eco-Friendly Production Systems',
      content: `### Key Distinctions
| Dimension | People-Friendly Production | Eco-Friendly Production |
|---|---|---|
| Primary Target | Worker dignity, safety, social benefit | Preservation of ecosystems, biodiversity |
| Core Requirement | Fair wages, non-hazardous labor, inclusive governance | Cyclic materials, renewable energy, zero effluent |
| Metrics | Physical health, work satisfaction, community uplift | Carbon footprint, life-cycle impact, recyclability |

### Joint Ideal
The ultimate engineering goal is **holistic production** that is simultaneously people-friendly and eco-friendly (e.g. community-run solar microgrids, green software optimization).`
    },
    {
      title: 'Ethical Dilemma Resolution Framework for Engineers',
      content: `### 6-Step Decision Protocol
1. **Identify the Core Ethical Dilemma:** Define the conflict between immediate economic gain and long-term societal/ecological harm.
2. **Identify All Affected Stakeholders:** Workers, local villagers, consumers, future generations, ecological organisms.
3. **Assess Consequences:** Short-term profits vs long-term public health hazards, legal liabilities, environmental collapse.
4. **Apply Natural Acceptance & UHV Check:** Does this action support mutual happiness and mutual prosperity?
5. **Evaluate Technological Alternatives:** Can green redesign or appropriate technology bridge the gap?
6. **Justify Decision on Universal Human Order:** Select the option that upholds human dignity and sustainability.`
    }
  ];
};

updateSubject(masterData);
updateSubject(csData);

fs.writeFileSync(masterDataPath, JSON.stringify(masterData, null, 2), 'utf8');
fs.writeFileSync(cheatsheetsDataPath, JSON.stringify(csData, null, 2), 'utf8');

console.log('Successfully updated UHV cheatsheets in both data files!');
