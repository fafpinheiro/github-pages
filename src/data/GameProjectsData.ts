import ProjectData from '@/data/ProjectData.ts'

export default [
    new ProjectData("project-1", "Computational Fluid Simulation", "img/projects/imageCFD.png", 
    `
    <div class="paragraph">
     <strong>Computational Fluid Simulation</strong> was a project, developed as part of my master’s thesis,
     focuses on Computational Fluid Simulation using Smoothed Particle Hydrodynamics (SPH) in Unity.
     The goal of this work was to create a real-time fluid simulation system that with focus in physically plausible behavior,
     computational efficiency, and numerical stability, rather than photorealistic graphics.
    </div>
    <div class="paragraph center">
        <video controls width="600">
        <source src="img/waveCamsHashGrid1000.mp4" type="video/mp4">
    </video>
    </div>

    <div class="paragraph">
        <p>
            <strong>Implemented Optimizations :</strong>
            </br>
            To improve computational efficiency while maintaining accuracy, the following techniques were developed:
        </p>

        <ul>
            <li><strong>Force Symmetry:</strong> Reduces redundant calculations by enforcing physical reciprocity between particle interactions.</li>
                <div class="paragraph center">
                    <video controls width="600">
                    <source src="img/interactionDefault500.mp4" type="video/mp4">
                    </video>
                </div>
            <li><strong>Monte Carlo Sampling:</strong> Limits neighborhood evaluation cost while preserving statistical correctness.</li>
                
            <li><strong>Spatial Hash Grid (Hybrid SPH):</strong> Accelerates neighbor search, significantly reducing simulation complexity.</li>
            <div class="paragraph center">
                    <video controls width="600">
                    <source src="img/interactionHashGrid1000.mp4" type="video/mp4">
                    </video>
                </div>
        </ul>
    </div>

    <div class="paragraph">
        <h3>Viscosity</h3>

        <p>
            At its core, the simulation is based on the Navier–Stokes equations, which describe how fluids move. Instead of solving them directly, the system approximates their behavior using SPH kernels such as Muller’s Poly6, Spiky, and Viscosity kernels. This allows the simulation to realistically capture how fluid flows, conserves mass, and transfers momentum, resulting in behavior that feels physically believable.
        </p>
        <div class="paragraph center">
                    <video controls width="600">
                    <source src="img/FluidoMaisEMenosViscoso.mp4" type="video/mp4">
                    </video>
                </div>
      
    </div>

    <div class="paragraph">
        <h3>Outcome</h3>
    
        <p>
            The result is a modular and performant CFD-oriented simulation system capable of reproducing realistic fluid behavior under different interaction scenarios, including obstacle collision and dynamic flow conditions.
        </p>
    
        <p>The project also includes:</p>
    
        <ul>
            <li>A configurable simulation environment</li>
            <li>Scenario-based testing</li>
            <li>Control systems for observing different fluid behaviors</li>
        </ul>
    </div>


    `, "#23bd69", true),
    new ProjectData("project-2", "Through the Storm", "img/projects/ThroughTheStormBanner.png", `
    

    <div class="paragraph">
        <div class="paragraph center">
            <p>
                <strong>Game's Premise</strong>
        </div>
                This project is a third person narrative driven survival game set in a frozen, isolated environment.
                The core design is around player choice: investigate, sneak, or fight, with each system deeply integrated
                into gameplay.
                </br>
                </br>
                The game starts near an abandoned investigation station, where the player begins investigating what happened through
                environmental storytelling, puzzles, and notes. From there, the experience expands into open snowy environments,
                combining exploration, stealth mechanics, combat, and a sledging sequence.
            </p>
        
        <div class="paragraph center">
            <video controls width="600">
            <source src="img/TTSTrailer.mp4" type="video/mp4">
        </video>
        </div>

        <ul>
            <li><strong>Investigation:</strong> While exploring the player can find some written notes to read, and an occasional radio log to listen.</li>
                
            <li><strong>Sneak:</strong> While facing the enemies, the player can try to stay hidden behind cover and slowly advance out of the enemies’ line of sight. The player also needs to move silently since sound can also unveil the player position to the enemies.</li>

            <li><strong>Fight:</strong> By option or due to a failed sneak attempt, the player might have to fight the enemies having to avoid its attacks and hitting it with a melee weapon.</li>
            
            <li><strong>Sledging:</strong> In a moment of the game the player will have to sledge through a snow hill, having to dodge various obstacles until the player arrives at the bottom of the hill.</li>
            
        </ul>
    </div>

    <div class="paragraph">
        <div class="paragraph center">
            <p>
                <strong>Core Gameplay Systems</strong>
        </div>
                <strong>Investigation & Environmental Storytelling:</strong>
                </br>
                The first gameplay layer focuses on exploration and narrative discovery.
                <ul>
                    <li>Collectible written notes.</li>

                    <li>Interactive radio logs with voice acting.</li>

                    <li>Logbook-style UI system.</li>

                    <li>Environmental clues tied to progression</li>
                </ul>
                The goal was to make story feel organic rather than cutscene-driven.
            </p>
    </div>

    <div class="paragraph">
        <div class="paragraph center">
            <p>
                <strong>Stealth System</strong>
        </div>
                <strong>Implemented features:</strong>
                </br>
                <ul>
                    <li>Line-of-sight detection using multiple raycasts.</li>

                    <li>Field-of-view checks with angle calculations.</li>

                    <li>Cover-based movement mechanics.</li>

                    <li>AI states.</li>
                </ul>
                Enemies use A* pathfinding for navigation, allowing dynamic pursuit across the map. Coroutines are used to manage AI state transitions and timed behaviors.
            </p>
    </div>

    <div class="paragraph">
        <div class="paragraph center">
            <p>
                <strong>Combat System (Melee-Based)</strong>
                </br>
                
        </div>
        If stealth fails, or the player chooses aggression, combat becomes active.
                <strong>Features include:</strong>
                </br>
                <ul>
                    <li>Melee attack system.</li>

                    <li>Enemy attack patterns.</li>

                    <li>Hit detection and damage system.</li>

                    <li>Health management.</li>

                    <li>Animation driven attack timing.</li>
                </ul>
                This reinforced my understanding of animation state machines and gameplay synchronization.
                </p>
    </div>

    <div class="paragraph">
        <p>
            <strong>Technology, Libraries and Algorithms</strong>
            </br>
            Animator Controllers, Dynamic Lights, Effects with Unity Particle Systems, Multiple Raycast, Procedural Content generation, AI pathfinding using A* and coroutines, Particle system using compute shaders.
        </p>

        <ul>
            <div class="paragraph center">
            <img src="img/designDiagram.png" width="600" alt="Simulation interaction default">
            </div>
        </ul>
    </div>

    <div class="paragraph">
        <strong>Task Analysis: :</strong>
        <ul>
        <li>Story Writing: Creation of the story the game will tell, and the plot the player will follow.</li>
        <li>3D Modeling: Create the models and textures of Lauren Rees, Orvus and other objects.</li>
        <li>Animation: Animate Lauren Rees and the Orvus.</li>
        <li>Map Creation: Place the game objects into the scene and Illuminate the scene.</li>
        <li>Snow Shader: Create the snow shader and program the snow effects.</li>
        <li>UI: Create the game UI for main menu, the logbook, health status and interactivity.</li>
        <li>Gameplay Programming: Programming of every element of gameplay, since movements, interactivity, enemy patrolling and etc.</li>
        <li>Audio: Creation and Integration of Audio into the gameplay.</li>
        </ul>
    </div>



    <div class="paragraph">
        <p>
            <strong>UI</strong>
            </br>
            <div class="paragraph center">
                <img src="img/projects/mainMenuTTS.png" width="600" alt="Simulation interaction default">
                <p class="caption">(1) Main Menu</p>
            </div>
            <div class="paragraph center">
                <img src="img/projects/controlsTTS.png" width="600" alt="Simulation interaction default">
                <p class="caption">(2) Controls Menu</p>
            </div>
            <div class="paragraph center">
                <img src="img/projects/notebookTTS.png" width="600" alt="Simulation interaction default">
                <p class="caption">(3) Notebook</p>
            </div>
        </p>

        <strong>Notebook:</strong>This feature adds an in-game notebook that the player can access at any time. It stores all the story notes and clues the player has discovered, allowing them to review important information whenever needed. The notebook also shows the current objective, helping players stay on track and follow the story without getting lost.
    </div>

     <div class="paragraph">
    <div class="notice">
        Windows build available on <a href="https://some.where/nice" target="_blank">itch.io</a>.
        Source code is available on <a href="https://github.com/yourself" target="_blank">GitHub</a>.
    </div>
    </div>

    `, "#5a78af"),
    new ProjectData("project-3", "Traffic Demo", "img/projects/trafficDemo.png", `
    <div class="paragraph">

        This project is a 3D isometric city-building simulation developed in Unity. The playable area consists of a 30x30 unit grid-based
        city where the player can place structures and modify the environment to create a more habitable urban space.

        What makes this project unique is the inclusion of a special object: a black hole. Once placed, it generates a gravitational
        field that pulls nearby objects toward it, eventually absorbing them and dynamically altering the city.

        The project focuses heavily on system architecture, grid management, input handling, shader work, and physics simulation.
    </div>
    <div class="paragraph center">
        <video controls width="600">
        <source src="img/projects/TrafficDemoTrailer.mp4" type="video/mp4">
    </video>
    </div>

    <div class="paragraph">
        <div class="paragraph center">
            <p>
                <strong>Core Gameplay Loop</strong>
        </div>
                The game starts with a preloaded board containing vegetation, buildings, and roads. The player uses a UI panel to select objects and place them on available grid cells.
                </br>
                <strong>Main interactions:</strong>
                <ul>
                    <li>Select object from UI.</li>

                    <li>Preview placement in 3D space.</li>

                    <li>Place object on a valid grid cell.</li>

                    <li>Optionally deploy a black hole and observe its physical impact</li>
                </ul>
                The goal was to make story feel organic rather than cutscene-driven.
            </p>
    </div>

    <div class="paragraph">
        <div class="paragraph center">
            <p>
                <strong>Implemented Systems</strong>
        </div>
                <strong>Grid & Data Architecture</strong>
                </br>
                At the core of the project is a custom grid data system built on top of Unity’s Grid component.
                <ul>
                    <li>30x30 grid-based board.</li>

                    <li>Cell occupation tracking.</li>

                    <li>Data mapping per cell.</li>

                    <li>Database like structure for storing placed object information.-</li>
                </ul>

                </p>

                <strong>Object Placement System</strong>
                </br>
                The placement system is modular and event-driven. This required:
                <ul>
                    <li>Mouse to world coordinate conversion.</li>

                    <li>Grid snapping logic</li>

                    <li>Object instantiation with persistent state storage.</li>
                </ul>

                </p>

                <strong>Shader Work & Visual Feedback</strong>
                </br>
                Several custom Unlit Shader Graph (for performance) implementations were created:
                <ul>
                    <li>Grid bounds toggle shader to visualize valid placement areas.</li>

                    <li>UI to 3D transition shader for smooth object preview effects.</li>

                    <li>Black hole shader simulating distortion and visual pull.</li>
                </ul>
                The black hole shader creates a stylized distortion effect on surrounding geometry to enhance the sense of gravitational force.

                </p>

                <strong>Gravitational Physics System</strong>
                </br>
                When placed:
                <ul>
                    <li>It calculates gravitational attraction forces.</li>

                    <li>Applies physics-based pull to nearby objects.</li>

                    <li>Simulates absorption behavior.</li>
                </ul>
                This required:
                <ul>
                    <li>Custom force calculations.</li>

                    <li>Rigidbody manipulation.</li>

                    <li>Controlled physics interactions to prevent instability.</li>
                </ul>
                The result is a dynamic destruction mechanic that directly interacts with the city building system.
                </p>
    </div>

    <div class="paragraph">
        <div class="notice">
        Playable in the browser (WebGL) on <a href="https://some.where/nice" target="_blank">itch.io</a>.
        Source code is available on <a href="https://github.com/yourself" target="_blank">GitHub</a>.
        </div>
    </div>


    `, "#383838"),
    new ProjectData("project-4", "Galactic Hunter", "img/projects/GalacticHunterBanner.png", `
    <div class="paragraph">
    This project was my first game developed in Unity, and the main goal wasn’t just to make something playable,
    but to understand the core architecture of the engine and how everything connects under the hood.
    </br>
    For the visual direction, I used Ratchet & Clank as a reference. I was inspired by its stylized sci-fi aesthetic,
    colorful environments, and third-person action gameplay.
    </div>

    <div class="paragraph center">
            <video controls width="600">
            <source src="img/projects/GalacticHunterTrailer.mp4" type="video/mp4">
        </video>
        </div>

    <div class="paragraph">
        <div class="paragraph center">
            <p>
                <strong>Main Objectives</strong>
        </div>
                <strong>The primary objective of the project was to learn:</strong>
                </br>
                <ul>
                    <li>How Unity’s component-based architecture works.</li>

                    <li>Scripting gameplay systems in C#.</li>

                    <li>Structuring a small but scalable game architecture.</li>
                </ul>
                This project was essentially my foundation for understanding how gameplay systems communicate and how to organize code in a clean and modular way.
            </p>
    </div>

    <div class="paragraph">
        <div class="paragraph center">
            <p>
                <strong>Combat</strong>
        </div>
                <strong>Both the player and enemies can attack. I implemented:</strong>
                </br>
                <ul>
                    <li>Hit detection.</li>

                    <li>Damage logic.</li>

                    <li>Attack triggers tied to animations.</li>

                    <li>Basic health system.</li>

                    <li>Enemy AI with Pathfinding</li>
                </ul>
                This required synchronizing gameplay logic with animation timing.
            </p>
    </div>

    <div class="paragraph">
        <div class="paragraph center">
            <p>
                <strong>Animations & Animation Blending</strong>
        </div>
                I worked with Unity’s Animator Controller to implement animation states and transitions
                </br>
                <ul>
                    <li>Idle, walk, strafe, jump, and run animations.</li>

                    <li>Attack triggers tied to animations.</li>

                    <li>Animation blending for smooth transitions</li>

                     <li>Enemy AI with Pathfinding</li>
                </ul>
                This helped me understand state machines and animation parameters.
            </p>
    </div>
    `, "#e80fb7"),
    //new ProjectData("project-5", "Cloud Drew Land", "img/projects/project-5-icon.png", `
    //<div class="paragraph">
    //    <strong>Cloud Drew Land</strong> is a thing of beauty that I am so proud of. I could write about it for hours.
    //    <br/>Image by <a target="_blank" href="https://www.pexels.com/fr-fr/@cottonbro">cottonbro</a>.
    //</div>
    //
    //<div class="paragraph">
    //    Main features :
    //    <ul>
    //    <li>Some stuff</li>
    //    <li>Some great stuff</li>
    //    <li>More awesome stuff</li>
    //    <li>And then some</li>
    //    </ul>
    //</div>
    //
    //<div class="paragraph">
    //    <div class="notice">
    //    Windows build available on <a href="https://some.where/nice" target="_blank">itch.io</a>.
    //    Source code available on <a href="https://github.com/yourself" target="_blank">GitHub</a>.
    //    </div>
    //</div>
    //
    //<div class="paragraph center">
    //    <img class="pc-screenshot" src="https://fakeimg.pl/534x300/" alt="Cloud Drew Land Screenshot" />
    //    <img class="pc-screenshot" src="https://fakeimg.pl/534x300/" alt="Cloud Drew Land Screenshot" />
    //    <img class="pc-screenshot" src="https://fakeimg.pl/534x300/" alt="Cloud Drew Land Screenshot" />
    //</div>`, "#e48246")
];