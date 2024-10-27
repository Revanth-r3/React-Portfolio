import { motion } from "framer-motion";
import { SiPython, SiCplusplus, SiMysql, SiApachespark, SiApachehadoop, SiDatabricks, SiPowerbi, SiVisualstudiocode, SiMicrosoftazure, SiLinux, SiGithub } from "react-icons/si";
import { FaBrain, FaRobot, FaCommentDots } from "react-icons/fa"; // Icons for Machine Learning, Deepnote, and NLP

// Define the animation variant for icon bounce effect
const iconVariants = (duration) => ({
    initial: { y: -10 },
    animate: {
        y: [10, -10],
        transition: {
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse",
        },
    },
});

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
        <motion.h1 
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: -100 }}
            transition={{ duration: 1.5 }}
            className="my-20 text-center text-4xl text-white">
            Technologies
        </motion.h1>
        
        <motion.div 
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1.5 }}
            className="flex flex-wrap items-center justify-center gap-4">

            {/* Python */}
            <motion.div 
                variants={iconVariants(4)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4 bg-white">
                <SiPython className="text-7xl" style={{ color: "#3776AB" }} />
            </motion.div>

            {/* C++ */}
            <motion.div 
                variants={iconVariants(3.5)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4 bg-white">
                <SiCplusplus className="text-7xl" style={{ color: "#00599C" }} />
            </motion.div>

            {/* MySQL */}
            <motion.div 
                variants={iconVariants(4.5)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4 bg-white">
                <SiMysql className="text-7xl" style={{ color: "#4479A1" }} />
            </motion.div>

            {/* Apache Spark */}
            <motion.div 
                variants={iconVariants(3)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4 bg-white">
                <SiApachespark className="text-7xl" style={{ color: "#E25A1C" }} />
            </motion.div>

            {/* Apache Hadoop */}
            <motion.div 
                variants={iconVariants(5)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4 bg-white">
                <SiApachehadoop className="text-7xl" style={{ color: "#FFB700" }} />
            </motion.div>

            {/* Databricks */}
            <motion.div 
                variants={iconVariants(2.5)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4 bg-white">
                <SiDatabricks className="text-7xl" style={{ color: "#FF5733" }} />
            </motion.div>

            {/* Machine Learning */}
            {/* <motion.div 
                variants={iconVariants(3)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4 bg-white">
                <FaBrain className="text-7xl" style={{ color: "#F7931E" }} />
            </motion.div> */}

            {/* Deepnote */}
            {/* <motion.div 
                variants={iconVariants(2.8)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4 bg-white">
                <FaRobot className="text-7xl" style={{ color: "#007ACC" }} />
            </motion.div> */}

            {/* NLP */}
            {/* <motion.div 
                variants={iconVariants(4)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4 bg-white">
                <FaCommentDots className="text-7xl" style={{ color: "#6A4E9C" }} />
            </motion.div> */}

            {/* Power BI */}
            <motion.div 
                variants={iconVariants(6)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4 bg-white">
                <SiPowerbi className="text-7xl" style={{ color: "#F2C811" }} />
            </motion.div>

            {/* VS Code */}
            <motion.div 
                variants={iconVariants(3.7)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4 bg-white">
                <SiVisualstudiocode className="text-7xl" style={{ color: "#007ACC" }} />
            </motion.div>

            {/* Azure */}
            <motion.div 
                variants={iconVariants(3)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4 bg-white">
                <SiMicrosoftazure className="text-7xl" style={{ color: "#0078D4" }} />
            </motion.div>

            {/* Linux */}
            <motion.div 
                variants={iconVariants(2.6)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4 bg-white">
                <SiLinux className="text-7xl" style={{ color: "#FCC624" }} />
            </motion.div>

            {/* GitHub */}
            <motion.div 
                variants={iconVariants(3.3)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4 bg-white">
                <SiGithub className="text-7xl" style={{ color: "#181717" }} />
            </motion.div>

            {/* Skills text */}
            <motion.div 
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5, delay: 1 }}
                className="mt-16 text-center"
            >
                <h2 className="text-3xl font-semibold text-white mb-6">
                    Key Skills
                </h2>
                
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mx-auto max-w-4xl">
                    {[
                        "Python", "C++", "MySQL", "Apache Spark", "Apache Hadoop", "Databricks", 
                        "Machine Learning", "Deepnote", "Natural Language Processing (NLP)", 
                        "Power BI", "Visual Studio Code", "Microsoft Azure", "Linux", "GitHub"
                    ].map((skill, index) => (
                        <motion.div 
                            key={index}
                            whileHover={{ scale: 1.05, backgroundColor: "#2d2d2d" }}
                            className="rounded-xl p-4 bg-neutral-800 text-white font-medium 
                                    border border-neutral-600 shadow-md hover:shadow-lg 
                                    transition-shadow duration-300 text-center"
                        >
                            {skill}
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </motion.div>
    </div>
  );
};

export default Technologies;



  