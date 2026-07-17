export const projectsData = [
  {
    id: 1,
    title: "Underwater ROV (Remotely Operated Vehicle)",
    description: "Designed and built a fully operational underwater robot with 8 BLDC thrusters controlled via Ethernet. Features real-time telemetry streaming, live video feed, PID-based stabilization, and 4 control modes (Manual, Stabilize, Depth Hold, Heading Hold).",
    technologies: ["Python", "Arduino Mega", "Robotics", "PyQt6"],
    githubUrl: "https://github.com/phosgene67/SEAHAWK--underwater-rov",
    demoUrl: null,
    status: "Completed",
    image: "/images/rov-project.svg"
  },
   {
    id: 2,
    title: "LFRSIM",
    description: "PIDsim is a desktop simulation project for learning and experimenting with PID-controlled line following robots",
    technologies: ["Python", "Pygame ", "Numpy", "Matplotlib"],
    githubUrl: "https://github.com/phosgene67/LFRSIM",
    demoUrl: null,
    status: "Under development",
    image: "/images/lfr_sim.jpg"
  },
  {
    id: 3,
    title: "LineFollowerRobot",
    description: "This project is an Arduino Nano-based line follower robot designed for fast and accurate path tracking. It uses a PID (Proportional–Integral–Derivative) controller to continuously adjust the motor speeds based on the line position error, ensuring smooth and stable navigation through straight paths and sharp turns. The robot also implements speed ramping (acceleration control), which gradually increases or decreases motor speed to prevent sudden jerks, improve traction, reduce wheel slip, and enhance overall stability. The combination of PID control and acceleration ramping enables the robot to achieve high-speed, precise, and reliable line-following performance.",
    technologies: ["Arduino", "C++", "Control Systems "],
    githubUrl: "https://github.com/phosgene67/SUST-IGNITE",
    demoUrl: null,
    status: "Completed",
    image: "/images/ai-automation-project.svg"
  },
  // {
  //   id: 4,
  //   title: "IoT Sensor Network & Data Logging",
  //   description: "Built distributed sensor network with multiple Arduino nodes collecting environmental data with SD card logging. Features wireless communication, real-time monitoring dashboard, and cloud data synchronization for IoT applications.",
  //   technologies: ["Arduino", "IoT", "Sensors", "C++"],
  //   githubUrl: "https://github.com/phosgene67",
  //   demoUrl: null,
  //   status: "Completed",
  //   image: "/images/sensor-network-project.svg"
  // },
  {
    id: 5,
    title: "Object Avoiding Robot",
    description: "Autonomous mobile robot that detects and avoids obstacles in real-time using ultrasonic sensors. Features intelligent navigation algorithm, dual motor control with PWM, and 120+ minutes battery life.",
    technologies: ["Arduino", "Robotics", "C++", "Sensors"],
    githubUrl: "https://github.com/phosgene67",
    demoUrl: null,
    status: "Completed",
    image: "/images/object-avoiding-robot-project.svg"
  }
]
