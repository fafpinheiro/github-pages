<template>
  <div style="margin-bottom: 80px;">
    <h1>Hello World! This is Fred</h1>

    <div class="paragraph">
        <div>
            I'm <strong>Frederico Pinheiro</strong>, a software developer with 3+ years of experience in the aerospace industry, currently focused on building
            flight simulators and mechanical training systems. I work mainly with C++ and Unreal Engine, developing
            real-time interactive environments and behaviors, where immersive design and technical depth play a crucial
            role. Known for a positive, calm and collected problem-solving mindset, always seeking continuous learning, and
            driven by a great passion for games and game development.<br />
        </div>

      <!--<div style="margin-top: 20px;">I've worked on  <router-link to="/game-projects">stuff</router-link>, on <router-link to="/other-projects">other stuff</router-link>, and took part in <router-link to="/resume">a few things</router-link> as well.</div>-->

        <div style="margin-top: 40px;">
            I'm <strong>currently looking to</strong> combine my passion, with my experience in interactive 3D simulations by pursuing a position in the Video Games Industry. <br/> You can reach me at <a href="mailto:johnmatrix@deltaforce.us">johnmatrix@deltaforce.us</a> or <router-link to="/contact">through here</router-link>.
        </div>
    </div>

    <div class="photo">
      <img src="img/me.jpg" alt="Avatar of Fred" /> 
    </div>

    <div style="clear:both"></div>

  </div>
</template>

<style scoped>
.paragraph {
  max-width: 700px;
  margin-bottom: 20px;
}

.photo {
  margin-top: 50px;
  text-align: center;
}

@media only screen and (min-width: 620px){
  .paragraph {
    float: left;
  }

  .photo {
    float: left;
    padding: 10px;
    padding-left: 80px;
  }
}

</style>