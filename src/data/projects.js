export const projectsData = [
  {
    id: 1,
    title: "SEAHAWK-Underwater ROV (Remotely Operated Vehicle)",
    description: "Designed and built a fully operational underwater robot with 8 BLDC thrusters controlled via Ethernet. Features real-time telemetry streaming, live video feed, PID-based stabilization, and 4 control modes (Manual, Stabilize, Depth Hold, Heading Hold).",
    technologies: ["Python", "Arduino Mega", "Robotics", "PyQt6"],
    githubUrl: "https://github.com/phosgene67/SEAHAWK--underwater-rov",
    demoUrl: null,
    status: "Completed",
    image: "/images/SeaHawk3d_design.png"
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
    image: "/images/LFR_IGNITE.jpeg"
  },
  {
    id: 4,
    title: "Aurabot-Bipedal Robot",
    description: "A self balancing wheeled bipedal robot",
    technologies: ["RL(PPo)", "Mujoco Simulation", "Python"],
    githubUrl: "https://github.com/phosgene67https://github.com/phosgene67/aurabot_bipedal_robot.git",
    demoUrl: null,
    status: "Completed",
    image: "/images/Aurabot.png"
  },
  {
    id: 5,
    title: "Object Avoiding Robot",
    description: "Autonomous mobile robot that detects and avoids obstacles in real-time using ultrasonic sensors. Features intelligent navigation algorithm, dual motor control with PWM, and 120+ minutes battery life.",
    technologies: ["Arduino", "Robotics", "C++", "Sensors"],
    githubUrl: "https://github.com/phosgene67/Object-Avoiding-Robot_Ros2-Gazebo-simulation",
    demoUrl: null,
    status: "Completed",
    image: "/images/object-avoiding-robot-project.svg"
  },
  {
    id: 6,
    title: "Monocular depth estimation",
    description: "Monocular depth estimation is the task of predicting per-pixel scene depth (distance from the camera) using only a single 2D image, without stereo pairs or dedicated depth sensors. It relies on learned visual cues—like object size, texture gradients, occlusion, and perspective—typically via deep neural networks trained on datasets with ground-truth depth (from LiDAR or stereo) to generalize this estimation to new scenes",
    technologies: ["OpenCV", "Tensorflow", "Python", "Sensors"],
    githubUrl: "https://github.com/phosgene67/MonocularDepthEstimation_CV",
    demoUrl: null,
    status: "Completed",
    image: "/images/mde.jpg"
  }
]
