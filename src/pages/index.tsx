import * as React from "react";
import Link from "@/app/components/Link";
import Section from "@/app/components/Section";
import Layout from "@/app/components/Layout";

export default function Home() {
  return (
    <Section title="About Me">
      <p>
        I am a Software Engineer at LTK — a frontend-leaning product engineer
        with design-engineering depth. I work primarily in React and
        TypeScript, and I lead our React component library, where I designed
        the token architecture and the Figma-to-code pipeline that turns
        designs into production UI. I also architected the frontend of LTK&apos;s
        Creator Management Platform and mentor other engineers on React best
        practices.
      </p>
      <p>
        Outside of work, I enjoy playing sports. I am a member of a local
        running club. I play soccer and tennis regularly. I also play Trivia
        with my friends on a weekly basis.
      </p>
      <p>
        Moreover, I give back to the community via volunteering. I founded and
        organize{" "}
        <Link href="https://tampavolunteers.com/?utm_source=Portfolio&utm_medium=about" color="secondary">
          Tampa Volunteers
        </Link>
        , a Meetup community of 300+ members that connects volunteers with
        nonprofits across Tampa. I coordinate between event organizers and
        local volunteers, and I have built a leadership pipeline by promoting
        members into organizer roles.
      </p>
    </Section>
  );
}

Home.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout title="Zabi Babar">{page}</Layout>;
};
