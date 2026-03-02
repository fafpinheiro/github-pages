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
    new ProjectData("project-2", "Through the Storm", "img/projects/project-2-icon.png", `
    

    <div class="paragraph">
        <p>
            <strong>Gameplay and Main Mechanics</strong>
            </br>
            In the first part of the game, the player will be placed near the investigation station, where he must go and explore the surroundings. In the station the player will have to solve some mini puzzles and find clues to find out what happened. Also there, the player will face the enemies for the first time, having the option to try to sneak through it, or fight them head on. After leaving the station, the player will have to explore the wilds for more clues, face more enemies and a bit of sledging through the snow along the ways.
        </p>

        <div class="paragraph center">
            <video controls width="600">
            <source src="img/TTSTrailer.mp4" type="video/mp4">
        </video>

        <ul>
            <li><strong>Investigation:</strong> While exploring the player can find some written notes to read, and an occasional radio log to listen.</li>
                
            <li><strong>Sneak:</strong> While facing the enemies, the player can try to stay hidden behind cover and slowly advance out of the enemies’ line of sight. The player also needs to move silently since sound can also unveil the player position to the enemies.</li>

            <li><strong>Fight:</strong> By option or due to a failed sneak attempt, the player might have to fight the enemies having to avoid its attacks and hitting it with a melee weapon.</li>
            
            <li><strong>Sledging:</strong> In a moment of the game the player will have to sledge through a snow hill, having to dodge various obstacles until the player arrives at the bottom of the hill.</li>
            
        </ul>
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
    <div class="notice">
        Windows build available on <a href="https://some.where/nice" target="_blank">itch.io</a>.
        Source code is available on <a href="https://github.com/yourself" target="_blank">GitHub</a>.
    </div>
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

        <strong>Notebooks:</strong>This feature adds an in-game notebook that the player can access at any time. It stores all the story notes and clues the player has discovered, allowing them to review important information whenever needed. The notebook also shows the current objective, helping players stay on track and follow the story without getting lost.
    </div>

    `, "#5a78af"),
    new ProjectData("project-3", "Drawing Overload", "img/projects/project-3-icon.png", `
    <div class="paragraph">
        <strong>Drawing Overload</strong> is a thing of beauty that I am so proud of. I could write about it for hours.
        <br/>Image by <a target="_blank" href="https://www.pexels.com/fr-fr/@miphotography">Miesha Maiden</a>.
    </div>
    <div class="paragraph center">
        <iframe class="youtube" src="https://www.youtube.com/embed/dQw4w9WgXcQ" frameborder="0" allowfullscreen></iframe>
    </div>

    <div class="paragraph">
        Main features :
        <ul>
        <li>Some stuff</li>
        <li>Some great stuff</li>
        <li>More awesome stuff</li>
        <li>And then some</li>
        </ul>
    </div>

    <div class="paragraph">
        <div class="notice">
        Playable in the browser (WebGL) on <a href="https://some.where/nice" target="_blank">itch.io</a>.
        Source code is available on <a href="https://github.com/yourself" target="_blank">GitHub</a>.
        </div>
    </div>

    <div class="paragraph center">
        <img class="pc-screenshot" src="https://fakeimg.pl/534x300/" alt="Drawing Overload Screenshot" />
        <img class="pc-screenshot" src="https://fakeimg.pl/534x300/" alt="Drawing Overload Screenshot" />
        <img class="pc-screenshot" src="https://fakeimg.pl/534x300/" alt="Drawing Overload Screenshot" />
        <img class="pc-screenshot" src="https://fakeimg.pl/534x300/" alt="Drawing Overload Screenshot" />
    </div>
    `, "#383838"),
    new ProjectData("project-4", "Eugeneable", "img/projects/project-4-icon.png", `
    <div class="paragraph">
    <strong>Eugeneable</strong> is a thing of beauty that I am so proud of. I could write about it for hours.
    <br/>Image by <a target="_blank" href="https://www.pexels.com/fr-fr/@neo8iam">NEOSiAM 2020</a>.
    </div>
    
    <div class="paragraph">
        Main features :
        <ul>
        <li>Some stuff</li>
        <li>Some great stuff</li>
        <li>More awesome stuff</li>
        <li>And then some</li>
        </ul>
    </div>

    <div class="paragraph">
        <div class="notice">
        Windows build available on <a href="https://some.where/nice" target="_blank">itch.io</a>.
        </div>
    </div>

    <div class="paragraph center">
        <img class="pc-screenshot" src="https://fakeimg.pl/534x300/" alt="Eugeneable Screenshot" />
        <img class="pc-screenshot" src="https://fakeimg.pl/534x300/" alt="Eugeneable Screenshot" />
    </div>
    `, "#e80fb7"),
    new ProjectData("project-5", "Cloud Drew Land", "img/projects/project-5-icon.png", `
    <div class="paragraph">
        <strong>Cloud Drew Land</strong> is a thing of beauty that I am so proud of. I could write about it for hours.
        <br/>Image by <a target="_blank" href="https://www.pexels.com/fr-fr/@cottonbro">cottonbro</a>.
    </div>
    
    <div class="paragraph">
        Main features :
        <ul>
        <li>Some stuff</li>
        <li>Some great stuff</li>
        <li>More awesome stuff</li>
        <li>And then some</li>
        </ul>
    </div>

    <div class="paragraph">
        <div class="notice">
        Windows build available on <a href="https://some.where/nice" target="_blank">itch.io</a>.
        Source code available on <a href="https://github.com/yourself" target="_blank">GitHub</a>.
        </div>
    </div>

    <div class="paragraph center">
        <img class="pc-screenshot" src="https://fakeimg.pl/534x300/" alt="Cloud Drew Land Screenshot" />
        <img class="pc-screenshot" src="https://fakeimg.pl/534x300/" alt="Cloud Drew Land Screenshot" />
        <img class="pc-screenshot" src="https://fakeimg.pl/534x300/" alt="Cloud Drew Land Screenshot" />
    </div>`, "#e48246")
];