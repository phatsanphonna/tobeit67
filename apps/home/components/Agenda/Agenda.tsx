import { Timeline } from "@mantine/core";

const events = [
  {
    date: "วันนี้ - 21 ต.ค.",
    title: "เปิดรับสมัครออนไลน์",
  },
  {
    date: "14 ต.ค.",
    title: "First Meet! (Online)",
  },
  {
    date: "15 - 16 ต.ค.",
    title: "Day 1 - 2 (Online)",
  },
  {
    date: "16 - 22 ต.ค.",
    title: "เปิดรับสมัครรอบออนไซต์",
  },
  {
    date: "22 - 23 ต.ค.",
    title: "Day 3 - 4 (Online)",
  },
  {
    date: "?? ต.ค.",
    title: "ประกาศน้องผ่านรอบออนไซต์",
  },
  {
    date: "?? ต.ค.",
    title: "First Meet (Onsite)",
  },
  {
    date: "29 - 30 ต.ค.",
    title: "Day 1 - 2 (Onsite)",
  },
  {
    date: " 5 - 6 พ.ย.",
    title: "Day 3 - 4 (Onsite)",
  },
];

const Agenda = () => {
  return (
    <div className="px-8 pb-48 md:mx-auto">
      <h1 className="font-chonburi text-3xl md:text-5xl text-center text-radial my-8">
        Agenda
      </h1>
      <Timeline
        color="fresh-salmon"
        active={1}
        bulletSize={30}
        lineWidth={4}
        classNames={{
          itemTitle: `font-noto font-bold text-lg text-white md:mb-10`,
          item: `flex flex-col gap-y-2 py-1 md:translate-x-1/2`,
          itemBullet: `border-fresh-salmon border-4`,
        }}
      >
        {events.map((event, index) => {
          return (
            <Timeline.Item key={index} title={event.date}>
              <div
                className={`${
                  index % 2 === 0
                    ? "md:-translate-x-full md:-left-4"
                    : "md:left-4"
                } md:absolute md:w-[400px] md:max-w-none max-w-sm md:top-8 bg-white rounded-full text-center font-chonburi font-bold py-1 text-fresh-salmon text-sm md:text-xl`}
              >
                {event.title}
              </div>
            </Timeline.Item>
          );
        })}
      </Timeline>
    </div>
  );
};

export default Agenda;
