import {
  Button,
  CommunityAvatar,
  Container,
  Heading,
  Paragraph,
  Span,
} from "@components";
import { ReactElement } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export const PopularCommunities = (): ReactElement => {
  const navigate = useNavigate();

  const dummyData = [
    {
      title: "EldenRing",
      members: 1543298,
      link: "/r/EldenRing",
    },
    {
      title: "LeagueOfLegends",
      members: 5987543,
      link: "/r/LeagueOfLegends",
    },
    {
      title: "WorldOfWarcraft",
      members: 1254750,
      link: "/r/WorldOfWarcraft",
    },
    {
      title: "RocketLeague",
      members: 785213,
      link: "/r/RocketLeague",
    },
  ];

  return (
    <Container className="sticky mr-40 mt-10 h-full w-[350px] rounded-xl bg-[#05090a] p-4">
      <Heading className="mb-4 text-sm text-[#bac5c9]" heading="h4">
        POPULAR COMMUNITIES
      </Heading>
      <motion.div className="space-y-3">
        {dummyData.map((data) => (
          <motion.div
            className="flex items-center space-x-4 rounded-2xl py-3 pl-4 pr-20"
            initial={{ background: "#05090a" }}
            whileTap={{ scale: 0.95 }}
            whileHover={{ background: "#151f23", cursor: "pointer" }}
            onClick={() => navigate(data.link)}
          >
            <CommunityAvatar communityName={data.title} />
            <Container className="text-sm">
              <Paragraph className=" text-[#bac5c9]">
                {`r/${data.title}`}
              </Paragraph>
              <Span className="text-xs text-[#84959b]">
                {data.members.toLocaleString("en-Us")} members
              </Span>
            </Container>
          </motion.div>
        ))}
      </motion.div>
      <Button className="mt-4" buttonVariant="none" onClick={() => null}>
        See more
      </Button>
    </Container>
  );
};
