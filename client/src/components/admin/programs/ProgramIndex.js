import React from 'react';
import ProgramShow from "./ProgramShow";
import { ProgramConsumer } from '../../../providers/ProgramProvider';
import {Link} from 'react-router-dom';
import Navbar from '../../Navbar';
import { Table, Button, Icon } from 'semantic-ui-react';
import { DashPage, DashContent} from '../../styledComponents/DashboardStyles';

const ProgramIndex = ({programs, updateProgram, deleteProgram, addProgram, history }) => (
<>
<DashPage>
<Navbar />
<DashContent>
<Table padded='very'>
	<Table.Header>
	<Table.Row>
			<Table.HeaderCell>Title</Table.HeaderCell>
			<Table.HeaderCell textAlign='right'>Edit/Delete</Table.HeaderCell>
	</Table.Row>
	</Table.Header>

	<Table.Body>
  <ProgramConsumer>

        { value => (
            <>
            { value.programs.map(program =>
                <ProgramShow
                  {...program}
                  updateProgram={value.updateProgram}
                  deleteProgram={value.deleteProgram}
                  />

              )}

              </>
        )}
    </ProgramConsumer>
    </Table.Body>

	<Table.Footer fullWidth>
	<Table.Row>
	<Table.HeaderCell />
	<Table.HeaderCell colSpan='4'>
		<Button
		floated='right'
		icon
		labelPosition='left'
		primary
		size='small'
		>
	<Icon name='bolt' /> 
	<Link to={{pathname: "/admin/programForm"}}>Add New </Link>
	</Button>
	</Table.HeaderCell>
	</Table.Row>
	</Table.Footer>
	</Table>
</DashContent>


</DashPage>
    </>
)

export default ProgramIndex;
