import React from 'react';
import timeline from '../data/timeline';
import TimelineItem from './TimelineItem';
import Title from './Title';

function Timeline() {
  return (
    <section className="flex flex-col md:flex-row justify-center my-20">
      <div className="w-full md:w-7/12">
        <Title>Timeline</Title>
        {timeline.map(({ year, title, duration, details }) => (
          <TimelineItem
            year={year}
            title={title}
            duration={duration}
            details={details}
            key={title}
          />
        ))}
      </div>
    </section>
  );
}

export default Timeline;
