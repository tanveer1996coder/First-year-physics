export const topics = [
    {
        id: 'viscous-drag',
        title: 'Viscous Drag and Stokes\' Law',
        section: '6.1',
        icon: '💧',
        description: 'Understanding frictional forces between fluid layers and the drag force on objects moving through fluids',

        content: {
            introduction: `The frictional effect between different layers of a flowing fluid is described in terms of viscosity of the fluid. Viscosity measures how much force is required to slide one layer of the liquid over another layer. Substances that do not flow easily, such as thick tar and honey etc, have large coefficients of viscosity, usually denoted by greek letter 'η'. Substances which flow easily, like water, have small coefficients of viscosity. Since liquids and gases have non zero viscosity, a force is required if an object is to be moved through them. Even the small viscosity of the air causes a non-negligible retarding force on a car as it travels at high speed. If you stick out your hand out of the window of a fast moving car, you can easily recognize that considerable force has to be exerted on your hand to move it through the air. These are typical examples of the following fact.`,

            mainConcept: `An object moving through a fluid experiences a retarding force called a drag force. The drag force increases as the speed of the object increases.`,

            stokesLaw: {
                description: `Even in the simplest cases the exact value of the drag force is difficult to calculate. However, the case of a sphere moving through a fluid is of great importance. The drag force F on a sphere of radius r moving slowly with speed v through a fluid of viscosity η is given by Stokes' law as under:`,
                formula: 'F = 6πηrv',
                variables: {
                    F: 'Drag force (N)',
                    η: 'Coefficient of viscosity (Pa·s or N·s/m²)',
                    r: 'Radius of sphere (m)',
                    v: 'Velocity of sphere (m/s)'
                },
                note: 'At high speeds the force is no longer simply proportional to speed.'
            },

            viscosityTable: [
                { material: 'Air', viscosity: '0.018', unit: '10⁻³ N·s·m⁻²' },
                { material: 'Acetone', viscosity: '0.295', unit: '10⁻³ N·s·m⁻²' },
                { material: 'Methanol', viscosity: '0.510', unit: '10⁻³ N·s·m⁻²' },
                { material: 'Benzene', viscosity: '0.564', unit: '10⁻³ N·s·m⁻²' },
                { material: 'Water', viscosity: '0.801', unit: '10⁻³ N·s·m⁻²' },
                { material: 'Ethanol', viscosity: '1.000', unit: '10⁻³ N·s·m⁻²' },
                { material: 'Plasma', viscosity: '1.6', unit: '10⁻³ N·s·m⁻²' },
                { material: 'Glycerin', viscosity: '629', unit: '10⁻³ N·s·m⁻²' }
            ]
        },

        keyPoints: [
            'Viscosity measures resistance to flow between fluid layers',
            'Thicker fluids (honey, glycerin) have higher viscosity than thin fluids (water, air)',
            'Drag force opposes motion through a fluid',
            'Stokes\' Law applies to spheres moving slowly through fluids',
            'Drag force is proportional to velocity at low speeds',
            'At high speeds, drag force relationship becomes more complex'
        ]
    },

    {
        id: 'terminal-velocity',
        title: 'Terminal Velocity',
        section: '6.2',
        icon: '🪂',
        description: 'Understanding the constant speed reached when drag force equals gravitational force',

        content: {
            introduction: `Consider a water droplet such as that of fog falling vertically, the air drag on the water droplet increases with speed. The droplet accelerates rapidly under the over powering force of gravity which pulls the droplet downward. However, the upward drag force on it increases as the speed of the droplet increases. The net force on the droplet is:`,

            netForce: {
                formula: 'Net force = Weight - Drag force',
                equation: 'F_net = mg - 6πηrv'
            },

            mainConcept: `As the speed of the droplet continues to increase, the drag force eventually approaches the weight in the magnitude. Finally, when the magnitude of the drag force becomes equal to the weight, the net force acting on the droplet is zero. Then the droplet will fall with constant speed called terminal velocity.`,

            terminalVelocity: {
                description: `To find the terminal velocity v_t in this case, we use Stokes Law for the drag force. Equating it to the weight of the drop, we have:`,
                derivation: 'mg = 6πηrv_t',
                formula: 'v_t = (mg)/(6πηr)',
                alternateForm: 'v_t = (2gr²ρ)/(9η)',
                variables: {
                    v_t: 'Terminal velocity (m/s)',
                    m: 'Mass of object (kg)',
                    g: 'Acceleration due to gravity (9.8 m/s²)',
                    r: 'Radius of sphere (m)',
                    ρ: 'Density of fluid (kg/m³)',
                    η: 'Coefficient of viscosity (Pa·s)'
                },
                volumeRelation: 'V = (4/3)πr³'
            },

            example: {
                problem: 'A tiny water droplet of radius 0.010 cm descends through air from a high building. Calculate its terminal velocity. Given that η for air = 19 × 10⁻⁶ kg m⁻¹ s⁻¹ and density of water ρ = 1000 kg·m⁻³.',
                given: {
                    r: '1.0 × 10⁻⁴ m',
                    ρ: '1000 kg·m⁻³',
                    η: '19 × 10⁻⁶ kg m⁻¹ s⁻¹'
                },
                solution: {
                    formula: 'v_t = (2 × g × r² × (ρ)) / (9 × η)',
                    calculation: 'v_t = (2 × 9.8 m·s⁻² × (1×10⁻⁴ m)² × 1000 kg·m⁻³) / (9 × 19 × 10⁻⁶ kg·m⁻¹·s⁻¹)',
                    result: 'Terminal velocity = 1.1 m·s⁻¹'
                }
            }
        },

        keyPoints: [
            'Terminal velocity occurs when drag force equals weight',
            'At terminal velocity, net force is zero (no acceleration)',
            'Object falls at constant speed after reaching terminal velocity',
            'Smaller objects reach lower terminal velocities',
            'Denser fluids result in lower terminal velocities',
            'Terminal velocity formula: v_t = (2gr²ρ)/(9η)'
        ]
    },

    {
        id: 'fluid-flow',
        title: 'Fluid Flow',
        section: '6.3',
        icon: '🌊',
        description: 'Understanding streamline (laminar) and turbulent flow patterns in moving fluids',

        content: {
            introduction: `Moving fluids are of great importance. To learn about the behaviour of the fluid in motion, we consider their flow through the pipes. When a fluid is in motion, its flow can be either streamline or turbulent.`,

            streamlineFlow: {
                definition: `The flow is said to be streamline or laminar, if every particle that passes a particular point, moves along exactly the same path, as followed by particles which passed that points earlier.`,
                characteristics: [
                    'Particles follow smooth, predictable paths',
                    'Streamlines never cross each other',
                    'Flow direction at any point is constant',
                    'Velocity direction remains the same at each point',
                    'Occurs at lower velocities'
                ],
                condition: 'This is called steady flow condition. The direction of the streamlines is the same as the direction of the velocity of the fluid at that point.'
            },

            turbulentFlow: {
                definition: `Above a certain velocity of the fluid flow, the motion of the fluid becomes unsteady and irregular. The irregular or unsteady flow of the fluid is called turbulent flow.`,
                characteristics: [
                    'Chaotic and unpredictable particle motion',
                    'Exact path cannot be predicted',
                    'Velocity changes abruptly',
                    'Occurs at higher velocities',
                    'Creates eddies and vortices'
                ],
                description: 'Under this condition the velocity of the fluid changes abruptly as shown in Fig 6.1 (b). In this case the exact path of the particles of the fluid can not be predicted.'
            },

            idealFluid: {
                description: 'We can understand many features of the fluid in motion by considering the behaviour of a fluid which satisfies the following conditions:',
                conditions: [
                    'The fluid is non-viscous, i.e., there is no internal frictional force between adjacent layers of fluid',
                    'The fluid is incompressible, i.e., its density is constant',
                    'The fluid motion is steady'
                ]
            },

            realLifeExamples: [
                {
                    name: 'Formula One Racing Cars',
                    description: 'Racing cars have streamlined design to minimize air resistance and turbulence, allowing higher speeds with less drag'
                },
                {
                    name: 'Dolphins and Marine Animals',
                    description: 'Dolphins have streamlined bodies to assist their movement in water, reducing drag and allowing efficient swimming'
                }
            ]
        },

        keyPoints: [
            'Streamline flow: smooth, predictable particle paths',
            'Turbulent flow: chaotic, irregular motion',
            'Streamlines never cross in laminar flow',
            'Higher velocities tend to cause turbulent flow',
            'Ideal fluid: non-viscous, incompressible, steady flow',
            'Streamlined shapes reduce drag and turbulence'
        ]
    },

    {
        id: 'equation-of-continuity',
        title: 'Equation of Continuity',
        section: '6.4',
        icon: '🚰',
        description: 'Understanding mass conservation in fluid flow through pipes of varying cross-sections',

        content: {
            introduction: `Consider a fluid flowing through a pipe of non-uniform size. The particles in the fluid move along the streamlines in a steady state flow as shown in Fig. 6.2.`,

            derivation: {
                description: 'In a small time Δt, the fluid at the lower end of the tube moves a distance Δx₁, with a velocity v₁. If A₁ is the area of cross section of this end, then the mass of the fluid contained in the shaded region is:',
                step1: 'Δm₁ = ρ₁A₁Δx₁ = ρ₁A₁v₁ × Δt',
                step2: 'Where ρ₁ is the density of the fluid. Similarly the fluid that moves with velocity v₂ through the upper end of the pipe (area of cross section A₂) in the same time Δt has a mass:',
                step3: 'Δm₂ = ρ₂A₂v₂ × Δt',
                conservation: 'If the fluid is incompressible and the flow is steady, the mass of the fluid is conserved. That is, the mass that flows into the bottom of the pipe through A₁ in a time Δt must be equal to mass of the liquid that flows out through A₂ in the same time. Therefore:',
                equation1: 'Δm₁ = Δm₂',
                equation2: 'ρ₁A₁v₁ = ρ₂A₂v₂',
                finalForm: 'Since density is constant for the steady flow of incompressible fluid, the equation of continuity becomes:',
                continuityEquation: 'A₁v₁ = A₂v₂'
            },

            flowRate: {
                description: 'The product of cross sectional area of the pipe and the fluid speed at any point along the pipe is a constant. This constant equals the volume flow per second of the fluid or simply flow rate.',
                formula: 'Flow Rate = Area × Velocity = Av (constant)'
            },

            example: {
                problem: 'A water hose with an internal diameter of 20 mm at the outlet discharges 30 kg of water in 60 s. Calculate the water speed at the outlet. Assume the density of water is 1000 kg/m³ and its flow is steady.',
                solution: {
                    massFlowRate: 'Mass flow per second = 30kg/60s = 0.5 kg·s⁻¹',
                    crossSection: 'Cross sectional area A = πr²',
                    calculation: 'Using continuity equation and mass conservation principles',
                    result: 'Water speed at outlet can be calculated'
                }
            },

            realLifeExample: {
                name: 'Hubble (Water Tap)',
                description: 'As the water falls, its speed increases and so in order to maintain flow rate constant, area decreases as mandated by the continuity equation. This is why water stream becomes narrower as it falls from a tap.',
                principle: 'When area decreases, velocity must increase to maintain constant flow rate'
            }
        },

        keyPoints: [
            'Mass is conserved in fluid flow (for incompressible fluids)',
            'Equation of Continuity: A₁v₁ = A₂v₂',
            'Flow rate (Av) remains constant along a pipe',
            'Smaller cross-section → higher velocity',
            'Larger cross-section → lower velocity',
            'Explains why water streams narrow when falling',
            'Garden hose nozzle increases water speed by reducing area'
        ]
    },

    {
        id: 'bernoulli-equation',
        title: 'Bernoulli\'s Equation',
        section: '6.5',
        icon: '🌊',
        description: 'Understanding the relationship between pressure, velocity, and height in flowing fluids',

        content: {
            introduction: `As the fluid moves through a pipe of varying cross section and height, the pressure will change along the pipe. Bernoulli's equation is the fundamental equation in fluid dynamics that relates pressure to fluid speed and height.

In deriving Bernoulli's equation, we assume that the fluid is incompressible, non-viscous and flows in a steady state manner. Let us consider the flow of the fluid through the pipe in time t, as shown in Fig. 6.3.`,

            derivation: {
                description: `The force on the upper end of the fluid is P₁A₁, where P₁ is the pressure and A₁ is the area of cross section at the upper end. The work done on the fluid, by the fluid behind it, in moving it through a distance Δx₁, will be:`,
                workUpper: 'W₁ = F₁Δx₁ = P₁A₁Δx₁',
                workLower: 'W₂ = -F₂Δx₂ = -P₂A₂Δx₂',
                netWork: 'W = W₁ + W₂ = P₁A₁Δx₁ - P₂A₂Δx₂',
                explanation: `Where P₂ is the pressure, A₂ is the area of cross section of lower end and Δx₂ is the distance moved by the fluid in the same time interval t. The work W₂ is taken to be -ve as this work is done against the fluid force.

If v₁ and v₂ are the velocities at the upper and lower ends respectively, then:
W = P₁A₁v₁t - P₂A₂v₂t

From equation of continuity (equation 6.5):
A₁v₁ = A₂v₂

Hence, A₁v₁t = A₂v₂t = V (Volume of fluid under consideration)

So, we have:
W = (P₁ - P₂)V    .......... (6.7)

If m is the mass and ρ is the density then V = m/ρ

So equation 6.7 becomes:
W = (P₁ - P₂)m/ρ    .......... (6.8)`
            },

            energyConsideration: {
                description: `Part of this work is utilized by the fluid in changing its K.E. and a part is used in changing its gravitational P.E.`,
                kineticEnergy: 'Change in K.E. = Δ(K.E.) = ½mv₂² - ½mv₁²    .......... (6.9)',
                potentialEnergy: 'Change in P.E. = Δ(P.E.) = mgh₂ - mgh₁    .......... (6.10)',
                conservation: `Where h₁ and h₂ are the heights of the upper and lower ends respectively.

Applying the law of conservation of energy to this volume of the fluid, we get:
(P₁ - P₂)m/ρ = ½mv₂² - ½mv₁² + mgh₂ - mgh₁`
            },

            finalEquation: {
                standard: 'P₁ + ½ρv₁² + ρgh₁ = P₂ + ½ρv₂² + ρgh₂',
                general: 'P + ½ρv² + ρgh = constant    .......... (6.12)',
                note: 'This is Bernoulli\'s equation and is often expressed as:'
            },

            speedPressureRelation: {
                title: 'Relation between Speed and Pressure of the Fluid',
                description: `A result of the Bernoulli's equation is that the pressure will be low where the speed of the fluid is high. Suppose that water flows in a pipe or a horizontal pipe system as shown in Fig. 6.5.

Clearly, the water will flow faster at B than it does at A or C. Assuming the flow speed at A to be 0.20 ms⁻¹ and at B to be 2.0 ms⁻¹, we compute the pressure at B with that at A.

Applying Bernoulli's equation and noting that the average P.E. is the same at both places, We have:`,
                equation: 'P₁ + ½ρv₁² = P₂ + ½ρv₂²    .......... (6.14)',
                example: `Substituting v₁ = 0.20 ms⁻¹, v₂ = 2.0 ms⁻¹
And ρ = 1000 kgm⁻³
We get: P₁ - P₂ = 1980 Nm⁻²`,
                conclusion: 'This shows that the pressure in the narrow pipe where streamlines are closer together is much smaller than in the wider pipe. Thus:'
            },

            keyPrinciple: {
                statement: 'Where the speed is high, the pressure will be low.',
                applications: [
                    'The lift on an aeroplane is due to this effect. The flow of air around an aeroplane wing is illustrated in Fig 6.6.',
                    'The wing is designed to deflect the air so that streamlines are closer together above the wing than below it.',
                    'We have seen in Fig.6.5 that where the streamlines are forced closer together, the speed is faster.',
                    'Thus, air is travelling faster on the upper side of the wing than on the lower. The pressure will be lower at the top of the wing, and the wing will be forced upward.',
                    'Similarly, when a tennis ball is hit by a racket in such a way that it spins as well as moves forward, the velocity of the ball is higher on one side, creating a pressure difference that causes the ball to curve.'
                ]
            }
        },

        applications: {
            torriciellisTheorem: {
                title: 'Torricelli\'s Theorem',
                description: `A simple application of Bernoulli's equation is shown in Fig. 6.4. Suppose a large tank of fluid has two small orifices A and B on it, as shown in the figure. Let us find the speed with which the water flows from the orifice A.

Since the orifices are so small, the efflux speeds v₂ and v₃ will be much larger than the speed v₁ of the top surface of water. We can therefore, take v₁ as approximately zero. Hence, Bernoulli's equation can be written as:`,
                equation: 'P₁ + ρgh₁ = P₂ + ½ρv₂² + ρgh₂',
                atmosphericPressure: 'But P₁ = P₂ = atmospheric pressure',
                simplified: 'Therefore, the above equation becomes:',
                finalFormula: 'v₂ = √(2g(h₁ - h₂))    .......... (6.13)',
                statement: 'This is Torricelli\'s theorem which states that:',
                theorem: 'The speed of efflux is equal to the velocity gained by the fluid in falling through the distance (h₁ - h₂) under the action of gravity.',
                observation: `Notice that the speed of the efflux of liquid is the same as the speed of a ball that falls through a height (h₁ - h₂). The top level of the tank has moved down a little and the P.E. has been transferred into K.E. of the efflux of fluid.`
            },

            practicalNote: 'If the orifice had been pointed upward as at B shown in Fig 6.4, this K.E. would allow the liquid to rise to the level of water tank. In practice, viscous-energy losses would alter the result to some extent.'
        },

        keyPoints: [
            'Bernoulli\'s equation: P + ½ρv² + ρgh = constant',
            'Relates pressure, velocity, and height in flowing fluids',
            'High fluid speed corresponds to low pressure',
            'Low fluid speed corresponds to high pressure',
            'Explains airplane wing lift (faster air on top = lower pressure)',
            'Torricelli\'s Theorem: v = √(2g(h₁ - h₂)) for efflux velocity',
            'Energy is conserved: pressure energy + kinetic energy + potential energy = constant',
            'Assumes incompressible, non-viscous, steady-state flow'
        ]
    }
];

export default topics;

