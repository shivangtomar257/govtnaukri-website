
// ============================================
// JOB PORTAL DATA
// ============================================

const STATES = [
    { id: 'up', name: 'Uttar Pradesh', icon: '🏛️', count: 142 },
    { id: 'wb', name: 'West Bengal', icon: '🌾', count: 98 },
    { id: 'bihar', name: 'Bihar', icon: '📚', count: 87 },
    { id: 'rajasthan', name: 'Rajasthan', icon: '🏜️', count: 76 },
    { id: 'mp', name: 'Madhya Pradesh', icon: '🦁', count: 65 },
    { id: 'tripura', name: 'Tripura', icon: '🌲', count: 34 },
    { id: 'assam', name: 'Assam', icon: '🍵', count: 45 },
    { id: 'gujarat', name: 'Gujarat', icon: '🏭', count: 112 },
    { id: 'maharashtra', name: 'Maharashtra', icon: '🏙️', count: 156 },
    { id: 'karnataka', name: 'Karnataka', icon: '💻', count: 134 },
    { id: 'tamilnadu', name: 'Tamil Nadu', icon: '🛕', count: 128 },
    { id: 'kerala', name: 'Kerala', icon: '🌴', count: 89 },
    { id: 'punjab', name: 'Punjab', icon: '🌾', count: 54 },
    { id: 'haryana', name: 'Haryana', icon: '🚜', count: 67 },
    { id: 'delhi', name: 'Delhi NCR', icon: '🏛️', count: 198 },
    { id: 'odisha', name: 'Odisha', icon: '🏖️', count: 43 },
    { id: 'jharkhand', name: 'Jharkhand', icon: '⛏️', count: 38 },
    { id: 'chhattisgarh', name: 'Chhattisgarh', icon: '🌳', count: 29 },
    { id: 'telangana', name: 'Telangana', icon: '🏛️', count: 91 },
    { id: 'ap', name: 'Andhra Pradesh', icon: '🌶️', count: 72 },
    { id: 'goa', name: 'Goa', icon: '🏖️', count: 18 },
    { id: 'himachal', name: 'Himachal Pradesh', icon: '🏔️', count: 22 },
    { id: 'uttarakhand', name: 'Uttarakhand', icon: '🏔️', count: 31 },
    { id: 'manipur', name: 'Manipur', icon: '🌸', count: 15 },
    { id: 'meghalaya', name: 'Meghalaya', icon: '🌧️', count: 12 },
    { id: 'mizoram', name: 'Mizoram', icon: '🦜', count: 10 },
    { id: 'nagaland', name: 'Nagaland', icon: '🌺', count: 11 },
    { id: 'sikkim', name: 'Sikkim', icon: '🏔️', count: 14 },
];

const CENTRAL_JOBS = [
    { id: 'ssc', name: 'SSC', fullName: 'Staff Selection Commission', icon: '📋', count: 45 },
    { id: 'upsc', name: 'UPSC', fullName: 'Union Public Service Commission', icon: '🏛️', count: 32 },
    { id: 'railway', name: 'Railway', fullName: 'Indian Railways', icon: '🚂', count: 78 },
    { id: 'banking', name: 'Banking', fullName: 'IBPS / SBI / RBI', icon: '🏦', count: 56 },
    { id: 'defence', name: 'Defence', fullName: 'Army / Navy / Air Force', icon: '🎖️', count: 43 },
    { id: 'police', name: 'Police', fullName: 'CAPF / CISF / CRPF', icon: '👮', count: 67 },
    { id: 'postal', name: 'Postal', fullName: 'India Post', icon: '📮', count: 34 },
    { id: 'teaching', name: 'Teaching', fullName: 'KVS / NVS / NTA', icon: '📖', count: 89 },
    { id: 'medical', name: 'Medical', fullName: 'AIIMS / ESIC / CGHS', icon: '🏥', count: 52 },
    { id: 'engineering', name: 'Engineering', fullName: 'ISRO / DRDO / BHEL', icon: '⚙️', count: 41 },
    { id: 'judicial', name: 'Judicial', fullName: 'High Court / Supreme Court', icon: '⚖️', count: 28 },
    { id: 'psu', name: 'PSU', fullName: 'Public Sector Undertakings', icon: '🏭', count: 63 },
];

const EDUCATION_JOBS = [
    { id: '10th', name: '10th Pass', icon: '📜', count: 234 },
    { id: '12th', name: '12th Pass', icon: '📄', count: 312 },
    { id: 'diploma', name: 'Diploma', icon: '🔧', count: 178 },
    { id: 'graduation', name: 'Graduation', icon: '🎓', count: 456 },
    { id: 'postgrad', name: 'Post Graduation', icon: '📚', count: 267 },
    { id: 'phd', name: 'PhD / Research', icon: '🔬', count: 89 },
    { id: 'teaching-edu', name: 'Teaching', icon: '🍎', count: 145 },
    { id: 'lawyer', name: 'Lawyer / Legal', icon: '⚖️', count: 56 },
    { id: 'it-jobs', name: 'IT / Software', icon: '💻', count: 378 },
    { id: 'medical-edu', name: 'Medical / Nursing', icon: '🩺', count: 123 },
    { id: 'accounting', name: 'Accounting / CA', icon: '📊', count: 87 },
    { id: 'management', name: 'Management / MBA', icon: '💼', count: 156 },
];

const EXPERIENCE_LEVELS = [
    { id: 'fresher', name: 'Fresher (0 Years)', icon: '🌱', count: 523 },
    { id: '1-3', name: '1 - 3 Years', icon: '📈', count: 387 },
    { id: '3-5', name: '3 - 5 Years', icon: '📊', count: 298 },
    { id: '5-8', name: '5 - 8 Years', icon: '🚀', count: 176 },
    { id: '8-12', name: '8 - 12 Years', icon: '⭐', count: 98 },
    { id: '12plus', name: '12+ Years', icon: '👑', count: 54 },
];

const JOB_TYPES = [
    { id: 'fulltime', name: 'Full Time' },
    { id: 'parttime', name: 'Part Time' },
    { id: 'contract', name: 'Contract' },
    { id: 'internship', name: 'Internship' },
    { id: 'remote', name: 'Remote / WFH' },
];

// Sample Jobs Database
const JOBS_DB = [
    {
        id: 1,
        title: 'SSC CGL 2026 - Combined Graduate Level Examination',
        org: 'Staff Selection Commission',
        orgShort: 'SSC',
        type: 'government',
        category: 'central',
        subcategory: 'ssc',
        state: 'all',
        education: 'graduation',
        experience: 'fresher',
        location: 'All India',
        salary: '₹ 25,500 - 92,000/month',
        deadline: '2026-07-15',
        posted: '2026-05-20',
        vacancies: 7500,
        ageLimit: '18-32 Years',
        qualification: 'Bachelor's Degree from recognized university',
        description: 'SSC CGL is one of the most prestigious government job examinations in India. Selected candidates will be posted in various ministries, departments, and organizations of the Government of India.',
        highlights: [
            'Group B & C posts in various ministries',
            'Pay Level 4 to 8 as per 7th CPC',
            'All India posting',
            'Lifetime job security',
        ],
        selectionProcess: ['Tier I (Computer Based)', 'Tier II (Computer Based)', 'Document Verification', 'Medical Examination'],
        tags: ['SSC', 'Central Govt', 'Graduation', 'All India'],
        urgent: true,
        logo: 'SSC',
    },
    {
        id: 2,
        title: 'UPSC Civil Services Examination 2026',
        org: 'Union Public Service Commission',
        orgShort: 'UPSC',
        type: 'government',
        category: 'central',
        subcategory: 'upsc',
        state: 'all',
        education: 'graduation',
        experience: 'fresher',
        location: 'All India',
        salary: '₹ 56,100 - 2,50,000/month',
        deadline: '2026-06-30',
        posted: '2026-05-18',
        vacancies: 1205,
        ageLimit: '21-32 Years',
        qualification: 'Bachelor's Degree in any discipline',
        description: 'The Civil Services Examination is conducted for recruitment to various All India Services and Central Civil Services. This includes IAS, IPS, IFS, and other Group A & B services.',
        highlights: [
            'IAS, IPS, IFS - Top administrative posts',
            'Direct recruitment to All India Services',
            'Prestigious career with high social status',
            'Opportunity to serve the nation',
        ],
        selectionProcess: ['Preliminary Examination', 'Main Examination', 'Personality Test (Interview)', 'Medical Examination'],
        tags: ['UPSC', 'IAS', 'IPS', 'Central Govt'],
        urgent: true,
        logo: 'UPSC',
    },
    {
        id: 3,
        title: 'Railway Recruitment Board (RRB) NTPC 2026',
        org: 'Indian Railways',
        orgShort: 'RRB',
        type: 'government',
        category: 'central',
        subcategory: 'railway',
        state: 'all',
        education: '12th',
        experience: 'fresher',
        location: 'All India',
        salary: '₹ 19,900 - 35,400/month',
        deadline: '2026-08-10',
        posted: '2026-05-22',
        vacancies: 35000,
        ageLimit: '18-33 Years',
        qualification: '12th Pass or Graduate (as per post)',
        description: 'Non-Technical Popular Categories (NTPC) recruitment for various posts in Indian Railways including Clerk, Ticket Collector, Commercial Apprentice, etc.',
        highlights: [
            '35000+ vacancies across India',
            'Travel pass benefits for employees & family',
            'Government accommodation facility',
            'Pension benefits under NPS',
        ],
        selectionProcess: ['Computer Based Test 1', 'Computer Based Test 2', 'Typing Skill Test (if applicable)', 'Document Verification'],
        tags: ['Railway', 'NTPC', '12th Pass', 'All India'],
        urgent: false,
        logo: 'RRB',
    },
    {
        id: 4,
        title: 'IBPS PO/MT XIII Recruitment 2026',
        org: 'Institute of Banking Personnel',
        orgShort: 'IBPS',
        type: 'government',
        category: 'central',
        subcategory: 'banking',
        state: 'all',
        education: 'graduation',
        experience: 'fresher',
        location: 'All India',
        salary: '₹ 36,000 - 63,000/month',
        deadline: '2026-06-25',
        posted: '2026-05-19',
        vacancies: 4500,
        ageLimit: '20-30 Years',
        qualification: 'Graduation in any discipline',
        description: 'Probationary Officer / Management Trainee recruitment in participating public sector banks. Selected candidates will undergo training and be absorbed as Assistant Managers.',
        highlights: [
            'Recruitment in 11 Public Sector Banks',
            'Fast career growth to Scale II, III',
            'Attractive perks and allowances',
            'Posting across major cities in India',
        ],
        selectionProcess: ['Preliminary Exam', 'Main Examination', 'Interview', 'Provisional Allotment'],
        tags: ['Banking', 'IBPS', 'PO', 'Graduation'],
        urgent: true,
        logo: 'IBPS',
    },
    {
        id: 5,
        title: 'UP Police Constable Recruitment 2026',
        org: 'Uttar Pradesh Police Recruitment Board',
        orgShort: 'UPPRB',
        type: 'government',
        category: 'state',
        subcategory: 'up',
        state: 'up',
        education: '12th',
        experience: 'fresher',
        location: 'Uttar Pradesh',
        salary: '₹ 21,700 - 69,100/month',
        deadline: '2026-07-30',
        posted: '2026-05-21',
        vacancies: 52000,
        ageLimit: '18-25 Years',
        qualification: '12th Pass from recognized board',
        description: 'Massive recruitment drive for Police Constables in Uttar Pradesh. Both male and female candidates can apply. Physical efficiency test is mandatory.',
        highlights: [
            '52000+ vacancies - Largest police recruitment',
            'Both male & female candidates eligible',
            'Pay Level 3 as per UP Pay Matrix',
            'Free medical facility for family',
        ],
        selectionProcess: ['Written Examination', 'Physical Efficiency Test', 'Physical Standard Test', 'Document Verification', 'Medical Test'],
        tags: ['UP Police', 'State Govt', '12th Pass', 'Uttar Pradesh'],
        urgent: true,
        logo: 'UPP',
    },
    {
        id: 6,
        title: 'WBPSC Civil Service Exam 2026',
        org: 'West Bengal Public Service Commission',
        orgShort: 'WBPSC',
        type: 'government',
        category: 'state',
        subcategory: 'wb',
        state: 'wb',
        education: 'graduation',
        experience: 'fresher',
        location: 'West Bengal',
        salary: '₹ 32,000 - 78,000/month',
        deadline: '2026-08-05',
        posted: '2026-05-17',
        vacancies: 250,
        ageLimit: '21-36 Years',
        qualification: 'Bachelor's Degree from UGC recognized university',
        description: 'West Bengal Civil Service Executive Examination for recruitment to various administrative posts in the state government including WBCS (Exe), Police Service, and others.',
        highlights: [
            'Group A, B, C, D services in WB Govt',
            'Administrative power at district level',
            'Housing and vehicle allowances',
            'Pension under West Bengal DCRB',
        ],
        selectionProcess: ['Preliminary Exam', 'Main Exam (Written)', 'Personality Test', 'Medical Examination'],
        tags: ['WBPSC', 'State Govt', 'Graduation', 'West Bengal'],
        urgent: false,
        logo: 'WBPSC',
    },
    {
        id: 7,
        title: 'Indian Army Agniveer Recruitment 2026',
        org: 'Indian Army',
        orgShort: 'Army',
        type: 'government',
        category: 'central',
        subcategory: 'defence',
        state: 'all',
        education: '12th',
        experience: 'fresher',
        location: 'All India',
        salary: '₹ 30,000 - 40,000/month',
        deadline: '2026-09-15',
        posted: '2026-05-23',
        vacancies: 25000,
        ageLimit: '17.5 - 23 Years',
        qualification: '10th / 12th Pass (varies by category)',
        description: 'Agniveer scheme recruitment for Indian Army. 4-year tenure with opportunity for permanent absorption. Includes General Duty, Technical, Clerk, and Tradesman categories.',
        highlights: [
            '4-year tenure with 25% permanent absorption',
            'Seva Nidhi package of ₹ 11.71 Lakhs',
            'Life insurance of ₹ 48 Lakhs',
            'Skill certificate for civilian career',
        ],
        selectionProcess: ['Online Registration', 'Physical Fitness Test', 'Medical Examination', 'Written Exam (CET)', 'Recruitment Rally'],
        tags: ['Army', 'Defence', 'Agniveer', '12th Pass'],
        urgent: false,
        logo: 'ARMY',
    },
    {
        id: 8,
        title: 'Delhi Police Constable (Executive) 2026',
        org: 'Delhi Police',
        orgShort: 'DP',
        type: 'government',
        category: 'central',
        subcategory: 'police',
        state: 'delhi',
        education: '12th',
        experience: 'fresher',
        location: 'Delhi NCR',
        salary: '₹ 21,700 - 69,100/month',
        deadline: '2026-07-20',
        posted: '2026-05-20',
        vacancies: 6500,
        ageLimit: '18-25 Years',
        qualification: '12th Pass from recognized board',
        description: 'Delhi Police Constable (Executive) recruitment through SSC. Selected candidates will serve in the capital's law enforcement with modern equipment and training.',
        highlights: [
            'Posting in National Capital Delhi',
            'Modern policing equipment and training',
            'Quarter facility in Delhi NCR',
            'Medical benefits under CGHS',
        ],
        selectionProcess: ['Computer Based Examination', 'Physical Endurance Test', 'Physical Standard Test', 'Medical Examination'],
        tags: ['Delhi Police', 'SSC', '12th Pass', 'Delhi'],
        urgent: true,
        logo: 'DP',
    },
    {
        id: 9,
        title: 'ISRO Scientist/Engineer Recruitment 2026',
        org: 'Indian Space Research Organisation',
        orgShort: 'ISRO',
        type: 'government',
        category: 'central',
        subcategory: 'engineering',
        state: 'all',
        education: 'graduation',
        experience: 'fresher',
        location: 'Bangalore / Ahmedabad / Sriharikota',
        salary: '₹ 56,100 - 1,77,500/month',
        deadline: '2026-08-25',
        posted: '2026-05-16',
        vacancies: 150,
        ageLimit: '18-35 Years',
        qualification: 'B.E / B.Tech in relevant engineering discipline',
        description: 'Scientist/Engineer recruitment for various ISRO centers. Work on India's space missions including Chandrayaan, Gaganyaan, and satellite programs.',
        highlights: [
            'Work on cutting-edge space technology',
            'ISRO accommodation and canteen facilities',
            'Research opportunities and publications',
            'Pride of serving nation's space program',
        ],
        selectionProcess: ['Written Examination', 'Interview', 'Medical Examination', 'Document Verification'],
        tags: ['ISRO', 'Engineering', 'B.Tech', 'Central Govt'],
        urgent: false,
        logo: 'ISRO',
    },
    {
        id: 10,
        title: 'KVS Primary Teacher (PRT) Recruitment 2026',
        org: 'Kendriya Vidyalaya Sangathan',
        orgShort: 'KVS',
        type: 'government',
        category: 'central',
        subcategory: 'teaching',
        state: 'all',
        education: 'teaching-edu',
        experience: 'fresher',
        location: 'All India',
        salary: '₹ 35,400 - 1,12,400/month',
        deadline: '2026-09-01',
        posted: '2026-05-22',
        vacancies: 8000,
        ageLimit: '30-40 Years (varies)',
        qualification: 'Senior Secondary + D.Ed / B.Ed / B.El.Ed',
        description: 'Primary Teacher recruitment in Kendriya Vidyalayas across India. Teach in CBSE-affiliated schools with transferrable job across all states.',
        highlights: [
            'Posting in any Kendriya Vidyalaya in India',
            'Children education allowance',
            'LTC and medical benefits',
            'Regular transfers across India',
        ],
        selectionProcess: ['Written Examination', 'Interview', 'Demo Teaching', 'Document Verification'],
        tags: ['KVS', 'Teaching', 'PRT', 'Central Govt'],
        urgent: false,
        logo: 'KVS',
    },
    {
        id: 11,
        title: 'Tripura PSC Combined Exam 2026',
        org: 'Tripura Public Service Commission',
        orgShort: 'TPSC',
        type: 'government',
        category: 'state',
        subcategory: 'tripura',
        state: 'tripura',
        education: 'graduation',
        experience: 'fresher',
        location: 'Tripura',
        salary: '₹ 25,000 - 65,000/month',
        deadline: '2026-08-15',
        posted: '2026-05-18',
        vacancies: 120,
        ageLimit: '21-40 Years',
        qualification: 'Bachelor's Degree from recognized university',
        description: 'Tripura Combined Competitive Examination for Group A and B services in the state government including Administrative Service, Police Service, and Engineering Service.',
        highlights: [
            'Group A & B posts in Tripura Govt',
            'Administrative postings across state',
            'Housing and transport allowances',
            'Pension under state government rules',
        ],
        selectionProcess: ['Preliminary Exam', 'Main Examination', 'Interview', 'Medical Test'],
        tags: ['TPSC', 'State Govt', 'Graduation', 'Tripura'],
        urgent: false,
        logo: 'TPSC',
    },
    {
        id: 12,
        title: 'SSC CHSL 2026 - LDC / DEO / PA Recruitment',
        org: 'Staff Selection Commission',
        orgShort: 'SSC',
        type: 'government',
        category: 'central',
        subcategory: 'ssc',
        state: 'all',
        education: '12th',
        experience: 'fresher',
        location: 'All India',
        salary: '₹ 19,900 - 63,200/month',
        deadline: '2026-07-10',
        posted: '2026-05-21',
        vacancies: 5000,
        ageLimit: '18-27 Years',
        qualification: '12th Pass from recognized board',
        description: 'Combined Higher Secondary Level examination for recruitment to Lower Division Clerk, Data Entry Operator, and Postal Assistant posts in various ministries.',
        highlights: [
            'Group C posts in Central Govt ministries',
            'Posting in Delhi and state capitals',
            'Regular office hours',
            'Promotion to Group B posts',
        ],
        selectionProcess: ['Tier I (CBT)', 'Tier II (CBT)', 'Skill Test / Typing Test', 'Document Verification'],
        tags: ['SSC', 'CHSL', '12th Pass', 'Central Govt'],
        urgent: true,
        logo: 'SSC',
    },
    {
        id: 13,
        title: 'Bihar Police SI Recruitment 2026',
        org: 'Bihar Police Subordinate Services Commission',
        orgShort: 'BPSSC',
        type: 'government',
        category: 'state',
        subcategory: 'bihar',
        state: 'bihar',
        education: 'graduation',
        experience: 'fresher',
        location: 'Bihar',
        salary: '₹ 35,400 - 1,12,400/month',
        deadline: '2026-08-20',
        posted: '2026-05-19',
        vacancies: 2200,
        ageLimit: '20-37 Years',
        qualification: 'Bachelor's Degree from recognized university',
        description: 'Sub-Inspector recruitment in Bihar Police. Responsible for maintaining law and order, investigation of crimes, and supervision of police stations.',
        highlights: [
            'Gazetted Officer rank in Bihar Police',
            'Power to investigate cognizable offences',
            'Government vehicle and accommodation',
            'Fast promotions to Inspector rank',
        ],
        selectionProcess: ['Preliminary Exam', 'Main Written Exam', 'Physical Efficiency Test', 'Medical Examination', 'Document Verification'],
        tags: ['Bihar Police', 'SI', 'State Govt', 'Bihar'],
        urgent: true,
        logo: 'BP',
    },
    {
        id: 14,
        title: 'Supreme Court Junior Court Assistant 2026',
        org: 'Supreme Court of India',
        orgShort: 'SCI',
        type: 'government',
        category: 'central',
        subcategory: 'judicial',
        state: 'delhi',
        education: 'graduation',
        experience: 'fresher',
        location: 'New Delhi',
        salary: '₹ 35,400 - 1,12,400/month',
        deadline: '2026-07-05',
        posted: '2026-05-20',
        vacancies: 80,
        ageLimit: '18-27 Years',
        qualification: 'Bachelor's Degree with typing speed 35 wpm',
        description: 'Junior Court Assistant recruitment in the Supreme Court of India. Work in the highest court of the land with prestigious environment.',
        highlights: [
            'Work in Supreme Court of India',
            'Prestigious central government post',
            'Delhi posting with housing facility',
            'Exposure to highest level of judiciary',
        ],
        selectionProcess: ['Online Examination', 'Typing Test', 'Descriptive Test', 'Interview', 'Document Verification'],
        tags: ['Supreme Court', 'Judicial', 'Graduation', 'Delhi'],
        urgent: false,
        logo: 'SCI',
    },
    {
        id: 15,
        title: 'ONGC Graduate Trainee Recruitment 2026',
        org: 'Oil & Natural Gas Corporation',
        orgShort: 'ONGC',
        type: 'government',
        category: 'central',
        subcategory: 'psu',
        state: 'all',
        education: 'graduation',
        experience: 'fresher',
        location: 'Mumbai / Delhi / Dehradun / Assam',
        salary: '₹ 60,000 - 1,80,000/month',
        deadline: '2026-09-10',
        posted: '2026-05-17',
        vacancies: 350,
        ageLimit: '21-30 Years',
        qualification: 'B.E / B.Tech / B.Sc / CA / ICWA / MBA',
        description: 'Graduate Trainee recruitment in India's largest oil exploration company. Opportunities in Engineering, Geology, Finance, HR, and other disciplines.',
        highlights: [
            'Maharatna PSU with excellent pay scale',
            'Posting at oil fields across India',
            'Company accommodation and canteen',
            'International exposure opportunities',
        ],
        selectionProcess: ['Computer Based Test', 'Interview', 'Medical Fitness Test', 'Document Verification'],
        tags: ['ONGC', 'PSU', 'Graduate', 'Engineering'],
        urgent: false,
        logo: 'ONGC',
    },
    {
        id: 16,
        title: 'Rajasthan Police Constable Recruitment 2026',
        org: 'Rajasthan Police Department',
        orgShort: 'RPD',
        type: 'government',
        category: 'state',
        subcategory: 'rajasthan',
        state: 'rajasthan',
        education: '12th',
        experience: 'fresher',
        location: 'Rajasthan',
        salary: '₹ 20,600 - 65,500/month',
        deadline: '2026-08-30',
        posted: '2026-05-23',
        vacancies: 4500,
        ageLimit: '18-26 Years',
        qualification: '12th Pass from Rajasthan Board or equivalent',
        description: 'Constable recruitment in Rajasthan Police. Both male and female candidates eligible. Physical standards as per Rajasthan Police rules.',
        highlights: [
            '4500+ vacancies across Rajasthan',
            'Both male & female candidates',
            'Pay Level 5 as per RSR',
            'Free medical for self and dependents',
        ],
        selectionProcess: ['Written Examination', 'Physical Efficiency Test', 'Physical Standard Test', 'Medical Examination', 'Document Verification'],
        tags: ['Rajasthan Police', 'State Govt', '12th Pass', 'Rajasthan'],
        urgent: true,
        logo: 'RP',
    },
    {
        id: 17,
        title: 'NVS TGT / PGT Recruitment 2026',
        org: 'Navodaya Vidyalaya Samiti',
        orgShort: 'NVS',
        type: 'government',
        category: 'central',
        subcategory: 'teaching',
        state: 'all',
        education: 'teaching-edu',
        experience: 'fresher',
        location: 'All India',
        salary: '₹ 44,900 - 1,42,400/month',
        deadline: '2026-08-18',
        posted: '2026-05-18',
        vacancies: 2500,
        ageLimit: 'Not exceeding 40 Years',
        qualification: 'B.Ed + Post Graduation / Graduation (as per post)',
        description: 'Trained Graduate Teacher and Post Graduate Teacher recruitment in Jawahar Navodaya Vidyalayas. Teach talented rural students across India.',
        highlights: [
            'JNVs across all districts in India',
            'Residential school environment',
            'Free accommodation on campus',
            'Children education in JNVs',
        ],
        selectionProcess: ['Computer Based Test', 'Interview', 'Demo Lesson', 'Document Verification'],
        tags: ['NVS', 'Teaching', 'TGT', 'PGT', 'Central Govt'],
        urgent: false,
        logo: 'NVS',
    },
    {
        id: 18,
        title: 'MPPSC State Service Exam 2026',
        org: 'Madhya Pradesh Public Service Commission',
        orgShort: 'MPPSC',
        type: 'government',
        category: 'state',
        subcategory: 'mp',
        state: 'mp',
        education: 'graduation',
        experience: 'fresher',
        location: 'Madhya Pradesh',
        salary: '₹ 36,000 - 90,000/month',
        deadline: '2026-09-05',
        posted: '2026-05-16',
        vacancies: 350,
        ageLimit: '21-40 Years',
        qualification: 'Bachelor's Degree from recognized university',
        description: 'State Service Examination for recruitment to administrative posts in Madhya Pradesh including Deputy Collector, DSP, and other Group A & B services.',
        highlights: [
            'Group A administrative posts in MP',
            'Deputy Collector and DSP cadre',
            'State capital and district postings',
            'Attractive pay and allowances',
        ],
        selectionProcess: ['Preliminary Exam', 'Main Examination', 'Interview', 'Medical Examination'],
        tags: ['MPPSC', 'State Govt', 'Graduation', 'Madhya Pradesh'],
        urgent: false,
        logo: 'MPPSC',
    },
    // PRIVATE JOBS
    {
        id: 101,
        title: 'Software Engineer - Full Stack Developer',
        org: 'Tata Consultancy Services',
        orgShort: 'TCS',
        type: 'private',
        category: 'it',
        experience: 'fresher',
        location: 'Bangalore / Hyderabad / Pune',
        salary: '₹ 3.6 - 4.2 LPA',
        deadline: '2026-06-30',
        posted: '2026-05-20',
        vacancies: 500,
        qualification: 'B.E / B.Tech / MCA / M.Sc (CS/IT)',
        description: 'Full Stack Developer role at TCS. Work on enterprise applications using Java, Spring Boot, React, and cloud technologies for global clients.',
        highlights: [
            'Work with Fortune 500 clients',
            'TCS Elevate learning program',
            'Remote / hybrid work options',
            'Global career mobility',
        ],
        selectionProcess: ['Online Assessment (NQT)', 'Technical Interview', 'HR Interview', 'Document Verification'],
        tags: ['IT', 'Software', 'Fresher', 'Full Stack'],
        urgent: false,
        logo: 'TCS',
    },
    {
        id: 102,
        title: 'Data Analyst - Business Intelligence',
        org: 'Infosys Limited',
        orgShort: 'Infosys',
        type: 'private',
        category: 'it',
        experience: '1-3',
        location: 'Bangalore / Chennai / Mysore',
        salary: '₹ 4.5 - 7.0 LPA',
        deadline: '2026-07-15',
        posted: '2026-05-19',
        vacancies: 200,
        qualification: 'B.E / B.Tech / B.Sc / BCA + 1-3 years exp',
        description: 'Data Analyst role focusing on business intelligence, data visualization, and analytics. Use Power BI, Tableau, SQL, and Python for data-driven insights.',
        highlights: [
            'Work with global analytics teams',
            'Certification support (Microsoft, AWS)',
            'Mentorship from senior analysts',
            'Performance-based bonuses',
        ],
        selectionProcess: ['Online Test', 'Technical Interview (2 rounds)', 'Managerial Interview', 'HR Discussion'],
        tags: ['Data Analyst', 'BI', '1-3 Years', 'IT'],
        urgent: true,
        logo: 'INFY',
    },
    {
        id: 103,
        title: 'Senior Product Manager - Fintech',
        org: 'Paytm',
        orgShort: 'Paytm',
        type: 'private',
        category: 'management',
        experience: '5-8',
        location: 'Noida / Bangalore',
        salary: '₹ 25 - 40 LPA',
        deadline: '2026-08-01',
        posted: '2026-05-18',
        vacancies: 15,
        qualification: 'MBA / B.Tech + 5-8 years product management exp',
        description: 'Lead product strategy for Paytm's financial services vertical. Define roadmap, work with engineering and design teams, and drive user growth.',
        highlights: [
            'Lead fintech product vertical',
            'Stock options and ESOPs',
            'Direct reporting to VP Product',
            'Fast-paced startup environment',
        ],
        selectionProcess: ['Phone Screening', 'Case Study Presentation', 'Panel Interview (3 rounds)', 'Leadership Interview'],
        tags: ['Product Manager', 'Fintech', '5-8 Years', 'Management'],
        urgent: false,
        logo: 'PAY',
    },
    {
        id: 104,
        title: 'HR Business Partner - IT Services',
        org: 'Wipro Limited',
        orgShort: 'Wipro',
        type: 'private',
        category: 'management',
        experience: '3-5',
        location: 'Bangalore / Hyderabad / Pune',
        salary: '₹ 8 - 14 LPA',
        deadline: '2026-07-25',
        posted: '2026-05-21',
        vacancies: 30,
        qualification: 'MBA (HR) / PGDM + 3-5 years HRBP experience',
        description: 'HR Business Partner role supporting IT delivery teams. Handle talent acquisition, employee engagement, performance management, and HR operations.',
        highlights: [
            'Partner with delivery leadership',
            'End-to-end HR operations',
            'Global HR exposure',
            'Leadership development programs',
        ],
        selectionProcess: ['HR Screening', 'Manager Interview', 'Director Interview', 'HR Head Interview'],
        tags: ['HR', 'HRBP', '3-5 Years', 'Management'],
        urgent: false,
        logo: 'WIP',
    },
    {
        id: 105,
        title: 'Chartered Accountant - Audit & Assurance',
        org: 'Deloitte India',
        orgShort: 'Deloitte',
        type: 'private',
        category: 'accounting',
        experience: 'fresher',
        location: 'Mumbai / Delhi / Bangalore',
        salary: '₹ 6 - 8 LPA',
        deadline: '2026-08-10',
        posted: '2026-05-22',
        vacancies: 100,
        qualification: 'CA (Final / Inter cleared) / CA Fresher',
        description: 'Audit & Assurance associate at Deloitte. Work with diverse clients across industries, learn global audit methodologies, and build a career in professional services.',
        highlights: [
            'Big 4 professional services firm',
            'Diverse client exposure',
            'Global mobility programs',
            'CA Articleship completion support',
        ],
        selectionProcess: ['Online Aptitude Test', 'Group Discussion', 'Technical Interview', 'Partner Interview'],
        tags: ['CA', 'Audit', 'Fresher', 'Accounting'],
        urgent: true,
        logo: 'DEL',
    },
    {
        id: 106,
        title: 'Senior Software Architect - Cloud Native',
        org: 'Amazon India',
        orgShort: 'Amazon',
        type: 'private',
        category: 'it',
        experience: '8-12',
        location: 'Bangalore / Hyderabad',
        salary: '₹ 45 - 75 LPA',
        deadline: '2026-09-01',
        posted: '6-05-17',
        vacancies: 8,
        qualification: 'B.Tech / M.Tech + 8-12 years software development',
        description: 'Design and architect scalable cloud-native systems for Amazon's India operations. Lead technical decisions, mentor teams, and drive innovation.',
        highlights: [
            'Lead architecture for India operations',
            'AWS ecosystem deep dive',
            'Principal Engineer track',
            'Relocation support available',
        ],
        selectionProcess: ['Online Coding (2 rounds)', 'System Design', 'Bar Raiser Interview', 'Hiring Manager Interview'],
        tags: ['Architect', 'Cloud', '8-12 Years', 'IT'],
        urgent: false,
        logo: 'AMZ',
    },
    {
        id: 107,
        title: 'Marketing Executive - Digital Marketing',
        org: 'Flipkart Internet Pvt Ltd',
        orgShort: 'Flipkart',
        type: 'private',
        category: 'management',
        experience: 'fresher',
        location: 'Bangalore',
        salary: '₹ 4 - 5.5 LPA',
        deadline: '2026-07-20',
        posted: '2026-05-20',
        vacancies: 50,
        qualification: 'MBA (Marketing) / BBA / Any Graduate',
        description: 'Digital Marketing Executive at India's leading e-commerce platform. Handle social media campaigns, SEO, content marketing, and performance marketing.',
        highlights: [
            'Work with India's largest e-commerce platform',
            'Data-driven marketing approach',
            'Cross-functional team collaboration',
            'Rapid career growth opportunities',
        ],
        selectionProcess: ['Aptitude Test', 'Case Study', 'Marketing Interview', 'HR Interview'],
        tags: ['Marketing', 'Digital', 'Fresher', 'E-commerce'],
        urgent: false,
        logo: 'FLIP',
    },
    {
        id: 108,
        title: 'DevOps Engineer - CI/CD & Automation',
        org: 'HCL Technologies',
        orgShort: 'HCL',
        type: 'private',
        category: 'it',
        experience: '3-5',
        location: 'Noida / Chennai / Bangalore',
        salary: '₹ 8 - 15 LPA',
        deadline: '2026-08-05',
        posted: '2026-05-19',
        vacancies: 75,
        qualification: 'B.E / B.Tech + 3-5 years DevOps experience',
        description: 'DevOps Engineer responsible for CI/CD pipeline, infrastructure automation, containerization, and cloud deployment using AWS/Azure and Kubernetes.',
        highlights: [
            'Modern DevOps toolchain',
            'Cloud-native infrastructure',
            'Automation-first culture',
            'Certification reimbursement',
        ],
        selectionProcess: ['Technical Assessment', 'DevOps Architecture Discussion', 'Coding Exercise', 'HR Round'],
        tags: ['DevOps', 'Cloud', '3-5 Years', 'IT'],
        urgent: true,
        logo: 'HCL',
    },
    {
        id: 109,
        title: 'Legal Counsel - Corporate Law',
        org: 'Reliance Industries Ltd',
        orgShort: 'RIL',
        type: 'private',
        category: 'lawyer',
        experience: '5-8',
        location: 'Mumbai',
        salary: '₹ 18 - 30 LPA',
        deadline: '2026-09-15',
        posted: '2026-05-16',
        vacancies: 5,
        qualification: 'LLB / LLM + 5-8 years corporate law experience',
        description: 'Corporate Legal Counsel handling M&A, contracts, compliance, and litigation for Reliance's diverse business verticals including telecom, retail, and energy.',
        highlights: [
            'India's largest conglomerate',
            'High-stakes legal work',
            'Exposure to multiple industries',
            'Top-tier compensation package',
        ],
        selectionProcess: ['Legal Writing Test', 'Case Study Analysis', 'Panel Interview', 'General Counsel Interview'],
        tags: ['Legal', 'Corporate', '5-8 Years', 'Lawyer'],
        urgent: false,
        logo: 'RIL',
    },
    {
        id: 110,
        title: 'Nursing Staff - ICU / Critical Care',
        org: 'Apollo Hospitals',
        orgShort: 'Apollo',
        type: 'private',
        category: 'medical',
        experience: '1-3',
        location: 'Chennai / Hyderabad / Delhi',
        salary: '₹ 3.5 - 6 LPA',
        deadline: '2026-07-30',
        posted: '2026-05-21',
        vacancies: 120,
        qualification: 'B.Sc Nursing / GNM + 1-3 years ICU experience',
        description: 'Critical Care Nursing position in Apollo's ICU departments. Handle ventilator care, cardiac monitoring, and emergency response in state-of-the-art facilities.',
        highlights: [
            'India's leading hospital chain',
            'Advanced medical equipment',
            'Continuous nursing education',
            'International career pathways',
        ],
        selectionProcess: ['Written Test', 'Clinical Skills Assessment', 'Panel Interview', 'HR Discussion'],
        tags: ['Nursing', 'ICU', '1-3 Years', 'Medical'],
        urgent: true,
        logo: 'APL',
    },
];

// ============================================
// UTILITY FUNCTIONS
// ============================================

function getDaysLeft(deadline) {
    const today = new Date();
    const end = new Date(deadline);
    const diff = Math.ceil((end - today) / (1000 * 60 * 60 * 24));
    return diff;
}

function formatDate(dateStr) {
    const d = new Date(dateStr);
    return d.toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' });
}

function getCategoryName(type, id) {
    if (type === 'state') {
        const state = STATES.find(s => s.id === id);
        return state ? state.name : id;
    }
    if (type === 'central') {
        const cat = CENTRAL_JOBS.find(c => c.id === id);
        return cat ? cat.name : id;
    }
    if (type === 'education') {
        const edu = EDUCATION_JOBS.find(e => e.id === id);
        return edu ? edu.name : id;
    }
    if (type === 'experience') {
        const exp = EXPERIENCE_LEVELS.find(e => e.id === id);
        return exp ? exp.name : id;
    }
    return id;
}

function filterJobs(filters) {
    return JOBS_DB.filter(job => {
        if (filters.type && job.type !== filters.type) return false;
        if (filters.category && job.category !== filters.category) return false;
        if (filters.subcategory && job.subcategory !== filters.subcategory) return false;
        if (filters.state && job.state !== filters.state) return false;
        if (filters.education && job.education !== filters.education) return false;
        if (filters.experience && job.experience !== filters.experience) return false;
        if (filters.search) {
            const q = filters.search.toLowerCase();
            const match = job.title.toLowerCase().includes(q) ||
                         job.org.toLowerCase().includes(q) ||
                         job.tags.some(t => t.toLowerCase().includes(q));
            if (!match) return false;
        }
        return true;
    });
}

function getJobById(id) {
    return JOBS_DB.find(j => j.id === parseInt(id));
}

// ============================================
// RENDER FUNCTIONS
// ============================================

function renderCategoryCard(item, href, type) {
    return `
        <a href="${href}" class="category-card animate-in">
            <div class="category-icon">${item.icon}</div>
            <h3>${item.name}</h3>
            <p>${type === 'state' ? 'State Government' : type === 'central' ? 'Central Government' : type === 'education' ? 'Education Based' : 'Experience Level'}</p>
            <span class="category-count">${item.count} Jobs</span>
        </a>
    `;
}

function renderJobCard(job) {
    const daysLeft = getDaysLeft(job.deadline);
    const isUrgent = daysLeft <= 15 || job.urgent;

    return `
        <div class="job-card animate-in" data-id="${job.id}">
            <div class="job-card-header">
                <div class="job-org">
                    <div class="job-org-logo">${job.logo}</div>
                    <div class="job-org-info">
                        <h4>${job.org}</h4>
                        <span>${job.location}</span>
                    </div>
                </div>
                <span class="job-badge ${job.type === 'government' ? 'badge-gov' : 'badge-private'} ${isUrgent ? 'badge-urgent' : ''}">
                    ${job.type === 'government' ? 'Govt' : 'Private'}
                </span>
            </div>
            <h3 class="job-title">${job.title}</h3>
            <div class="job-meta">
                <div class="job-meta-item">
                    <span>💰</span> ${job.salary}
                </div>
                <div class="job-meta-item">
                    <span>📍</span> ${job.location}
                </div>
                <div class="job-meta-item">
                    <span>🎓</span> ${job.qualification.substring(0, 30)}${job.qualification.length > 30 ? '...' : ''}
                </div>
            </div>
            <div class="job-tags">
                ${job.tags.slice(0, 3).map(tag => `<span class="job-tag">${tag}</span>`).join('')}
            </div>
            <div class="job-footer">
                <div>
                    <div class="job-salary">${job.vacancies} Posts</div>
                    <div class="job-deadline ${isUrgent ? 'urgent' : ''}">
                        ${isUrgent ? '🔴' : '📅'} ${daysLeft > 0 ? daysLeft + ' days left' : 'Last day!'}
                    </div>
                </div>
                <a href="job-detail.html?id=${job.id}" class="btn-view">View Details →</a>
            </div>
        </div>
    `;
}

function renderEmptyState(message) {
    return `
        <div class="empty-state" style="grid-column: 1 / -1;">
            <div class="empty-state-icon">🔍</div>
            <h3>No jobs found</h3>
            <p>${message}</p>
        </div>
    `;
}

// ============================================
// MOBILE MENU
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    const mobileBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');

    if (mobileBtn) {
        mobileBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }

    // Scroll to top button
    const scrollTop = document.querySelector('.scroll-top');
    if (scrollTop) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 500) {
                scrollTop.classList.add('visible');
            } else {
                scrollTop.classList.remove('visible');
            }
        });

        scrollTop.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // Search functionality
    const searchInput = document.querySelector('.search-bar input');
    if (searchInput) {
        searchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                const query = searchInput.value.trim();
                if (query) {
                    window.location.href = `government-jobs.html?search=${encodeURIComponent(query)}`;
                }
            }
        });
    }
});
