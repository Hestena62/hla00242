 // --- Academic Notes Data (Existing) ---
        const academicNotes = {
            'gilded-age': {
                course: 'HIS 201: American History Post-1865',
                concept: 'The Era of Rapid Industrialization',
                content: `
                    <div class="text-sm font-semibold text-slate-500 dark:text-slate-400 mb-2">\${lucide.createIcons({'attributes': {'class': 'w-4 h-4 inline mr-2'}, 'iconName': 'archive'})} Course: HIS 201</div>
                    <h4 class="text-lg font-bold mb-3 dark:text-primary-400">Key Concepts:</h4>
                    <ul class="list-disc list-inside space-y-2 ml-4">
                        <li>**Industrial Expansion:** Driven by railroads, steel (Carnegie), and oil (Rockefeller). Marked by massive wealth accumulation and sharp economic inequality.</li>
                        <li>**Urbanization & Immigration:** Cities swelled, leading to tenement housing, public health crises, and the rise of political machines (like Tammany Hall).</li>
                        <li>**Political Corruption:** The period's name, coined by Mark Twain, refers to the superficial glitter hiding deep political graft and corporate influence on government.</li>
                        <li>**Social Response:** Early labor movements (Knights of Labor, AFL) and reform efforts emerged to combat exploitation.</li>
                    </ul>
                `
            },
            'social-class': {
                course: 'SOC 101: Introduction to Sociology',
                concept: 'Classical Theories of Stratification',
                content: `
                    <div class="text-sm font-semibold text-slate-500 dark:text-slate-400 mb-2">\${lucide.createIcons({'attributes': {'class': 'w-4 h-4 inline mr-2'}, 'iconName': 'archive'})} Course: SOC 101</div>
                    <h4 class="text-lg font-bold mb-3 dark:text-primary-400">Comparing Marx and Weber:</h4>
                    <ul class="list-disc list-inside space-y-2 ml-4">
                        <li>**Karl Marx (Conflict Theory):** Class is solely determined by **economic relations** (ownership of the means of production, or *bourgeoisie* vs. *proletariat*). Stratification is inherently exploitative.</li>
                        <li>**Max Weber (Multidimensional View):** Stratification is based on three dimensions: **Class** (economic position), **Status** (social prestige/honor), and **Party** (political power/influence). This offers a more nuanced view than Marx's purely economic focus.</li>
                        <li>**Relevance:** Weber's model better explains modern stratification where factors like education and job prestige (status) often override simple wealth (class).</li>
                    </ul>
                `
            },
            'ancient-rome': {
                course: 'HIS 103: World Civilization I',
                concept: 'Transition from Republic to Empire',
                content: `
                    <div class="text-sm font-semibold text-slate-500 dark:text-slate-400 mb-2">\${lucide.createIcons({'attributes': {'class': 'w-4 h-4 inline mr-2'}, 'iconName': 'archive'})} Course: HIS 103</div>
                    <h4 class="text-lg font-bold mb-3 dark:text-primary-400">The Fall of the Republic:</h4>
                    <p>The transition period (c. 133 BCE to 27 BCE) was characterized by military expansion overwhelming Republican political institutions. Key internal crises included:</p>
                    <ul class="list-disc list-inside space-y-2 ml-4">
                        <li>**Rise of Personal Armies:** Generals (Marius, Sulla, Pompey, Caesar) commanded loyal armies, shifting power away from the Senate.</li>
                        <li>**Land Reform Conflicts:** Attempts by the Gracchi brothers to redistribute land led to violence and civil strife.</li>
                        <li>**The Triumvirates:** Alliances of powerful men (like Julius Caesar and Augustus) ultimately centralized power, culminating in Augustus becoming the first Roman Emperor.</li>
                    </ul>
                `
            },
            'vygotsky-theories': {
                course: 'EDU 105: Intro to Special Education',
                concept: "Vygotsky's Sociocultural Theory of Learning",
                content: `
                    <div class="text-sm font-semibold text-slate-500 dark:text-slate-400 mb-2">\${lucide.createIcons({'attributes': {'class': 'w-4 h-4 inline mr-2'}, 'iconName': 'archive'})} Course: EDU 105</div>
                    <h4 class="text-lg font-bold mb-3 dark:text-primary-400">Zone of Proximal Development (ZPD):</h4>
                    <p>The ZPD defines the difference between what a learner can do **without help** and what they can do **with guidance** and encouragement from a more knowledgeable peer or instructor (MKO).</p>
                    <ul class="list-disc list-inside space-y-2 ml-4">
                        <li>**Scaffolding:** The temporary support provided by an MKO to help the student achieve the task within the ZPD. As the student gains competence, the support is gradually withdrawn.</li>
                        <li>**Sociocultural Context:** Learning is a social process. Language and cultural tools (like calculators, writing systems) are central to cognitive development.</li>
                        <li>**Implication for UDL:** Requires teachers to structure tasks (scaffolding) and provide multiple means of engagement (MKO interactions) to meet students in their ZPD.</li>
                    </ul>
                `
            },
            'checks-balances': {
                course: 'POL 101: US Government & Civics',
                concept: 'Separation of Powers and Constitutional Limits',
                content: `
                    <div class="text-sm font-semibold text-slate-500 dark:text-slate-400 mb-2">\${lucide.createIcons({'attributes': {'class': 'w-4 h-4 inline mr-2'}, 'iconName': 'archive'})} Course: POL 101</div>
                    <h4 class="text-lg font-bold mb-3 dark:text-primary-400">The Interplay of Power:</h4>
                    <p>The system of checks and balances ensures no single branch of the US federal government becomes too powerful, maintaining a balance:</p>
                    <ul class="list-disc list-inside space-y-2 ml-4">
                        <li>**Legislative Branch (Congress) checks Executive:** Can impeach the President, override vetoes, and ratify treaties.</li>
                        <li>**Executive Branch (President) checks Legislative:** Can veto laws passed by Congress, and calls special sessions.</li>
                        <li>**Judicial Branch (Supreme Court) checks both:** Can declare laws (Legislative) or executive actions (Executive) unconstitutional (**Judicial Review**).</li>
                    </ul>
                `
            },
            'utilitarianism': {
                course: 'PHI 105: Introduction to Ethics',
                concept: 'The Principle of Utility',
                content: `
                    <div class="text-sm font-semibold text-slate-500 dark:text-slate-400 mb-2">\${lucide.createIcons({'attributes': {'class': 'w-4 h-4 inline mr-2'}, 'iconName': 'archive'})} Course: PHI 105</div>
                    <h4 class="text-lg font-bold mb-3 dark:text-primary-400">Bentham and Mill:</h4>
                    <p>Utilitarianism, primarily championed by **Jeremy Bentham** and **John Stuart Mill**, argues that the most ethical choice is the one that produces the **greatest good for the greatest number**.</p>
                    <ul class="list-disc list-inside space-y-2 ml-4">
                        <li>**Act Utilitarianism:** Considers the consequences of individual acts. *Which action in this specific situation yields the most happiness?*</li>
                        <li>**Rule Utilitarianism:** Considers the consequences of setting a general rule. *Which rule, if universally followed, yields the most happiness in the long run?*</li>
                        <li>**Hedonic Calculus:** Bentham's method for calculating the pleasure/pain resulting from an action based on intensity, duration, certainty, and scope.</li>
                    </ul>
                `
            },
            'feudalism': {
                course: 'HIS 104: World Civilization II',
                concept: 'Medieval European Feudal Structure',
                content: `
                    <div class="text-sm font-semibold text-slate-500 dark:text-slate-400 mb-2">\${lucide.createIcons({'attributes': {'class': 'w-4 h-4 inline mr-2'}, 'iconName': 'archive'})} Course: HIS 104</div>
                    <h4 class="text-lg font-bold mb-3 dark:text-primary-400">Socio-Political System:</h4>
                    <p>Feudalism was a decentralized socio-political system in medieval Europe (9th–15th centuries) where land was exchanged for military service and loyalty. It established a rigid hierarchy:</p>
                    <ul class="list-disc list-inside space-y-2 ml-4">
                        <li>**King/Monarch:** Owns all land, grants fiefs (land) to nobles (vassals).</li>
                        <li>**Vassals/Lords:** Receive land and pledge military service and fealty.</li>
                        <li>**Knights:** Lesser vassals providing military service.</li>
                        <li>**Peasants/Serfs:** Bound to the land (manorialism), providing labor and agricultural production in exchange for protection.</li>
                    </ul>
                `
            },
            'classroom-management': {
                course: 'EDU 202: Secondary Pedagogy',
                concept: 'Proactive Management Strategies',
                content: `
                    <div class="text-sm font-semibold text-slate-500 dark:text-slate-400 mb-2">\${lucide.createIcons({'attributes': {'class': 'w-4 h-4 inline mr-2'}, 'iconName': 'archive'})} Course: EDU 202</div>
                    <h4 class="text-lg font-bold mb-3 dark:text-primary-400">Focus on Prevention over Intervention:</h4>
                    <p>Effective classroom management minimizes disruptions through thoughtful planning and positive relationship building, rather than focusing solely on punishment.</p>
                    <ul class="list-disc list-inside space-y-2 ml-4">
                        <li>**Establishing Routines:** Clear, rehearsed procedures for non-instructional tasks (e.g., passing out papers, sharpening pencils) save significant instructional time.</li>
                        <li>**Proximity Control:** Moving around the room to address minor issues non-verbally before they escalate.</li>
                        <li>**High Expectations & Rapport:** Building positive relationships with students fosters respect and willingness to comply, especially for students with learning differences.</li>
                    </ul>
                `
            },
            'research-methods': {
                course: 'SOC 205: Research Methods',
                concept: 'Quantitative vs. Qualitative Approaches',
                content: `
                    <div class="text-sm font-semibold text-slate-500 dark:text-slate-400 mb-2">\${lucide.createIcons({'attributes': {'class': 'w-4 h-4 inline mr-2'}, 'iconName': 'archive'})} Course: SOC 205</div>
                    <h4 class="text-lg font-bold mb-3 dark:text-primary-400">Two Pillars of Social Inquiry:</h4>
                    <p>Social research typically falls into two categories based on methodology and goal:</p>
                    <ul class="list-disc list-inside space-y-2 ml-4">
                        <li>**Quantitative:** Focuses on numbers, statistics, and objective measurement. **Goal:** Test hypotheses, establish correlation, and generalize results (e.g., surveys with large, random samples).</li>
                        <li>**Qualitative:** Focuses on rich, detailed description, context, and meaning. **Goal:** Explore depth, discover meaning, and understand context (e.g., in-depth interviews, ethnography, focus groups).</li>
                        <li>**Mixed Methods:** Increasingly common approach that combines both methods to leverage the strengths of each.</li>
                    </ul>
                `
            }
        };