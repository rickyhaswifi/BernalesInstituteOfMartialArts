import React, { Component } from 'react';
import PageNavbar from '../pagesnavbar/PageNavbar';
import Footer from '../footer/Footer';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import {PageWrap, PageContainer} from '../../styledComponents/HomeStyles';
import {Icon} from 'semantic-ui-react';
import { InstructorConsumer } from '../../../providers/InstructorProvider';
 
class InstructorView extends Component {
    state = { currentInstructorIndex: 0, previousNum: 0 }
    
    onInstructorChange = (newIndex) => {
      this.setState({currentInstructorIndex: newIndex});
    }

    renderInstructorImages = () => {
      return this.props.instructors.map((instructor) => (
        <div key={instructor.id}>
          <img src={instructor.image} />
        </div>
      ))
    }

    render() {
      const instructor = this.props.instructors[this.state.currentInstructorIndex];
        return (
          <>
          <PageNavbar/>
          <PageContainer>
            <PageWrap>
            <div>
            <div class="CarWrap">
            <Carousel onChange={this.onInstructorChange} style={{margin: "0px"}} >
            {this.renderInstructorImages()}
            </Carousel>
            </div>
            <section class="instructorContent">
            <h1>Instructor: {instructor && instructor.first_name} {instructor && instructor.last_name}</h1>
            <p>Speciality: {instructor && instructor.specialty}</p>
            <p>Text: {instructor && instructor.bio}</p>

            <a href='{instructor.sm_facebook}' target="_blank">
            <Icon name='facebook' size='large' />
            </a>

            <a href='{instructor.sm_twitter}' target="_blank">
            <Icon name='twitter' size='large' />
            </a>

            <a href='{instructor.instagram}' target="_blank">
            <Icon name='instagram' size='large' />
            </a>
          
            </section>
            </div>
            </PageWrap>
          </PageContainer>
              <Footer />
              </>
        );
    }
};

const ConnectedInstructorView = (props) => {
  return (
    <InstructorConsumer>
      { value => (
        <InstructorView 
          { ...props }
          getInstructor={value.getInstructor}
          instructors={value.instructors}
        />
      )}
    </InstructorConsumer>
  )
}

export default ConnectedInstructorView;