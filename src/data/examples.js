export const realLifeExamples = {
    'viscous-drag': [
        {
            id: 'vd-ex-1',
            title: 'Hand Out of Car Window',
            category: 'Everyday Experience',
            description: 'When you stick your hand out of a fast-moving car window, you feel a strong force pushing your hand backward.',
            physics: 'This force is the drag force caused by air viscosity. Even though air has very low viscosity (0.018 × 10⁻³ N·s·m⁻²), at high speeds the drag force becomes significant.',
            formula: 'F = 6πηrv (approximately, for streamlined objects)',
            didYouKnow: 'At highway speeds (100 km/h), the drag force on your hand can be equivalent to holding a 5-10 kg weight!',
            curiosity: 'Try comparing the force at different speeds. You\'ll notice the force increases dramatically as speed increases.'
        },
        {
            id: 'vd-ex-2',
            title: 'Swimming Through Different Liquids',
            category: 'Thought Experiment',
            description: 'Imagine trying to swim through water versus trying to swim through honey or thick syrup.',
            physics: 'Higher viscosity fluids create much greater drag forces, making movement more difficult. Honey\'s viscosity is about 10,000 times higher than water!',
            comparison: {
                water: 'Low viscosity (0.801 × 10⁻³) - easy to swim',
                honey: 'Very high viscosity (~10,000 × 10⁻³) - nearly impossible to swim',
                glycerin: 'Extremely high viscosity (629 × 10⁻³) - very difficult'
            },
            didYouKnow: 'Some bacteria can actually "swim" through very viscous environments using rotating flagella, like a corkscrew!'
        },
        {
            id: 'vd-ex-3',
            title: 'Stirring Coffee vs Honey',
            category: 'Kitchen Physics',
            description: 'Notice how quickly a spoon slows down after stirring coffee versus after stirring honey.',
            physics: 'The higher viscosity of honey creates much larger drag forces on the spoon, causing it to slow down much faster than in coffee or water.',
            experiment: 'Stir both liquids with the same force and watch how long they continue swirling. Coffee might swirl for 10-15 seconds, while honey stops almost immediately.',
            didYouKnow: 'Temperature affects viscosity! Warm honey flows much more easily than cold honey because its viscosity decreases with temperature.'
        },
        {
            id: 'vd-ex-4',
            title: 'Falling Sphere Experiment',
            category: 'Laboratory Demo',
            description: 'Drop identical metal spheres into cylinders containing different liquids (water, oil, glycerin).',
            physics: 'The sphere falls fastest in water (low viscosity) and slowest in glycerin (high viscosity) due to varying drag forces.',
            observation: 'In water: sphere reaches bottom quickly. In glycerin: sphere falls very slowly, taking several seconds.',
            application: 'This principle is used in shock absorbers and viscometers (devices that measure viscosity).',
            didYouKnow: 'This is essentially how a viscometer works - by measuring how long it takes for a ball to fall through a fluid!'
        },
        {
            id: 'vd-ex-5',
            title: 'Aerodynamic Design in Sports',
            category: 'Sports Science',
            description: 'Cyclists, swimmers, and race car drivers all use streamlined equipment and positions to reduce drag.',
            physics: 'Streamlined shapes minimize the surface area exposed to the fluid flow and reduce turbulence, thereby reducing the drag force.',
            examples: [
                'Aerodynamic cycling helmets can save several watts of power',
                'Swim caps and body suits reduce water drag',
                'Formula 1 cars spend millions on wind tunnel testing',
                'Speed skaters crouch low to minimize air resistance'
            ],
            numbers: 'A professional cyclist can save 20-30% energy with proper aerodynamic positioning compared to sitting upright!',
            didYouKnow: 'In professional cycling, team members draft behind each other, using the lead rider to "break" the air resistance, saving up to 40% energy!'
        }
    ],

    'terminal-velocity': [
        {
            id: 'tv-ex-1',
            title: 'Skydiving',
            category: 'Extreme Sports',
            description: 'A skydiver jumping from a plane accelerates initially but eventually reaches a constant falling speed.',
            physics: 'The skydiver accelerates due to gravity until air drag equals their weight, reaching terminal velocity of about 120 mph (54 m/s) in spread-eagle position.',
            numbers: {
                freefall: '~120 mph (54 m/s) - spread eagle',
                headFirst: '~200 mph (90 m/s) - streamlined dive',
                withParachute: '~15 mph (6.7 m/s) - safe landing speed'
            },
            didYouKnow: 'Felix Baumgartner reached 843.6 mph (377 m/s) during his stratospheric jump because the thin air at high altitude provided minimal drag!',
            curiosity: 'Why do skydivers use parachutes? To increase drag force dramatically, reducing terminal velocity to a safe landing speed.'
        },
        {
            id: 'tv-ex-2',
            title: 'Raindrops Don\'t Hurt',
            category: 'Weather Physics',
            description: 'Raindrops fall from clouds thousands of meters high, yet they don\'t hurt when they hit you. Why?',
            physics: 'Raindrops reach terminal velocity very quickly due to their small size. A typical raindrop (2mm radius) has terminal velocity of only about 9 m/s (20 mph).',
            calculation: 'Using v_t = (2gr²ρ)/(9η), a 2mm water droplet in air has terminal velocity ≈ 9 m/s',
            comparison: 'Without air resistance, the same drop falling from 2000m would hit at ~200 m/s - that would definitely hurt!',
            didYouKnow: 'Hailstones can be dangerous because ice is denser than water and hailstones can be much larger (higher r²), giving them much higher terminal velocities!',
            curiosity: 'This is why rain is refreshing but hail can be dangerous - it\'s all about terminal velocity!'
        },
        {
            id: 'tv-ex-3',
            title: 'Tiny Organisms Falling',
            category: 'Micro-World',
            description: 'Bacteria, pollen, and tiny insects have such low terminal velocities that falling is not dangerous for them.',
            physics: 'Due to their tiny size (small r²), terminal velocity is extremely low. An ant can fall from any height and survive!',
            examples: [
                'Ant: terminal velocity ~6.4 m/s - can survive any fall',
                'Mouse: ~24 m/s - might survive high falls',
                'Human: ~54 m/s - fatal from great heights',
                'Bacteria: ~0.3 mm/s - practically float in air!'
            ],
            principle: 'Terminal velocity ∝ r². Smaller objects have much lower terminal velocities relative to their strength.',
            didYouKnow: 'This is related to the square-cube law: as size decreases, surface area (and drag) decreases slower than mass, giving tiny creatures survival advantage in falls!',
            curiosity: 'This is why you can drop an ant from a skyscraper and it will casually walk away!'
        },
        {
            id: 'tv-ex-4',
            title: 'Coffee Filter Experiment',
            category: 'Home Experiment',
            description: 'Drop coffee filters one at a time and measure how long they take to fall a fixed distance.',
            physics: 'Coffee filters quickly reach terminal velocity due to high drag (large area, low mass). Adding more filters increases terminal velocity.',
            experiment: [
                'Drop 1 filter: reaches terminal velocity almost instantly',
                'Drop 2 stacked filters: falls faster (more weight, similar drag)',
                'Drop 3-4 filters: even faster terminal velocity'
            ],
            observation: 'You can clearly see they reach constant velocity quickly rather than continuously accelerating.',
            didYouKnow: 'This is one of the easiest ways to demonstrate terminal velocity at home with minimal equipment!',
            curiosity: 'Try timing the fall with different numbers of filters and plot velocity vs. weight!'
        },
        {
            id: 'tv-ex-5',
            title: 'Submarines and Torpedoes',
            category: 'Marine Engineering',
            description: 'In water, terminal velocity is reached much faster than in air due to higher viscosity and density.',
            physics: 'Water\'s higher viscosity (about 50 times air) means drag forces are much larger, so terminal velocity is reached at lower speeds.',
            application: 'Submarine designers must carefully balance propulsion power with drag forces to achieve desired speeds efficiently.',
            numbers: 'A typical torpedo might have terminal velocity around 50-70 knots (25-35 m/s) in water, compared to hundreds of m/s possible in air.',
            didYouKnow: 'Supercavitating torpedoes create an air bubble around themselves to reduce drag, allowing speeds over 200 knots (370 km/h) underwater!',
            curiosity: 'The same principle explains why swimming faster becomes exponentially harder - drag force increases with velocity!'
        }
    ],

    'fluid-flow': [
        {
            id: 'ff-ex-1',
            title: 'Smoke from Incense or Cigarette',
            category: 'Everyday Observation',
            description: 'Watch smoke rise from an incense stick. Initially it rises in a smooth column, then becomes chaotic and swirly.',
            physics: 'The smoke initially exhibits laminar (streamline) flow at low velocity. As it rises and velocity increases or it meets air currents, it transitions to turbulent flow.',
            observation: [
                'Bottom (laminar): smooth, straight streamlines',
                'Middle (transition): slight wavering',
                'Top (turbulent): chaotic swirls and eddies'
            ],
            principle: 'This visualizes the transition from laminar to turbulent flow as velocity and other factors change.',
            didYouKnow: 'You can delay the transition to turbulence by reducing air currents in the room or reducing the heat (and thus the velocity) of the rising smoke.',
            curiosity: 'This is one of the most beautiful and easily observable fluid dynamics phenomena in everyday life!'
        },
        {
            id: 'ff-ex-2',
            title: 'River Flow Around Rocks',
            category: 'Nature',
            description: 'Observe how water flows in a river - smooth in slow sections, turbulent around rocks and rapids.',
            physics: 'Slow-flowing sections exhibit laminar flow with smooth streamlines. Where water speeds up (narrows, drops, or hits obstacles), it becomes turbulent.',
            observation: [
                'Deep, slow pools: laminar, you can see through the water',
                'Rapids and waterfalls: turbulent, white water with bubbles',
                'Around rocks: wake patterns and vortices form'
            ],
            principle: 'The Reynolds number (Re = ρvL/η) determines flow type. Re < 2000: laminar, Re > 4000: turbulent.',
            didYouKnow: 'Fish use the calm laminar zones behind rocks to rest while swimming upstream - they\'re hiding from turbulence!',
            curiosity: 'Engineers study river flow to design better bridges, dams, and prevent erosion!'
        },
        {
            id: 'ff-ex-3',
            title: 'Airplane Wing Design',
            category: 'Aviation',
            description: 'Airplane wings are carefully designed to maintain laminar flow over their surface to reduce drag.',
            physics: 'Laminar flow over the wing creates less drag than turbulent flow, improving fuel efficiency. Wing shape promotes smooth airflow.',
            engineering: 'Modern aircraft use laminar flow airfoils, winglets, and smooth surfaces to delay transition to turbulence and reduce drag by 10-20%.',
            numbers: 'Maintaining laminar flow can save an airline millions of dollars in fuel costs per year per aircraft!',
            didYouKnow: 'Birds\' feathers serve a similar purpose - they smooth out airflow to reduce turbulence and drag!',
            curiosity: 'Next time you fly, look at the wing. The smooth, curved shape is specifically engineered for laminar flow!'
        },
        {
            id: 'ff-ex-4',
            title: 'Golf Ball Dimples',
            category: 'Sports Engineering',
            description: 'Why do golf balls have dimples? Surprisingly, they actually increase drag slightly but reduce overall air resistance!',
            physics: 'Dimples create a thin turbulent boundary layer around the ball, which paradoxically reduces the size of the wake (low-pressure region behind the ball), reducing overall Form Drag.',
            comparison: {
                smooth: 'Large turbulent wake, high drag, ~120m drive',
                dimpled: 'Smaller wake, lower overall drag, ~260m drive'
            },
            numbers: 'Dimples can more than double the distance a golf ball travels!',
            didYouKnow: 'A golf ball has about 300-500 dimples. The exact pattern and depth are carefully engineered for optimal performance!',
            curiosity: 'This is a rare case where introducing turbulence at the surface actually reduces overall drag!'
        },
        {
            id: 'ff-ex-5',
            title: 'Blood Flow in Arteries',
            category: 'Human Biology',
            description: 'Blood flow in healthy arteries is laminar, allowing smooth nutrient transport. Turbulent flow can indicate problems.',
            physics: 'In healthy arteries, blood flows in smooth layers (laminar flow). Narrowing or irregularities cause turbulence, which doctors can hear with a stethoscope as "murmurs".',
            medical: [
                'Normal: silent laminar flow',
                'Narrowed artery: turbulent flow creates sound',
                'After exercise: faster flow may create temporary turbulence'
            ],
            health: 'Turbulent blood flow can damage artery walls over time and contribute to cardiovascular disease.',
            didYouKnow: 'Doctors can detect heart valve problems by listening for turbulent flow (murmurs) with a stethoscope!',
            curiosity: 'Your circulatory system is an amazing example of fluid dynamics optimized by millions of years of evolution!'
        }
    ],

    'equation-of-continuity': [
        {
            id: 'ec-ex-1',
            title: 'Garden Hose Nozzle',
            category: 'Home & Garden',
            description: 'When you partially cover the end of a garden hose with your thumb, water shoots out much faster.',
            physics: 'By reducing the cross-sectional area (A₂), you force the velocity (v₂) to increase to maintain constant flow rate: A₁v₁ = A₂v₂.',
            demonstration: 'Full opening: gentle flow. Partially covered: powerful jet!',
            calculation: 'If you reduce area to 1/4, velocity increases 4 times! If area is 1/10, velocity increases 10 times.',
            didYouKnow: 'This is exactly how spray nozzles work - they\'re engineered to convert slow flow into fast jets!',
            curiosity: 'Try measuring how far water shoots with different thumb positions. You\'re experimenting with the continuity equation!',
            application: 'Fire hoses use this principle - narrow nozzle creates high-velocity water stream for fighting fires from a distance.'
        },
        {
            id: 'ec-ex-2',
            title: 'Water Stream from Tap',
            category: 'Kitchen Physics',
            description: 'Watch water fall from a tap. Notice how the stream gets thinner as it falls.',
            physics: 'As water falls, gravity accelerates it (v increases). To maintain constant flow rate (Av = constant), the cross-sectional area must decrease.',
            observation: 'Near the tap: thick stream, slow velocity. Near the sink: thin stream, fast velocity.',
            experiment: 'Measure the stream width at different heights. You should see it narrows (area decreases) as it speeds up.',
            mathematics: 'If velocity doubles, area must halve. If velocity quadruples, area becomes 1/4.',
            didYouKnow: 'You can estimate how much the water has accelerated by measuring how much narrower the stream has become!',
            curiosity: 'This is one of the most elegant and easily observable demonstrations of the continuity equation!'
        },
        {
            id: 'ec-ex-3',
            title: 'Blood Flow in Arteries and Capillaries',
            category: 'Human Biology',
            description: 'Blood flows fast in large arteries (~30-40 cm/s) but very slow in tiny capillaries (~0.03 cm/s). Why?',
            physics: 'Each capillary is tiny, but there are billions of them. The total cross-sectional area of all capillaries combined is huge, so velocity must be low.',
            numbers: {
                aorta: 'Area ~3 cm², velocity ~30 cm/s',
                capillaries: 'Total area ~3000 cm², velocity ~0.03 cm/s'
            },
            biology: 'This slow flow in capillaries is essential! It gives time for oxygen and nutrient exchange with tissues.',
            calculation: 'A₁v₁ = A₂v₂: (3)(30) = (3000)(v₂), so v₂ = 0.03 cm/s',
            didYouKnow: 'Your body has about 40,000 km of capillaries - enough to circle the Earth! Their combined area is 1000 times larger than the aorta.',
            curiosity: 'Evolution perfectly designed this system using the continuity equation to ensure slow, efficient exchange in capillaries!'
        },
        {
            id: 'ec-ex-4',
            title: 'River Widening and Narrowing',
            category: 'Geography',
            description: 'Rivers flow slowly in wide sections and rapidly in narrow gorges.',
            physics: 'Same amount of water flows through each section per unit time. Wide section = large area = low velocity. Narrow section = small area = high velocity.',
            observation: 'Wide, meandering sections: calm, deep flow. Narrow rapids: fast, turbulent flow.',
            safety: 'This is why narrow river sections are dangerous for swimming - the water moves much faster!',
            application: 'Engineers use this principle when designing river channels, dams, and flood control systems.',
            didYouKnow: 'The world\'s fastest river currents occur in narrow gorges. The Nakwakto Rapids in Canada reach 30 km/h (8.3 m/s)!',
            curiosity: 'Grand Canyon\'s narrow sections have much faster flow than wide sections, all explained by the continuity equation!'
        },
        {
            id: 'ec-ex-5',
            title: 'Fuel Injectors in Cars',
            category: 'Automotive Engineering',
            description: 'Modern car engines use fuel injectors with tiny nozzles to spray fuel at high velocity for better mixing.',
            physics: 'Fuel flows through wider pipes, then through tiny injector nozzles. The area reduction creates high-velocity spray for atomization.',
            engineering: 'Typical fuel injector: inlet ~3mm diameter, nozzle holes ~0.1mm diameter. This creates 900× velocity increase!',
            application: 'High velocity creates fine mist, better fuel-air mixing, more complete combustion, better efficiency and lower emissions.',
            numbers: 'Modern injectors spray at velocities of 100-300 m/s, creating droplets as small as 10-20 micrometers!',
            didYouKnow: 'Formula 1 engines use ultra-precise injectors with nozzle holes smaller than a human hair to optimize combustion!',
            curiosity: 'Your car relies on the continuity equation thousands of times per minute for efficient operation!'
        },
        {
            id: 'ec-ex-6',
            title: 'Venturi Effect in Carburetors',
            category: 'Classic Engineering',
            description: 'Old car engines used carburetors that employed the Venturi effect - a direct application of the continuity equation combined with Bernoulli\'s principle.',
            physics: 'Air flows through a narrowed section (Venturi), increasing velocity (continuity equation) and decreasing pressure (Bernoulli), which sucks fuel into the airstream.',
            principle: 'Wide section → slow flow, high pressure. Narrow section → fast flow, low pressure. Pressure difference draws in fuel.',
            application: 'Though modern cars use fuel injection, carburetors beautifully demonstrate fluid mechanics principles.',
            didYouKnow: 'The Venturi effect is also used in perfume sprayers, spray paint guns, and even some medical nebulizers!',
            curiosity: 'Understanding the continuity equation helps explain many everyday devices and phenomena around us!'
        }
    ],

    'bernoulli-equation': [
        {
            id: 'be-ex-1',
            title: 'Airplane Wing Lift',
            category: 'Aviation',
            description: 'The lift force that allows airplanes to fly is a direct application of Bernoulli\'s principle.',
            physics: 'Airplane wings are designed with a curved top surface and flatter bottom. Air traveling over the curved top must move faster to cover the longer distance in the same time. By Bernoulli\'s equation, faster-moving air has lower pressure.',
            mechanism: 'The pressure difference between the high-pressure air below the wing and low-pressure air above creates an upward net force (lift) that supports the aircraft\'s weight.',
            numbers: 'A typical commercial aircraft wing generates about 500,000 N of lift force during flight!',
            didYouKnow: 'Fighter jets can create so much lift that they can fly upside down by angling their wings appropriately!',
            curiosity: 'Next time you fly, look out the window during takeoff. You might see small vortices forming at the wingtips - visual evidence of the pressure difference!'
        },
        {
            id: 'be-ex-2',
            title: 'Perfume Atomizer/Spray Bottle',
            category: 'Everyday Device',
            description: 'Perfume atomizers use Bernoulli\'s principle to create a fine mist of fragrance.',
            physics: 'When you squeeze the bulb, air is forced through a narrow tube at high velocity. This high-speed air creates a region of low pressure at the top of the perfume reservoir tube.',
            mechanism: 'The atmospheric pressure on the perfume surface (normal pressure) pushes the liquid up through the tube toward the low-pressure region. The perfume then mixes with the fast-moving air stream and is atomized into tiny droplets.',
            application: 'This is the Venturi effect in action - combining the continuity equation (narrow tube increases velocity) with Bernoulli (high velocity creates low pressure).',
            didYouKnow: 'The same principle is used in carburetors (older cars), spray paint guns, and even certain types of medical nebulizers!',
            curiosity: 'Try this: blow across the top of a straw in a glass of water. The water rises up the straw due to the low pressure you created!'
        },
        {
            id: 'be-ex-3',
            title: 'Curveball in Sports',
            category: 'Sports Physics',
            description: 'When a baseball pitcher throws a curve ball, or a soccer player bends a free kick, they\'re using Bernoulli\'s principle.',
            physics: 'The ball spins as it moves forward. On one side, the spin adds to the air velocity (moving in same direction as spin); on the other side, it subtracts (opposite to spin). This creates different velocities on each side.',
            bernoulliEffect: 'By Bernoulli\'s principle, the side with faster-moving air has lower pressure. The pressure difference creates a sideways force, causing the ball to curve!',
            examples: [
                'Baseball: A pitcher can make a fastball curve up to 0.5 meters',
                'Soccer: Free kicks can bend around the defensive wall',
                'Tennis: Topspin makes the ball dive faster; backspin makes it float',
                'Cricket: Swing bowling uses this principle extensively'
            ],
            didYouKnow: 'This is called the Magnus effect! A skilled soccer player can curve a ball over 2 meters from a straight path in a 30-meter kick.',
            curiosity: 'The same principle explains why spinning ping pong balls behave so unpredictably!'
        },
        {
            id: 'be-ex-4',
            title: 'Water Tank Drainage - Torricelli\'s Theorem',
            category: 'Engineering Application',
            description: 'When water drains from a tank through a hole, the speed depends only on the height - this is Torricelli\'s theorem.',
            physics: 'As shown in your textbook Fig. 6.4, water exits an orifice with velocity v = √(2g(h₁ - h₂)), where (h₁ - h₂) is the depth below the surface.',
            observation: 'Notice that the efflux velocity is the same as if you dropped a ball from height h! The gravitational potential energy converts to kinetic energy.',
            practical: 'This is why firefighters\' water tanks are often placed high up. Greater height = higher water pressure = faster water discharge!',
            numbers: 'Water at 10 meters depth exits at about 14 m/s (50 km/h). At 20 meters: 20 m/s (72 km/h)!',
            didYouKnow: 'Ancient Roman aqueducts used this principle, placing water sources at high elevations to ensure strong flow at fountains below.',
            curiosity: 'If you poke holes at different depths in a water bottle, the bottom hole will shoot water the furthest!'
        },
        {
            id: 'be-ex-5',
            title: 'Chimney Draft',
            category: 'Home Engineering',
            description: 'Tall chimneys work better than short ones because of Bernoulli\'s principle.',
            physics: 'Wind blowing across the top of a chimney creates fast-moving air, which by Bernoulli\'s equation, creates low pressure at the chimney opening.',
            mechanism: 'The pressure difference between inside the building (normal pressure) and the low pressure at the chimney top causes air to flow upward through the chimney - this is the "draft."',
            application: 'This draft pulls smoke and combustion gases out of the fireplace or furnace. Taller chimneys experience stronger winds at the top, creating better draft.',
            practical: 'This is also why ventilation shafts in buildings are often extended above the roofline.',
            didYouKnow: 'Some industrial smokestacks are over 400 meters tall! The height creates such strong draft that it can draw thousands of cubic meters of air per minute.',
            curiosity: 'On a windy day, you might notice your fireplace draws better - that\'s Bernoulli at work!'
        },
        {
            id: 'be-ex-6',
            title: 'Venturi Meter - Flow Measurement',
            category: 'Industrial Instrument',
            description: 'A Venturi meter measures fluid flow rate using Bernoulli\'s principle combined with the continuity equation.',
            physics: 'The meter has a constricted section (throat). As fluid enters the throat, velocity increases (continuity) and pressure decreases (Bernoulli).',
            measurement: 'By measuring the pressure difference between the wide section and the narrow throat, engineers can calculate the flow rate: higher pressure difference = higher flow rate.',
            formula: 'Using P₁ + ½ρv₁² = P₂ + ½ρv₂² and A₁v₁ = A₂v₂, we can solve for flow rate in terms of pressure difference.',
            applications: [
                'Water treatment plants monitor flow rates',
                'Industrial chemical processing',
                'Natural gas pipelines',
                'Aircraft air speed measurement (pitot tubes)'
            ],
            didYouKnow: 'Venturi meters can measure flows accurately without moving parts, making them very reliable and low-maintenance!',
            curiosity: 'The carburetor in older cars is essentially a Venturi meter that also draws in fuel!'
        }
    ]
};

export const getExamplesByTopic = (topicId) => {
    return realLifeExamples[topicId] || [];
};

export default realLifeExamples;

