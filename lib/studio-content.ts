export const capabilities = [
  { title: "Design with purpose", description: "Start with the people using your product. Make every interaction clear, useful, and considered." },
  { title: "Build with precision", description: "Turn the design into dependable software, with care for performance, accessibility, and the details." },
  { title: "Think beyond launch", description: "Make choices that leave room to learn, maintain, and improve as your business develops." },
] as const;

export const services = [
  { number: "01", title: "Websites & Web Development", description: "A considered home for your business. Clear, responsive websites that help people understand what you offer and take the next step.", deliverables: ["Business websites", "Landing pages", "Responsive experiences", "Web applications"] },
  { number: "02", title: "Software & Application Development", description: "Turn a useful idea into working software. Start with what matters most, whether that's a first product or a better way to work.", deliverables: ["MVP development", "Custom software", "Internal tools", "Application interfaces"] },
  { number: "03", title: "Digital Product Design", description: "Give your product a clear direction before you build. Shape the journeys, test the thinking, and bring the experience into focus.", deliverables: ["Wireframes & user journeys", "UI/UX design", "Interactive prototypes", "Design systems"] },
  { number: "04", title: "AI & Automation", description: "Make everyday work simpler. Find practical opportunities to reduce repetitive tasks and put useful AI capabilities to work.", deliverables: ["AI integrations", "Workflow automation", "AI-assisted business tools", "Process improvements"] },
  { number: "05", title: "Brand & Digital Creative Support", description: "Keep your digital presence consistent. Selected creative support to bring the same care to the assets around your website or product.", deliverables: ["Digital visual identity", "Graphic design", "Campaign assets", "Creative production"] },
] as const;

export const processSteps = [
  { number: "01", title: "Discover", description: "Understand your business, your audience, and the problem worth solving. Agree what success should look like.", output: "A shared brief and clear priorities" },
  { number: "02", title: "Design", description: "Shape the experience, explore the right solution, and review the direction together before development.", output: "A considered direction to build from" },
  { number: "03", title: "Build", description: "Develop a reliable, responsive solution with maintainable foundations. Review progress and refine the details along the way.", output: "Working software you can review" },
  { number: "04", title: "Launch & Improve", description: "Test carefully, prepare for release, and make the handover clear. Use what we learn to guide the next improvements.", output: "A confident launch and next steps" },
] as const;
