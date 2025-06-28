import React from "react";
import { easeOut, motion } from "motion/react";
import programmingTeam from "../../assets/programming-team.jpg";
import celebrate from "../../assets/office-celebrate.jpg";

const Banner = () => {
  return (
    <div className="hero bg-base-200 min-h-96">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="flex-1">
          <motion.img
          animate={{y: [15,50,15]}}
          transition={{repeat:Infinity, duration :10 }}
            src={programmingTeam}
            className="max-w-sm rounded-t-[40px] rounded-br-4xl border-l-4 shadow-2xl border-b-4 border-blue-400"
          />        <motion.img
          animate={{x: [200,250,200]}}
          transition={{repeat:Infinity, delay :5, duration :10 }}
            src={celebrate}
            className="max-w-sm rounded-t-[40px] rounded-br-4xl border-l-4 shadow-2xl border-b-4 border-blue-400"
          />
     
        </div>
        <div className="flex-1">
          <motion.h1
            animate={{ x: 100 }}
            transition={{
              duration: 0.8,
              delay: 0.4,
              ease: easeOut,
              repeat: Infinity,
            }}
            className="text-5xl font-bold"
          >
            Latest{" "}
            <motion.span
              animate={{ color: ["#b7dd0c", "#6a714b", "#dc2266"] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
              }}
            >
              Job
            </motion.span>{" "}
            For You
          </motion.h1>

          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
