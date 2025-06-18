import React from "react";
import { ReactTerminal } from "react-terminal";
import Header from "./Header";

function Terminal() {
  const welcomeMessage = (
    <span>
      Type "help" for all available commands. <br />
    </span>
  );

  const commands = {
    whoami: "Anurag Banerjee - Full Stack Developer",
    cd: (directory) => `changed path to ${directory}`,
    help: () =>
      [
        "Available commands:",
        "  help        - Show this help message |",
        "  whoami      - Display user information |",
        "  about       - About me |",
        "  projects    - List my projects |",
        "  skills      - Show technical skills |",
        "  github      - Open GitHub profile |",
        "  linkedin    - Open LinkedIn profile |",
        "  resume      - View resume |",
        "  clear       - Clear terminal |",
        " neofetch     - System Information |",
        "  joke        - Get a programming joke |",
        "  quote       - Get a coding quote |",
        "  date        - Show current date |",
        "  cd <dir>    - Change directory |",
      ].join("\n"),

    neofetch: () =>
      [
        "anurag@portfolio",
        "-----------------",
        "OS: DeveloperOS 2.0.1  |",
        "Host: Personal Portfolio  |",
        "Kernel: React 18.2.0  |",
        "Uptime: 365 days coding  |",
        "Packages: npm, yarn, coffee  |",
        "Shell: bash 5.1.16  |",
        "Resolution: Responsive  |",
        "DE: VS Code Dark  |",
        "WM: Chrome Browser  |",
        "Theme: Matrix Terminal  |",
        "Icons: React Icons Pack  |",
        "Terminal: Custom Portfolio  |",
        "CPU: Coffee-powered Brain  |",
        "Memory: Unlimited Ideas  |",
        "GPU: Imagination Engine  |",
        "Disk: ~/projects, ~/dreams  |",
        "Network: Always Connected  |",
      ].join("\n"),

    about: () =>
      [
        "Hi, I'm Anurag Banerjee! 👨‍💻",
        "",
        "🎓 Full Stack Developer from MMMUT",
        "🚀 Passionate about creating innovative web solutions",
        "💡 Always learning new technologies",
        "🔧 Building better software one line at a time",
        "",
        "Tech Stack: React, Node.js, JavaScript, Python, MySQL",
      ].join("\n"),

    github: () => {
      window.open("https://github.com/ShadowGuy01234");
      return "Opening GitHub profile... 🚀";
    },

    linkedin: () => {
      window.open("https://linkedin.com/in/yourprofile");
      return "Opening LinkedIn profile... 💼";
    },

    resume: () => {
      window.open(
        "https://drive.google.com/file/d/1-veXIp9AYCFM2azDdbsWfRad4uV04TvE/view?usp=sharing"
      );
      return "Opening resume... 📄";
    },

    projects: () =>
      [
        "📁 My Projects:",
        "",
        "🎬 Netflix-themed Portfolio",
        "   • React.js, Tailwind CSS",
        "   • Responsive design with modern UI",
        "",
        "🌤️ Weather Application",
        "   • API integration",
        "   • Real-time weather data",
        "",
        "🎓 EduVision",
        "   • Educational platform",
        "   • Student management system",
        "",
        "Type 'github' to see more projects!",
      ].join("\n"),

    skills: () =>
      [
        "🛠️ Technical Skills:",
        "",
        "Frontend:",
        "  ▸ JavaScript (ES6+)",
        "  ▸ React.js",
        "  ▸ HTML5 & CSS3",
        "  ▸ Tailwind CSS",
        "",
        "Backend:",
        "  ▸ Node.js",
        "  ▸ Express.js",
        "  ▸ MySQL",
        "  ▸ Firebase",
        "",
        "Other:",
        "  ▸ Python",
        "  ▸ Git & GitHub",
        "  ▸ Docker",
        "  ▸ Cloud Platforms",
      ].join("\n"),

    clear: () => {
      window.location.reload();
      return "";
    },

    joke: () =>
      [
        "🤣 Programming Joke:",
        "",
        "Why do programmers hate nature?",
        "It has too many bugs! 🐛",
        "",
      ].join("\n"),

    quote: () =>
      [
        "💭 Coding Wisdom:",
        "",
        '"Code is like humor.',
        "When you have to explain it, it's bad.",
        "",
        "- Cory House",
      ].join("\n"),

    sudo: () =>
      [
        "🚫 Permission denied!",
        "",
        "Nice try, but you're not root here! 😎",
        "This is a safe portfolio environment.",
      ].join("\n"),

    date: () => {
      const now = new Date();
      return [
        "📅 Current Date & Time:",
        "",
        `${now.toDateString()}`,
        `${now.toTimeString()}`,
        "",
        `Uptime: ${Math.floor(Math.random() * 365)} days`,
      ].join("\n");
    },
  };

  return (
    <div className="bg-[#141414] w-full min-h-screen">
      <Header />
      <div className="pt-20">
        <ReactTerminal
          commands={commands}
          theme="matrix"
          prompt="anurag@portfolio:~$"
          showControlBar={false}
          errorMessage="bash: command not found"
          welcomeMessage={welcomeMessage}
        />
      </div>
    </div>
  );
}

export default Terminal;
