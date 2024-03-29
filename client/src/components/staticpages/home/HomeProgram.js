import React from "react";
import {Grid, Button} from 'semantic-ui-react';
import { ProgramConsumer } from '../../../providers/ProgramProvider';
import { Link } from 'react-router-dom';
import { HeroProgramSection, ProgramWrap, ProgramWrapH3, HeroProgramImageSec} from '../../styledComponents/HomeProgramStyles';

const HomeImageGrid = () => (
    <>
        <ProgramConsumer>
        { value => (
          <div>
    <HeroProgramSection>
    <Grid columns={4} doubling stretched>
        <Grid.Row>
        <Grid.Column>
            <Link to={{
                  pathname: `/programshow/${value.featuredPro[0] && value.featuredPro[0].id}`,
                  state: { program: value.featuredPro[0] && value.featuredPro[0] }
                }}>
            <ProgramWrap>
                <HeroProgramImageSec style={{background:`url(${value.featuredPro[0] && value.featuredPro[0].image})` }}></HeroProgramImageSec>
                <ProgramWrapH3>{value.featuredPro[0] && value.featuredPro[0].title}</ProgramWrapH3>
                <Button color='red' className='PButton'>
                <Link to={{
                  pathname: `/programshow/${value.featuredPro[0] && value.featuredPro[0].id}`,
                  state: { program: value.featuredPro[0] && value.featuredPro[0] }
                }}>INFO</Link>
                </Button>
            </ProgramWrap>
            </Link>
        </Grid.Column>
            <Grid.Column>
            <Link to={{
                  pathname: `/programshow/${value.featuredPro[1] && value.featuredPro[1].id}`,
                  state: { program: value.featuredPro[1] && value.featuredPro[1] }
                }}>
            <ProgramWrap>
            <HeroProgramImageSec style={{background:`url(${value.featuredPro[1] && value.featuredPro[1].image})` }}></HeroProgramImageSec>
                <ProgramWrapH3>{value.featuredPro[1] && value.featuredPro[1].title}</ProgramWrapH3>
                <Button color='red' className='PButton'>
                <Link to={{
                  pathname: `/programshow/${value.featuredPro[1] && value.featuredPro[1].id}`,
                  state: { program: value.featuredPro[1] && value.featuredPro[1] }
                }}>INFO</Link>
                </Button>
            </ProgramWrap>
            </Link>
            </Grid.Column>

            <Grid.Column>
            <Link to={{
                  pathname: `/programshow/${value.featuredPro[2] && value.featuredPro[2].id}`,
                  state: { program: value.featuredPro[2] && value.featuredPro[2] }
                }}>
            <ProgramWrap>
            <HeroProgramImageSec style={{background:`url(${value.featuredPro[2] && value.featuredPro[2].image})` }}></HeroProgramImageSec>
                <ProgramWrapH3>{value.featuredPro[2] && value.featuredPro[2].title}</ProgramWrapH3>
                <Button color='red' className='PButton'>
                <Link to={{
                  pathname: `/programshow/${value.featuredPro[2] && value.featuredPro[2].id}`,
                  state: { program: value.featuredPro[2] && value.featuredPro[2] }
                }}>INFO</Link>
                </Button>
            </ProgramWrap>
            </Link>
            </Grid.Column>

            <Grid.Column>
            <Link to={{
                  pathname: `/programshow/${value.featuredPro[3] &&  value.featuredPro[3].id}`,
                  state: { program: value.featuredPro[3] &&  value.featuredPro[3] }
                }}>
            <ProgramWrap>
            <HeroProgramImageSec style={{background:`url(${value.featuredPro[3] && value.featuredPro[3].image})` }}></HeroProgramImageSec>
                <ProgramWrapH3>{value.featuredPro[3] &&  value.featuredPro[3].title}</ProgramWrapH3>
                <Button color='red' className='PButton'>
                <Link to={{
                  pathname: `/programshow/${value.featuredPro[3] &&  value.featuredPro[3].id}`,
                  state: { program: value.featuredPro[3] &&  value.featuredPro[3] }
                }}>INFO</Link>
                </Button>
            </ProgramWrap>
            </Link>
            </Grid.Column>
        </Grid.Row>
    </Grid>

      </HeroProgramSection>
    </div>
      )}
      </ProgramConsumer>



    </>
)

export default HomeImageGrid;

