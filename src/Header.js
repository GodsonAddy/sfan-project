import * as React from "react";
import { Button, Divider, Grid, Stack, Typography, Paper } from "@mui/material";
import "./App.css";

const NavHeader = () => {
  return (
    <div>
      <div className="container">
        <Grid
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={2}
        >
          <Grid item xs={6} md={6}>
            <Typography
              variant="h6"
              color="inherit"
              sx={{ flexGrow: 1, padding: "5rem 3rem 0" }}
            >
              PARTNERSHIPS FOR PROGRESS
            </Typography>
            <Typography
              variant="h2"
              color="inherit"
              sx={{ margin: "0rem 3rem", fontWeight: "bold" }}
            >
              A SCALABLE, INNOVATIVE, EMPLOYMENT, SOLUTION FOR AFRICAN YOUTH
            </Typography>
          </Grid>
        </Grid>
      </div>
      <div className="main">
        <Typography variant="h4">Transforming Education</Typography>
        <Typography variant="h6">
          Industry analysis has shown that, on average, it takes university
          graduates in Africa six years to find their first jobs. But on the
          demand side, even when jobs are available, employers still struggle to
          find early career professionals that have the skills they need for
          such roles. SFAN brings the needed fresh perspectives to the scene by
          equipping entry-level job seekers with requisite job readiness skills
          and helping employers find the brightest talents across the continent.
          We also help entrepreneurs to build businesses that thrive. We do the
          heavy lifting, you get 10x results without breaking the bank.
        </Typography>
        <br />
        <Stack
          direction="row"
          justifyContent="flex-start"
          alignItems="flex-start"
          spacing={2}
        >
          <Button variant="contained" size="large">
            Find Out More
          </Button>
        </Stack>
      </div>
      <div className="excerpt">
        <Grid container spacing={2}>
          <Grid
            item
            direction="column"
            container
            justifyContent="center"
            alignItems="center"
          >
            <Grid
              item
              container
              direction="row"
              spacing={2}
              justifyContent="space-between"
              sx={{ marginTop: 2 }}
            >
              <Grid item sm={5} xs={5}>
                <Typography variant="subtitle2" color="primary">
                  WHAT YOUR PARTNERSHIP CAN DO
                </Typography>
                <Typography variant="h3" color="primary">
                  Actualising Youth
                </Typography>
                <Typography variant="h3" color="blue">
                  Career Aspirations
                </Typography>
                <Typography variant="subtitle2" color="primary">
                  A Case Study of <b>HUDA IBRAHIM</b>
                </Typography>
                <br />
                <Typography variant="subtitle2" color="primary">
                  <u>
                    <b>An Insight Into The Problem</b>
                  </u>
                </Typography>
                <Typography variant="body2" color="primary">
                  Youth unemployment was already a massive challenge for many
                  African countries before Sars-Cov-2 came around. Go ahead and
                  Google it. The numbers will make your brain hurt. Research by
                  different organizations shows that in Africa, young people
                  account for 60% of all joblessness. According to the African
                  Development Bank (AfDB), about 10-12mn youth enter the African
                  job market annually, but the Continent creates only 3.7mn
                  jobs. Cognizant of this significant imbalance, we began
                  piloting the
                  <a href="https://readyforwork.africa">
                    readyforwork.africa
                  </a>{" "}
                  program two years ago to help young people live on their terms
                  and, in turn, act as catalysts to inspire others to unlock
                  their potentials. Huda Ibrahim was among the participants in
                  that pilot program. And in celebration of International
                  Women’s Day and Ghana’s Independence, we caught up with her to
                  follow up on her career journey
                </Typography>
              </Grid>
              <Divider
                orientation="vertical"
                variant="middle"
                flexItem
                color="primary"
              />

              <Grid item sm={5} xs={5}>
                <Typography variant="h6">EXCERPT</Typography>
                <Typography variant="h5" color="blue">
                  Tell our readers about yourself and your job search experience
                  before joining Readyforwork Career Coaching Program.
                </Typography>
                <Typography variant="body2">
                  My name is Huda Ibrahim, a 24-year-old lady who lives in
                  Techiman, Ghana. I joined the ReadyForWork program shortly
                  after my National Service at the EPA Head Office in Accra. The
                  aim was to gain skills that would help me excel in any career
                  path I choose. Before joining the program, I had applied to
                  some companies for an internship or full-time job, because I
                  was about to end my service and needed a job. But I didn’t get
                  a call from those applications as yet. And although I had some
                  idea of the type of job I wanted, I wasn’t sure what career
                  path to choose. So I needed guidance from the ReadyForWork
                  program to define my career path.
                </Typography>
                <br />
                <Typography variant="h5" color="blue">
                  What impact did the ReadyForWork Career Coaching Program have
                  on you?
                </Typography>
                <Typography variant="body2">
                  ReadyForWork made an immense impact on me. From strategies on
                  developing critical thinking skills and other job-readiness
                  skills to starting and running a blog, it was amazing! We had
                  various sessions with trainers from Ghana and Europe. The
                  session on work-life balance with Jamila Meischke was
                  impactful, and I also had a one-on-one chat with Tracy Kyei of
                  Samsung Ghana. After the training, I started to learn more
                  about running a blog, and I applied a lot of what I learned in
                  my next job. I took a step further to read more about critical
                  thinking and creative problem solving, and I have improved
                  tremendously in those areas. Also, I have been able to upgrade
                  my resume with the knowledge gained from the training, which
                  contributed to my present job as the Assistant Program Officer
                  with the Environmental Protection Agency (EPA) in Techiman.
                </Typography>
                <br />
                <Typography variant="h5" color="blue">
                  What have been your major challenges and achievements in your
                  current position?
                </Typography>
                <Typography variant="body2">
                  As I mentioned earlier, I currently work as an Assistant
                  Program Officer with the Environmental Protection Agency in
                  Techiman. I started this role in the 3rd week of December 2020
                  after working with cedijob, a startup that helps businesses
                  hire freelancers, artisans, handymen, and professional service
                  workers. When I joined cedijob, they had just started —
                  without formal structures and systems, such as keeping
                  standard accounting information. Although I didn’t have any
                  accounting background, I took some online courses and used
                  that knowledge to help them create a decent accounting system.
                  I also helped them develop their content plan before the team
                  hired someone to handle that responsibility. More so, I helped
                  them develop a back office that works with non-tech-savvy
                  artisans. Overall, I’d say that I helped the team stay focused
                  on their mission within the 11 months of my work with them
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>

      <div className="partner">
        <Grid
          container
          spacing={2}
          display="flex"
          textAlign="start"
          justifyContent="center"
        >
          <Grid item xs={10}>
            <Typography variant="h6">
              THE EXCEPTIONAL PARTNERSHIP OFFERING
            </Typography>
            <Typography variant="h3">
              Working with <span className="sfan">SFAN</span>
            </Typography>
            <Typography variant="h6">
              There are two main ways by which corperates and other stakeholders
              can gain exceptional value from partnering with us. Explore the
              options below and see how you can get involved in our global
              movement.
            </Typography>
            <br />
            <div className="corporate">
              <Typography variant="h5">Corporate Partnerships</Typography>
            </div>
            <div className="background">
              <Typography variant="subtitle1">
                We've developed a range of investment models to cater to the
                different priorities and strategic needs of corporate
                organisation and government entities. From investment into SFAN,
                Event Production Collaboration, to Venture Bulding with SFAN in
                the corporates' specific sector or market.
              </Typography>
              <br />
              <Grid
                container
                spacing={5}
                display="flex"
                flexDirection="row"
                textAlign="start"
                justifyContent="flex-start"
              >
                <Grid item xs={3}>
                  <div>
                    <Typography variant="h6">
                      Make an impact that matters
                    </Typography>
                    <Typography variant="subtitle1">
                      Join us to co-create EPIC events and programs in line with
                      your corporate goals and values, and help young people
                      live to their best potentials.
                    </Typography>
                  </div>
                </Grid>
                <Grid item xs={3}>
                  <div>
                    <Typography variant="h6">
                      Scale Corporate Innovations
                    </Typography>
                    <Typography variant="subtitle1">
                      Partnering with us gives you an oppurtunity to elevate
                      your position in the innovation ecosysytem and get premium
                      brand exposure while solving real problems.
                    </Typography>
                  </div>
                </Grid>
                <Grid item xs={3}>
                  <div>
                    <Typography variant="h6">
                      Access Right-Type Audience
                    </Typography>
                    <Typography variant="subtitle1">
                      SFAN has access to an impressive network of young people.
                      By partnering with us, you can obtain actionable data,
                      exclusive insights, and talents for corporate
                      transformation.
                    </Typography>
                  </div>
                </Grid>
                <Grid item xs={3}>
                  <div>
                    <Typography variant="h6">
                      Build a learning organisation
                    </Typography>
                    <Typography variant="subtitle1">
                      Partnering with us gives you numerous opportunities to
                      help your employees develop their skills, enrich their
                      jobs, and enhance their profile.
                    </Typography>
                  </div>
                </Grid>
              </Grid>
            </div>
            <Stack
              display="flex"
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
              padding={5}
            >
              <Button variant="contained" size="large">
                Let's do this
              </Button>
            </Stack>
            <div className="corporate">
              <Typography variant="h5">Co-Building</Typography>
            </div>
            <div className="building">
              <Typography variant="subtitle1">
                We collaborate with brands and individuals to deliver EPIC
                entrepreneurship training that unlock the potential of
                recipients.
              </Typography>
              <br />
              <Typography variant="h6">Employee Training</Typography>
              <Typography variant="subtitle1">
                Partner with us to build programs that turn your employees into
                entrepreneurs. We use our proprietary trainig models to unlock
                the entrepreneurial potential of your employees, thereby,
                helping you enrich their jobs and drive your corporate goals
                further.
              </Typography>

              <Paper
                sx={{
                  padding: "2rem",
                  margin: "3rem",
                }}
              >
                <Typography variant="subtitle1">
                  The State of Global Workplace survey by Gallup found that ONLY
                  19% of Ghanaian workers that were reviewed felt engaged. A
                  majority of the respondents, 68%, felt not engaged. Not
                  engaged in this context, they said, is that “employees are
                  psychologically unattached to their work and company. Because
                  their engagement needs are not being fully met, they’re
                  putting time — but not energy or passion — into their work.”
                </Typography>
                <Typography variant="subtitle1">
                  Further, 12% of surveyed employees are actively disengaged.
                  That means, “employees aren’t just unhappy at work — they are
                  resentful that their needs aren’t being met and are acting out
                  their unhappiness. Every day, these workers potentially
                  undermine what their engaged coworkers accomplish.”
                </Typography>
              </Paper>
              <Typography variant="h6">University Training</Typography>
              <Typography variant="subtitle1">
                Obviously, the world has changed. Employers now need graduates
                with entrepreneurial mindset and not just job seekers. To quote
                the AfDB, the consequences of youth unemployment in Africa are
                pervasive and severe: unemployment translates to more
                impoverished living conditions, fuels migration out of Africa.
                It contributes to conflict on the continent itself.
              </Typography>
              <br />
              <Typography variant="subtitle1">
                Here are some numbers:
              </Typography>
              <Paper
                sx={{
                  padding: "2rem",
                  margin: "3rem",
                }}
              >
                <Typography variant="subtitle1">
                  * It takes an average university graduate six years to find
                  their first job (AfDB)
                </Typography>
                <Typography variant="subtitle1">
                  * The revenue opportunity size across Sub-Saharan Africa in
                  digital skills is $130 billion through 2030 (IFC)
                </Typography>
                <Typography variant="subtitle1">
                  * 20m young people will join the workforce in Africa for the
                  next two decades (Mo Ibrahim Fdn)
                </Typography>
                <Typography variant="subtitle1">
                  * Africa needs to equip approximately 750M young people with
                  digital skills by 2030 (UNESCO)
                </Typography>
                <Typography variant="subtitle1">
                  * 3/4 of employers regret their recruitment decisions (Onrec)
                </Typography>
              </Paper>

              <Typography variant="subtitle1">
                Partner with us to design tailor-made entrepreneurship programs
                for your students and give them the advantage to standout in the
                marketplace.
              </Typography>
              <Stack
                display="flex"
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
                padding={5}
              >
                <Button variant="contained" size="large">
                  Let's do this!
                </Button>
              </Stack>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};
export default NavHeader;
