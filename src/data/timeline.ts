export default <TimelineItemData[]>[
  {
    year: 'Today',
    title: 'Contributor at Square Cloud',
    duration: '3 months',
    details:
      "Square Cloud is a host company which I contributed by making a wrapper for their API, a CLI and a VS Code extension to make its users' lives easier..",
  },
  {
    year: 'Today',
    title: 'Solo Indie Developer',
    duration: '2 years',
    details:
      'As a solo indie developer, I build software for both myself and clients. Most of my coding projects involve building from the ground up, including planning, designing, and using code to solve real-life problems.',
  },
  {
    year: '2019',
    title: 'First Line of Code',
    duration: 'the beginning',
    details:
      'My first contact with programming languages that began this developer journey (that is still in its beginning). I learned some logics with online courses, but most of my knowledge has come from learning through problem-solving and finding solutions on my own.',
  },
];

export interface TimelineItemData {
  year: string;
  title: string;
  duration: string;
  details: string;
}
