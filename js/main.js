PROJECT_DETAILS = {
  bluebook: {
    title: "BlueBook: Secure, Electronic Programming Exams",
    summary: `A suite of tools to allow programming exams to be taken on a computer. Includes frontend application for students to
              take exams, backend infrastrucure for automated exam creation and submission, and a variety of
              tools (including autograding) to expedite exam grading. Used to deliver more than 7000 exams across various Stanford
              courses thus far.`,
    imgsrc: "img/Projects/BlueBook/bb4.gif",
    more: `Created by Brahm Capoor,
           <a href="http://malikaliraza.com" target="_blank">Ali Malik</a> and
           <a href="https://stanford.edu/~cpiech/" target="_blank">Chris Piech</a>.
           Special thanks to
           <a href="http://ecosimulation.com/chrisgregg/" target="_blank">Chris Gregg</a> and the
           <a href="http://cs198.stanford.edu" target="_blank">CS 198 program </a>.`,
    technologies:
      "Technologies: Javascript, Flow, React/Redux, Electron, Python"
  },
  servers: {
    title: "Exploring Servers in CS 106A",
    summary: `Stanford's introductory Computer Science class has a module introducing students to networking and specifically,
              how server/client programs are implemented. I wrote two labs for the class providing simple examples of how
              the concepts students were learning could be used in real-life scenarios. Accompanying the labs were interactive
              web pages that made requests to students' servers once they were implemented. `,
    imgsrc: "img/Projects/FlightPlanner.png",
    more: `Created by Brahm Capoor using libraries implemented by
          <a href="https://stanford.edu/~cpiech/" target="_blank">Chris Piech</a>.
          View the code for FlightPlanner
          <a href="https://github.com/brahmcapoor/CS106-teaching-materials/tree/master/CS106A/FlightPlanner" target="_blank"> here </a>
          and the code for ContActivist
          <a href="https://github.com/brahmcapoor/CS106-teaching-materials/tree/master/CS106A/ContActivist" target="_blank"> here </a>`,
    technologies: "Technologies: Java, HTML/CSS, JavaScript"
  },
  deepgifs: {
    title: "DeepGIFs: Using Deep Learning to Understand and Synthesize Motion",
    summary: `We explored the potential of deep generative recurrent networks in learning and reproducing
             realistic motion. Specifically, we attempted to generate GIFs from initial seed images using
             two synthetic datasets.`,
    imgsrc: "img/Projects/DeepGIFs/deepgifs_thumbnail.gif",
    more: `View the project's webpage
           <a href="deepgifs.html" target="_blank"> here </a>
           for more information and fun animations. Written by Brahm Capoor,
           <a href="http://malikaliraza.com" target="_blank">Ali Malik</a> and
           <a href="https://www.linkedin.com/in/mtroute" target="_blank">Michael Troute</a>.`,
    technologies: "Technologies: Python, PyTorch"
  },
  heroesandvillains: {
    title: "Heroes and Villains: What A.I. Can Tell Us About Movies",
    summary: `We used various Artificial Intelligence Techniques on Movie Scripts to identify protagonists
              and antagonists, find factions of characters, and cluster scripts based on their archetype. `,
    imgsrc: "img/Projects/Heroes_And_Villains.png",
    more: `Read the paper
           <a href="docs/HeroesAndVillains.pdf" target="_blank">here</a> or view the code
           <a href="https://github.com/brahmcapoor/Heroes-And-Villains" target="_blank">here</a>.
           Written by Brahm Capoor,
           <a href="https://www.linkedin.com/in/mtroute" target="_blank">Michael Troute</a> and
           <a href="https://www.linkedin.com/in/varun-nambikrishnan-aa70a9113" target="_blank">Varun Nambikrishnan</a>.`,
    technologies: "Technologies: Python, Scikit-learn"
  },
  lair: {
    title: "L.A.I.R: Leveraging A.I. for Requests",
    summary: `We used various Machine Learning Algorithms to predict how long students would need to wait
              for help at office hours and subsequently, how long it would take a TA to help them.`,
    imgsrc: "img/Projects/Lair.png",
    more: `Read the paper
           <a href="docs/LAIRtimes.pdf" target="_blank">here</a> or view the code
           <a href="https://github.com/brahmcapoor/L.A.I.R." target="_blank">here</a>.
           Written by Brahm Capoor,
           <a href="https://www.linkedin.com/in/mtroute" target="_blank">Michael Troute</a> and
           <a href="http://web.stanford.edu/~troccoli/" target="_blank">Nick Troccoli</a>.`,
    technologies: "Technologies: Python, Scikit-learn, Tensorflow"
  },
  allocator: {
    title: "Heap Allocator",
    summary: `We implemented a dynamic memory allocator using a segregated architecture with coalescing free blocks
              which outperformed benchmarks for throughput by 15% and utilization by 5%`,
    imgsrc: "img/Projects/heap.jpg",
    more: `Written by Brahm Capoor and
           <a href="http://gustavotorresds.github.io" target="_blank"> Gustavo Torres da Silva</a>`,
    technologies: "Technologies: C"
  },
  mercury: {
    title: "Mercury: An Emotional Twitter Bot",
    summary: `A twitter bot that chose a random emotion every day and generated tweets based on that
              mood using Markov Chaining on a corpus of around 2000 quotes per emotion, webscraped from
              GoodReads`,
    imgsrc: "img/Projects/Mercury.png",
    more: `View the code
          <a href="https://github.com/brahmcapoor/Mercury" target="_blank">here</a> or the (now inactive) bot
          <a href="https://twitter.com/mercurialbot" target="_blank">here</a>. Created by Brahm Capoor and
          <a href="https://www.linkedin.com/in/mtroute" target="_blank">Michael Troute</a>`,
    technologies: "Technologies used: Python"
  }
};

$(document).ready(readyFn);

function readyFn() {
  $(".details").each(function() {
    $(this).hide();
  });

  $(".summary").click(function() {
    $(".details").each(function() {
      if ($(this).is(":visible")) {
        $(this).slideToggle();
        $(this)
          .prev()
          .html(
            $(this)
              .prev()
              .html()
              .replace("-", "+")
          );
      }
    });
    if (
      !$(this)
        .next()
        .is(":visible")
    ) {
      $(this)
        .next()
        .slideToggle();
      $(this).html(
        $(this)
          .html()
          .replace("+", "-")
      );
    }
  });

  $(".sliding-link").click(function(e) {
    e.preventDefault();
    var aid = $(this).attr("href");
    $("html,body").animate({ scrollTop: $(aid).offset().top }, "slow");
  });

  $(".project").click(function(e) {
    showProjectDetails($(this).attr("id"));
  });
}

function showProjectDetails(project) {
  $("#projectdetails").slideUp("fast", function() {
    project_obj = PROJECT_DETAILS[project];
    $("#projecttitle").html(project_obj.title);
    $("#projectsummary").html(project_obj.summary);
    $("#projectmore").html(project_obj.more);
    $("#projecttechs").html(project_obj.technologies);
    $("#projectimage").attr("src", project_obj.imgsrc);
  });
  $("#projectdetails").slideDown();
}
