<template>
  <div>
    <h1>Resume</h1>

    <div class="paragraph">
        I'm <strong>Frederico Pinheiro</strong>, a software developer with 3+ years of experience in the aerospace industry, currently focused on building
        flight simulators and mechanical training systems. I work mainly with C++ and Unreal Engine, developing
        real-time interactive environments and behaviors, where immersive design and technical depth play a crucial
        role. Known for a positive, calm and collected problem-solving mindset, always seeking continuous learning, and
        driven by a great passion for games and game development.<br />
        <!--<br />-->
        <br />I'm <strong>currently looking to</strong> combine my passion, with my experience in interactive 3D simulations by pursuing a position in the Video Games Industry so if you have any opportunity feel free to
        <router-link to="/contact">contact me</router-link>.
        <br />
        <!--<br />Besides war, I'm passionate about firearms, martial arts, explosions, push-ups and flowers.-->

        <div style="margin-top:20px; margin-bottom:20px;">
            <a class="download-link" href="d/resume-en.pdf" target="_blank"><i class="fa fa-download fa-lg fa-fw"></i> Download as PDF 🇬🇧</a>
            <!--<a class="download-link" href="d/cv-fr.pdf" target="_blank"><i class="fa fa-download fa-lg fa-fw"></i> Télécharger en PDF 🇫🇷</a>-->
            <div style="clear:both"></div>
        </div>
    </div>
    <div class="photo">
      <img src="img/resume-photo.png" alt="Photo of John" />
    </div>

    <div style="clear:both"></div>

    <div class="full-content">
        <h2>Work experience</h2>

        <h3><strong>Software Developer</strong> - Empordef Tecnologias de Informação, S.A</h3>\href{https://eti.pt/}
        <h4>December 2022 - Now</h4>

        <ul id="myList">
            <!-- JavaScript will add items here -->
            <li> <strong>Unreal Engine (C++) developer</strong> specializing in <strong>advanced training simulators</strong> for the defense sector <strong>(NATO)</strong>.</li>
            <li> Developed an <strong>Image Generator in Unreal Engine 5 (C++)</strong>, focused on an <strong>open-world environment designed for tactical training</strong>.</li>
            <li> Built a <strong>C++ Communication system</strong> based on the CIGI protocol to manage and control a custom Unreal Engine Image Generator in real time.</li>
            <li> <strong>Coordinated and collaborated</strong> with cross-functional teams to <strong>ensure seamless integration</strong> between the simulator and the Image Generator.</li>
            <li> <strong>Integrated external simulator flight data</strong> to execute flight routes, capture terrain imagery, and export captured data.</li>
            <li> Involved in projects related to aerial and ground defense technologies, including missile systems, Pandur armored vehicles, and UAV platforms.</li>
            <li> Developed a <strong>Virtual maintenance training</strong> to control and learn the inner workings of an aircraft engine.</li>
        </ul>


        <div class="tech-stack"><strong>Unreal Engine 5, Unity, C++, C#, OpenGL</strong></div>

        <!--<h3>Operation Classified - Delta Force</h3>
    <h4>2015-2017</h4>

    <div>It's classified so I can't speak about it.</div>

    <div class="tech-stack">Even more Firearms, knives, grenades, Hummer vehicle, parachute,...</div>

    <h3>Operation Classified - Delta Force</h3>
    <h4>2012-2015</h4>

    <div>It's classified so I can't speak about it.</div>

    <div class="tech-stack">Firearms, knives, grenades, Hummer vehicle, parachute,...</div>-->

        <h2>Skills</h2>

        <div class="skill-set">
            <h3>Lethal</h3>
            <SkillRate name="Handguns" :rate="5" />
            <SkillRate name="Rifles" :rate="5" />
            <SkillRate name="Shotguns" :rate="5" />
            <SkillRate name="Machineguns" :rate="5" />
            <SkillRate name="Missile launchers" :rate="5" />
            <SkillRate name="Knives" :rate="5" />
            <SkillRate name="Hand to hand combat" :rate="5" />
        </div>

        <div class="skill-set">
            <h3>Non-lethal</h3>
            <SkillRate name="Sneaking" :rate="1" />
            <SkillRate name="Negotiation" :rate="1" />
            <SkillRate name="Seduction" :rate="1" />
            <SkillRate name="Sense of humor" :rate="2" />
        </div>
        <div style="clear:both" />

        <h2>Education</h2>

        <h3>NOVA School of Science and Technology (FCT NOVA) - 2020 - 2023</h3>
        <h4>Master’s degree in Computer science and Engineering</h4>
        <div>Specialty in Game Programming and Simulation</div>

        <h3>NOVA School of Science and Technology (FCT NOVA) - 2017 - 2020</h3>
        <h4>Bachelor’s degree in Computer science and Engineering</h4>

        <!--<h2>Languages</h2>

        <h3>American</h3>
        <div>Basic knowledge but I know lots of one-liners</div>

        <h3>That's it</h3>
        <div>Who needs another language when you speak American?</div>-->


        <h2>Besides...</h2>
        <div>
            <h3>I ❤️ Violence</h3>
            <div>I find it really soothing to just shoot at bad guys</div>

            <h3>I 🧡 Sports</h3>
            <div>I used to be thin but then I ingested 10 kilos of steroids and proteins a day while doing 1000 push-ups.</div>

            <h3>I 💛 Politics</h3>
            <div>I hope I can have a career here someday but I might have temper issues.</div>

            <h3>I 💚 Flowers</h3>
            <div>Especially the big ones, with the trunk and leaves.</div>

        </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import SkillRate from "@/components/SkillRate.vue";

export default Vue.extend({
  name: "Resume",
  components: {
    SkillRate,
  },
});
</script>

<style scoped>
h2 {
  font-weight: 100;
  font-size: 2em;
  margin: 0px;
  padding: 0px;
  padding-top: 50px;
}
h3 {
  font-weight: 100;
  font-size: 1.6em;
  margin: 0px;
  padding: 0px;
  padding-top: 30px;
}
h4 {
  font-weight: 100;
  font-size: 1.3em;
  margin: 0px;
  padding: 0px;
  padding-top: 15px;
  font-style: italic;
}

.paragraph {
  max-width: 700px;
}

.download-link {
  float:left;
  margin-right: 50px;
}

.full-content div {
  max-width: 800px;
}

.skill-set h3 {
  padding-bottom: 10px;
}

.photo img {
  height: 300px;
  width: 300px;
}

.tech-stack {
  font-style: italic;
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
    padding: 30px;
    padding-left: 80px;
  }

  .skill-set {
    float: left;
    padding-right: 60px; 
  }
}
</style>