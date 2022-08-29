export type gearDescription = {
  type: string;
  description: string;
  buff: string;
};

export const gearsData: gearDescription[] = [
  {
    type: "Rocket Fuel",
    description:
      "Fuel for the space shuttles on which the Martians arrived from Earth. Allows you to accelerate the transport to an incredible speed. It is used in a small volume, because there is a limited amount of it on the planet.",
    buff: "+ 4 moves in mission",
  },
  {
    type: "Engine Furious",
    description: "Hall-effect thruster. Its name speaks for itself.",
    buff: "+ 6 moves in mission",
  },
  {
    type: "WD-40",
    description:
      "The spray, composed of various hydrocarbons, was originally designed to be used by Convair to protect the outer skin of the Atlas missile from rust and corrosion.",
    buff: "+ 10 moves in mission",
  },
  {
    type: "Titanium Drill",
    description:
      "A strong drill, which is used in mines on Earth. Speeds up the drilling process",
    buff: "-0.5 moves to mine a resource",
  },
  {
    type: "Diamond Drill",
    description:
      "The drill of this beauty is specially created for work in space. It withstands pressure and temperature changes, significantly accelerates drilling.",
    buff: "-1 move to mine a resource",
  },
  {
    type: "Laser Drill",
    description:
      "The test technology of the EGN corporation. NASA can only dream about such technologies.",
    buff: "-2 moves to mine a resource",
  },
  {
    type: "Small Area Scanner",
    description:
      "An inconspicuous device that provides information about resources nearby. On Earth, such things are used above ground and underground.",
    buff: "+0.5% to resource CLNY equivalent",
  },
  {
    type: "Medium Area Scanner",
    description:
      "A high-tech device that is used in the extraction of uranium on Earth. Durable and reliable, great for working in space.",
    buff: "+1.5% to resource CLNY equivalent",
  },
  {
    type: "Large Area Scanner",
    description:
      "The device uses laser scanning technology - optically directed laser beams to collect information about an object in direct three-dimensional space.",
    buff: "+3% to resource CLNY equivalent",
  },
  {
    type: "Ultrasonic Transmitter",
    description:
      "An inconspicuous satellite dish on board the vehicle will remain invisible to humans, but extremely unpleasant for worms.",
    buff: "+5% chance to win a fight with worm",
  },
  {
    type: "Infrared Transmitter",
    description: "Scientific fact - worms hate infrared radiation.",
    buff: "+10% chance to win a fight with worm",
  },
  {
    type: "Vibration Transmitter",
    description:
      "Worms are blind and are guided by vibrations in space, which is why they are so attracted to drilling underground. To avoid meeting with a worm, it is worth using a vibration transmitter. Preferably send a signal away from the place of work.",
    buff: "+20% chance to win a fight with worm",
  },
  {
    type: "The Nebuchadnezzar",
    description:
      "This transport is a unique masterpiece of earth engineers. You will truly want to drive it  someday but for now its only “Can I sit and spin a wheel for a sec?“",
    buff: "+1 slot to equip a gear",
  },
  {
    type: "The Wraith",
    description: "Explosion was always an art for its creators",
    buff: "+2 dynamites",
  },
  {
    type: "The Polyminer",
    description: "Let me guess… Transport from another universe?",
    buff: "+ 15 moves",
  },
];

export const rarities = ["Common", "Rare", "Legendary"];

export const categories = [
  "Engine",
  "Drill",
  "Scanner",
  "Transmitter",
  "Transport",
];
