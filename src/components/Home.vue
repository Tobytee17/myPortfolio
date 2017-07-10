<template>
    <div class="home">
        <div class="row container-fluid">
            <div class="col-lg-4" v-for="item in about">
                <h1 v-text="item.title"></h1>
                <hr>
                <h4 v-text="item.content"></h4>
                <img class="img-responsive" :src="item.src">
                <h4 id="skills" v-for="skills in item.skills" v-text="skills"></h4>
            </div>
        </div>
        <div class="row container-fluid">
            <div class="page-header">
                <h3 v-text="contactMe"></h3>
            </div>
            <div class="col-lg-3" v-for="platform in socialMedia">
                <a v-bind:href="platform.link" v-bind:target="platform.target">
                    <i v-bind:class="platform.source"></i>
                </a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'home',
    data() {
        return {
            about:
            [
                { title: "Profile", src: "./static/me.jpg" },
                { title: "About Me", content: "Hey there, my name is Toby Tee and welcome to my website. I am currently an Information Technology student taking my Bachelors of Information Sciences at Massey University’s Albany Campus. Through studying Information Technology, I have developed a passion for web development, and am actively working to secure my future as a front-end web developer. Feel free to look through my projects, CV and GitHub for more information regarding my technical skills. Please feel free to contact me if you have any questions regarding any of the content displayed on this website." },
                { title: "Skills", skills: ["HTML", "CSS", "Bootstrap", "JavaScript", "JQuery", "Vue.JS"] },
            ],
            socialMedia:
            [
                { platform: "Twitter", source: "fa fa-twitter", link: "https://twitter.com/TobyTee17", target: "__blank" },
                { platform: "GitHub", source: "fa fa-github", link: "https://github.com/Tobytee17", target: "__blank" },
                { platform: "LinkedIn", source: "fa fa-linkedin", link: "https://www.linkedin.com/in/toby-tee-27aaa5108/", target: "__blank" },
                { platform: "Email", source: "fa fa-envelope-o", link: "mailto:tobytee17@gmail.com" },
            ],
            contactMe: "Get in touch with me"
        }
    },
}
</script>

<style scoped>
h1 {
    margin: 7% 0% 3% 0%;
}

h4 {
    margin: 3% 10% 0% 10%;
}

h3 {
    margin: 0% 0% 0% 0%;
}

i {
    font-size: 50px;
    padding-bottom: 30px;
}

a {
    color: #ecf0f1;
}

a:hover {
    color: #c0392b;
}

i:hover {
    transform: scale(1.1);
}

.container-fluid {
    margin: 0% 5% 0% 5%;
}

.page-header {
    text-align: center;
    margin-top: 0px;
}

.home {
    color: #ecf0f1;
}

.img-responsive {
    border-radius: 15px;
}

#skills {
    margin: 30px;
}

.home {
    background: #18185b;
}
</style>
