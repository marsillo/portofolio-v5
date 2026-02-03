import {
  Code,
  Cpu,
  Database,
  Brain,
  Globe,
  Terminal,
  Boxes
} from "lucide-react";

export const TECH_ICONS = {
  Python: Code,
  JavaScript: Code,
  PHP: Code,
  Java: Code,
  Go: Code,
  SQL: Database,

  HTML: Globe,
  CSS: Globe,
  Bootstrap: Globe,
  "Tailwind CSS": Globe,
  ReactJS: Globe,
  Vite: Terminal,
  "Node JS": Cpu,
  Flask: Cpu,
  CodeIgniter: Cpu,

  TensorFlow: Brain,
  Keras: Brain,
  OpenCV: Brain,
  "Jupyter Notebook": Brain,
  Pandas: Database,
  NumPy: Database,

  MySQL: Database,
  Oracle: Database,
  Firebase: Database,

  default: Boxes,
};