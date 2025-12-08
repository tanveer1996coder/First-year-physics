export const questions = {
    'viscous-drag': [
        {
            id: 'vd-1',
            type: 'multiple-choice',
            difficulty: 'basic',
            question: 'What is viscosity?',
            options: [
                'The measure of a fluid\'s resistance to flow',
                'The speed of fluid particles',
                'The temperature of a fluid',
                'The pressure in a fluid'
            ],
            correct: 0,
            explanation: 'Viscosity measures how much force is required to slide one layer of liquid over another layer. It\'s essentially the internal friction between layers of a flowing fluid.'
        },
        {
            id: 'vd-2',
            type: 'multiple-choice',
            difficulty: 'basic',
            question: 'Which substance has the highest viscosity at 20°C?',
            options: ['Water', 'Air', 'Glycerin', 'Ethanol'],
            correct: 2,
            explanation: 'Glycerin has a viscosity of 629 × 10⁻³ N·s·m⁻², which is much higher than water (0.801), air (0.018), or ethanol (1.000).'
        },
        {
            id: 'vd-3',
            type: 'multiple-choice',
            difficulty: 'intermediate',
            question: 'According to Stokes\' Law, the drag force on a sphere is proportional to:',
            options: [
                'The square of the radius',
                'The radius and velocity',
                'The square of the velocity',
                'The volume of the sphere'
            ],
            correct: 1,
            explanation: 'Stokes\' Law states F = 6πηrv, showing that drag force is directly proportional to both the radius (r) and velocity (v) of the sphere.'
        },
        {
            id: 'vd-4',
            type: 'multiple-choice',
            difficulty: 'intermediate',
            question: 'What happens to drag force when speed increases in laminar flow?',
            options: [
                'It decreases',
                'It stays constant',
                'It increases linearly',
                'It increases exponentially'
            ],
            correct: 2,
            explanation: 'In laminar flow at low speeds, drag force increases linearly with velocity according to Stokes\' Law (F = 6πηrv). However, this relationship breaks down at high speeds.'
        },
        {
            id: 'vd-5',
            type: 'calculation',
            difficulty: 'advanced',
            question: 'A sphere of radius 2 mm moves through water (η = 0.001 Pa·s) at 0.5 m/s. Calculate the drag force.',
            solution: {
                given: 'r = 2 mm = 0.002 m, η = 0.001 Pa·s, v = 0.5 m/s',
                formula: 'F = 6πηrv',
                calculation: 'F = 6 × π × 0.001 × 0.002 × 0.5',
                answer: '1.88 × 10⁻⁵ N'
            },
            explanation: 'Using Stokes\' Law, we multiply 6, π, the viscosity, radius, and velocity to get the drag force.'
        },
        {
            id: 'vd-6',
            type: 'true-false',
            difficulty: 'basic',
            question: 'Honey has a lower viscosity than water.',
            correct: false,
            explanation: 'False. Honey has a much higher viscosity than water because it flows much more slowly and requires more force to move through.'
        },
        {
            id: 'vd-7',
            type: 'conceptual',
            difficulty: 'intermediate',
            question: 'Why do racing cars need streamlined designs?',
            answer: 'Streamlined designs minimize air drag by reducing turbulence and allowing smooth airflow over the car\'s surface. This reduces the drag force, allowing the car to achieve higher speeds with less energy expenditure.',
            keyPoints: ['Reduces air resistance', 'Minimizes turbulence', 'Improves fuel efficiency', 'Allows higher speeds']
        }
    ],

    'terminal-velocity': [
        {
            id: 'tv-1',
            type: 'multiple-choice',
            difficulty: 'basic',
            question: 'Terminal velocity occurs when:',
            options: [
                'An object starts falling',
                'Drag force equals weight',
                'Velocity becomes maximum possible',
                'Air resistance is zero'
            ],
            correct: 1,
            explanation: 'Terminal velocity is reached when the upward drag force exactly balances the downward weight, resulting in zero net force and constant velocity.'
        },
        {
            id: 'tv-2',
            type: 'multiple-choice',
            difficulty: 'basic',
            question: 'At terminal velocity, the net force on a falling object is:',
            options: ['Maximum', 'Zero', 'Equal to weight', 'Negative'],
            correct: 1,
            explanation: 'At terminal velocity, drag force = weight, so net force = weight - drag = 0. With zero net force, there is no acceleration.'
        },
        {
            id: 'tv-3',
            type: 'multiple-choice',
            difficulty: 'intermediate',
            question: 'A larger raindrop will have a ______ terminal velocity compared to a smaller one.',
            options: ['Lower', 'Higher', 'Same', 'Cannot be determined'],
            correct: 1,
            explanation: 'Terminal velocity v_t = (2gr²ρ)/(9η). Since v_t is proportional to r², larger raindrops (bigger radius) have higher terminal velocities.'
        },
        {
            id: 'tv-4',
            type: 'multiple-choice',
            difficulty: 'intermediate',
            question: 'What would happen to terminal velocity if you dropped the same object on the Moon (where g is smaller)?',
            options: [
                'It would increase',
                'It would decrease',
                'It would stay the same',
                'There would be no terminal velocity'
            ],
            correct: 1,
            explanation: 'Terminal velocity is proportional to g (v_t ∝ g). On the Moon where g ≈ 1.6 m/s², terminal velocity would be lower than on Earth where g ≈ 9.8 m/s².'
        },
        {
            id: 'tv-5',
            type: 'calculation',
            difficulty: 'advanced',
            question: 'A spherical ball bearing of radius 5 mm and density 7800 kg/m³ falls through oil (η = 0.5 Pa·s). Calculate its terminal velocity.',
            solution: {
                given: 'r = 5 mm = 0.005 m, ρ_ball = 7800 kg/m³, η = 0.5 Pa·s',
                formula: 'v_t = (2gr²ρ)/(9η)',
                calculation: 'v_t = (2 × 9.8 × (0.005)² × 7800)/(9 × 0.5)',
                answer: '0.427 m/s or 42.7 cm/s'
            },
            explanation: 'We use the terminal velocity formula with the given values. Note that ρ here refers to the density of the falling object, not the fluid.'
        },
        {
            id: 'tv-6',
            type: 'true-false',
            difficulty: 'basic',
            question: 'An object continues to accelerate after reaching terminal velocity.',
            correct: false,
            explanation: 'False. At terminal velocity, net force is zero, so acceleration is zero. The object continues to fall at a constant speed.'
        },
        {
            id: 'tv-7',
            type: 'conceptual',
            difficulty: 'advanced',
            question: 'Why does a parachutist use a parachute? Explain in terms of terminal velocity.',
            answer: 'A parachute greatly increases the surface area exposed to air drag, which dramatically increases the drag force at any given velocity. This means the parachutist reaches terminal velocity at a much lower speed (safe for landing) compared to free fall without a parachute. The parachute changes the equilibrium point where drag force equals weight.',
            keyPoints: ['Increases surface area', 'Increases drag force', 'Reduces terminal velocity', 'Makes landing safe']
        },
        {
            id: 'tv-8',
            type: 'multiple-choice',
            difficulty: 'intermediate',
            question: 'Before reaching terminal velocity, a falling water droplet is:',
            options: [
                'Moving at constant speed',
                'Accelerating downward',
                'Accelerating upward',
                'Not moving'
            ],
            correct: 1,
            explanation: 'Before terminal velocity, weight > drag force, so net force is downward. This causes downward acceleration until drag force increases enough to balance weight.'
        }
    ],

    'fluid-flow': [
        {
            id: 'ff-1',
            type: 'multiple-choice',
            difficulty: 'basic',
            question: 'In streamline flow, the path followed by fluid particles is:',
            options: ['Random and chaotic', 'Smooth and predictable', 'Circular', 'Vertical only'],
            correct: 1,
            explanation: 'Streamline (laminar) flow is characterized by smooth, predictable paths where each particle follows the same path as particles before it.'
        },
        {
            id: 'ff-2',
            type: 'multiple-choice',
            difficulty: 'basic',
            question: 'In streamline flow, streamlines can:',
            options: ['Cross each other', 'Never cross each other', 'Merge together', 'Split apart'],
            correct: 1,
            explanation: 'Streamlines never cross each other in laminar flow. Each streamline represents a unique path that particles follow.'
        },
        {
            id: 'ff-3',
            type: 'multiple-choice',
            difficulty: 'intermediate',
            question: 'Turbulent flow is characterized by:',
            options: [
                'Smooth, predictable motion',
                'Low velocity movement',
                'Chaotic, irregular motion',
                'Parallel streamlines'
            ],
            correct: 2,
            explanation: 'Turbulent flow occurs at higher velocities and is characterized by chaotic, irregular, and unpredictable fluid motion with swirls and eddies.'
        },
        {
            id: 'ff-4',
            type: 'multiple-choice',
            difficulty: 'intermediate',
            question: 'Which is NOT a condition for an ideal fluid?',
            options: [
                'Non-viscous (no internal friction)',
                'Incompressible (constant density)',
                'Steady flow',
                'High velocity flow'
            ],
            correct: 3,
            explanation: 'An ideal fluid is non-viscous, incompressible, and has steady flow. High velocity is not a requirement and often leads to turbulent (non-ideal) flow.'
        },
        {
            id: 'ff-5',
            type: 'true-false',
            difficulty: 'basic',
            question: 'Streamline flow is also called laminar flow.',
            correct: true,
            explanation: 'True. Streamline flow and laminar flow are two names for the same type of smooth, layered fluid motion.'
        },
        {
            id: 'ff-6',
            type: 'multiple-choice',
            difficulty: 'intermediate',
            question: 'A dolphin has a streamlined body shape. This helps it to:',
            options: [
                'Breathe underwater',
                'Reduce drag and swim efficiently',
                'See better underwater',
                'Communicate with other dolphins'
            ],
            correct: 1,
            explanation: 'A streamlined shape reduces drag by promoting laminar flow around the body, minimizing turbulence and resistance in the water.'
        },
        {
            id: 'ff-7',
            type: 'conceptual',
            difficulty: 'advanced',
            question: 'Explain why smoke from a cigarette initially rises in a smooth column but then becomes chaotic and irregular.',
            answer: 'Initially, the smoke rises slowly in laminar (streamline) flow, creating smooth streamlines. As it rises and cools, or as it interacts with air currents, the velocity and conditions change, causing transition to turbulent flow. The chaotic, swirling motion we see is turbulence where the flow becomes irregular and unpredictable.',
            keyPoints: ['Starts as laminar flow', 'Low initial velocity', 'Transition to turbulent flow', 'Environmental interactions cause turbulence']
        },
        {
            id: 'ff-8',
            type: 'multiple-choice',
            difficulty: 'basic',
            question: 'In a non-viscous fluid, there is:',
            options: [
                'High internal friction',
                'No internal friction',
                'Constant friction',
                'Increasing friction'
            ],
            correct: 1,
            explanation: 'A non-viscous fluid has no internal frictional force between adjacent layers. This is an idealization used in fluid mechanics.'
        }
    ],

    'equation-of-continuity': [
        {
            id: 'ec-1',
            type: 'multiple-choice',
            difficulty: 'basic',
            question: 'The equation of continuity is based on the principle of:',
            options: [
                'Energy conservation',
                'Momentum conservation',
                'Mass conservation',
                'Charge conservation'
            ],
            correct: 2,
            explanation: 'The equation of continuity is based on mass conservation - the mass of fluid entering a pipe section must equal the mass leaving it.'
        },
        {
            id: 'ec-2',
            type: 'multiple-choice',
            difficulty: 'basic',
            question: 'For an incompressible fluid in steady flow, A₁v₁ = A₂v₂ represents:',
            options: [
                'Bernoulli\'s equation',
                'Equation of continuity',
                'Stokes\' law',
                'Pascal\'s principle'
            ],
            correct: 1,
            explanation: 'A₁v₁ = A₂v₂ is the equation of continuity for incompressible fluids, showing that flow rate (area × velocity) stays constant.'
        },
        {
            id: 'ec-3',
            type: 'multiple-choice',
            difficulty: 'intermediate',
            question: 'When water flows through a pipe that narrows, the water speed:',
            options: ['Decreases', 'Stays the same', 'Increases', 'Becomes zero'],
            correct: 2,
            explanation: 'According to continuity equation A₁v₁ = A₂v₂, when area decreases (pipe narrows), velocity must increase to maintain constant flow rate.'
        },
        {
            id: 'ec-4',
            type: 'multiple-choice',
            difficulty: 'intermediate',
            question: 'A garden hose nozzle increases water speed by:',
            options: [
                'Increasing the cross-sectional area',
                'Decreasing the cross-sectional area',
                'Increasing water pressure only',
                'Adding energy to the water'
            ],
            correct: 1,
            explanation: 'A nozzle decreases the cross-sectional area. By continuity equation, smaller area means higher velocity to maintain constant flow rate.'
        },
        {
            id: 'ec-5',
            type: 'calculation',
            difficulty: 'advanced',
            question: 'Water flows through a pipe at 2 m/s in a section with diameter 10 cm. What is the speed in a section where diameter is 5 cm?',
            solution: {
                given: 'v₁ = 2 m/s, d₁ = 10 cm, d₂ = 5 cm',
                relationship: 'A₁v₁ = A₂v₂, where A = πr² = π(d/2)²',
                formula: 'π(d₁/2)²v₁ = π(d₂/2)²v₂',
                simplification: 'd₁²v₁ = d₂²v₂',
                calculation: 'v₂ = (d₁/d₂)²v₁ = (10/5)² × 2 = 4 × 2',
                answer: '8 m/s'
            },
            explanation: 'When diameter is halved, area becomes 1/4. To maintain constant flow, velocity must increase by factor of 4.'
        },
        {
            id: 'ec-6',
            type: 'true-false',
            difficulty: 'basic',
            question: 'The flow rate (volume per second) changes as water flows through pipes of different diameters.',
            correct: false,
            explanation: 'False. For incompressible fluids in steady flow, the flow rate (Av) remains constant throughout the pipe, even as area and velocity change.'
        },
        {
            id: 'ec-7',
            type: 'conceptual',
            difficulty: 'intermediate',
            question: 'Why does a stream of water from a tap become narrower as it falls?',
            answer: 'As water falls, gravity accelerates it, increasing its velocity. According to the equation of continuity (Av = constant), as velocity increases, the cross-sectional area must decrease to maintain constant flow rate. This is why the water stream narrows as it falls.',
            keyPoints: ['Gravity increases velocity', 'Flow rate must stay constant', 'Area decreases as velocity increases', 'Demonstrates equation of continuity']
        },
        {
            id: 'ec-8',
            type: 'multiple-choice',
            difficulty: 'advanced',
            question: 'Blood flows through an artery at speed v. When the artery branches into two identical smaller arteries, each with half the original cross-sectional area, the speed in each branch is:',
            options: ['v/4', 'v/2', 'v', '2v'],
            correct: 2,
            explanation: 'Total flow from both branches must equal original flow: A₁v₁ = 2×(A₁/2)×v₂, which gives v₂ = v. Each branch carries half the flow at the same speed.'
        }
    ],

    'bernoulli-equation': [
        {
            id: 'be-1',
            type: 'multiple-choice',
            difficulty: 'basic',
            question: 'Bernoulli\'s equation relates which three properties of flowing fluids?',
            options: [
                'Temperature, density, and volume',
                'Pressure, velocity, and height',
                'Mass, force, and acceleration',
                'Viscosity, turbulence, and speed'
            ],
            correct: 1,
            explanation: 'Bernoulli\'s equation relates pressure (P), velocity (v), and height (h) in the fundamental equation: P + ½ρv² + ρgh = constant.'
        },
        {
            id: 'be-2',
            type: 'multiple-choice',
            difficulty: 'basic',
            question: 'According to Bernoulli\'s principle, when fluid speed increases, pressure:',
            options: ['Increases', 'Decreases', 'Stays constant', 'Becomes zero'],
            correct: 1,
            explanation: 'Bernoulli\'s principle states that where the speed is high, the pressure will be low. This is a key result of the Bernoulli equation.'
        },
        {
            id: 'be-3',
            type: 'multiple-choice',
            difficulty: 'intermediate',
            question: 'Airplane wings generate lift because:',
            options: [
                'They are heavier than air',
                'Air moves faster above the wing, creating lower pressure',
                'They push air downward with force',
                'They are streamlined in shape'
            ],
            correct: 1,
            explanation: 'The wing is designed so airflow is faster on top than below. By Bernoulli\'s principle, faster air = lower pressure, so pressure below pushes the wing upward.'
        },
        {
            id: 'be-4',
            type: 'multiple-choice',
            difficulty: 'intermediate',
            question: 'Torricelli\'s theorem states that the speed of efflux from an orifice equals:',
            options: [
                'The atmospheric pressure',
                'The velocity of free fall from the same height',
                'Twice the gravitational acceleration',
                'The square root of the density'
            ],
            correct: 1,
            explanation: 'Torricelli\'s theorem: v = √(2g(h₁ - h₂)). This is the same as the velocity gained by falling through height (h₁ - h₂), converting PE to KE.'
        },
        {
            id: 'be-5',
            type: 'calculation',
            difficulty: 'advanced',
            question: 'Water drains from a tank through an orifice 5 m below the water surface. Calculate the efflux velocity.',
            solution: {
                given: 'h₁ - h₂ = 5 m, g = 9.8 m/s²',
                formula: 'v = √(2g(h₁ - h₂))  (Torricelli\'s Theorem)',
                calculation: 'v = √(2 × 9.8 × 5) = √98',
                answer: '9.9 m/s'
            },
            explanation: 'Using Torricelli\'s theorem, the efflux velocity depends only on the height difference and gravity, not on the size of the orifice.'
        },
        {
            id: 'be-6',
            type: 'true-false',
            difficulty: 'basic',
            question: 'Bernoulli\'s equation can be derived from the law of conservation of energy.',
            correct: true,
            explanation: 'True. Bernoulli\'s equation is essentially conservation of energy for flowing fluids: pressure energy + kinetic energy + potential energy = constant.'
        },
        {
            id: 'be-7',
            type: 'conceptual',
            difficulty: 'advanced',
            question: 'Explain why a perfume atomizer works based on Bernoulli\'s principle.',
            answer: 'When you squeeze the bulb of an atomizer, air is forced through a narrow tube at high speed. According to Bernoulli\'s equation, this high-speed air creates low pressure at the top of the perfume tube. Atmospheric pressure on the perfume surface then pushes perfume up the tube, where it mixes with the high-speed air stream and is atomized into a fine spray.',
            keyPoints: ['High-speed air creates low pressure', 'Atmospheric pressure pushes perfume up', 'Venturi effect demonstration', 'Bernoulli principle application']
        },
        {
            id: 'be-8',
            type: 'multiple-choice',
            difficulty: 'intermediate',
            question: 'Which assumption is NOT required for Bernoulli\'s equation to be valid?',
            options: [
                'The fluid must be incompressible',
                'The fluid must be non-viscous',
                'The flow must be turbulent',
                'The flow must be in steady state'
            ],
            correct: 2,
            explanation: 'Bernoulli\'s equation assumes incompressible, non-viscous, steady-state flow. Turbulent flow violates the steady-state assumption, so it is NOT required - actually it invalidates the equation.'
        }
    ]
};

export const getQuestionsByTopic = (topicId) => {
    return questions[topicId] || [];
};

export const getQuestionsByDifficulty = (topicId, difficulty) => {
    const topicQuestions = questions[topicId] || [];
    return topicQuestions.filter(q => q.difficulty === difficulty);
};

export default questions;

