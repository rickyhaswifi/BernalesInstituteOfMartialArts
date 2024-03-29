import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {Grid, Image, Button, Header} from 'semantic-ui-react';
import {PageContainer, PageWrap, Horizontal} from '../../styledComponents/HomeStyles';
import Footer from '../../staticpages/footer/Footer';

import PageNavbar from '../../staticpages/pagesnavbar/PageNavbar';

class ProgramLandingShows extends Component {
  render(){
    const { id, title, description, image, gallery, featured_boolean, body } = this.props.location.state.program
    return (
    <>
  <PageNavbar/>
  <PageContainer>
  <PageWrap>
  <h1>{ title }</h1>
  <Grid columns={2} doubling>
  <Grid.Row>
  <Grid.Column>
  <Image src={image}/>
  </Grid.Column>

  <Grid.Column>
  <div dangerouslySetInnerHTML={{__html: description}} />
  </Grid.Column>

  </Grid.Row>
  </Grid>

  <Horizontal />

  <Button>
    <Link to='/programs'>All Programs</Link>
  </Button> 

  </PageWrap>
  </PageContainer>
  <Footer/>
    </>
    )
  }
}

export default ProgramLandingShows;
