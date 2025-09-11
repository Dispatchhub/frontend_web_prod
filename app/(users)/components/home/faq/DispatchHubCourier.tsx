import Image from "next/image";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { useAppDispatch, useAppSelector } from "@/app/(users)/store/hooks";
import { toggleDispatchHubCourier } from "@/app/(users)/store/faqSlice";

const DispatchHubCourier = () => {
  const faq = useAppSelector((state) => state.faq);
  const dispatch = useAppDispatch();

  // Animation variants for the paragraph
  const paragraphVariants: Variants = {
    hidden: {
      opacity: 0,
      height: 0,
      y: -10,
      transition: {
        duration: 0.3,
        ease: [0.4, 0.0, 0.2, 1],
        opacity: { duration: 0.2 },
        height: { duration: 0.3 },
      },
    },
    visible: {
      opacity: 1,
      height: "auto",
      y: 0,
      transition: {
        duration: 0.4,
        ease: [0.4, 0.0, 0.2, 1],
        opacity: { duration: 0.3, delay: 0.1 },
        height: { duration: 0.3 },
      },
    },
  };

  // Animation variants for the arrow icon
  const arrowVariants: Variants = {
    up: {
      rotate: 0,
      transition: {
        duration: 0.3,
        ease: [0.4, 0.0, 0.2, 1],
      },
    },
    down: {
      rotate: 180,
      transition: {
        duration: 0.3,
        ease: [0.4, 0.0, 0.2, 1],
      },
    },
  };
  const handleCourier = () => {
    dispatch(toggleDispatchHubCourier());
  };
  return (
    <div
      onClick={handleCourier}
      className="flex flex-col py-[0.8rem] md:py-8 px-[1rem] md:px-10 items-start gap-2 md:gap-4 border-b border-b-[#EDEDED] w-full cursor-pointer hover:bg-gray-50/50 transition-colors duration-200"
    >
      <div className="flex items-center justify-between w-full">
        <h3 className="unageo-regular font-semibold text-[1.25rem] md:text-[1.5rem] leading-[2rem] flex-1 w-full">
          How can I join Dispatch Hub as a courier?
        </h3>
        <motion.div
          variants={arrowVariants}
          animate={faq.dispatchHubCourier ? "up" : "down"}
          className="flex-shrink-0"
        >
          <Image
            src={"/home/down.png"}
            alt="toggle"
            className="w-6 h-6"
            width={24}
            height={24}
          />
        </motion.div>
      </div>

      <AnimatePresence mode="wait">
        {faq.dispatchHubCourier && (
          <motion.div
            variants={paragraphVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="overflow-hidden w-full"
          >
            <motion.p
              className="text-[1.125rem] md:text-[1rem] font-normal leading-[1.75rem] unageo-regular"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2, delay: 0.1 }}
            >
              You can place a delivery order through the Dispatch Hub website by
              entering your pickup and drop-off locations, package details, and
              selecting a delivery option.
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default DispatchHubCourier;
