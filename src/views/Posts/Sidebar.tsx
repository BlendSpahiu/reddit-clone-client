import { Container, Icon, Paragraph } from "@components";
import { homeButtons, topics } from "@static";
import classNames from "classnames";
import { ReactElement, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/outline";

export const Sidebar = (): ReactElement => {
  const [isSubmenuOpen, setIsSubmenuOpen] = useState<boolean>(false);
  const [depthLevel, setDepthLevel] = useState<number>(0);

  const { pathname } = useLocation();
  const navigate = useNavigate();

  console.log(depthLevel);

  return (
    <Container className="sticky flex h-screen w-[350px] justify-end border-r border-gray-700 bg-base pr-3 pt-6 text-white">
      <motion.div className="space-y-2 pl-14">
        <motion.div className="space-y-2">
          {homeButtons.map((item) => (
            <motion.div
              className={classNames(
                "flex w-[250px] cursor-pointer items-center justify-start space-x-4 rounded-xl px-4 py-2",
                pathname === item.link ? "bg-[#000]" : "",
              )}
              initial={{
                background: pathname === item.link ? "#000" : "#000",
              }}
              whileHover={{
                background: "#545454",
              }}
              whileTap={{
                scale: 0.95,
              }}
              onClick={() => navigate(item.link)}
            >
              <Icon icon={item.icon} />
              <Paragraph className="text-sm">{item.label}</Paragraph>
            </motion.div>
          ))}
        </motion.div>
        <motion.div className="space-y-2 border-t border-gray-700 pt-2">
          {topics.map((topic, index) => (
            <>
              <motion.div
                className={classNames(
                  "flex w-[250px] cursor-pointer items-center justify-between space-x-4 rounded-xl px-4 py-2",
                )}
                initial={{
                  background: "#000",
                }}
                whileHover={{
                  background: "#545454",
                }}
                whileTap={{
                  scale: 0.95,
                }}
                onClick={() => {
                  setIsSubmenuOpen(!isSubmenuOpen);
                  if (depthLevel === index + 1) {
                    setDepthLevel(0);
                  } else {
                    setDepthLevel(index + 1);
                  }
                  console.log(depthLevel);
                }}
              >
                <Container className="flex items-center space-x-4">
                  <Icon icon={topic.icon} />
                  <Paragraph className="text-sm">{topic.label}</Paragraph>
                </Container>

                <Container>
                  <ChevronDownIcon
                    className={classNames(
                      "h-5 w-5 text-white transition-all duration-300",
                      depthLevel === index + 1 ? "rotate-180 " : "",
                    )}
                  />
                </Container>
              </motion.div>
              <AnimatePresence>
                {depthLevel === index + 1 && topic.items.length !== 0 && (
                  <Container
                    layout
                    className="ml-7 overflow-hidden border-l border-[#747474] text-sm"
                    key={`${topic.label}-submenu`}
                    initial={{ opacity: 0, height: 0 }}
                    animate={{
                      opacity: 1,
                      height: "max-content",
                    }}
                    exit={{ opacity: 0, height: 0 }}
                  >
                    {topic.items.map((item) => (
                      <Container
                        className="rounded-r-xl py-3"
                        initial={{
                          background: "#1a1a1b",
                        }}
                        whileHover={{
                          background: "#545454",
                        }}
                      >
                        <Paragraph className="ml-4">{item.label}</Paragraph>
                      </Container>
                    ))}
                  </Container>
                )}
              </AnimatePresence>
            </>
          ))}
        </motion.div>
      </motion.div>
    </Container>
  );
};
