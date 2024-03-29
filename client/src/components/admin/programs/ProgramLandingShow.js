import React from 'react';
import { ProgramConsumer } from '../../../providers/ProgramProvider';
import { Link } from 'react-router-dom';
import {ProgramHeader, ProgramImageSec} from '../../styledComponents/ProgramIndexStyles';
import {PageContainer, PageWrap, Horizontal} from '../../styledComponents/HomeStyles';
import Footer from '../../staticpages/footer/Footer';
import PageNavbar from '../../staticpages/pagesnavbar/PageNavbar';
import {Grid, Image}  from 'semantic-ui-react';
import {Hero2Cover} from '../../styledComponents/Home2HeroStyles';


const ProgramLandingShow = ({programs, history}) => (
    <>
    <PageNavbar/>
    <PageContainer>
      <Hero2Cover />
    
      <PageWrap>

      <h2>Explore Our Programs</h2>
      <ProgramConsumer>
        { value => (
          <>
          <Grid columns={4} doubling>
            <Grid.Row>
            <Grid.Column>
           
            <ProgramHeader> { value.featuredPro[0] && value.featuredPro[0].title } </ProgramHeader>
            <Link to={{
              pathname: `/programshow/${value.featuredPro[0] && value.featuredPro[0].id}`,
              state: { program:value.featuredPro[0] && value.featuredPro[0] }
            }}>
              <ProgramImageSec style={{background:`url(${value.featuredPro[0] && value.featuredPro[0].image})` }}></ProgramImageSec>
              <ProgramHeader> { value.featuredPro[0] && value.featuredPro[0].title } </ProgramHeader>
    
            </Link>
          
            </Grid.Column>

            <Grid.Column>
            <Link to={{
              pathname: `/programshow/${value.featuredPro[1] &&  value.featuredPro[1].id}`,
              state: {program: value.featuredPro[1] &&  value.featuredPro[1]}
            }}>
            <ProgramImageSec style={{background:`url(${value.featuredPro[1] && value.featuredPro[1].image})` }}></ProgramImageSec>
            <ProgramHeader> { value.featuredPro[1] &&  value.featuredPro[1].title } </ProgramHeader>
            </Link>
            </Grid.Column>

            <Grid.Column>
            <Link to={{
              pathname: `/programshow/${value.featuredPro[2] &&   value.featuredPro[2].id}`,
              state: {program: value.featuredPro[2] &&   value.featuredPro[2]}
            }}>
           <ProgramImageSec style={{background:`url(${value.featuredPro[2] && value.featuredPro[2].image})` }}></ProgramImageSec>
            <ProgramHeader> { value.featuredPro[2] &&   value.featuredPro[2].title } </ProgramHeader>
            </Link>
            </Grid.Column>

            <Grid.Column>
            <Link to={{
              pathname: `/programshow/${value.featuredPro[3] &&  value.featuredPro[3].id}`,
              state: {program: value.featuredPro[3] &&  value.featuredPro[3]}
            }}>
           <ProgramImageSec style={{background:`url(${value.featuredPro[3] && value.featuredPro[3].image})` }}></ProgramImageSec>
            <ProgramHeader> { value.featuredPro[3] &&  value.featuredPro[3].title } </ProgramHeader>
            </Link>
            </Grid.Column> 
            </Grid.Row>
          </Grid>
          </>
      )}
      </ProgramConsumer>

      <Horizontal />

      <Grid columns={2} doubling>
      <Grid.Row>
      <Grid.Column>
      <Image src='https://images.unsplash.com/photo-1555597673-b21d5c935865?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2252&q=80'/>
      </Grid.Column>

      <Grid.Column>
      <h1>Martial Arts Programs</h1>
      <p>The Bernales Institute of Martial Arts (BIMA) offers classes for kids and adults that provide practical self-defense skills within an energetic, fun, and supportive community atmosphere. The martial arts taught at BIMA provide a “seatbelt for life,” giving you or your child the knowledge and skills needed for effective self-protection and self-empowerment. We offer Brazilian Jiu-Jitsu, Muay Thai / Thai Boxing, Kali/Eskrima, Jeet Kune Do, Silat, Combat Submission Wrestling/Mixed Martial Arts, and Yoga classes. We strive to meet the needs of all students from inexperienced beginners to accomplished athletes.</p>
      </Grid.Column>

      </Grid.Row>
      </Grid>

      <Horizontal />

      </PageWrap>
    </PageContainer>
      <Footer/>
    </>
)

export default ProgramLandingShow;
